export type DomainId = 
  | 'physical' 
  | 'speed' 
  | 'memory' 
  | 'creative' 
  | 'technology' 
  | 'communication' 
  | 'practical' 
  | 'challenge';

export interface Domain {
  id: DomainId;
  code: string; // 'A' to 'H'
  title: string;
  description: string;
  count: number;
}

export type TimeCategory = '1-hour' | '1-day' | '20-hours' | '7-days' | 'deep-mastery';

export type SkillType = 'motor' | 'cognitive' | 'creative' | 'technical' | 'physical-endurance' | 'one-hour';

export interface VisualStep {
  stepNumber: number;
  title: string;
  instruction: string;
  subtext?: string;
  diagramType: 'cube' | 'cards' | 'path' | 'posture' | 'ui' | 'flow' | 'text' | 'split';
  diagramData?: Record<string, any>;
  keyTip?: string;
  commonMistake?: string;
}

export interface Drill {
  id: string;
  number: number;
  title: string;
  objective: string;
  whyExists: string;
  equipment: string;
  setup: string;
  actions: string[];
  repetitions: string;
  timeLimitSeconds?: number;
  successCriteria: string;
  failureCriteria: string;
  difficultyAdjustment: string;
  visualSteps: VisualStep[];
  interactiveTool?: 'rubik-timer' | 'card-memory' | 'speed-reader' | 'agent-studio' | 'interval-timer';
}

export interface SkillLevel {
  levelNumber: number;
  title: string;
  targetBenchmark: string;
  drills: Drill[];
  testProtocol: string;
  unlockCondition: string;
}

export interface SkillProof {
  type: 'timer-log' | 'video-url' | 'github-repo' | 'audio-recording' | 'recall-score' | 'photo-proof' | 'metrics';
  requiredFormat: string;
  description: string;
  sampleVerification: string;
}

export interface Skill {
  id: string;
  number: number; // 1 to 75
  title: string;
  domainId: DomainId;
  domainCode: string;
  skillType: SkillType;
  timeCategory: TimeCategory;
  masteryDefinition: string; // Mastery Contract
  prerequisites: string[];
  equipmentNeeded: string[];
  currentLevel: number;
  totalLevels: number;
  levels: SkillLevel[];
  proofRequirements: SkillProof;
  isCustom?: boolean;
}

export interface DrillAttempt {
  id: string;
  skillId: string;
  drillId: string;
  drillTitle: string;
  timestamp: number;
  passed: boolean;
  score: string;
  numericMetric?: number; // e.g. seconds or percentage
  durationSeconds: number;
  recognitionScore?: number; // 0-100
  executionScore?: number;   // 0-100
  accuracyScore?: number;    // 0-100
  speedScore?: number;       // 0-100
  notes: string;
  aiCoachVerdict?: string;
}

export interface BottleneckMetrics {
  recognition: number; // percentage
  execution: number;
  accuracy: number;
  speed: number;
  primaryBottleneck: 'Recognition' | 'Execution' | 'Accuracy' | 'Speed';
  recommendedAction: string;
}

export type AIAgentRole = 
  | 'brutal-coach'
  | 'skill-architect'
  | 'drill-generator'
  | 'performance-analyst'
  | 'accountability-agent'
  | 'tester'
  | 'resource-agent'
  | 'skill-discovery';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  agentRole?: AIAgentRole;
  text: string;
  timestamp: number;
  drillRecommendation?: Drill;
  metricsAnalysis?: BottleneckMetrics;
  proofVerdict?: 'PASS' | 'FAIL' | 'NEEDS_EVIDENCE';
}

export interface QuickSessionPreset {
  id: string;
  label: string;
  durationMinutes: number;
  description: string;
  intensity: 'brutal' | 'focused' | 'exploratory';
}

export interface SessionPlanItem {
  skillId: string;
  skillTitle: string;
  drillId: string;
  drillTitle: string;
  durationMinutes: number;
  targetedBottleneck: string;
  targetCriteria: string;
}

export interface SessionPlan {
  id: string;
  presetId: string;
  totalMinutes: number;
  headline: string;
  items: SessionPlanItem[];
}
