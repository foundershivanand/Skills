import React from 'react';
import { Play, Flame, Clock, Target, ArrowRight, ShieldCheck, AlertCircle, Compass, Zap } from 'lucide-react';
import { Skill, DrillAttempt } from '../types';
import { StreakData } from '../services/storage';

interface TodayViewProps {
  activeSkills: Skill[];
  recentAttempts: DrillAttempt[];
  streakData: StreakData;
  onSelectSkillToTrain: (skill: Skill) => void;
  onNavigateToSkills: () => void;
  onOpenQuickLaunch: () => void;
}

export const TodayView: React.FC<TodayViewProps> = ({
  activeSkills,
  recentAttempts,
  streakData,
  onSelectSkillToTrain,
  onNavigateToSkills,
  onOpenQuickLaunch
}) => {
  const primarySkill = activeSkills[0];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "GOOD MORNING.";
    if (hour < 18) return "GOOD AFTERNOON.";
    return "GOOD EVENING.";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Brutal Header */}
      <div className="border-b border-steel-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-steel-500 uppercase tracking-widest block mb-1">
            TERMINAL STATUS // READY
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-steel-100 font-mono tracking-tight">
            {getGreeting()}
          </h1>
          <p className="text-xs font-mono text-forge-amber mt-1">
            WHAT ARE WE TRAINING TODAY? ZERO PASSIVE CONSUMPTION.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenQuickLaunch}
            className="px-4 py-2 bg-steel-900 hover:bg-steel-800 text-forge-amber border border-forge-amber/50 text-xs font-mono font-bold flex items-center space-x-1.5"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>I HAVE 30 MIN</span>
          </button>
          {primarySkill && (
            <button
              onClick={() => onSelectSkillToTrain(primarySkill)}
              className="px-6 py-2 bg-forge-amber hover:bg-amber-400 text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>[ TRAIN NOW ]</span>
            </button>
          )}
        </div>
      </div>

      {/* TODAY'S TARGET MISSIONS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-steel-400 uppercase tracking-widest border-b border-steel-800 pb-2">
          <span>TODAY'S ACTIVE DRILL QUEUE</span>
          <span className="text-steel-500">{activeSkills.length} SKILLS ACTIVE</span>
        </div>

        <div className="divide-y divide-steel-800/80 border border-steel-800 bg-steel-950">
          {activeSkills.map((skill, idx) => {
            const currentDrill = skill.levels[0]?.drills[0];
            const recentSolve = recentAttempts.find(a => a.skillId === skill.id);

            return (
              <div 
                key={skill.id}
                className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-steel-900/40 transition-colors group"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center space-x-2">
                    <span className="px-1.5 py-0.5 bg-steel-800 text-steel-300 font-mono text-[10px] font-bold">
                      LV {skill.currentLevel.toString().padStart(2, '0')} / {skill.totalLevels.toString().padStart(2, '0')}
                    </span>
                    <span className="text-xs font-mono text-steel-500 uppercase tracking-wider">
                      DOMAIN {skill.domainCode}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-steel-100 font-mono group-hover:text-forge-amber transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-xs text-steel-400 font-mono">
                    <strong className="text-steel-300">Drill:</strong> {currentDrill ? currentDrill.title : 'Mastery Drill'} • 
                    <span className="text-forge-amber font-semibold ml-1">
                      Target: {currentDrill ? currentDrill.successCriteria : skill.masteryDefinition}
                    </span>
                  </p>

                  {recentSolve && (
                    <div className="text-[11px] font-mono text-steel-500 pt-0.5">
                      Last logged result: <span className={recentSolve.passed ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{recentSolve.score} ({recentSolve.passed ? 'PASS' : 'FAIL'})</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <button
                    onClick={() => onSelectSkillToTrain(skill)}
                    className="px-5 py-2 bg-steel-900 hover:bg-steel-800 group-hover:bg-forge-amber group-hover:text-black text-steel-200 border border-steel-700 group-hover:border-forge-amber text-xs font-mono font-bold tracking-wider flex items-center space-x-1.5 transition-all"
                  >
                    <span>START DRILL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end pt-1">
          <button
            onClick={onNavigateToSkills}
            className="text-xs font-mono text-steel-400 hover:text-forge-amber flex items-center space-x-1 transition-colors"
          >
            <span>VIEW ALL 75 SKILLS IN CATALOG</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* DISCIPLINE & MASTERY STATUS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Streak card */}
        <div className="p-4 bg-steel-950 border border-steel-800 space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs text-steel-400 uppercase">
            <span>DISCIPLINE AUDIT</span>
            <Flame className="w-4 h-4 text-forge-amber" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-extrabold text-steel-100">{streakData.currentStreak}</span>
            <span className="text-xs text-steel-400">CONSECUTIVE DAYS OF DELIBERATE DRILLS</span>
          </div>
          <p className="text-xs text-steel-400 leading-relaxed">
            {streakData.currentStreak > 0 
              ? "Discipline is holding. Never break the chain for more than 24 hours."
              : "No drills completed today. Deliberate practice compounds only with daily friction."}
          </p>
        </div>

        {/* Level breakdown bar charts */}
        <div className="p-4 bg-steel-950 border border-steel-800 space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs text-steel-400 uppercase">
            <span>MASTERY METERS</span>
            <Target className="w-4 h-4 text-forge-amber" />
          </div>

          <div className="space-y-2 text-xs">
            {activeSkills.slice(0, 4).map(skill => {
              const progressPct = Math.min(100, Math.round((skill.currentLevel / skill.totalLevels) * 100));
              return (
                <div key={skill.id} className="space-y-0.5">
                  <div className="flex justify-between text-[11px] text-steel-300">
                    <span className="truncate max-w-[200px]">{skill.title}</span>
                    <span className="text-forge-amber font-bold">{progressPct}%</span>
                  </div>
                  <div className="w-full bg-steel-900 h-2 border border-steel-800 overflow-hidden">
                    <div 
                      className="bg-forge-amber h-full transition-all duration-500" 
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* QUICK PHILOSOPHY CONTRACT */}
      <div className="p-4 bg-steel-900/60 border border-steel-800 text-xs font-mono text-steel-400 space-y-1">
        <span className="text-forge-amber font-bold uppercase block tracking-wider">
          THE SKILLFORGE CONTRACT
        </span>
        <p className="leading-relaxed">
          "Don't teach me about the skill. Train me to perform the skill."
          Every drill logged here is evaluated against measurable evidence: stopwatch splits, recall accuracy, or deployed repositories.
        </p>
      </div>
    </div>
  );
};
