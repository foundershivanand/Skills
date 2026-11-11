import React, { useState } from 'react';
import { X, Clock, Zap, Sparkles, BatteryLow, Play, ArrowRight, ShieldCheck } from 'lucide-react';
import { Skill, SessionPlan } from '../types';
import { generateSessionPlan } from '../services/aiEngine';

interface QuickLaunchModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSkills: Skill[];
  allSkills: Skill[];
  onStartSession: (plan: SessionPlan) => void;
}

export const QuickLaunchModal: React.FC<QuickLaunchModalProps> = ({
  isOpen,
  onClose,
  activeSkills,
  allSkills,
  onStartSession
}) => {
  const [selectedMinutes, setSelectedMinutes] = useState<number>(30);
  const [generatedPlan, setGeneratedPlan] = useState<SessionPlan | null>(() => 
    generateSessionPlan(30, activeSkills, allSkills)
  );

  if (!isOpen) return null;

  const handleSelectTime = (mins: number) => {
    setSelectedMinutes(mins);
    const plan = generateSessionPlan(mins, activeSkills, allSkills);
    setGeneratedPlan(plan);
  };

  const handleSurpriseMe = () => {
    setSelectedMinutes(45);
    const plan = generateSessionPlan(999, activeSkills, allSkills);
    setGeneratedPlan(plan);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-steel-900 border border-steel-700 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-steel-800 bg-steel-950">
          <div>
            <span className="text-[10px] font-mono text-forge-amber uppercase tracking-widest block">
              TACTICAL SESSION DISPATCHER
            </span>
            <h3 className="text-base font-bold text-steel-100 font-mono">
              TIME-BOXED DRILL ALLOCATION
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-steel-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Quick Preset Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => handleSelectTime(30)}
              className={`p-3 border text-left font-mono transition-all ${
                selectedMinutes === 30 && generatedPlan?.presetId === '30-min'
                  ? 'bg-forge-amber text-black border-forge-amber font-bold'
                  : 'bg-steel-950 text-steel-300 border-steel-800 hover:border-steel-600'
              }`}
            >
              <Clock className="w-4 h-4 mb-1" />
              <span className="text-xs block font-bold">30 MINUTES</span>
              <span className="text-[10px] opacity-80 block">3 targeted drills</span>
            </button>

            <button
              onClick={() => handleSelectTime(60)}
              className={`p-3 border text-left font-mono transition-all ${
                selectedMinutes === 60
                  ? 'bg-forge-amber text-black border-forge-amber font-bold'
                  : 'bg-steel-950 text-steel-300 border-steel-800 hover:border-steel-600'
              }`}
            >
              <Zap className="w-4 h-4 mb-1" />
              <span className="text-xs block font-bold">1 HOUR</span>
              <span className="text-[10px] opacity-80 block">Deep progression</span>
            </button>

            <button
              onClick={() => handleSelectTime(15)}
              className={`p-3 border text-left font-mono transition-all ${
                selectedMinutes === 15
                  ? 'bg-forge-amber text-black border-forge-amber font-bold'
                  : 'bg-steel-950 text-steel-300 border-steel-800 hover:border-steel-600'
              }`}
            >
              <BatteryLow className="w-4 h-4 mb-1" />
              <span className="text-xs block font-bold">LOW ENERGY</span>
              <span className="text-[10px] opacity-80 block">15m micro-rep</span>
            </button>

            <button
              onClick={handleSurpriseMe}
              className={`p-3 border text-left font-mono transition-all ${
                generatedPlan?.presetId === 'surprise'
                  ? 'bg-forge-amber text-black border-forge-amber font-bold'
                  : 'bg-steel-950 text-steel-300 border-steel-800 hover:border-steel-600'
              }`}
            >
              <Sparkles className="w-4 h-4 mb-1 text-cyan-400" />
              <span className="text-xs block font-bold text-cyan-400">SURPRISE ME</span>
              <span className="text-[10px] opacity-80 block">Skill lab challenge</span>
            </button>
          </div>

          {/* Generated Plan Overview */}
          {generatedPlan && (
            <div className="space-y-4">
              <div className="border border-steel-800 bg-steel-950 p-4">
                <span className="text-[10px] font-mono text-steel-500 uppercase block mb-1">
                  OPTIMAL TIME ALLOCATION // TOTAL: {generatedPlan.totalMinutes} MIN
                </span>
                <h4 className="text-sm font-bold text-forge-amber font-mono">
                  {generatedPlan.headline}
                </h4>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-steel-400 uppercase tracking-widest block">
                  SCHEDULED DRILL SEQUENCE:
                </span>
                {generatedPlan.items.map((item, idx) => (
                  <div key={idx} className="p-3 bg-steel-950 border border-steel-800 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 bg-steel-800 text-steel-300 font-mono text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-steel-100 font-mono">
                          {item.skillTitle}
                        </span>
                      </div>
                      <p className="text-[11px] text-steel-400 font-mono pl-7">
                        {item.drillTitle} • <span className="text-forge-amber font-semibold">{item.targetedBottleneck}</span>
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="px-2 py-1 bg-steel-900 border border-steel-700 text-xs font-bold font-mono text-steel-200">
                        {item.durationMinutes} MIN
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-steel-800 bg-steel-950 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-steel-800 hover:bg-steel-700 text-steel-300 text-xs font-mono"
          >
            CANCEL
          </button>

          {generatedPlan && (
            <button
              onClick={() => {
                onStartSession(generatedPlan);
                onClose();
              }}
              className="px-6 py-2.5 bg-forge-amber hover:bg-amber-400 text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>START SESSION NOW</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
