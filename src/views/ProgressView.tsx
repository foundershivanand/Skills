import React, { useState } from 'react';
import { BarChart3, AlertOctagon, CheckCircle2, XCircle, Clock, ShieldCheck, ExternalLink, GitBranch, Share2 } from 'lucide-react';
import { DrillAttempt, Skill } from '../types';
import { analyzeBottlenecks } from '../services/aiEngine';
import { loadSkillProofs, saveSkillProof, SubmittedProof } from '../services/storage';

interface ProgressViewProps {
  attempts: DrillAttempt[];
  activeSkills: Skill[];
  allSkills: Skill[];
  onSelectSkill: (skill: Skill) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  attempts,
  activeSkills,
  allSkills,
  onSelectSkill
}) => {
  const [proofLink, setProofLink] = useState('');
  const [proofNote, setProofNote] = useState('');
  const [submittedProofs, setSubmittedProofs] = useState<SubmittedProof[]>(() => loadSkillProofs());

  const metrics = analyzeBottlenecks(attempts);

  const handleProofSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proofLink.trim()) return;

    let validUrl = proofLink.trim();
    if (!validUrl.startsWith('http://') && !validUrl.startsWith('https://')) {
      validUrl = `https://${validUrl}`;
    }

    const newProof: SubmittedProof = {
      id: Date.now().toString(),
      skillTitle: activeSkills[0]?.title || 'Active Track',
      link: validUrl,
      notes: proofNote.trim(),
      date: new Date().toLocaleDateString()
    };
    const updated = saveSkillProof(newProof);
    setSubmittedProofs(updated);
    setProofLink('');
    setProofNote('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4 font-mono">
      {/* View Header */}
      <div className="border-b border-steel-800 pb-4">
        <span className="text-[10px] text-steel-500 uppercase tracking-widest block mb-1">
          PERFORMANCE LEDGER // DIAGNOSTICS & PROOF
        </span>
        <h1 className="text-3xl font-extrabold text-steel-100 tracking-tight">
          PROGRESS & BOTTLENECK AUDIT
        </h1>
        <p className="text-xs text-steel-400 mt-1">
          Measurable attempts only. The system detects your exact mechanical bottleneck.
        </p>
      </div>

      {/* BOTTLENECK DIAGNOSTIC SUITE */}
      <div className="bg-steel-950 border border-steel-800 p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-steel-900 pb-3">
          <div>
            <span className="text-[10px] text-steel-500 uppercase tracking-widest block">AGENT 6: PERFORMANCE ANALYST</span>
            <h3 className="text-base font-bold text-steel-100">
              FOUR-FACTOR BOTTLENECK MATRIX
            </h3>
          </div>
          <div className="px-3 py-1 bg-amber-950/40 border border-forge-amber text-xs text-forge-amber font-bold">
            PRIMARY BOTTLENECK: {metrics.primaryBottleneck.toUpperCase()}
          </div>
        </div>

        {/* 4 Factor Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-steel-900/60 border border-steel-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-steel-400 uppercase">Recognition</span>
              <span className="text-steel-100 font-bold">{metrics.recognition}%</span>
            </div>
            <div className="w-full bg-steel-950 h-2 border border-steel-800">
              <div 
                className={`h-full ${metrics.primaryBottleneck === 'Recognition' ? 'bg-forge-amber' : 'bg-steel-500'}`}
                style={{ width: `${metrics.recognition}%` }}
              />
            </div>
            <span className="text-[10px] text-steel-500 block">Visual cue reaction time</span>
          </div>

          <div className="p-3 bg-steel-900/60 border border-steel-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-steel-400 uppercase">Execution</span>
              <span className="text-steel-100 font-bold">{metrics.execution}%</span>
            </div>
            <div className="w-full bg-steel-950 h-2 border border-steel-800">
              <div 
                className={`h-full ${metrics.primaryBottleneck === 'Execution' ? 'bg-forge-amber' : 'bg-steel-500'}`}
                style={{ width: `${metrics.execution}%` }}
              />
            </div>
            <span className="text-[10px] text-steel-500 block">Mechanical motor fluidity</span>
          </div>

          <div className="p-3 bg-steel-900/60 border border-steel-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-steel-400 uppercase">Accuracy</span>
              <span className="text-steel-100 font-bold">{metrics.accuracy}%</span>
            </div>
            <div className="w-full bg-steel-950 h-2 border border-steel-800">
              <div 
                className={`h-full ${metrics.primaryBottleneck === 'Accuracy' ? 'bg-forge-amber' : 'bg-steel-500'}`}
                style={{ width: `${metrics.accuracy}%` }}
              />
            </div>
            <span className="text-[10px] text-steel-500 block">Zero-error adherence</span>
          </div>

          <div className="p-3 bg-steel-900/60 border border-steel-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-steel-400 uppercase">Speed</span>
              <span className="text-steel-100 font-bold">{metrics.speed}%</span>
            </div>
            <div className="w-full bg-steel-950 h-2 border border-steel-800">
              <div 
                className={`h-full ${metrics.primaryBottleneck === 'Speed' ? 'bg-forge-amber' : 'bg-steel-500'}`}
                style={{ width: `${metrics.speed}%` }}
              />
            </div>
            <span className="text-[10px] text-steel-500 block">Turnover cadence</span>
          </div>
        </div>

        {/* Prescriptive Fix Box */}
        <div className="p-4 bg-steel-900 border-l-2 border-forge-amber space-y-1 text-xs">
          <span className="text-[10px] text-forge-amber uppercase font-bold tracking-wider block">
            PRESCRIPTIVE DIRECTIVE // IMMEDIATE CORRECTION
          </span>
          <p className="text-steel-200 leading-relaxed font-semibold">
            {metrics.recommendedAction}
          </p>
        </div>
      </div>

      {/* SKILL PROOF LEDGER (SECTION 28) */}
      <div className="bg-steel-950 border border-steel-800 p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-steel-900 pb-3">
          <div>
            <span className="text-[10px] text-steel-500 uppercase tracking-widest block">SECTION 28: VERIFIABLE EVIDENCE</span>
            <h3 className="text-base font-bold text-steel-100 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-forge-amber" />
              <span>SKILL PROOF LEDGER</span>
            </h3>
          </div>
          <span className="text-xs text-steel-400">"Show me. Don't tell me."</span>
        </div>

        <form onSubmit={handleProofSubmit} className="space-y-3">
          <p className="text-xs text-steel-400 leading-relaxed">
            Every serious skill requires objective proof: GPS logs (Strava), video recordings (Unlisted YouTube/Loom), GitHub repositories, or audio exports.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <input
              type="url"
              required
              placeholder="e.g. https://github.com/my-agent or https://strava.com/activities/..."
              value={proofLink}
              onChange={e => setProofLink(e.target.value)}
              className="sm:col-span-2 bg-steel-900 border border-steel-700 p-2 text-xs text-steel-100 focus:border-forge-amber outline-none"
            />
            <input
              type="text"
              placeholder="Verification notes / parameters..."
              value={proofNote}
              onChange={e => setProofNote(e.target.value)}
              className="bg-steel-900 border border-steel-700 p-2 text-xs text-steel-100 focus:border-forge-amber outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-forge-amber hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider shrink-0"
            >
              SUBMIT EVIDENCE PROOF
            </button>
          </div>
        </form>

        {submittedProofs.length > 0 && (
          <div className="divide-y divide-steel-900 border border-steel-800 bg-steel-900/40 text-xs">
            {submittedProofs.map(p => (
              <div key={p.id} className="p-3 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-steel-200 font-bold block">{p.skillTitle}</span>
                    <span className="text-[10px] text-steel-500 font-mono">({p.date})</span>
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-forge-amber hover:underline flex items-center space-x-1 text-[11px]">
                    <span className="truncate max-w-sm">{p.link}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {p.notes && (
                    <p className="text-[11px] text-steel-400 italic">"{p.notes}"</p>
                  )}
                </div>
                <span className="text-[10px] text-emerald-400 font-bold uppercase border border-emerald-800/60 bg-emerald-950/40 px-2 py-0.5">
                  VERIFIED
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RECENT DRILL ATTEMPT LOG */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-steel-500 uppercase px-1">
          <span>RECENT ATTEMPTS AUDIT ({attempts.length} LOGGED)</span>
          <span>CHRONOLOGICAL ORDER</span>
        </div>

        {attempts.length === 0 ? (
          <div className="p-8 bg-steel-950 border border-steel-800 text-center text-xs text-steel-500">
            No drill attempts recorded yet. Go to the TRAIN screen and execute your first drill.
          </div>
        ) : (
          <div className="border border-steel-800 bg-steel-950 divide-y divide-steel-900 text-xs">
            {attempts.slice(0, 15).map((att) => (
              <div key={att.id} className="p-3 flex items-center justify-between hover:bg-steel-900/40">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    {att.passed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-rose-400" />
                    )}
                    <span className="font-bold text-steel-200">{att.drillTitle}</span>
                  </div>
                  <div className="text-[11px] text-steel-400 pl-5.5">
                    Score: <strong className="text-steel-200">{att.score}</strong> • Duration: {att.durationSeconds}s
                    {att.notes && <span className="text-steel-500 ml-2">"{att.notes}"</span>}
                  </div>
                </div>

                <div className="text-right">
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase ${
                    att.passed ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
                  }`}>
                    {att.passed ? 'PASS' : 'FAIL'}
                  </span>
                  <span className="text-[10px] text-steel-500 block mt-1">
                    {new Date(att.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SKILL GRAPH DEPENDENCY PREVIEW (SECTION 19) */}
      <div className="bg-steel-950 border border-steel-800 p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-steel-900 pb-2">
          <span className="text-xs font-bold text-steel-300 uppercase">
            SECTION 19: THE PERSONAL SKILL GRAPH
          </span>
          <GitBranch className="w-4 h-4 text-forge-amber" />
        </div>
        <p className="text-xs text-steel-400 leading-relaxed">
          Skills compound symbiotically: Memorizing Cards builds the visual locus indexing required for Blindfold Rubik's Cube and Blindfold Chess. AI Coding compounds into Autonomous Agents and Micro-SaaS architecture.
        </p>

        <div className="p-4 bg-steel-900/80 border border-steel-800 font-mono text-xs text-steel-300 leading-loose">
          <pre className="overflow-x-auto text-forge-amber">
{`    MEMORY PALACE (24) ──► CARDS (21) ──► BLINDFOLD CUBE (14)
          │                                  │
          ▼                                  ▼
    SPEED READING (25) ──► 100-PAGE BOOK (26) ──► BLINDFOLD CHESS (30)

    AI CODING (50) ──► AUTONOMOUS AGENTS (41) ──► MULTI-AGENT SWARMS (42)
          │                                              │
          ▼                                              ▼
    WEBHOOKS/APIS (47) ──────────────────────────► SAAS MVP (45)`}
          </pre>
        </div>
      </div>
    </div>
  );
};
