import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, CheckCircle, XCircle, Award, Zap } from 'lucide-react';

interface RubikTimerToolProps {
  targetSeconds?: number;
  onRecordSolve?: (
    timeSeconds: number,
    passed: boolean,
    metrics?: { recognition: number; execution: number; accuracy: number; speed: number }
  ) => void;
}

const SCRAMBLE_MOVES = ["R", "R'", "R2", "L", "L'", "L2", "U", "U'", "U2", "D", "D'", "D2", "F", "F'", "F2", "B", "B'", "B2"];

function generateScramble(length = 20): string {
  const result: string[] = [];
  let lastAxis = -1;
  const axisMap: Record<string, number> = { R: 0, L: 0, U: 1, D: 1, F: 2, B: 2 };

  for (let i = 0; i < length; i++) {
    let move: string;
    let axis: number;
    do {
      move = SCRAMBLE_MOVES[Math.floor(Math.random() * SCRAMBLE_MOVES.length)];
      axis = axisMap[move[0]];
    } while (axis === lastAxis);

    lastAxis = axis;
    result.push(move);
  }
  return result.join(' ');
}

export const RubikTimerTool: React.FC<RubikTimerToolProps> = ({ 
  targetSeconds = 20, 
  onRecordSolve 
}) => {
  const [scramble, setScramble] = useState(generateScramble());
  const [timerState, setTimerState] = useState<'idle' | 'holding' | 'inspecting' | 'ready' | 'running' | 'finished'>('idle');
  const [elapsedMs, setElapsedMs] = useState(0);
  const [inspectionSeconds, setInspectionSeconds] = useState(15);
  const [history, setHistory] = useState<number[]>([]);
  
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const inspectionTimerRef = useRef<number | null>(null);

  // Cleanup timer loops on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
      if (inspectionTimerRef.current) clearInterval(inspectionTimerRef.current);
    };
  }, []);

  // Keyboard spacebar listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (e.code === 'Space' && (e.target as HTMLElement).tagName !== 'INPUT' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
        e.preventDefault();
        if (timerState === 'running') {
          stopTimer();
        } else if (timerState === 'idle' || timerState === 'finished') {
          startInspection();
        } else if (timerState === 'inspecting') {
          setTimerState('ready');
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space' && (e.target as HTMLElement).tagName !== 'INPUT' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
        e.preventDefault();
        if (timerState === 'ready') {
          startSolve();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [timerState]);

  const startInspection = () => {
    setTimerState('inspecting');
    setInspectionSeconds(15);
    setElapsedMs(0);

    if (inspectionTimerRef.current) clearInterval(inspectionTimerRef.current);
    inspectionTimerRef.current = window.setInterval(() => {
      setInspectionSeconds(prev => {
        if (prev <= 1) {
          clearInterval(inspectionTimerRef.current!);
          // +2 penalty or DNF
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startSolve = () => {
    if (inspectionTimerRef.current) clearInterval(inspectionTimerRef.current);
    setTimerState('running');
    startTimeRef.current = performance.now();

    timerRef.current = window.requestAnimationFrame(updateTimer);
  };

  const updateTimer = () => {
    setElapsedMs(performance.now() - startTimeRef.current);
    timerRef.current = window.requestAnimationFrame(updateTimer);
  };

  const stopTimer = () => {
    if (timerRef.current) cancelAnimationFrame(timerRef.current);
    const finalSeconds = elapsedMs / 1000;
    setTimerState('finished');
    setHistory(prev => [finalSeconds, ...prev].slice(0, 20));

    const passed = finalSeconds <= targetSeconds;
    const speedScore = Math.min(100, Math.round((targetSeconds / Math.max(0.1, finalSeconds)) * 100));

    if (onRecordSolve) {
      onRecordSolve(finalSeconds, passed, {
        recognition: passed ? 90 : 65,
        execution: passed ? 88 : 62,
        accuracy: passed ? 95 : 70,
        speed: speedScore
      });
    }
  };

  const resetAll = () => {
    if (timerRef.current) cancelAnimationFrame(timerRef.current);
    if (inspectionTimerRef.current) clearInterval(inspectionTimerRef.current);
    setTimerState('idle');
    setElapsedMs(0);
    setScramble(generateScramble());
  };

  const calcAo5 = (): string => {
    if (history.length < 5) return '--';
    const last5 = [...history.slice(0, 5)].sort((a, b) => a - b);
    const trimmed = [last5[1], last5[2], last5[3]];
    const avg = trimmed.reduce((a, b) => a + b, 0) / 3;
    return avg.toFixed(2) + 's';
  };

  const formatTime = (ms: number) => {
    const totalSec = ms / 1000;
    const minutes = Math.floor(totalSec / 60);
    const seconds = (totalSec % 60).toFixed(2);
    if (minutes > 0) {
      return `${minutes}:${seconds.padStart(5, '0')}`;
    }
    return seconds;
  };

  const currentSeconds = elapsedMs / 1000;
  const isPassing = timerState === 'finished' ? currentSeconds <= targetSeconds : null;

  return (
    <div className="bg-steel-900 border border-steel-700 p-6 flex flex-col space-y-6">
      <div className="flex items-center justify-between border-b border-steel-800 pb-4">
        <div>
          <span className="text-xs font-mono text-steel-400 uppercase tracking-widest">WCA Official Style Speedcube Timer</span>
          <h3 className="text-lg font-bold text-steel-100 flex items-center space-x-2">
            <span>TARGET BENCHMARK:</span>
            <span className="text-forge-amber font-mono font-bold">≤{targetSeconds.toFixed(1)}s</span>
          </h3>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <span className="text-xs text-steel-400 block font-mono">CURRENT Ao5</span>
            <span className="text-sm font-bold text-steel-200 font-mono">{calcAo5()}</span>
          </div>
          <button 
            onClick={resetAll}
            className="p-2 bg-steel-800 hover:bg-steel-700 text-steel-300 border border-steel-700 text-xs font-mono transition-colors"
            title="Generate new scramble & reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scramble display */}
      <div className="bg-steel-950 p-4 border border-steel-800 font-mono text-center">
        <span className="text-xs text-steel-500 uppercase block mb-1">Official WCA Scramble</span>
        <p className="text-sm md:text-base font-semibold text-steel-200 tracking-wider">
          {scramble}
        </p>
      </div>

      {/* Central timer display */}
      <div 
        onClick={() => {
          if (timerState === 'running') stopTimer();
          else if (timerState === 'idle' || timerState === 'finished') startInspection();
          else if (timerState === 'inspecting') startSolve();
        }}
        className={`relative h-44 flex flex-col items-center justify-center border cursor-pointer select-none transition-all ${
          timerState === 'running' 
            ? 'bg-steel-950 border-forge-amber text-forge-amber' 
            : timerState === 'inspecting'
              ? 'bg-amber-950/20 border-amber-500 text-amber-400'
              : timerState === 'ready'
                ? 'bg-emerald-950/20 border-emerald-500 text-emerald-400'
                : isPassing === true
                  ? 'bg-emerald-950/10 border-emerald-600 text-emerald-400'
                  : isPassing === false
                    ? 'bg-rose-950/10 border-rose-600 text-rose-400'
                    : 'bg-steel-950 border-steel-800 text-steel-100 hover:border-steel-600'
        }`}
      >
        {timerState === 'inspecting' ? (
          <div className="text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 block mb-1">WCA Inspection</span>
            <span className="text-6xl font-extrabold font-mono">{inspectionSeconds}</span>
            <span className="text-xs text-amber-400/80 block mt-2">Hold SPACE or TAP to Ready</span>
          </div>
        ) : timerState === 'ready' ? (
          <div className="text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 block mb-1">Ready</span>
            <span className="text-5xl font-extrabold font-mono">RELEASE TO SOLVE</span>
          </div>
        ) : (
          <div className="text-center">
            <span className="text-6xl md:text-7xl font-extrabold font-mono tracking-tight">
              {formatTime(elapsedMs)}s
            </span>
            <span className="text-xs font-mono text-steel-500 block mt-2">
              {timerState === 'running' ? 'CLICK OR PRESS SPACE TO STOP' : 'CLICK OR PRESS SPACE FOR 15s INSPECTION'}
            </span>
          </div>
        )}

        {timerState === 'finished' && (
          <div className="absolute top-3 right-3 flex items-center space-x-1.5 px-3 py-1 bg-steel-900 border border-steel-700 text-xs font-mono font-bold">
            {isPassing ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">PASSED BENCHMARK</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-400" />
                <span className="text-rose-400">FAILED BENCHMARK (+{(currentSeconds - targetSeconds).toFixed(2)}s)</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* History and Ao5 summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        <div className="bg-steel-950 p-3 border border-steel-800 text-center">
          <span className="text-xs text-steel-500 uppercase font-mono block">BEST SOLVE</span>
          <span className="text-base font-bold text-steel-100 font-mono">
            {history.length ? `${Math.min(...history).toFixed(2)}s` : '--'}
          </span>
        </div>
        <div className="bg-steel-950 p-3 border border-steel-800 text-center">
          <span className="text-xs text-steel-500 uppercase font-mono block">Ao5</span>
          <span className="text-base font-bold text-forge-amber font-mono">{calcAo5()}</span>
        </div>
        <div className="bg-steel-950 p-3 border border-steel-800 text-center">
          <span className="text-xs text-steel-500 uppercase font-mono block">TOTAL SOLVES</span>
          <span className="text-base font-bold text-steel-100 font-mono">{history.length}</span>
        </div>
        <div className="bg-steel-950 p-3 border border-steel-800 text-center">
          <span className="text-xs text-steel-500 uppercase font-mono block">BENCHMARK PASS RATE</span>
          <span className="text-base font-bold text-steel-100 font-mono">
            {history.length 
              ? `${Math.round((history.filter(t => t <= targetSeconds).length / history.length) * 100)}%` 
              : '--'}
          </span>
        </div>
      </div>
    </div>
  );
};
