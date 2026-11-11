import { describe, it, expect } from 'vitest';
import { analyzeBottlenecks, generateSessionPlan, processAgentMessage } from '../services/aiEngine';
import { DrillAttempt, Skill } from '../types';
import { ALL_SKILLS } from '../data/skillsData';

describe('AI Engine & Bottleneck Analysis Test Suite', () => {
  it('returns balanced baseline metrics when attempt history is empty', () => {
    const metrics = analyzeBottlenecks([]);
    expect(metrics.primaryBottleneck).toBe('Speed');
    expect(metrics.recognition).toBe(70);
    expect(metrics.execution).toBe(75);
    expect(metrics.accuracy).toBe(80);
    expect(metrics.speed).toBe(65);
    expect(metrics.recommendedAction).toBeDefined();
  });

  it('correctly isolates Recognition when recognitionScore is the primary bottleneck', () => {
    const attempts: DrillAttempt[] = [
      {
        id: '1',
        skillId: 'skill-11',
        drillId: 'drill-11-01',
        drillTitle: 'Cross Inspection',
        timestamp: Date.now(),
        passed: false,
        score: '22s',
        durationSeconds: 22,
        notes: '',
        recognitionScore: 40,
        executionScore: 85,
        accuracyScore: 90,
        speedScore: 80
      },
      {
        id: '2',
        skillId: 'skill-11',
        drillId: 'drill-11-01',
        drillTitle: 'Cross Inspection',
        timestamp: Date.now(),
        passed: false,
        score: '24s',
        durationSeconds: 24,
        notes: '',
        recognitionScore: 45,
        executionScore: 88,
        accuracyScore: 92,
        speedScore: 82
      }
    ];

    const metrics = analyzeBottlenecks(attempts);
    expect(metrics.primaryBottleneck).toBe('Recognition');
    expect(metrics.recommendedAction).toContain('flashcard isolation reps');
  });

  it('correctly isolates Accuracy when accuracyScore is the primary bottleneck', () => {
    const attempts: DrillAttempt[] = [
      {
        id: '1',
        skillId: 'skill-21',
        drillId: 'drill-21-01',
        drillTitle: 'Card Recall',
        timestamp: Date.now(),
        passed: false,
        score: '60%',
        durationSeconds: 180,
        notes: '',
        recognitionScore: 85,
        executionScore: 80,
        accuracyScore: 50,
        speedScore: 78
      }
    ];

    const metrics = analyzeBottlenecks(attempts);
    expect(metrics.primaryBottleneck).toBe('Accuracy');
    expect(metrics.recommendedAction).toContain('Error rate exceeds tolerance');
  });

  it('correctly isolates Execution when executionScore is the primary bottleneck', () => {
    const attempts: DrillAttempt[] = [
      {
        id: '1',
        skillId: 'skill-04',
        drillId: 'drill-04-01',
        drillTitle: 'Handstand Balance',
        timestamp: Date.now(),
        passed: false,
        score: 'Fail',
        durationSeconds: 60,
        notes: '',
        recognitionScore: 90,
        executionScore: 45,
        accuracyScore: 85,
        speedScore: 80
      }
    ];

    const metrics = analyzeBottlenecks(attempts);
    expect(metrics.primaryBottleneck).toBe('Execution');
    expect(metrics.recommendedAction).toContain('Mechanics breakdown detected');
  });

  it('generates structured session plans for 30m, 60m, and Surprise Me', () => {
    const plan30 = generateSessionPlan(30, ALL_SKILLS.slice(0, 3), ALL_SKILLS);
    expect(plan30.totalMinutes).toBe(30);
    expect(plan30.items).toHaveLength(3);
    expect(plan30.presetId).toBe('30-min');

    const plan60 = generateSessionPlan(60, ALL_SKILLS.slice(0, 3), ALL_SKILLS);
    expect(plan60.totalMinutes).toBe(60);
    expect(plan60.items).toHaveLength(3);
    expect(plan60.presetId).toBe('60-min');

    const planSurprise = generateSessionPlan(999, [], ALL_SKILLS);
    expect(planSurprise.presetId).toBe('surprise');
    expect(planSurprise.headline).toContain('LAB EXPERIMENT');
    expect(planSurprise.items).toHaveLength(1);
  });

  it('generates targeted internal responses across all 8 multi-agent roles', async () => {
    const activeSkill = ALL_SKILLS[10]; // Skill #11: Speedcubing

    // Drill Generator
    const drillRes = await processAgentMessage('drill-generator', 'Generate drill for F2L', { activeSkill });
    expect(drillRes.text).toContain('TARGETED DRILL GENERATION');
    expect(drillRes.text).toContain('OBJECTIVE');
    expect(drillRes.text).toContain('EXACT ACTIONS');

    // Resource Agent
    const resourceRes = await processAgentMessage('resource-agent', 'give me diagram', { activeSkill });
    expect(resourceRes.text).toContain('HIGH-LEVERAGE KNOWLEDGE ANCHOR');
    expect(resourceRes.text).toContain('CORE AXIOM');

    // Skill Discovery
    const discoveryRes = await processAgentMessage('skill-discovery', 'what can i learn?', { activeSkill });
    expect(discoveryRes.text).toContain('SKILL DISCOVERY ENGINE');
    expect(discoveryRes.text).toContain('1-HOUR SPRINT SKILLS');

    // Accountability Agent
    const accountabilityRes = await processAgentMessage('accountability-agent', 'I missed practice because I was tired', { activeSkill });
    expect(accountabilityRes.text).toContain('DISCIPLINE AUDIT');
    expect(accountabilityRes.text).toContain('negotiating with your own standard');

    // Performance Analyst
    const analystRes = await processAgentMessage('performance-analyst', 'analyze my bottlenecks', { activeSkill });
    expect(analystRes.text).toContain('PERFORMANCE METRICS BREAKDOWN');
    expect(analystRes.text).toContain('PRIMARY BOTTLENECK');

    // Skill Architect
    const architectRes = await processAgentMessage('skill-architect', 'how do I architect a new skill?', { activeSkill });
    expect(architectRes.text).toContain('SKILL DECONSTRUCTION BLUEPRINT');
    expect(architectRes.text).toContain('MASTERY CONTRACT');

    // Tester
    const testerRes = await processAgentMessage('tester', 'test me right now', { activeSkill });
    expect(testerRes.text).toContain('OFFICIAL BENCHMARK TEST RUNNER');
    expect(testerRes.text).toContain('CONDITIONS: Blind execution');
  });
});
