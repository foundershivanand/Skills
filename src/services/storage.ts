import { DrillAttempt, ChatMessage, Skill } from '../types';
import { LLMConfig } from './geminiService';

const STORAGE_KEYS = {
  ACTIVE_SKILL_ID: 'skillforge_active_skill_id',
  SAVED_SKILLS: 'skillforge_skills_data',
  ATTEMPTS: 'skillforge_drill_attempts',
  CHAT_MESSAGES: 'skillforge_chat_messages',
  API_CONFIG: 'skillforge_api_config',
  STREAK_DATA: 'skillforge_streak_data',
  SKILL_PROGRESS: 'skillforge_skill_progress',
  SKILL_PROOFS: 'skillforge_skill_proofs',
};

export interface SubmittedProof {
  id: string;
  skillId?: string;
  skillTitle: string;
  link: string;
  date: string;
  notes?: string;
}

export interface StreakData {
  currentStreak: number;
  lastTrainedDate: string; // YYYY-MM-DD
  totalSessionsCompleted: number;
}

export function loadActiveSkillId(defaultId = 'skill-11'): string {
  try {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_SKILL_ID) || defaultId;
  } catch {
    return defaultId;
  }
}

export function saveActiveSkillId(id: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_SKILL_ID, id);
  } catch (e) {
    console.error(e);
  }
}

export function loadCustomSkills(): Skill[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SAVED_SKILLS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustomSkill(skill: Skill): void {
  try {
    const existing = loadCustomSkills();
    const updated = [skill, ...existing.filter(s => s.id !== skill.id)];
    localStorage.setItem(STORAGE_KEYS.SAVED_SKILLS, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
}

export function loadAttempts(): DrillAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAttempt(attempt: DrillAttempt): void {
  try {
    const existing = loadAttempts();
    const updated = [attempt, ...existing].slice(0, 100);
    localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(updated));
    updateStreak();
  } catch (e) {
    console.error(e);
  }
}

export function loadChatMessages(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CHAT_MESSAGES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveChatMessage(msg: ChatMessage): void {
  try {
    const existing = loadChatMessages();
    const updated = [...existing, msg].slice(-50);
    localStorage.setItem(STORAGE_KEYS.CHAT_MESSAGES, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
}

export function loadApiConfig(): LLMConfig | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.API_CONFIG);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveApiConfig(config: LLMConfig): void {
  try {
    localStorage.setItem(STORAGE_KEYS.API_CONFIG, JSON.stringify(config));
  } catch (e) {
    console.error(e);
  }
}

export function loadSkillProgress(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SKILL_PROGRESS);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveSkillProgress(skillId: string, level: number): Record<string, number> {
  try {
    const existing = loadSkillProgress();
    const updated = { ...existing, [skillId]: level };
    localStorage.setItem(STORAGE_KEYS.SKILL_PROGRESS, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error(e);
    return {};
  }
}

export function loadSkillProofs(): SubmittedProof[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SKILL_PROOFS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveSkillProof(proof: SubmittedProof): SubmittedProof[] {
  try {
    const existing = loadSkillProofs();
    const updated = [proof, ...existing];
    localStorage.setItem(STORAGE_KEYS.SKILL_PROOFS, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export function loadStreakData(): StreakData {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STREAK_DATA);
    if (raw) {
      const data: StreakData = JSON.parse(raw);
      if (data.lastTrainedDate) {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = new Date(data.lastTrainedDate);
        const currentDate = new Date(today);
        const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays > 1) {
          return {
            ...data,
            currentStreak: 0
          };
        }
      }
      return data;
    }
  } catch {}
  return {
    currentStreak: 0,
    lastTrainedDate: '',
    totalSessionsCompleted: 0
  };
}

export function updateStreak(): StreakData {
  const current = loadStreakData();
  const today = new Date().toISOString().split('T')[0];

  if (!current.lastTrainedDate) {
    current.currentStreak = 1;
    current.lastTrainedDate = today;
    current.totalSessionsCompleted = 1;
  } else if (current.lastTrainedDate === today) {
    current.totalSessionsCompleted += 1;
  } else {
    const lastDate = new Date(current.lastTrainedDate);
    const currentDate = new Date(today);
    const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      current.currentStreak += 1;
    } else {
      current.currentStreak = 1;
    }
    current.lastTrainedDate = today;
    current.totalSessionsCompleted += 1;
  }

  try {
    localStorage.setItem(STORAGE_KEYS.STREAK_DATA, JSON.stringify(current));
  } catch {}

  return current;
}
