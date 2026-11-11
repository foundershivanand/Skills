import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, CheckCircle, XCircle, ArrowRight, Eye, ShieldAlert } from 'lucide-react';

interface CardMemoryToolProps {
  cardCount?: number;
  timeLimitSeconds?: number;
  onRecordResult?: (
    accuracyPercent: number,
    memoTimeSeconds: number,
    passed: boolean,
    metrics?: { recognition: number; execution: number; accuracy: number; speed: number }
  ) => void;
}

const SUITS = ['♠', '♥', '♦', '♣'] as const;
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'] as const;

interface Card {
  id: string;
  suit: typeof SUITS[number];
  rank: typeof RANKS[number];
  isRed: boolean;
}

function generateShuffledDeck(count = 52): Card[] {
  const fullDeck: Card[] = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      fullDeck.push({
        id: `${rank}${suit}`,
        suit,
        rank,
        isRed: suit === '♥' || suit === '♦'
      });
    }
  }

  // Fisher-Yates shuffle
  for (let i = fullDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
  }

  return fullDeck.slice(0, count);
}

export const CardMemoryTool: React.FC<CardMemoryToolProps> = ({
  cardCount = 52,
  timeLimitSeconds = 300,
  onRecordResult
}) => {
  const [deckSize, setDeckSize] = useState<number>(cardCount > 20 ? 52 : cardCount);
  const [phase, setPhase] = useState<'idle' | 'memorizing' | 'recalling' | 'results'>('idle');
  const [deck, setDeck] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [memoElapsed, setMemoElapsed] = useState(0);
  const [userRecall, setUserRecall] = useState<string[]>([]);
  const [selectedSuit, setSelectedSuit] = useState<typeof SUITS[number]>('♠');
  const [selectedRank, setSelectedRank] = useState<typeof RANKS[number]>('A');

  const memoTimerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const getTimeLimitForSize = (size: number): number => {
    if (size <= 5) return 60;
    if (size <= 10) return 120;
    if (size <= 20) return 180;
    return timeLimitSeconds;
  };
  const activeTimeLimit = getTimeLimitForSize(deckSize);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (memoTimerRef.current) clearInterval(memoTimerRef.current);
    };
  }, []);

  const startMemorization = () => {
    const newDeck = generateShuffledDeck(deckSize);
    setDeck(newDeck);
    setCurrentIndex(0);
    setMemoElapsed(0);
    setUserRecall([]);
    setPhase('memorizing');

    startTimeRef.current = performance.now();
    memoTimerRef.current = window.setInterval(() => {
      setMemoElapsed(Math.floor((performance.now() - startTimeRef.current) / 1000));
    }, 1000);
  };

  const nextCard = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishMemorization();
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const finishMemorization = () => {
    if (memoTimerRef.current) clearInterval(memoTimerRef.current);
    setPhase('recalling');
  };

  const submitRecalledCard = () => {
    const cardCode = `${selectedRank}${selectedSuit}`;
    setUserRecall(prev => [...prev, cardCode]);
  };

  const undoLastRecall = () => {
    setUserRecall(prev => prev.slice(0, prev.length - 1));
  };

  const finishRecallTest = () => {
    setPhase('results');
    const correctCount = deck.reduce((acc, card, idx) => {
      return acc + (userRecall[idx] === card.id ? 1 : 0);
    }, 0);
    const accuracy = Math.round((correctCount / deck.length) * 100);
    const passed = accuracy >= 95 && memoElapsed <= activeTimeLimit;
    const speedScore = Math.min(100, Math.round((activeTimeLimit / Math.max(1, memoElapsed)) * 85));

    if (onRecordResult) {
      onRecordResult(accuracy, memoElapsed, passed, {
        recognition: passed ? 90 : 60,
        execution: passed ? 85 : 55,
        accuracy: accuracy,
        speed: speedScore
      });
    }
  };

  const formatSec = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const correctCount = phase === 'results' ? deck.reduce((acc, card, idx) => {
    return acc + (userRecall[idx] === card.id ? 1 : 0);
  }, 0) : 0;
  const accuracyPercent = deck.length ? Math.round((correctCount / deck.length) * 100) : 0;
  const passedContract = accuracyPercent >= 95 && memoElapsed <= activeTimeLimit;

  return (
    <div className="bg-steel-900 border border-steel-700 p-6 flex flex-col space-y-6">
      <div className="flex items-center justify-between border-b border-steel-800 pb-4">
        <div>
          <span className="text-xs font-mono text-steel-400 uppercase tracking-widest">Deck of Cards Memory Trainer</span>
          <h3 className="text-lg font-bold text-steel-100 flex items-center space-x-2">
            <span>TARGET BENCHMARK:</span>
            <span className="text-forge-amber font-mono font-bold">{deckSize} CARDS ≤ {Math.round(activeTimeLimit / 60)} MIN (≥95% ACCURACY)</span>
          </h3>
        </div>
        {phase === 'idle' && (
          <div className="flex items-center space-x-2">
            {[5, 10, 20, 52].map(size => (
              <button
                key={size}
                onClick={() => setDeckSize(size)}
                className={`px-3 py-1 text-xs font-mono border ${
                  deckSize === size 
                    ? 'bg-forge-amber text-black border-forge-amber font-bold' 
                    : 'bg-steel-800 text-steel-300 border-steel-700 hover:border-steel-500'
                }`}
              >
                {size} Cards
              </button>
            ))}
          </div>
        )}
      </div>

      {phase === 'idle' && (
        <div className="text-center py-10 space-y-4">
          <div className="max-w-md mx-auto space-y-2">
            <h4 className="text-xl font-bold text-steel-100 font-mono">STANDARDIZED MEMORY PALACE PROTOCOL</h4>
            <p className="text-xs text-steel-400 font-mono">
              Convert each card into its PAO (Person-Action-Object) mental image. Deposit 1 or 2 images per station in your route.
            </p>
          </div>
          <button
            onClick={startMemorization}
            className="px-6 py-3 bg-forge-amber hover:bg-amber-400 text-black font-mono font-bold uppercase tracking-wider inline-flex items-center space-x-2"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>START MEMORIZATION CLOCK ({deckSize} CARDS)</span>
          </button>
        </div>
      )}

      {phase === 'memorizing' && deck[currentIndex] && (
        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="flex items-center justify-between w-full max-w-sm px-2 text-xs font-mono text-steel-400">
            <span>CARD {currentIndex + 1} / {deck.length}</span>
            <span className="text-forge-amber font-bold">{formatSec(memoElapsed)} / {formatSec(activeTimeLimit)}</span>
          </div>

          {/* Playing card visual */}
          <div className={`w-52 h-72 rounded-lg bg-white shadow-2xl flex flex-col justify-between p-4 border-2 border-steel-300 select-none ${
            deck[currentIndex].isRed ? 'text-red-600' : 'text-slate-900'
          }`}>
            <div className="flex flex-col items-start leading-none font-bold">
              <span className="text-3xl">{deck[currentIndex].rank}</span>
              <span className="text-2xl">{deck[currentIndex].suit}</span>
            </div>
            <div className="text-6xl text-center font-bold">
              {deck[currentIndex].suit}
            </div>
            <div className="flex flex-col items-end leading-none font-bold rotate-180">
              <span className="text-3xl">{deck[currentIndex].rank}</span>
              <span className="text-2xl">{deck[currentIndex].suit}</span>
            </div>
          </div>

          {/* Stepper buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-steel-800 disabled:opacity-40 text-steel-200 border border-steel-700 text-xs font-mono font-bold"
            >
              PREVIOUS
            </button>
            <button
              onClick={nextCard}
              className="px-6 py-2 bg-forge-amber hover:bg-amber-400 text-black text-xs font-mono font-bold flex items-center space-x-2"
            >
              <span>{currentIndex === deck.length - 1 ? 'FINISH MEMO' : 'NEXT CARD'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {phase === 'recalling' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-steel-800 pb-2">
            <div>
              <span className="text-xs text-steel-400 uppercase font-mono block">Recall Test in Progress</span>
              <span className="text-sm font-bold text-steel-100 font-mono">
                Recalled: {userRecall.length} / {deck.length}
              </span>
            </div>
            <span className="text-xs font-mono text-steel-400">Memo Time: {formatSec(memoElapsed)}</span>
          </div>

          {/* Input selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-steel-950 p-4 border border-steel-800">
            <div>
              <label className="text-xs text-steel-400 block mb-2 font-mono">SELECT SUIT</label>
              <div className="grid grid-cols-4 gap-2">
                {SUITS.map(suit => (
                  <button
                    key={suit}
                    onClick={() => setSelectedSuit(suit)}
                    className={`py-2 text-2xl border ${
                      selectedSuit === suit 
                        ? 'bg-forge-amber text-black border-forge-amber font-bold' 
                        : suit === '♥' || suit === '♦' 
                          ? 'text-red-500 bg-steel-900 border-steel-800' 
                          : 'text-steel-200 bg-steel-900 border-steel-800'
                    }`}
                  >
                    {suit}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-steel-400 block mb-2 font-mono">SELECT RANK</label>
              <div className="grid grid-cols-7 gap-1">
                {RANKS.map(rank => (
                  <button
                    key={rank}
                    onClick={() => setSelectedRank(rank)}
                    className={`py-1 text-sm border font-mono ${
                      selectedRank === rank 
                        ? 'bg-forge-amber text-black border-forge-amber font-bold' 
                        : 'bg-steel-900 text-steel-300 border-steel-800'
                    }`}
                  >
                    {rank}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={undoLastRecall}
              disabled={userRecall.length === 0}
              className="px-4 py-2 bg-steel-800 disabled:opacity-30 text-steel-300 border border-steel-700 text-xs font-mono"
            >
              UNDO LAST
            </button>
            <div className="flex space-x-3">
              <button
                onClick={submitRecalledCard}
                disabled={userRecall.length >= deck.length}
                className="px-5 py-2 bg-steel-700 hover:bg-steel-600 text-steel-100 text-xs font-mono font-bold"
              >
                + ADD RECALLED CARD ({selectedRank}{selectedSuit})
              </button>
              <button
                onClick={finishRecallTest}
                className="px-6 py-2 bg-forge-amber hover:bg-amber-400 text-black text-xs font-mono font-bold"
              >
                SUBMIT FOR GRADING
              </button>
            </div>
          </div>

          {/* Recalled list preview */}
          <div className="flex flex-wrap gap-1.5 p-3 bg-steel-950 border border-steel-800 min-h-16">
            {userRecall.map((code, idx) => (
              <span key={idx} className="px-2 py-1 bg-steel-900 border border-steel-700 text-xs font-mono text-steel-200">
                {idx + 1}. {code}
              </span>
            ))}
          </div>
        </div>
      )}

      {phase === 'results' && (
        <div className="space-y-6">
          <div className={`p-4 border ${passedContract ? 'bg-emerald-950/20 border-emerald-600' : 'bg-rose-950/20 border-rose-600'} flex items-center justify-between`}>
            <div>
              <span className="text-xs uppercase font-mono block text-steel-400">BENCHMARK VERDICT</span>
              <h4 className={`text-xl font-bold font-mono ${passedContract ? 'text-emerald-400' : 'text-rose-400'}`}>
                {passedContract ? 'PASS — OFFICIAL MASTERY THRESHOLD MET' : 'FAIL — BELOW MASTERY TARGET'}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-xs text-steel-400 uppercase font-mono block">ACCURACY</span>
              <span className="text-2xl font-bold font-mono text-steel-100">{accuracyPercent}%</span>
              <span className="text-xs text-steel-400 block font-mono">({correctCount}/{deck.length} correct in {formatSec(memoElapsed)})</span>
            </div>
          </div>

          {/* Side by side comparison */}
          <div className="max-h-60 overflow-y-auto border border-steel-800 bg-steel-950 p-3 space-y-1">
            <div className="grid grid-cols-4 text-xs font-mono text-steel-500 uppercase border-b border-steel-800 pb-1">
              <span>INDEX</span>
              <span>ACTUAL CARD</span>
              <span>YOUR RECALL</span>
              <span>STATUS</span>
            </div>
            {deck.map((card, idx) => {
              const recalled = userRecall[idx];
              const match = recalled === card.id;
              return (
                <div key={idx} className={`grid grid-cols-4 text-xs font-mono py-1 border-b border-steel-900 ${match ? 'text-steel-200' : 'text-rose-400 bg-rose-950/10'}`}>
                  <span>#{idx + 1}</span>
                  <span className={card.isRed ? 'text-red-400 font-bold' : 'text-steel-200'}>{card.id}</span>
                  <span>{recalled || '-- (Missing)'}</span>
                  <span className={match ? 'text-emerald-400' : 'text-rose-400 font-bold'}>{match ? 'CORRECT' : 'ERROR'}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => setPhase('idle')}
            className="w-full py-3 bg-steel-800 hover:bg-steel-700 text-steel-100 text-xs font-mono font-bold uppercase tracking-wider"
          >
            START NEW DRILL ATTEMPT
          </button>
        </div>
      )}
    </div>
  );
};
