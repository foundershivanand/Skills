import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

interface SpeedReaderToolProps {
  targetWpm?: number;
  onRecordResult?: (
    wpm: number,
    comprehensionPercent: number,
    passed: boolean,
    metrics?: { recognition: number; execution: number; accuracy: number; speed: number }
  ) => void;
}

const SAMPLE_TEXT = `Deliberate practice is a highly structured activity designed specifically to improve performance. The core principle requires an individual to work on tasks that are just beyond their current capability level. Unlike ordinary repetitive practice, deliberate practice demands continuous monitoring, instant feedback, and intentional correction of errors. In any domain—whether speedcubing, memory sports, or writing production code—true mastery is not achieved by mindlessly consuming information or repeating comfortable routines. It is achieved by isolating the specific mechanical or cognitive bottleneck, applying maximum focus to targeted micro-drills, and measuring observable performance against a rigid standard. When you train with clear constraints, failure is not an emotional setback; it is the primary diagnostic signal that guides your next iteration.`;

const QUIZ_QUESTIONS = [
  {
    question: "What is deliberate practice designed specifically to do?",
    options: ["Provide comfortable entertainment", "Improve performance beyond current capabilities", "Memorize arbitrary trivia", "Reduce workout intensity"],
    answerIndex: 1
  },
  {
    question: "What does deliberate practice require instead of ordinary repetition?",
    options: ["Watching 42-minute video lectures", "Continuous monitoring, instant feedback, and error correction", "Taking long breaks every 5 minutes", "Repeating comfortable routines"],
    answerIndex: 1
  },
  {
    question: "In this philosophy, what is failure considered to be?",
    options: ["A reason to quit the skill", "An emotional humiliation", "The primary diagnostic signal that guides your next iteration", "A technical malfunction"],
    answerIndex: 2
  }
];

export const SpeedReaderTool: React.FC<SpeedReaderToolProps> = ({
  targetWpm = 600,
  onRecordResult
}) => {
  const [wpm, setWpm] = useState<number>(targetWpm);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [words, setWords] = useState<string[]>(SAMPLE_TEXT.trim().split(/\s+/));
  const [mode, setMode] = useState<'reading' | 'quiz' | 'results'>('reading');
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const intervalMs = (60 / wpm) * 1000;
      intervalRef.current = window.setInterval(() => {
        setWordIndex(prev => {
          if (prev >= words.length - 1) {
            clearInterval(intervalRef.current!);
            setIsPlaying(false);
            setMode('quiz');
            return prev;
          }
          return prev + 1;
        });
      }, intervalMs);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, wpm, words]);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const resetReader = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsPlaying(false);
    setWordIndex(0);
    setMode('reading');
    setQuizAnswers([]);
  };

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    setQuizAnswers(prev => {
      const updated = [...prev];
      updated[qIndex] = optionIndex;
      return updated;
    });
  };

  const submitQuiz = () => {
    setMode('results');
    const correctCount = QUIZ_QUESTIONS.reduce((acc, q, idx) => {
      return acc + (quizAnswers[idx] === q.answerIndex ? 1 : 0);
    }, 0);
    const scorePercent = Math.round((correctCount / QUIZ_QUESTIONS.length) * 100);
    const passed = wpm >= targetWpm && scorePercent >= 80;
    const speedScore = Math.min(100, Math.round((wpm / targetWpm) * 90));

    if (onRecordResult) {
      onRecordResult(wpm, scorePercent, passed, {
        recognition: passed ? 92 : 62,
        execution: passed ? 88 : 65,
        accuracy: scorePercent,
        speed: speedScore
      });
    }
  };

  const correctCount = mode === 'results' ? QUIZ_QUESTIONS.reduce((acc, q, idx) => {
    return acc + (quizAnswers[idx] === q.answerIndex ? 1 : 0);
  }, 0) : 0;
  const scorePercent = Math.round((correctCount / QUIZ_QUESTIONS.length) * 100);
  const passedContract = wpm >= targetWpm && scorePercent >= 80;

  return (
    <div className="bg-steel-900 border border-steel-700 p-6 flex flex-col space-y-6">
      <div className="flex items-center justify-between border-b border-steel-800 pb-4">
        <div>
          <span className="text-xs font-mono text-steel-400 uppercase tracking-widest">RSVP Speed Reading Engine</span>
          <h3 className="text-lg font-bold text-steel-100 flex items-center space-x-2">
            <span>BENCHMARK TARGET:</span>
            <span className="text-forge-amber font-mono font-bold">≥{targetWpm} WPM (≥80% COMPREHENSION)</span>
          </h3>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono text-steel-400">SPEED:</span>
          <span className="text-base font-bold font-mono text-forge-amber">{wpm} WPM</span>
        </div>
      </div>

      {mode === 'reading' && (
        <div className="space-y-6">
          {/* Central RSVP flasher box */}
          <div className="h-44 bg-steel-950 border border-steel-800 flex items-center justify-center relative overflow-hidden">
            {/* Focal guide line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-steel-800 -translate-x-1/2 pointer-events-none" />
            <div className="text-center z-10">
              <span className="text-4xl md:text-5xl font-extrabold font-mono text-steel-100 tracking-wide select-none">
                {words[wordIndex] || 'PRESS PLAY TO START'}
              </span>
            </div>
            <div className="absolute bottom-2 right-4 text-xs font-mono text-steel-500">
              {wordIndex + 1} / {words.length} words
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-steel-950 p-4 border border-steel-800">
            <div className="flex items-center space-x-3">
              <button
                onClick={togglePlay}
                className="px-6 py-2.5 bg-forge-amber hover:bg-amber-400 text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black" />}
                <span>{isPlaying ? 'PAUSE' : 'START RSVP FLASH'}</span>
              </button>
              <button
                onClick={resetReader}
                className="p-2.5 bg-steel-800 hover:bg-steel-700 text-steel-300 border border-steel-700 text-xs font-mono"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span className="text-xs font-mono text-steel-400 whitespace-nowrap">Adjust WPM:</span>
              <input
                type="range"
                min="200"
                max="1000"
                step="25"
                value={wpm}
                onChange={e => setWpm(Number(e.target.value))}
                className="w-full md:w-48 accent-forge-amber"
              />
            </div>
          </div>
        </div>
      )}

      {mode === 'quiz' && (
        <div className="space-y-6">
          <div className="border-b border-steel-800 pb-2">
            <h4 className="text-base font-bold text-steel-100 font-mono">COMPREHENSION VERIFICATION QUIZ</h4>
            <span className="text-xs text-steel-400 font-mono">Reading speed means nothing without retention. Answer all 3 questions.</span>
          </div>

          <div className="space-y-4">
            {QUIZ_QUESTIONS.map((q, qIdx) => (
              <div key={qIdx} className="bg-steel-950 p-4 border border-steel-800 space-y-2">
                <p className="text-xs font-mono font-bold text-steel-200">
                  {qIdx + 1}. {q.question}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(qIdx, optIdx)}
                      className={`p-2 text-left text-xs font-mono border transition-colors ${
                        quizAnswers[qIdx] === optIdx
                          ? 'bg-forge-amber text-black border-forge-amber font-bold'
                          : 'bg-steel-900 text-steel-300 border-steel-800 hover:border-steel-600'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}. {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={submitQuiz}
            disabled={quizAnswers.length < QUIZ_QUESTIONS.length}
            className="w-full py-3 bg-forge-amber hover:bg-amber-400 disabled:opacity-40 text-black text-xs font-mono font-bold uppercase tracking-wider"
          >
            SUBMIT FOR BENCHMARK EVALUATION
          </button>
        </div>
      )}

      {mode === 'results' && (
        <div className="space-y-6">
          <div className={`p-4 border ${passedContract ? 'bg-emerald-950/20 border-emerald-600' : 'bg-rose-950/20 border-rose-600'} flex items-center justify-between`}>
            <div>
              <span className="text-xs uppercase font-mono block text-steel-400">BENCHMARK VERDICT</span>
              <h4 className={`text-xl font-bold font-mono ${passedContract ? 'text-emerald-400' : 'text-rose-400'}`}>
                {passedContract ? 'PASS — SPEED & RETENTION CONFIRMED' : 'FAIL — COMPREHENSION BELOW TARGET'}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-xs text-steel-400 uppercase font-mono block">SCORE</span>
              <span className="text-2xl font-bold font-mono text-steel-100">{scorePercent}%</span>
              <span className="text-xs text-steel-400 block font-mono">({correctCount}/{QUIZ_QUESTIONS.length} at {wpm} WPM)</span>
            </div>
          </div>

          <button
            onClick={resetReader}
            className="w-full py-3 bg-steel-800 hover:bg-steel-700 text-steel-100 text-xs font-mono font-bold uppercase tracking-wider"
          >
            START NEW READING RUN
          </button>
        </div>
      )}
    </div>
  );
};
