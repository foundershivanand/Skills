import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, AlertTriangle, Lightbulb, Play, ArrowUpRight, CheckCircle2, XCircle } from 'lucide-react';
import { VisualStep } from '../types';

interface VisualHowToModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillTitle: string;
  drillTitle: string;
  steps: VisualStep[];
  onStartDrill?: () => void;
}

export const VisualHowToModal: React.FC<VisualHowToModalProps> = ({
  isOpen,
  onClose,
  skillTitle,
  drillTitle,
  steps,
  onStartDrill
}) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  if (!isOpen || !steps || steps.length === 0) return null;

  const currentStep = steps[currentStepIdx] || steps[0];

  const renderDiagram = (step: VisualStep) => {
    switch (step.diagramType) {
      case 'cube':
        return (
          <div className="w-full h-56 bg-steel-950 border border-steel-800 flex items-center justify-center p-4 relative">
            <svg viewBox="0 0 300 200" className="w-full h-full max-h-48">
              {/* Isometric 3D Cube representation */}
              <g transform="translate(150, 100)">
                {/* Top face */}
                <polygon points="0,-60 60,-30 0,0 -60,-30" fill="#facc15" stroke="#1c1f26" strokeWidth="2" />
                <line x1="-20" y1="-40" x2="40" y2="-10" stroke="#1c1f26" strokeWidth="1.5" />
                <line x1="20" y1="-50" x2="-40" y2="-20" stroke="#1c1f26" strokeWidth="1.5" />
                
                {/* Left face (orange) */}
                <polygon points="-60,-30 0,0 0,60 -60,30" fill="#fb923c" stroke="#1c1f26" strokeWidth="2" />
                <line x1="-60" y1="-10" x2="0" y2="20" stroke="#1c1f26" strokeWidth="1.5" />
                <line x1="-60" y1="10" x2="0" y2="40" stroke="#1c1f26" strokeWidth="1.5" />
                <line x1="-40" y1="-20" x2="-40" y2="40" stroke="#1c1f26" strokeWidth="1.5" />
                <line x1="-20" y1="-10" x2="-20" y2="50" stroke="#1c1f26" strokeWidth="1.5" />

                {/* Right face (green) */}
                <polygon points="0,0 60,-30 60,30 0,60" fill="#22c55e" stroke="#1c1f26" strokeWidth="2" />
                <line x1="0" y1="20" x2="60" y2="-10" stroke="#1c1f26" strokeWidth="1.5" />
                <line x1="0" y1="40" x2="60" y2="10" stroke="#1c1f26" strokeWidth="1.5" />
                <line x1="20" y1="-10" x2="20" y2="50" stroke="#1c1f26" strokeWidth="1.5" />
                <line x1="40" y1="-20" x2="40" y2="40" stroke="#1c1f26" strokeWidth="1.5" />

                {/* Turn arrow animation marker */}
                <path d="M 20,-40 Q 50,-60 70,-35" fill="none" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arrowhead)" />
                <text x="75" y="-35" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">R U R'</text>
              </g>
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#f59e0b" />
                </marker>
              </defs>
            </svg>
            <div className="absolute top-2 left-3 px-2 py-0.5 bg-steel-900 border border-steel-700 text-[10px] font-mono text-steel-400">
              LAYER / ROTATION VECTOR
            </div>
          </div>
        );

      case 'posture':
        return (
          <div className="w-full h-56 bg-steel-950 border border-steel-800 flex items-center justify-center p-4 relative">
            <svg viewBox="0 0 320 180" className="w-full h-full max-h-48">
              {/* Floor line */}
              <line x1="20" y1="160" x2="300" y2="160" stroke="#3c4250" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Stick/vector alignment model */}
              <g transform="translate(160, 80)">
                {/* Center axis guide */}
                <line x1="0" y1="-70" x2="0" y2="80" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                
                {/* Head */}
                <circle cx="0" cy="-55" r="12" fill="none" stroke="#e6ebf2" strokeWidth="3" />
                {/* Spine vector */}
                <line x1="0" y1="-43" x2="0" y2="10" stroke="#10b981" strokeWidth="4" />
                {/* Arms */}
                <line x1="0" y1="-30" x2="-25" y2="-5" stroke="#e6ebf2" strokeWidth="3" />
                <line x1="0" y1="-30" x2="25" y2="-5" stroke="#e6ebf2" strokeWidth="3" />
                {/* Legs */}
                <line x1="0" y1="10" x2="-20" y2="78" stroke="#10b981" strokeWidth="4" />
                <line x1="0" y1="10" x2="20" y2="78" stroke="#e6ebf2" strokeWidth="3" />

                {/* Force vector arrows */}
                <path d="M 0,80 L 0,60" stroke="#06b6d4" strokeWidth="3" />
                <text x="15" y="75" fill="#06b6d4" fontSize="10" fontFamily="monospace">180 SPM Cadence</text>
                <text x="10" y="-10" fill="#10b981" fontSize="10" fontFamily="monospace">Neutral Pelvis</text>
              </g>
            </svg>
            <div className="absolute top-2 left-3 px-2 py-0.5 bg-steel-900 border border-steel-700 text-[10px] font-mono text-steel-400">
              BIOMECHANICAL ALIGNMENT VECTOR
            </div>
          </div>
        );

      case 'cards':
        return (
          <div className="w-full h-56 bg-steel-950 border border-steel-800 flex items-center justify-center p-4 relative">
            <svg viewBox="0 0 340 180" className="w-full h-full max-h-48">
              {/* Locus room box */}
              <rect x="20" y="20" width="300" height="140" fill="#111215" stroke="#282c37" strokeWidth="2" />
              
              {/* Locus stations 1, 2, 3 */}
              <circle cx="60" cy="90" r="22" fill="#1c1f26" stroke="#f59e0b" strokeWidth="2" />
              <text x="60" y="94" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">#1 Door</text>
              
              <path d="M 85,90 L 140,90" stroke="#555d70" strokeWidth="2" strokeDasharray="4 4" />

              <circle cx="170" cy="90" r="22" fill="#1c1f26" stroke="#f59e0b" strokeWidth="2" />
              <text x="170" y="94" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">#2 Desk</text>
              
              <path d="M 195,90 L 250,90" stroke="#555d70" strokeWidth="2" strokeDasharray="4 4" />

              <circle cx="280" cy="90" r="22" fill="#1c1f26" stroke="#f59e0b" strokeWidth="2" />
              <text x="280" y="94" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">#3 Lamp</text>

              {/* Card visual anchor dropping into station 1 */}
              <rect x="42" y="30" width="36" height="24" rx="2" fill="#ffffff" stroke="#ef4444" strokeWidth="1.5" />
              <text x="60" y="46" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">A♥</text>
              <line x1="60" y1="56" x2="60" y2="66" stroke="#ef4444" strokeWidth="2" />
            </svg>
            <div className="absolute top-2 left-3 px-2 py-0.5 bg-steel-900 border border-steel-700 text-[10px] font-mono text-steel-400">
              MEMORY PALACE LOCI SEQUENCE
            </div>
          </div>
        );

      case 'path':
        return (
          <div className="w-full h-56 bg-steel-950 border border-steel-800 flex items-center justify-center p-4 relative">
            <svg viewBox="0 0 340 180" className="w-full h-full max-h-48">
              {/* Parabolic throwing arc */}
              <path d="M 60,140 Q 170,20 280,140" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
              <path d="M 280,140 Q 170,40 60,140" fill="none" stroke="#06b6d4" strokeWidth="3" strokeDasharray="6 4" />

              {/* Ball apex */}
              <circle cx="170" cy="30" r="10" fill="#f59e0b" />
              <text x="170" y="16" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="monospace">Eye-level Apex</text>

              {/* Hands */}
              <circle cx="60" cy="140" r="14" fill="#1c1f26" stroke="#e6ebf2" strokeWidth="2" />
              <text x="60" y="165" textAnchor="middle" fill="#a6b0c3" fontSize="10" fontFamily="monospace">Left Hand</text>

              <circle cx="280" cy="140" r="14" fill="#1c1f26" stroke="#e6ebf2" strokeWidth="2" />
              <text x="280" y="165" textAnchor="middle" fill="#a6b0c3" fontSize="10" fontFamily="monospace">Right Hand</text>
            </svg>
            <div className="absolute top-2 left-3 px-2 py-0.5 bg-steel-900 border border-steel-700 text-[10px] font-mono text-steel-400">
              TRAJECTORY & HAND CADENCE
            </div>
          </div>
        );

      case 'flow':
      case 'ui':
      default:
        return (
          <div className="w-full h-56 bg-steel-950 border border-steel-800 flex items-center justify-center p-4 relative">
            <svg viewBox="0 0 340 180" className="w-full h-full max-h-48">
              {/* ReAct / Architecture flowchart */}
              <rect x="20" y="65" width="80" height="50" rx="3" fill="#16181d" stroke="#f59e0b" strokeWidth="2" />
              <text x="60" y="88" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">INPUT</text>
              <text x="60" y="102" textAnchor="middle" fill="#a6b0c3" fontSize="9" fontFamily="monospace">Prompt</text>

              <line x1="102" y1="90" x2="138" y2="90" stroke="#f59e0b" strokeWidth="2" />

              <rect x="140" y="65" width="90" height="50" rx="3" fill="#16181d" stroke="#06b6d4" strokeWidth="2" />
              <text x="185" y="88" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="bold" fontFamily="monospace">DECISION</text>
              <text x="185" y="102" textAnchor="middle" fill="#a6b0c3" fontSize="9" fontFamily="monospace">Tool Call</text>

              <line x1="232" y1="90" x2="268" y2="90" stroke="#06b6d4" strokeWidth="2" />

              <rect x="270" y="65" width="60" height="50" rx="3" fill="#16181d" stroke="#10b981" strokeWidth="2" />
              <text x="300" y="88" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">ACTION</text>
              <text x="300" y="102" textAnchor="middle" fill="#a6b0c3" fontSize="9" fontFamily="monospace">Execute</text>

              {/* Loopback arrow */}
              <path d="M 300,65 L 300,30 L 185,30 L 185,60" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3 3" />
              <text x="240" y="24" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="monospace">Observation Loop</text>
            </svg>
            <div className="absolute top-2 left-3 px-2 py-0.5 bg-steel-900 border border-steel-700 text-[10px] font-mono text-steel-400">
              INTERACTIVE ARCHITECTURE FLOW
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-steel-900 border border-steel-700 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-steel-800 bg-steel-950">
          <div>
            <span className="text-[10px] font-mono text-forge-amber uppercase tracking-widest block">
              VISUAL HOW-TO GUIDE // STEP {currentStep.stepNumber} OF {steps.length}
            </span>
            <h3 className="text-base font-bold text-steel-100 font-mono">
              {skillTitle}
            </h3>
            <span className="text-xs text-steel-400 font-mono">{drillTitle}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-steel-400 hover:text-steel-100 hover:bg-steel-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Visual Canvas Diagram */}
          {renderDiagram(currentStep)}

          {/* Step Details */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-forge-amber text-black font-bold font-mono text-xs flex items-center justify-center">
                {currentStep.stepNumber}
              </span>
              <h4 className="text-lg font-bold text-steel-100 font-mono">
                {currentStep.title}
              </h4>
            </div>

            <p className="text-sm text-steel-200 font-mono leading-relaxed pl-8">
              {currentStep.instruction}
            </p>
          </div>

          {/* Key Tip & Common Mistake cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {currentStep.keyTip && (
              <div className="p-3 bg-emerald-950/20 border border-emerald-700/50 flex items-start space-x-2.5">
                <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">PRO EXECUTION TIP</span>
                  <p className="text-xs text-steel-300 font-mono mt-0.5">{currentStep.keyTip}</p>
                </div>
              </div>
            )}

            {currentStep.commonMistake && (
              <div className="p-3 bg-rose-950/20 border border-rose-700/50 flex items-start space-x-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-rose-400 font-bold uppercase block">COMMON FATAL MISTAKE</span>
                  <p className="text-xs text-steel-300 font-mono mt-0.5">{currentStep.commonMistake}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer with Stepper Controls */}
        <div className="p-4 border-t border-steel-800 bg-steel-950 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentStepIdx(prev => Math.max(0, prev - 1))}
              disabled={currentStepIdx === 0}
              className="p-2 bg-steel-800 disabled:opacity-30 text-steel-300 hover:bg-steel-700 text-xs font-mono"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-steel-400 px-2">
              {currentStepIdx + 1} / {steps.length}
            </span>
            <button
              onClick={() => setCurrentStepIdx(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={currentStepIdx === steps.length - 1}
              className="p-2 bg-steel-800 disabled:opacity-30 text-steel-300 hover:bg-steel-700 text-xs font-mono"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-steel-800 hover:bg-steel-700 text-steel-300 text-xs font-mono"
            >
              CLOSE
            </button>
            {onStartDrill && (
              <button
                onClick={() => {
                  onClose();
                  onStartDrill();
                }}
                className="px-6 py-2 bg-forge-amber hover:bg-amber-400 text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>START DRILL NOW</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
