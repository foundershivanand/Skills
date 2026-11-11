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
  StreakData
} from './services/storage';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('today');
  const [customSkills, setCustomSkills] = useState<Skill[]>(() => loadCustomSkills());
  
  // Combine builtin 75 skills with custom skills
  const allSkills: Skill[] = React.useMemo(() => {
    return [...customSkills, ...ALL_SKILLS];
  }, [customSkills]);

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

  const handleRecordAttempt = (attemptData: Omit<DrillAttempt, 'id' | 'timestamp'>) => {
    const fullAttempt: DrillAttempt = {
      ...attemptData,
      id: `attempt-${Date.now()}`,
      timestamp: Date.now()
    };
    saveAttempt(fullAttempt);
    setAttempts(prev => [fullAttempt, ...prev]);
    setStreakData(loadStreakData());
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
        onConfigSaved={() => {}}
      />
    </div>
  );
};
