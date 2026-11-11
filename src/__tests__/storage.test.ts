import { describe, it, expect, beforeEach } from 'vitest';
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
  updateStreak,
  loadSkillProgress,
  saveSkillProgress,
  loadSkillProofs,
  saveSkillProof,
  loadApiConfig,
  saveApiConfig,
  SubmittedProof
} from '../services/storage';
import { DrillAttempt, ChatMessage, Skill } from '../types';

describe('Storage Service Test Suite', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('correctly loads default active skill and saves active skill', () => {
    expect(loadActiveSkillId('skill-11')).toBe('skill-11');
    saveActiveSkillId('skill-41');
    expect(loadActiveSkillId()).toBe('skill-41');
  });

  it('manages custom skills persistence and updates existing skill by id', () => {
    expect(loadCustomSkills()).toEqual([]);
    const customSkill: Skill = {
      id: 'custom-1',
      number: 76,
      title: 'Custom High-Speed Juggling',
      domainId: 'speed',
      domainCode: 'B',
      skillType: 'motor',
      timeCategory: '20-hours',
      masteryDefinition: '100 catches clean',
      prerequisites: [],
      equipmentNeeded: ['3 balls'],
      currentLevel: 1,
      totalLevels: 5,
      levels: [],
      proofRequirements: {
        type: 'video-url',
        requiredFormat: 'Video URL',
        description: 'Unlisted video',
        sampleVerification: 'Pass'
      }
    };

    saveCustomSkill(customSkill);
    const loaded = loadCustomSkills();
    expect(loaded).toHaveLength(1);
    expect(loaded[0].title).toBe('Custom High-Speed Juggling');

    // Update same skill
    const updated = { ...customSkill, title: 'Updated High-Speed Juggling' };
    saveCustomSkill(updated);
    const reloaded = loadCustomSkills();
    expect(reloaded).toHaveLength(1);
    expect(reloaded[0].title).toBe('Updated High-Speed Juggling');
  });

  it('saves attempts and enforces 100-attempt ceiling', () => {
    expect(loadAttempts()).toEqual([]);

    for (let i = 0; i < 110; i++) {
      const attempt: DrillAttempt = {
        id: `att-${i}`,
        skillId: 'skill-01',
        drillId: 'drill-01-01',
        drillTitle: '400m VO2 Max Repeats',
        timestamp: Date.now() + i,
        passed: i % 2 === 0,
        score: `${i}s`,
        durationSeconds: 60,
        notes: `Attempt ${i}`
      };
      saveAttempt(attempt);
    }

    const loaded = loadAttempts();
    expect(loaded).toHaveLength(100);
    expect(loaded[0].id).toBe('att-109'); // Most recent first
  });

  it('saves chat messages and enforces 50-message ceiling', () => {
    expect(loadChatMessages()).toEqual([]);

    for (let i = 0; i < 60; i++) {
      const msg: ChatMessage = {
        id: `msg-${i}`,
        sender: i % 2 === 0 ? 'user' : 'assistant',
        text: `Message content ${i}`,
        timestamp: Date.now() + i
      };
      saveChatMessage(msg);
    }

    const loaded = loadChatMessages();
    expect(loaded).toHaveLength(50);
    expect(loaded[loaded.length - 1].id).toBe('msg-59');
  });

  it('initializes streak to 0 for new visitors and calculates streak progression', () => {
    const initial = loadStreakData();
    expect(initial.currentStreak).toBe(0);
    expect(initial.totalSessionsCompleted).toBe(0);

    const firstUpdate = updateStreak();
    expect(firstUpdate.currentStreak).toBe(1);
    expect(firstUpdate.totalSessionsCompleted).toBe(1);

    // Second session on same day increments sessions but maintains streak count
    const sameDayUpdate = updateStreak();
    expect(sameDayUpdate.currentStreak).toBe(1);
    expect(sameDayUpdate.totalSessionsCompleted).toBe(2);
  });

  it('persists and loads skill level progress per skill id', () => {
    expect(loadSkillProgress()).toEqual({});
    saveSkillProgress('skill-01', 3);
    saveSkillProgress('skill-11', 2);

    const progress = loadSkillProgress();
    expect(progress['skill-01']).toBe(3);
    expect(progress['skill-11']).toBe(2);
  });

  it('persists and retrieves skill proofs with notes and date', () => {
    expect(loadSkillProofs()).toEqual([]);
    const proof: SubmittedProof = {
      id: 'proof-101',
      skillTitle: 'Rubik Cube Sub-20',
      link: 'https://youtube.com/watch?v=mock',
      notes: 'WCA official session average',
      date: '11/12/2026'
    };

    saveSkillProof(proof);
    const loaded = loadSkillProofs();
    expect(loaded).toHaveLength(1);
    expect(loaded[0].link).toBe('https://youtube.com/watch?v=mock');
    expect(loaded[0].notes).toBe('WCA official session average');
  });

  it('persists API configuration credentials safely', () => {
    expect(loadApiConfig()).toBeNull();
    saveApiConfig({
      provider: 'gemini',
      apiKey: 'test-ai-key-123',
      model: 'gemini-1.5-flash'
    });

    const config = loadApiConfig();
    expect(config?.provider).toBe('gemini');
    expect(config?.apiKey).toBe('test-ai-key-123');
    expect(config?.model).toBe('gemini-1.5-flash');
  });
});
