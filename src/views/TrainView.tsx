import React, { useState, useEffect } from 'react';
import { Eye, Play, CheckCircle2, XCircle, RotateCcw, AlertTriangle, ArrowLeft, ArrowRight, MessageSquareCode, Award, Terminal, Layers } from 'lucide-react';
import { Skill, Drill, DrillAttempt } from '../types';
import { RubikTimerTool } from '../components/tools/RubikTimerTool';
import { CardMemoryTool } from '../components/tools/CardMemoryTool';
import { SpeedReaderTool } from '../components/tools/SpeedReaderTool';
import { AgentStudioTool } from '../components/tools/AgentStudioTool';
import { IntervalTimerTool } from '../components/tools/IntervalTimerTool';
import { VisualHowToModal } from '../components/VisualHowToModal';

interface TrainViewProps {
  skill: Skill;
  onRecordAttempt: (attempt: Omit<DrillAttempt, 'id' | 'timestamp'>) => void;
  onNavigateToCoach: () => void;
  onSelectDifferentSkill: () => void;
  onAdvanceLevel?: (skillId: string, newLevel: number) => void;
}

export const TrainView: React.FC<TrainViewProps> = ({
  skill,
  onRecordAttempt,
  onNavigateToCoach,
  onSelectDifferentSkill,
  onAdvanceLevel
}) => {
  const [selectedLevelIdx, setSelectedLevelIdx] = useState(0);
  const [selectedDrillIdx, setSelectedDrillIdx] = useState(0);
  const [isVisualModalOpen, setIsVisualModalOpen] = useState(false);

  // Sync selected level when active skill or its current level changes
  useEffect(() => {
    const lvlIdx = Math.max(0, Math.min(skill.levels.length - 1, (skill.currentLevel || 1) - 1));
    setSelectedLevelIdx(lvlIdx);
    setSelectedDrillIdx(0);
  }, [skill.id, skill.currentLevel]);

  // Manual logging form
  const [scoreInput, setScoreInput] = useState('');
  const [durationInput, setDurationInput] = useState('180');
  const [notesInput, setNotesInput] = useState('');
  const [lastVerdict, setLastVerdict] = useState<{ passed: boolean; message: string } | null>(null);

  const currentLevel = skill.levels[selectedLevelIdx] || skill.levels[0];
  const currentDrill = currentLevel?.drills[selectedDrillIdx] || currentLevel?.drills[0];

  const handleToolSolveRecorded = (
    scoreStr: string,
    passed: boolean,
    durationSec = 30,
    metrics?: { recognition?: number; execution?: number; accuracy?: number; speed?: number }
  ) => {
    setScoreInput(scoreStr);
    submitAttempt(passed, scoreStr, durationSec, metrics);
  };

  const submitAttempt = (
    passed: boolean,
    overrideScore?: string,
    overrideDuration?: number,
    customMetrics?: {
      recognition?: number;
      execution?: number;
      accuracy?: number;
      speed?: number;
    }
  ) => {
    const finalScore = overrideScore || scoreInput || (passed ? 'Pass benchmark' : 'Fail benchmark');
    const finalDuration = overrideDuration || parseInt(durationInput) || 60;

    // Use dynamic metrics if provided, or calculate balanced factors
    const recognitionScore = customMetrics?.recognition ?? (passed ? 88 : 55);
    const executionScore = customMetrics?.execution ?? (passed ? 86 : 58);
    const accuracyScore = customMetrics?.accuracy ?? (passed ? 92 : 62);
    const speedScore = customMetrics?.speed ?? (passed ? 85 : 50);

    onRecordAttempt({
      skillId: skill.id,
      drillId: currentDrill.id,
      drillTitle: currentDrill.title,
      passed,
      score: finalScore,
      durationSeconds: finalDuration,
      notes: notesInput,
      recognitionScore,
      executionScore,
      accuracyScore,
      speedScore
    });

    setLastVerdict({
      passed,
      message: passed 
        ? `RESULT: PASS (${finalScore}). Consistency verified. ${skill.currentLevel < skill.totalLevels ? 'Progression unlocked!' : 'Mastery maintained.'}`
        : `RESULT: FAIL (${finalScore}). Target was not met. Repeat drill immediately. Do not move to next level.`
    });

    setScoreInput('');
    setNotesInput('');
  };

  const renderInteractiveTool = (drill: Drill) => {
    if (drill.interactiveTool === 'rubik-timer') {
      return (
        <RubikTimerTool 
          targetSeconds={skill.number === 13 ? 20 : skill.number === 12 ? 30 : 60}
          onRecordSolve={(timeSec, passed, metrics) => {
            handleToolSolveRecorded(`${timeSec.toFixed(2)}s`, passed, Math.round(timeSec), metrics);
          }}
        />
      );
    }
    if (drill.interactiveTool === 'card-memory') {
      return (
        <CardMemoryTool 
          cardCount={skill.number === 21 ? 52 : 10}
          onRecordResult={(accuracy, memoSec, passed, metrics) => {
            handleToolSolveRecorded(`${accuracy}% accuracy (${memoSec}s memo)`, passed, memoSec, metrics);
          }}
        />
      );
    }
    if (drill.interactiveTool === 'speed-reader') {
      return (
        <SpeedReaderTool 
          targetWpm={skill.number === 25 ? 600 : 400}
          onRecordResult={(wpm, compScore, passed, metrics) => {
            handleToolSolveRecorded(`${wpm} WPM (${compScore}% comp)`, passed, 60, metrics);
          }}
        />
      );
    }
    if (drill.interactiveTool === 'agent-studio') {
      return (
        <AgentStudioTool 
          onRecordResult={(passed, metrics) => {
            handleToolSolveRecorded(`${metrics.loops} loops, ${metrics.toolCalls} tools called`, passed, 120, {
              recognition: 90,
              execution: 88,
              accuracy: 94,
              speed: 82
            });
          }}
        />
      );
    }
    // Default to interval timer for physical, calisthenics, CPR, etc.
    return (
      <IntervalTimerTool 
        workSecondsDefault={drill.timeLimitSeconds && drill.timeLimitSeconds < 120 ? drill.timeLimitSeconds : 45}
        restSecondsDefault={15}
        roundsDefault={8}
        onRecordResult={(rounds, totalSec) => {
          handleToolSolveRecorded(`${rounds} rounds completed`, true, totalSec, {
            recognition: 85,
            execution: 92,
            accuracy: 90,
            speed: 86
          });
        }}
      />
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4 font-mono">
      {/* Top Banner Navigation */}
      <div className="flex items-center justify-between border-b border-steel-800 pb-3 text-xs text-steel-400">
        <button
          onClick={onSelectDifferentSkill}
          className="hover:text-forge-amber flex items-center space-x-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>CHANGE ACTIVE SKILL ({skill.title})</span>
        </button>

        <span className="uppercase tracking-widest text-steel-500">
          DOMAIN {skill.domainCode} • {skill.timeCategory}
        </span>
      </div>

      {/* Brutal Active Skill Summary Header */}
      <div className="bg-steel-950 border border-steel-800 p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] text-forge-amber uppercase tracking-widest font-bold">
              ACTIVE TRAINING CONSOLE // TRACK #{skill.number.toString().padStart(2, '0')}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-steel-100 tracking-tight">
              {skill.title}
            </h1>
            <p className="text-xs text-steel-400 max-w-2xl leading-relaxed">
              <strong className="text-steel-200">MASTERY CONTRACT:</strong> {skill.masteryDefinition}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[10px] text-steel-500 uppercase block">CURRENT LEVEL</span>
            <span className="text-2xl font-extrabold text-steel-100">
              LV {skill.currentLevel.toString().padStart(2, '0')} / {skill.totalLevels.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Action Triggers Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-steel-900">
          <button
            onClick={() => setIsVisualModalOpen(true)}
            className="px-5 py-2.5 bg-steel-900 hover:bg-steel-800 text-steel-100 border border-steel-700 text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
          >
            <Eye className="w-4 h-4 text-forge-amber" />
            <span>[ HOW TO // SHOW ME ]</span>
          </button>

          <button
            onClick={onNavigateToCoach}
            className="px-5 py-2.5 bg-steel-900 hover:bg-steel-800 text-steel-100 border border-steel-700 text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
          >
            <MessageSquareCode className="w-4 h-4 text-cyan-400" />
            <span>[ ASK BRUTAL COACH ]</span>
          </button>
        </div>
      </div>

      {/* Level and Drill Hierarchy Navigation */}
      <div className="bg-steel-950 border border-steel-800 p-4 space-y-3">
        {/* Level Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-steel-900 pb-3">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-steel-500 uppercase tracking-widest font-bold">LEVEL PROGRESSION:</span>
            <span className="text-xs text-forge-amber font-bold">
              LV {skill.currentLevel} of {skill.totalLevels} UNLOCKED
            </span>
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto py-0.5">
            {skill.levels.map((lvl, idx) => {
              const isUnlocked = lvl.levelNumber <= skill.currentLevel;
              const isSelected = idx === selectedLevelIdx;
              return (
                <button
                  key={lvl.levelNumber}
                  onClick={() => {
                    setSelectedLevelIdx(idx);
                    setSelectedDrillIdx(0);
                  }}
                  className={`px-3 py-1 text-xs font-mono font-bold border transition-all flex items-center space-x-1 ${
                    isSelected
                      ? 'bg-forge-amber text-black border-forge-amber shadow-[0_0_8px_rgba(245,158,11,0.25)]'
                      : isUnlocked
                        ? 'bg-steel-900 text-steel-200 border-steel-700 hover:border-steel-500'
                        : 'bg-steel-950 text-steel-600 border-steel-900 opacity-60 hover:opacity-90'
                  }`}
                  title={lvl.title}
                >
                  <span>LV {lvl.levelNumber.toString().padStart(2, '0')}</span>
                  {!isUnlocked && <span className="text-[10px] opacity-70">🔒</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Drill Selector Tabs */}
        {currentLevel && currentLevel.drills && currentLevel.drills.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[10px] text-steel-500 uppercase tracking-widest font-bold">DRILLS:</span>
            {currentLevel.drills.map((drill, idx) => {
              const isSelected = idx === selectedDrillIdx;
              return (
                <button
                  key={drill.id}
                  onClick={() => setSelectedDrillIdx(idx)}
                  className={`px-3 py-1 text-xs font-mono border transition-all ${
                    isSelected
                      ? 'bg-steel-200 text-black border-steel-200 font-bold'
                      : 'bg-steel-900 text-steel-300 border-steel-800 hover:text-steel-100 hover:border-steel-700'
                  }`}
                >
                  <span>{drill.title.split('—')[0].trim() || `Drill ${idx + 1}`}</span>
                  <span className="opacity-70 text-[10px] ml-1.5 hidden sm:inline">
                    ({drill.repetitions})
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Benchmark & Unlock Condition */}
        {currentLevel && (
          <div className="text-[11px] text-steel-400 font-mono pt-2 border-t border-steel-900 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span><strong className="text-steel-300">BENCHMARK:</strong> {currentLevel.targetBenchmark}</span>
            <span className="text-steel-500"><strong className="text-steel-400">UNLOCK CONDITION:</strong> {currentLevel.unlockCondition}</span>
          </div>
        )}
      </div>

      {/* Active Drill Specification Card */}
      {currentDrill && (
        <div className="bg-steel-950 border border-steel-800 divide-y divide-steel-900">
          <div className="p-4 bg-steel-900/40 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-steel-500 uppercase tracking-widest block">ACTIVE DRILL SPECIFICATION</span>
              <h3 className="text-base font-bold text-forge-amber">
                {currentDrill.title}
              </h3>
            </div>
            <span className="text-xs text-steel-400">
              Reps: <strong className="text-steel-200">{currentDrill.repetitions}</strong>
            </span>
          </div>

          {/* Drill Core Schema */}
          <div className="p-6 space-y-4 text-xs leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-steel-500 font-bold uppercase block mb-1">OBJECTIVE:</span>
                <p className="text-steel-200">{currentDrill.objective}</p>
              </div>
              <div>
                <span className="text-steel-500 font-bold uppercase block mb-1">WHY THIS DRILL EXISTS:</span>
                <p className="text-steel-200">{currentDrill.whyExists}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-steel-900 pt-3">
              <div>
                <span className="text-steel-500 font-bold uppercase block mb-1">EQUIPMENT & SETUP:</span>
                <p className="text-steel-200">{currentDrill.equipment} • {currentDrill.setup}</p>
              </div>
              <div>
                <span className="text-steel-500 font-bold uppercase block mb-1">MEASURABLE BENCHMARK CRITERIA:</span>
                <p className="text-forge-amber font-bold">{currentDrill.successCriteria}</p>
              </div>
            </div>

            {/* Exact Actions List */}
            <div className="border-t border-steel-900 pt-3 space-y-1.5">
              <span className="text-steel-500 font-bold uppercase block">EXACT ACTIONS (STEP-BY-STEP):</span>
              <ol className="list-decimal list-inside space-y-1 text-steel-300">
                {currentDrill.actions.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Tool Runner */}
      {currentDrill && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-steel-500 uppercase px-1">
            <span>LIVE INTERACTIVE TRAINING APPARATUS</span>
            <span>SPACEBAR / TOUCH CONTROL ACTIVE</span>
          </div>
          {renderInteractiveTool(currentDrill)}
        </div>
      )}

      {/* Result Evaluation & Logging Form */}
      <div className="bg-steel-950 border border-steel-800 p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-steel-900 pb-2">
          <span className="text-xs font-bold text-steel-300 uppercase tracking-wider">
            RECORD DRILL ATTEMPT & RECEIVE COACH VERDICT
          </span>
          <span className="text-xs text-steel-500">EVIDENCE-BASED SCORING</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-[10px] text-steel-400 uppercase block mb-1">SCORE / TIME / METRIC:</label>
            <input
              type="text"
              placeholder="e.g. 19.42s or 17/20 reps"
              value={scoreInput}
              onChange={e => setScoreInput(e.target.value)}
              className="w-full bg-steel-900 border border-steel-700 p-2 text-xs text-steel-100 focus:border-forge-amber outline-none"
            />
          </div>

          <div>
            <label className="text-[10px] text-steel-400 uppercase block mb-1">DURATION (SECONDS):</label>
            <input
              type="number"
              value={durationInput}
              onChange={e => setDurationInput(e.target.value)}
              className="w-full bg-steel-900 border border-steel-700 p-2 text-xs text-steel-100 focus:border-forge-amber outline-none"
            />
          </div>

          <div>
            <label className="text-[10px] text-steel-400 uppercase block mb-1">NOTES / ERROR OBSERVATION:</label>
            <input
              type="text"
              placeholder="e.g. Hesitated on 3rd F2L pair..."
              value={notesInput}
              onChange={e => setNotesInput(e.target.value)}
              className="w-full bg-steel-900 border border-steel-700 p-2 text-xs text-steel-100 focus:border-forge-amber outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 pt-2">
          <button
            onClick={() => submitAttempt(false)}
            className="px-5 py-2.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
          >
            <XCircle className="w-4 h-4 text-rose-400" />
            <span>RECORD AS FAILED</span>
          </button>

          <button
            onClick={() => submitAttempt(true)}
            className="px-6 py-2.5 bg-forge-amber hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>RECORD AS PASSED</span>
          </button>
        </div>

        {/* Coach instant critique verdict box */}
        {lastVerdict && (
          <div className={`p-4 border ${
            lastVerdict.passed ? 'bg-emerald-950/20 border-emerald-600 text-emerald-400' : 'bg-rose-950/20 border-rose-600 text-rose-400'
          } space-y-1`}>
            <span className="text-[10px] uppercase font-bold tracking-widest block">AI COACH DISPATCH</span>
            <p className="text-xs leading-relaxed font-bold">{lastVerdict.message}</p>
          </div>
        )}
      </div>

      {/* Visual How-To Modal */}
      {currentDrill && (
        <VisualHowToModal
          isOpen={isVisualModalOpen}
          onClose={() => setIsVisualModalOpen(false)}
          skillTitle={skill.title}
          drillTitle={currentDrill.title}
          steps={currentDrill.visualSteps}
          onStartDrill={() => setIsVisualModalOpen(false)}
        />
      )}
    </div>
  );
};
