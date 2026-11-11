import React, { useState, useEffect } from 'react';
import { ALL_SKILLS } from './data/skillsData';
import { Skill, DrillAttempt, ChatMessage, SessionPlan, DomainId, TimeCategory } from './types';
import { Navigation, ScreenId } from './components/Navigation';
import { TodayView } from './views/TodayView';
import { SkillsView } from './views/SkillsView';
import { TrainView } from './views/TrainView';
import { ProgressView } from './views/ProgressView';
import { CoachView } from './views/CoachView';
import { QuickLaunchModal } from './components/QuickLaunchModal';
import { SettingsModal } from './components/SettingsModal';
import {
  loadActiveSkillId,
  saveActiveSkillId,
  loadCustomSkills,
  saveCustomSkill,
  loadAttempts,
  saveAttempt,
  loadChatMessages,
  saveChatMessage,
  loadStreakData,
  loadSkillProgress,
  saveSkillProgress,
  loadApiConfig,
  StreakData
} from './services/storage';
import { LLMConfig } from './services/geminiService';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('today');
  const [customSkills, setCustomSkills] = useState<Skill[]>(() => loadCustomSkills());
  const [skillProgress, setSkillProgress] = useState<Record<string, number>>(() => loadSkillProgress());
  const [apiConfig, setApiConfig] = useState<LLMConfig | null>(() => loadApiConfig());
  
  // Combine builtin 75 skills with custom skills and attach saved level progression
  const allSkills: Skill[] = React.useMemo(() => {
    const combined = [...customSkills, ...ALL_SKILLS];
    return combined.map(s => {
      const persistedLevel = skillProgress[s.id];
      if (persistedLevel !== undefined) {
        return { ...s, currentLevel: persistedLevel };
      }
      return s;
    });
  }, [customSkills, skillProgress]);

  const [activeSkillId, setActiveSkillId] = useState<string>(() => loadActiveSkillId('skill-11'));
  const [attempts, setAttempts] = useState<DrillAttempt[]>(() => loadAttempts());
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadChatMessages());
  const [streakData, setStreakData] = useState<StreakData>(() => loadStreakData());

  const [isQuickLaunchOpen, setIsQuickLaunchOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Derive active skill object
  const activeSkill = allSkills.find(s => s.id === activeSkillId) || allSkills[0];

  // First 5 skills as active track for today
  const activeSkillsList = allSkills.slice(0, 5);

  const handleSelectSkillToTrain = (skill: Skill) => {
    setActiveSkillId(skill.id);
    saveActiveSkillId(skill.id);
    setCurrentScreen('train');
  };

  const handleAdvanceSkillLevel = (skillId: string, newLevel: number) => {
    const updated = saveSkillProgress(skillId, newLevel);
    setSkillProgress(updated);
  };

  const handleRecordAttempt = (attemptData: Omit<DrillAttempt, 'id' | 'timestamp'>) => {
    const fullAttempt: DrillAttempt = {
      ...attemptData,
      id: `attempt-${Date.now()}`,
      timestamp: Date.now()
    };
    saveAttempt(fullAttempt);
    setAttempts(prev => [fullAttempt, ...prev]);
    setStreakData(loadStreakData());

    // Advance level if passed benchmark and subsequent levels exist
    if (fullAttempt.passed && activeSkill) {
      const currentLevelObj = activeSkill.levels.find(l => l.levelNumber === activeSkill.currentLevel) || activeSkill.levels[0];
      const isBenchmarkDrill = currentLevelObj?.drills.some(d => d.id === fullAttempt.drillId);
      if (isBenchmarkDrill && activeSkill.currentLevel < activeSkill.totalLevels) {
        handleAdvanceSkillLevel(activeSkill.id, activeSkill.currentLevel + 1);
      }
    }
  };

  const handleSendMessage = (msg: ChatMessage) => {
    saveChatMessage(msg);
    setMessages(prev => [...prev, msg]);
  };

  const handleClearMessages = () => {
    localStorage.removeItem('skillforge_chat_messages');
    setMessages([]);
  };

  const handleStartSession = (plan: SessionPlan) => {
    if (plan.items.length > 0) {
      const targetSkill = allSkills.find(s => s.id === plan.items[0].skillId) || activeSkill;
      setActiveSkillId(targetSkill.id);
      saveActiveSkillId(targetSkill.id);
      setCurrentScreen('train');
    }
  };

  const handleAddNewCustomSkill = (skillData: {
    title: string;
    domainId: DomainId;
    timeCategory: TimeCategory;
    targetOutcome: string;
  }) => {
    const newNumber = allSkills.length + 1;
    const newCustomSkill: Skill = {
      id: `skill-custom-${Date.now()}`,
      number: newNumber,
      title: skillData.title,
      domainId: skillData.domainId,
      domainCode: skillData.domainId === 'physical' ? 'A' :
                  skillData.domainId === 'speed' ? 'B' :
                  skillData.domainId === 'memory' ? 'C' :
                  skillData.domainId === 'creative' ? 'D' :
                  skillData.domainId === 'technology' ? 'E' :
                  skillData.domainId === 'communication' ? 'F' :
                  skillData.domainId === 'practical' ? 'G' : 'H',
      skillType: 'cognitive',
      timeCategory: skillData.timeCategory,
      masteryDefinition: skillData.targetOutcome,
      prerequisites: ["Fundamental concentration & commitment"],
      equipmentNeeded: ["Standard apparatus"],
      currentLevel: 1,
      totalLevels: 5,
      isCustom: true,
      levels: [
        {
          levelNumber: 1,
          title: "Level 01 — Core Mechanics & Isolation",
          targetBenchmark: `Pass 15 consecutive trials: ${skillData.targetOutcome}`,
          unlockCondition: "Pass benchmark with zero assist",
          testProtocol: "5 unassisted attempts evaluated strictly against criteria",
          drills: [
            {
              id: `drill-custom-${Date.now()}-01`,
              number: 1,
              title: "Drill 01 — Fundamental Isolation Reps",
              objective: `Isolate the primary bottleneck for ${skillData.title}.`,
              whyExists: "Builds unassisted baseline without cognitive overload.",
              equipment: "Apparatus",
              setup: "Clear distraction-free station.",
              actions: [
                "Deconstruct the movement into starting position, execution vector, and recovery.",
                "Execute 10 controlled slow-motion repetitions.",
                "Execute 10 full-speed trials against stopwatch.",
                "Log observable score."
              ],
              repetitions: "20 focused reps",
              timeLimitSeconds: 600,
              successCriteria: `Achieve ≥90% accuracy: ${skillData.targetOutcome}`,
              failureCriteria: "Deviation from form. Result: FAIL.",
              difficultyAdjustment: "Increase reps upon pass.",
              visualSteps: [
                {
                  stepNumber: 1,
                  title: "Starting Posture & Alignment",
                  instruction: "Ground yourself with zero extraneous movement.",
                  diagramType: "flow",
                  keyTip: "Focus on the primary lever.",
                  commonMistake: "Rushing before setup is stable."
                }
              ]
            }
          ]
        },
        {
          levelNumber: 2,
          title: "Level 02 — Speed & Fatigue Threshold",
          targetBenchmark: "Increase tempo by 20% with zero breakdown in mechanics.",
          unlockCondition: "Level 1 benchmark passed unassisted.",
          testProtocol: "10 high-density trials under accelerated cadence.",
          drills: [
            {
              id: `drill-custom-${Date.now()}-02`,
              number: 2,
              title: "Drill 02 — Cadence & Turnover Acceleration",
              objective: `Drive higher repetition velocity for ${skillData.title}.`,
              whyExists: "Exposes hidden friction points by forcing execution under fatigue.",
              equipment: "Apparatus",
              setup: "Start official timer calibrated 20% faster than baseline.",
              actions: [
                "Initiate attempt immediately upon timer signal.",
                "Maintain crisp mechanical boundaries.",
                "Log observable split times."
              ],
              repetitions: "10 cadence intervals",
              timeLimitSeconds: 600,
              successCriteria: "Pass rate ≥ 80% at accelerated cadence.",
              failureCriteria: "Form breakdown or hesitation. Result: FAIL.",
              difficultyAdjustment: "Adjust cadence based on error rate.",
              visualSteps: [
                {
                  stepNumber: 1,
                  title: "Turnover Acceleration",
                  instruction: "Transition immediately from recovery to next rep.",
                  diagramType: "flow",
                  keyTip: "Eliminate idle pause between repetitions.",
                  commonMistake: "Allowing fatigue to degrade form."
                }
              ]
            }
          ]
        },
        {
          levelNumber: 3,
          title: "Level 03 — Consistency & Error Elimination",
          targetBenchmark: `Achieve ≥90% accuracy across 10 consecutive trials: ${skillData.targetOutcome}`,
          unlockCondition: "Level 2 cadence benchmark verified.",
          testProtocol: "10 consecutive trials evaluated with strict error tolerance.",
          drills: [
            {
              id: `drill-custom-${Date.now()}-03`,
              number: 3,
              title: "Drill 03 — High-Density Consistency Battery",
              objective: `Eliminate mechanical variance during ${skillData.title}.`,
              whyExists: "Automates cognitive and motor firing patterns into long-term memory.",
              equipment: "Apparatus",
              setup: "Station calibrated. Zero distractions.",
              actions: [
                "Execute 10 back-to-back repetitions.",
                "Note friction points immediately.",
                "Log consistency variance across all 10 trials."
              ],
              repetitions: "10 continuous reps",
              timeLimitSeconds: 600,
              successCriteria: "≥9 out of 10 flawless executions.",
              failureCriteria: "More than 1 error across set. Reset and repeat.",
              difficultyAdjustment: "Increase reps upon pass.",
              visualSteps: [
                {
                  stepNumber: 1,
                  title: "Consistency Lock",
                  instruction: "Maintain exact identical trajectory across all reps.",
                  diagramType: "flow",
                  keyTip: "Treat repetition 10 with the exact same focus as repetition 1.",
                  commonMistake: "Losing focus as reps accumulate."
                }
              ]
            }
          ]
        },
        {
          levelNumber: 4,
          title: "Level 04 — Simulated Pressure Gauntlet",
          targetBenchmark: "Pass unassisted benchmark trials under randomized start cues.",
          unlockCondition: "Level 3 consistency battery passed.",
          testProtocol: "5 randomized trials with zero hints or preparation time.",
          drills: [
            {
              id: `drill-custom-${Date.now()}-04`,
              number: 4,
              title: "Drill 04 — Pressure & Disruption Drill",
              objective: `Execute ${skillData.title} under simulated competitive stress.`,
              whyExists: "Tests whether skill survives when environment is unpredictable.",
              equipment: "Apparatus",
              setup: "Random delay timer active.",
              actions: [
                "Wait for random start tone (2-8s window).",
                "Execute full movement sequence immediately.",
                "Record split time and composure score."
              ],
              repetitions: "5 pressure trials",
              timeLimitSeconds: 600,
              successCriteria: "Pass 4 of 5 trials meeting target criteria.",
              failureCriteria: "Hesitation > 1.5s on start tone.",
              difficultyAdjustment: "Add external distraction.",
              visualSteps: [
                {
                  stepNumber: 1,
                  title: "Pressure Composure",
                  instruction: "Zero cognitive hesitation upon start signal.",
                  diagramType: "flow",
                  keyTip: "Trust automated motor patterns.",
                  commonMistake: "Over-analyzing before movement initiates."
                }
              ]
            }
          ]
        },
        {
          levelNumber: 5,
          title: "Level 05 — Mastery Verification & Proof Submission",
          targetBenchmark: skillData.targetOutcome,
          unlockCondition: "All prerequisite levels passed. Verified evidence required.",
          testProtocol: `Official mastery examination meeting: ${skillData.targetOutcome}`,
          drills: [
            {
              id: `drill-custom-${Date.now()}-05`,
              number: 5,
              title: "Drill 05 — The Mastery Contract Proof",
              objective: `Attain official mastery: ${skillData.targetOutcome}`,
              whyExists: "The final unassisted evidence of mastery. 0% coaching, 100% execution.",
              equipment: "Official apparatus & recording device",
              setup: "Public verification logging active.",
              actions: [
                `Review Mastery Contract: ${skillData.targetOutcome}`,
                "Execute unassisted trial under official conditions.",
                "Capture verifiable timer or video recording.",
                "Submit URL link to Skill Proof Ledger."
              ],
              repetitions: "Official test trial",
              timeLimitSeconds: 1200,
              successCriteria: skillData.targetOutcome,
              failureCriteria: "Any deviation from mastery contract. Result: FAIL.",
              difficultyAdjustment: "Mastery benchmark is fixed.",
              visualSteps: [
                {
                  stepNumber: 1,
                  title: "Mastery Verification",
                  instruction: "Execute trial cleanly and record verifiable proof link.",
                  diagramType: "flow",
                  keyTip: "Maintain composure under test conditions.",
                  commonMistake: "Failing to document proof meeting specification."
                }
              ]
            }
          ]
        }
      ],
      proofRequirements: {
        type: 'metrics',
        requiredFormat: 'Public URL / Video / Stopwatch log',
        description: `Submit proof meeting: ${skillData.targetOutcome}`,
        sampleVerification: 'Automated benchmark comparison'
      }
    };

    saveCustomSkill(newCustomSkill);
    setCustomSkills(prev => [newCustomSkill, ...prev]);
    setActiveSkillId(newCustomSkill.id);
    saveActiveSkillId(newCustomSkill.id);
    setCurrentScreen('train');
  };

  return (
    <div className="min-h-screen bg-steel-950 text-steel-100 flex flex-col font-mono selection:bg-forge-amber selection:text-black">
      {/* Navigation Header */}
      <Navigation
        currentScreen={currentScreen}
        onSelectScreen={setCurrentScreen}
        streakData={streakData}
        onOpenQuickLaunch={() => setIsQuickLaunchOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        activeSkillTitle={activeSkill?.title}
      />

      {/* Main View Area */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pb-12">
        {currentScreen === 'today' && (
          <TodayView
            activeSkills={activeSkillsList}
            recentAttempts={attempts}
            streakData={streakData}
            onSelectSkillToTrain={handleSelectSkillToTrain}
            onNavigateToSkills={() => setCurrentScreen('skills')}
            onOpenQuickLaunch={() => setIsQuickLaunchOpen(true)}
          />
        )}

        {currentScreen === 'skills' && (
          <SkillsView
            skills={allSkills}
            onSelectSkill={handleSelectSkillToTrain}
            onAddNewCustomSkill={handleAddNewCustomSkill}
          />
        )}

        {currentScreen === 'train' && (
          <TrainView
            skill={activeSkill}
            onRecordAttempt={handleRecordAttempt}
            onNavigateToCoach={() => setCurrentScreen('coach')}
            onSelectDifferentSkill={() => setCurrentScreen('skills')}
            onAdvanceLevel={handleAdvanceSkillLevel}
          />
        )}

        {currentScreen === 'progress' && (
          <ProgressView
            attempts={attempts}
            activeSkills={activeSkillsList}
            allSkills={allSkills}
            onSelectSkill={handleSelectSkillToTrain}
          />
        )}

        {currentScreen === 'coach' && (
          <CoachView
            messages={messages}
            onSendMessage={handleSendMessage}
            onClearMessages={handleClearMessages}
            activeSkill={activeSkill}
            recentAttempts={attempts}
            apiConfig={apiConfig}
          />
        )}
      </main>

      {/* Modals */}
      <QuickLaunchModal
        isOpen={isQuickLaunchOpen}
        onClose={() => setIsQuickLaunchOpen(false)}
        activeSkills={activeSkillsList}
        allSkills={allSkills}
        onStartSession={handleStartSession}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onConfigSaved={setApiConfig}
      />
    </div>
  );
};
