import { AIAgentRole, Drill, DrillAttempt, BottleneckMetrics, Skill, SessionPlan } from '../types';
import { callLLMApi, LLMConfig } from './geminiService';

export const BRUTAL_COACH_HARD_RULES = `
You are the BRUTAL COACH of SKILLFORGE. Your philosophy:
"Don't teach me about the skill. Train me to perform the skill."
You are not a polite assistant. You do not use emojis, cheerleading, or fake encouragement.
You enforce the 15 HARD RULES:
RULE 1: Never overwhelm the learner with unnecessary information.
RULE 2: Always prioritize action over explanation.
RULE 3: Every message must end with an observable, measurable action.
RULE 4: Every drill must have a measurable success criterion.
RULE 5: Never allow progression without passing the required benchmark.
RULE 6: Identify the weakest bottleneck before prescribing more practice.
RULE 7: Prefer drills that isolate the bottleneck.
RULE 8: Do not repeat generic advice.
RULE 9: Do not praise without undeniable quantitative evidence.
RULE 10: If performance is poor, say so directly without softening: "Target: 30. Result: FAIL. Average 31.02. Don't move to the next level."
RULE 11: Never create fake certainty around mastery.
RULE 12: When asked "how do I improve?", inspect performance history first.
RULE 13: Give one next action whenever possible.
RULE 14: Do not provide 20 resources when one is sufficient.
RULE 15: The learner should spend 90% of their time performing and 10% reading.

FORMATTING:
Use sharp, concise terminal layout.
Line breaks, high contrast, direct prescriptions.
`;

export function analyzeBottlenecks(attempts: DrillAttempt[]): BottleneckMetrics {
  if (!attempts || attempts.length === 0) {
    return {
      recognition: 70,
      execution: 75,
      accuracy: 80,
      speed: 65,
      primaryBottleneck: 'Speed',
      recommendedAction: "Establish a baseline: Execute 15 timed attempts and log splits."
    };
  }

  // Calculate averages across attempts
  const recent = attempts.slice(-10);
  const avgRecognition = Math.round(recent.reduce((acc, a) => acc + (a.recognitionScore ?? (a.passed ? 85 : 55)), 0) / recent.length);
  const avgExecution = Math.round(recent.reduce((acc, a) => acc + (a.executionScore ?? (a.passed ? 90 : 60)), 0) / recent.length);
  const avgAccuracy = Math.round(recent.reduce((acc, a) => acc + (a.accuracyScore ?? (a.passed ? 95 : 65)), 0) / recent.length);
  const avgSpeed = Math.round(recent.reduce((acc, a) => acc + (a.speedScore ?? (a.passed ? 80 : 50)), 0) / recent.length);

  const scores = [
    { name: 'Recognition' as const, val: avgRecognition },
    { name: 'Execution' as const, val: avgExecution },
    { name: 'Accuracy' as const, val: avgAccuracy },
    { name: 'Speed' as const, val: avgSpeed },
  ];

  scores.sort((a, b) => a.val - b.val);
  const bottleneck = scores[0].name;

  let recommendation = "";
  switch (bottleneck) {
    case 'Recognition':
      recommendation = "Halt full attempts. Run 20 flashcard isolation reps targeting visual cue identification under 1.2s.";
      break;
    case 'Execution':
      recommendation = "Mechanics breakdown detected. Lower cadence by 20% and drill finger/posture alignment with zero momentum.";
      break;
    case 'Accuracy':
      recommendation = "Error rate exceeds tolerance. Slow down completely until 5 consecutive flawless executions are achieved.";
      break;
    case 'Speed':
      recommendation = "Form is stable but turnover is sluggish. Execute 10 interval overload sprints at 115% target cadence.";
      break;
  }

  return {
    recognition: avgRecognition,
    execution: avgExecution,
    accuracy: avgAccuracy,
    speed: avgSpeed,
    primaryBottleneck: bottleneck,
    recommendedAction: recommendation
  };
}

export async function processAgentMessage(
  role: AIAgentRole,
  userMessage: string,
  context: {
    activeSkill?: Skill;
    recentAttempts?: DrillAttempt[];
    apiConfig?: LLMConfig | null;
  }
): Promise<{ text: string; recommendedDrill?: Drill }> {
  // If an external API key is configured, use live LLM API call
  if (context.apiConfig && context.apiConfig.apiKey) {
    try {
      const systemPrompt = getSystemPromptForRole(role, context.activeSkill, context.recentAttempts);
      const reply = await callLLMApi(context.apiConfig, systemPrompt, userMessage);
      return { text: reply };
    } catch (err: any) {
      console.warn("Live LLM failed, using internal agent engine:", err);
      // Fallback to internal deterministic agent engine
    }
  }

  // Internal offline multi-agent engine
  return generateInternalAgentResponse(role, userMessage, context.activeSkill, context.recentAttempts);
}

function getSystemPromptForRole(
  role: AIAgentRole,
  activeSkill?: Skill,
  recentAttempts?: DrillAttempt[]
): string {
  const attemptsSummary = recentAttempts && recentAttempts.length > 0
    ? `Recent attempts: ${recentAttempts.slice(-5).map(a => `[${a.drillTitle}: ${a.score} (${a.passed ? 'PASS' : 'FAIL'})]`).join(', ')}`
    : "No logged attempts yet.";

  switch (role) {
    case 'brutal-coach':
      return `${BRUTAL_COACH_HARD_RULES}
Current active skill: ${activeSkill ? activeSkill.title : "None chosen"}.
Mastery definition: ${activeSkill ? activeSkill.masteryDefinition : "N/A"}.
${attemptsSummary}
Always enforce standards. Reject excuses. Prescribe exactly 1 measurable action.`;

    case 'skill-architect':
      return `You are the SKILL ARCHITECT agent.
Your sole job is to take an arbitrary skill and deconstruct it into:
1. Non-negotiable Mastery Definition (Mastery Contract with exact metrics).
2. Prerequisites.
3. Level 0 to Level N progression tree.
4. Drill 01 and Drill 02 with measurable pass/fail criteria.
5. Verifiable Skill Proof requirement.
Zero fluff. Clean structured bullet points.`;

    case 'drill-generator':
      return `You are the DRILL GENERATOR agent.
Input: Current user bottleneck or error pattern.
Output: Exactly ONE highly targeted micro-drill.
Format:
- Objective
- Why this drill exists
- Equipment
- Setup
- Exact step-by-step actions
- Repetitions
- Success Criteria (strictly measurable)
- Failure Criteria
- Difficulty Adjustment`;

    case 'performance-analyst':
      return `You are the PERFORMANCE ANALYST agent.
Examine attempt history. Calculate:
Recognition %, Execution %, Accuracy %, Speed %.
Isolate the single primary bottleneck. Tell the user what to stop doing and what to drill immediately.`;

    case 'accountability-agent':
      return `You are the ACCOUNTABILITY AGENT.
You track missed sessions, skipped drills, excuses, and lack of follow-through.
Be ruthless. Tell them: "You haven't failed because the skill is difficult. You failed because you skipped practice."`;

    case 'tester':
      return `You are the TESTER.
You do not teach. You give zero hints.
You issue the random test protocol and evaluate pass/fail strictly against the mastery contract.`;

    case 'resource-agent':
      return `You are the RESOURCE AGENT.
You provide EXACTLY ONE high-leverage reference diagram, formula, or mental anchor. Never provide 10 generic links.`;

    case 'skill-discovery':
      return `You are the SKILL DISCOVERY AGENT.
Generate high-utility skills categorized by time commitments: 1-hour skills, 1-day skills, 20-hour skills. Make them concrete, measurable, and exciting.`;

    default:
      return BRUTAL_COACH_HARD_RULES;
  }
}

function generateInternalAgentResponse(
  role: AIAgentRole,
  userMessage: string,
  activeSkill?: Skill,
  recentAttempts?: DrillAttempt[]
): { text: string; recommendedDrill?: Drill } {
  const query = userMessage.toLowerCase();
  const skillName = activeSkill ? activeSkill.title : "your current skill";
  const lastAttempt = recentAttempts && recentAttempts.length > 0 ? recentAttempts[recentAttempts.length - 1] : null;

  if (role === 'accountability-agent' || query.includes('excuse') || query.includes('missed') || query.includes('tired')) {
    return {
      text: `STATUS: DISCIPLINE AUDIT\n\n` +
        `You are negotiating with your own standard. Tiredness is a physical sensation, not a training constraint.\n\n` +
        `Fact: Deliberate practice requires 15 to 30 minutes of undivided concentration. If you skip today, tomorrow's session is an attempt to recover lost ground rather than progress.\n\n` +
        `ACTION REQUIRED NOW:\n` +
        `Complete 1 set of Drill 01 right now. Record the result. Do not rationalize.`
    };
  }

  if (role === 'performance-analyst' || query.includes('bottleneck') || query.includes('analyze') || query.includes('stats')) {
    const metrics = analyzeBottlenecks(recentAttempts || []);
    return {
      text: `PERFORMANCE METRICS BREAKDOWN // ${skillName.toUpperCase()}\n\n` +
        `Recognition: ${metrics.recognition}%\n` +
        `Execution:   ${metrics.execution}%\n` +
        `Accuracy:    ${metrics.accuracy}%\n` +
        `Speed:       ${metrics.speed}%\n\n` +
        `PRIMARY BOTTLENECK: [ ${metrics.primaryBottleneck.toUpperCase()} ]\n\n` +
        `DIAGNOSTIC:\n${metrics.recommendedAction}\n\n` +
        `Do not attempt full benchmark test until this bottleneck is resolved.`
    };
  }

  if (role === 'skill-architect' || query.includes('new skill') || query.includes('architect') || query.includes('deconstruct')) {
    return {
      text: `SKILL DECONSTRUCTION BLUEPRINT // META-ARCHITECT\n\n` +
        `1. MASTERY CONTRACT:\n` +
        `   Outcome: Must be quantifiable by stopwatch, accuracy %, or public verification.\n` +
        `   Condition: 5 consecutive passes under unassisted test conditions.\n\n` +
        `2. PREREQUISITE BASELINE:\n` +
        `   Confirm basic motor control or domain literacy before starting level 1.\n\n` +
        `3. LEVEL HIERARCHY:\n` +
        `   - LV 01: Mechanics & Isolation Drill\n` +
        `   - LV 02: Consistency & Error Elimination\n` +
        `   - LV 03: Speed & Fatigue Threshold\n` +
        `   - LV 04: Random Pressure Test\n` +
        `   - LV 05: Official Mastery Proof\n\n` +
        `4. NEXT IMMEDIATE ACTION:\n` +
        `   Launch Drill 01 in the TRAIN console and log your baseline attempt.`
    };
  }

  if (role === 'drill-generator' || query.includes('generate drill') || query.includes('micro-drill') || query.includes('new drill')) {
    const drillTitle = `Drill ISO-${Date.now().toString().slice(-4)} — ${skillName} Targeted Isolation`;
    return {
      text: `TARGETED DRILL GENERATION // ISOLATION PROTOCOL\n\n` +
        `TITLE: ${drillTitle}\n` +
        `TARGET SKILL: ${skillName.toUpperCase()}\n\n` +
        `1. OBJECTIVE:\n` +
        `   Isolate mechanical turnover and eliminate recognition friction.\n\n` +
        `2. WHY THIS DRILL EXISTS:\n` +
        `   Overcomes deceleration during transitions. Builds sub-conscious automaticity.\n\n` +
        `3. SETUP & EQUIPMENT:\n` +
        `   Distraction-free environment. Official timer calibrated.\n\n` +
        `4. EXACT ACTIONS (STEP-BY-STEP):\n` +
        `   Step 1: Execute starting stance/grip check. Zero extraneous tension.\n` +
        `   Step 2: Run 5 slow-motion repetitions focusing exclusively on clean vectors.\n` +
        `   Step 3: Execute 15 full-intensity repetitions against stopwatch.\n` +
        `   Step 4: Record every split time and mark flaws.\n\n` +
        `5. REPETITIONS & TIME LIMIT:\n` +
        `   15 strict repetitions | 300 seconds maximum window.\n\n` +
        `6. SUCCESS CRITERIA:\n` +
        `   ≥13 out of 15 reps executed within 10% of personal benchmark.\n\n` +
        `7. FAILURE CRITERIA:\n` +
        `   Form breakdown on 3 consecutive reps. Halt session and recover 2 minutes.\n\n` +
        `Begin Drill Rep #1 immediately.`
    };
  }

  if (role === 'resource-agent' || query.includes('resource') || query.includes('formula') || query.includes('diagram')) {
    return {
      text: `HIGH-LEVERAGE KNOWLEDGE ANCHOR // ${skillName.toUpperCase()}\n\n` +
        `CORE AXIOM:\n` +
        `"Deliberate practice is not doing what you are good at; it is isolating the exact millimeter where your mechanics fail."\n\n` +
        `PRIMARY RECEPTOR DIAGRAM:\n` +
        `[INPUT CUE] ──► [RECOGNITION <300ms] ──► [MECHANICAL EXECUTION] ──► [CLEAN RECOVERY]\n\n` +
        `KEY FORMULA:\n` +
        `Velocity = (Stroke Frequency) × (Force Vector Accuracy) / (Extraneous Muscle Friction)\n\n` +
        `Do not collect further materials. Return to the TRAIN screen and log 10 reps.`
    };
  }

  if (role === 'skill-discovery' || query.includes('discover') || query.includes('what should i learn')) {
    return {
      text: `SKILL DISCOVERY ENGINE // HIGH-LEVERAGE TRACKS\n\n` +
        `1-HOUR SPRINT SKILLS:\n` +
        `• CPR & AED Life Support (#61) — Immediate lifesaving utility.\n` +
        `• Speed Garment Ironing (#65) — Sub-2-minute formal shirt press.\n` +
        `• Chef's Knife Sharpening (#64) — 1000/6000 whetstone razor edge.\n\n` +
        `1-DAY RAPID ACQUISITIONS:\n` +
        `• 3-Ball Cascade Juggling (#15) — Visual tracking & bilateral hand motor control.\n` +
        `• AI Songwriting & Production (#31) — Compose & publish complete 2:30 track.\n` +
        `• Speed Knot Tying (#66) — Bowline, clove hitch, trucker's hitch under 5s.\n\n` +
        `20-HOUR MASTERY PURSUITS:\n` +
        `• Speedcubing Sub-20s (#11) — CFOP algorithm automation.\n` +
        `• 52-Card Deck Memory Palace (#21) — Sub-5m recall accuracy.\n` +
        `• Autonomous ReAct Agent from Scratch (#41) — Tool calling & evaluator gates.\n\n` +
        `Select a track in the SKILLS catalog to inspect its Mastery Contract.`
    };
  }

  if (role === 'tester' || query.includes('test me') || query.includes('exam')) {
    return {
      text: `OFFICIAL BENCHMARK TEST RUNNER\n\n` +
        `SKILL: ${skillName.toUpperCase()}\n` +
        `CONDITIONS: Blind execution. Zero hints. Zero pauses.\n` +
        `TARGET: ${activeSkill ? activeSkill.masteryDefinition : 'Pass required metric on 5 consecutive trials.'}\n\n` +
        `RULES:\n` +
        `1. Start official timer.\n` +
        `2. Execute without restart.\n` +
        `3. Record numerical result.\n\n` +
        `[ READY. INITIATE TEST ATTEMPT NOW ]`
    };
  }

  // Default: BRUTAL COACH
  if (lastAttempt && !lastAttempt.passed) {
    return {
      text: `RESULT: FAIL.\n\n` +
        `Target was not reached on Drill: "${lastAttempt.drillTitle}".\n` +
        `Recorded score: ${lastAttempt.score} (Duration: ${lastAttempt.durationSeconds}s).\n\n` +
        `PROBLEM:\n` +
        `You rushed the execution phase before visual recognition was fully locked. Speed without accuracy is wasted movement.\n\n` +
        `PRESCRIPTION:\n` +
        `Repeat Drill 01 immediately. 15 reps.\n` +
        `Target: ≥90% accuracy before you are permitted to attempt the benchmark.\n\n` +
        `Do not leave the console. Begin now.`
    };
  }

  if (lastAttempt && lastAttempt.passed) {
    return {
      text: `RESULT: BENCHMARK PASSED (${lastAttempt.score}).\n\n` +
        `Do not get comfortable. One pass is not mastery; consistency under fatigue is.\n\n` +
        `NEXT DRILL:\n` +
        `Repeat at 10% higher cadence or with 20% shorter time constraint.\n` +
        `Pass 3 consecutive trials before moving to the next level.\n\n` +
        `[ PROCEED TO NEXT DRILL ]`
    };
  }

  // General coaching prompt
  return {
    text: `TRAINING CONSOLE // ACTIVE SESSION\n\n` +
      `Current Focus: ${skillName}\n\n` +
      `We do not discuss theory here. What was your result on the last drill?\n\n` +
      `If you have not trained yet today:\n` +
      `1. Open TRAIN console.\n` +
      `2. Review the step-by-step visual HOW-TO guide.\n` +
      `3. Complete 15 reps against the official stopwatch.\n` +
      `4. Record score for evaluation.\n\n` +
      `Begin immediately.`
  };
}

export function generateSessionPlan(
  minutesAvailable: number,
  activeSkills: Skill[],
  allSkills: Skill[]
): SessionPlan {
  const pool = activeSkills.length > 0 ? activeSkills : allSkills.slice(0, 5);
  
  if (minutesAvailable <= 30) {
    const s1 = pool[0];
    const s2 = pool[1 % pool.length];
    const s3 = pool[2 % pool.length];

    return {
      id: `session-30m-${Date.now()}`,
      presetId: '30-min',
      totalMinutes: 30,
      headline: "30-MINUTE DELIBERATE SURGICAL STRIKE",
      items: [
        {
          skillId: s1.id,
          skillTitle: s1.title,
          drillId: s1.levels[0].drills[0].id,
          drillTitle: s1.levels[0].drills[0].title,
          durationMinutes: 12,
          targetedBottleneck: "Recognition & Cadence",
          targetCriteria: s1.levels[0].drills[0].successCriteria
        },
        {
          skillId: s2.id,
          skillTitle: s2.title,
          drillId: s2.levels[0].drills[0].id,
          drillTitle: s2.levels[0].drills[0].title,
          durationMinutes: 10,
          targetedBottleneck: "Form & Mechanics",
          targetCriteria: s2.levels[0].drills[0].successCriteria
        },
        {
          skillId: s3.id,
          skillTitle: s3.title,
          drillId: s3.levels[0].drills[0].id,
          drillTitle: s3.levels[0].drills[0].title,
          durationMinutes: 8,
          targetedBottleneck: "High-Pressure Benchmark Sprint",
          targetCriteria: s3.levels[0].drills[0].successCriteria
        }
      ]
    };
  }

  if (minutesAvailable <= 60) {
    const selected = pool.slice(0, 3);
    return {
      id: `session-60m-${Date.now()}`,
      presetId: '60-min',
      totalMinutes: 60,
      headline: "60-MINUTE DEEP DELIBERATE PROGRESSION",
      items: selected.map((s, idx) => ({
        skillId: s.id,
        skillTitle: s.title,
        drillId: s.levels[0].drills[0].id,
        drillTitle: s.levels[0].drills[0].title,
        durationMinutes: idx === 0 ? 25 : idx === 1 ? 20 : 15,
        targetedBottleneck: idx === 0 ? "Isolation Mechanics" : idx === 1 ? "Turnover Velocity" : "Pressure Benchmark",
        targetCriteria: s.levels[0].drills[0].successCriteria
      }))
    };
  }

  // Surprise Me / 120 min
  const randomSkill = allSkills[Math.floor(Math.random() * allSkills.length)];
  return {
    id: `session-surprise-${Date.now()}`,
    presetId: 'surprise',
    totalMinutes: 45,
    headline: `LAB EXPERIMENT: MASTER "${randomSkill.title.toUpperCase()}"`,
    items: [
      {
        skillId: randomSkill.id,
        skillTitle: randomSkill.title,
        drillId: randomSkill.levels[0].drills[0].id,
        drillTitle: randomSkill.levels[0].drills[0].title,
        durationMinutes: 45,
        targetedBottleneck: "Rapid Skill Acquisition Protocol",
        targetCriteria: randomSkill.levels[0].drills[0].successCriteria
      }
    ]
  };
}
