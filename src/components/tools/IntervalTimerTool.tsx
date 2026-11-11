import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

interface IntervalTimerToolProps {
  workSecondsDefault?: number;
  restSecondsDefault?: number;
  roundsDefault?: number;
  onRecordResult?: (completedRounds: number, totalSeconds: number) => void;
}

export const IntervalTimerTool: React.FC<IntervalTimerToolProps> = ({
  workSecondsDefault = 45,
  restSecondsDefault = 15,
  roundsDefault = 8,
  onRecordResult
}) => {
  const [workSec, setWorkSec] = useState(workSecondsDefault);
  const [restSec, setRestSec] = useState(restSecondsDefault);
  const [totalRounds, setTotalRounds] = useState(roundsDefault);
  const [currentRound, setCurrentRound] = useState(1);
  const [phase, setPhase] = useState<'work' | 'rest' | 'complete'>('work');
  const [secondsRemaining, setSecondsRemaining] = useState(workSecondsDefault);
  const [isActive, setIsActive] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const timerRef = useRef<number | null>(null);

  // Simple web audio beep
  const playBeep = (freq = 880, duration = 0.15) => {
    if (!audioEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext may be blocked before interaction
    }
  };

  useEffect(() => {
    if (isActive) {
      timerRef.current = window.setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            // Switch phase or round
            if (phase === 'work') {
              if (currentRound >= totalRounds && restSec === 0) {
                setPhase('complete');
                setIsActive(false);
                playBeep(1200, 0.4);
                if (onRecordResult) {
                  onRecordResult(totalRounds, totalRounds * workSec);
                }
                return 0;
              }
              setPhase('rest');
              playBeep(440, 0.2);
              return restSec;
            } else {
              if (currentRound >= totalRounds) {
                setPhase('complete');
                setIsActive(false);
                playBeep(1200, 0.4);
                if (onRecordResult) {
                  onRecordResult(totalRounds, totalRounds * (workSec + restSec));
                }
                return 0;
              }
              setCurrentRound(r => r + 1);
              setPhase('work');
              playBeep(880, 0.2);
              return workSec;
            }
          }
          if (prev <= 4) {
            playBeep(660, 0.08); // countdown tick
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, phase, currentRound, workSec, restSec, totalRounds, audioEnabled]);

  const toggleTimer = () => {
    setIsActive(prev => !prev);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsActive(false);
    setPhase('work');
    setCurrentRound(1);
    setSecondsRemaining(workSec);
  };

  return (
    <div className="bg-steel-900 border border-steel-700 p-6 flex flex-col space-y-6">
      <div className="flex items-center justify-between border-b border-steel-800 pb-4">
        <div>
          <span className="text-xs font-mono text-steel-400 uppercase tracking-widest">High-Intensity Deliberate Interval Timer</span>
          <h3 className="text-lg font-bold text-steel-100 flex items-center space-x-2">
            <span>INTERVALS:</span>
            <span className="text-forge-amber font-mono font-bold">{totalRounds} ROUNDS × {workSec}s WORK / {restSec}s REST</span>
          </h3>
        </div>
        <button
          onClick={() => setAudioEnabled(prev => !prev)}
          className="p-2 bg-steel-800 text-steel-300 border border-steel-700 text-xs font-mono"
          title={audioEnabled ? 'Mute Beeps' : 'Enable Beeps'}
        >
          {audioEnabled ? <Volume2 className="w-4 h-4 text-forge-amber" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Main big display */}
      <div className={`h-44 border flex flex-col items-center justify-center transition-all ${
        phase === 'work' 
          ? 'bg-amber-950/20 border-forge-amber text-forge-amber' 
          : phase === 'rest'
            ? 'bg-cyan-950/20 border-forge-cyan text-cyan-400'
            : 'bg-emerald-950/20 border-emerald-600 text-emerald-400'
      }`}>
        <div className="text-xs font-mono uppercase tracking-widest block mb-1">
          {phase === 'work' ? 'WORK HARD — MAXIMUM FOCUS' : phase === 'rest' ? 'REST & RECOVER' : 'SESSION COMPLETE'}
        </div>
        <div className="text-7xl font-extrabold font-mono tracking-tight">
          {secondsRemaining}s
        </div>
        <div className="text-xs font-mono text-steel-400 block mt-2">
          ROUND {currentRound} OF {totalRounds}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={toggleTimer}
          className={`px-8 py-3 font-mono font-bold text-xs uppercase tracking-wider flex items-center space-x-2 ${
            isActive ? 'bg-steel-700 text-white' : 'bg-forge-amber hover:bg-amber-400 text-black'
          }`}
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-black" />}
          <span>{isActive ? 'PAUSE INTERVAL' : 'START INTERVAL'}</span>
        </button>

        <button
          onClick={resetTimer}
          className="px-4 py-3 bg-steel-800 hover:bg-steel-700 text-steel-300 border border-steel-700 text-xs font-mono"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
