import React, { useState } from 'react';
import { Play, CheckCircle, XCircle, Terminal, Cpu, GitBranch, ArrowRight } from 'lucide-react';

interface AgentStudioToolProps {
  onRecordResult?: (passed: boolean, metrics: { loops: number; toolCalls: number }) => void;
}

interface StepLog {
  step: number;
  type: 'thought' | 'action' | 'observation' | 'critique' | 'final';
  content: string;
}

export const AgentStudioTool: React.FC<AgentStudioToolProps> = ({ onRecordResult }) => {
  const [goal, setGoal] = useState("Research 3 competing vector databases and produce pricing benchmark.");
  const [activePreset, setActivePreset] = useState<'react' | 'multi-agent'>('react');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<StepLog[]>([]);
  const [isDone, setIsDone] = useState(false);
  const [critiquePassed, setCritiquePassed] = useState<boolean | null>(null);

  const runSimulation = () => {
    setIsRunning(true);
    setIsDone(false);
    setLogs([]);
    setCritiquePassed(null);

    const simulationSteps: StepLog[] = activePreset === 'react' ? [
      { step: 1, type: 'thought', content: "Thought 1: I need to discover the top 3 vector database providers and their current pricing tiers. I should query the web for Pinecone, Qdrant, and Weaviate." },
      { step: 1, type: 'action', content: "Action 1: search_web(query: 'Pinecone vs Qdrant vs Weaviate pricing comparison 2026')" },
      { step: 1, type: 'observation', content: "Observation 1: Retrieved: Pinecone serverless starts at $0.04/pod-hour; Qdrant cloud free tier 1GB, cluster $0.038/hour; Weaviate Cloud $25/mo standard cluster." },
      { step: 2, type: 'thought', content: "Thought 2: The retrieved figures provide structured data. Now I need to calculate cost for 1,000,000 1536-dim vectors across all three." },
      { step: 2, type: 'action', content: "Action 2: run_calculator(formula: '1M_vectors_storage_cost_comparison')" },
      { step: 2, type: 'observation', content: "Observation 2: Pinecone: ~$12.80/mo; Qdrant Cloud: ~$9.50/mo; Weaviate: ~$14.20/mo." },
      { step: 3, type: 'thought', content: "Thought 3: I have verified pricing and calculated monthly projections. I can formulate the final structured report." },
      { step: 3, type: 'final', content: "Final Answer: Benchmark report synthesized successfully with JSON schema: { pinecone: 12.80, qdrant: 9.50, weaviate: 14.20, recommendation: 'Qdrant for self-hosted/cost; Pinecone for serverless ease' }." }
    ] : [
      { step: 1, type: 'thought', content: "[Agent 1: Researcher] Searching sources and verifying claims regarding architecture patterns." },
      { step: 1, type: 'observation', content: "[Researcher Output] Extracted 4 primary patterns: Router, Subagent Hand-off, Evaluator-Optimizer, and Autonomous Swarm." },
      { step: 2, type: 'thought', content: "[Agent 2: Writer] Generating production blueprint markdown incorporating state schemas." },
      { step: 2, type: 'action', content: "[Draft Generated] 450-line architecture spec created with typed interfaces and error boundaries." },
      { step: 3, type: 'critique', content: "[Agent 3: Critic] Evaluating against strict criteria: Type safety = 10/10, Edge case recovery = 9/10, Clarity = 9/10. Score: 9.3/10 (THRESHOLD >= 8.5)." },
      { step: 3, type: 'final', content: "[Multi-Agent Gate PASSED] Output approved and committed to repository automatically." }
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < simulationSteps.length) {
        setLogs(prev => [...prev, simulationSteps[current]]);
        current++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setIsDone(true);
        setCritiquePassed(true);
        if (onRecordResult) {
          onRecordResult(true, { loops: activePreset === 'react' ? 3 : 2, toolCalls: 2 });
        }
      }
    }, 700);
  };

  return (
    <div className="bg-steel-900 border border-steel-700 p-6 flex flex-col space-y-6">
      <div className="flex items-center justify-between border-b border-steel-800 pb-4">
        <div>
          <span className="text-xs font-mono text-steel-400 uppercase tracking-widest">Autonomous Agent Architecture Drill</span>
          <h3 className="text-lg font-bold text-steel-100 flex items-center space-x-2">
            <span>HARNESS:</span>
            <span className="text-forge-amber font-mono font-bold">ReAct Tool Calling & Multi-Agent Gate</span>
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActivePreset('react')}
            className={`px-3 py-1 text-xs font-mono border ${activePreset === 'react' ? 'bg-forge-amber text-black border-forge-amber font-bold' : 'bg-steel-800 text-steel-300 border-steel-700'}`}
          >
            ReAct Loop
          </button>
          <button
            onClick={() => setActivePreset('multi-agent')}
            className={`px-3 py-1 text-xs font-mono border ${activePreset === 'multi-agent' ? 'bg-forge-amber text-black border-forge-amber font-bold' : 'bg-steel-800 text-steel-300 border-steel-700'}`}
          >
            Multi-Agent Orchestration
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-steel-400 font-mono block">AGENT MISSION GOAL:</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={goal}
            onChange={e => setGoal(e.target.value)}
            className="flex-1 bg-steel-950 border border-steel-800 p-2.5 text-xs font-mono text-steel-100 focus:border-forge-amber outline-none"
          />
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="px-6 py-2.5 bg-forge-amber hover:bg-amber-400 disabled:opacity-40 text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>{isRunning ? 'EXECUTING LOOP...' : 'RUN AGENT TEST'}</span>
          </button>
        </div>
      </div>

      {/* Terminal execution log */}
      <div className="bg-steel-950 border border-steel-800 p-4 font-mono text-xs space-y-3 min-h-64 max-h-80 overflow-y-auto">
        <div className="flex items-center space-x-2 text-steel-500 border-b border-steel-900 pb-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>RUNTIME DECISION LOG // AGENT CORE</span>
        </div>

        {logs.length === 0 && !isRunning && (
          <div className="text-steel-600 text-center py-12">
            Click "RUN AGENT TEST" to step through the decision cycle and evaluate tool assertions.
          </div>
        )}

        {logs.map((log, idx) => (
          <div key={idx} className="space-y-1">
            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase border ${
              log.type === 'thought' ? 'bg-amber-950/40 border-amber-600/40 text-amber-400' :
              log.type === 'action' ? 'bg-cyan-950/40 border-cyan-600/40 text-cyan-400' :
              log.type === 'observation' ? 'bg-emerald-950/40 border-emerald-600/40 text-emerald-400' :
              log.type === 'critique' ? 'bg-purple-950/40 border-purple-600/40 text-purple-400' :
              'bg-blue-950/40 border-blue-600/40 text-blue-300'
            }`}>
              {log.type}
            </span>
            <p className="text-steel-200 pl-2 border-l border-steel-800 leading-relaxed">
              {log.content}
            </p>
          </div>
        ))}

        {isDone && (
          <div className="mt-4 p-3 bg-emerald-950/20 border border-emerald-600/60 flex items-center justify-between text-emerald-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span className="font-bold">AGENT BENCHMARK VERIFIED: Autonomous Execution Completed with Zero Halts</span>
            </div>
            <span className="text-[11px] text-emerald-500 font-bold">2 Tools Called // 0 Loops Bleed</span>
          </div>
        )}
      </div>
    </div>
  );
};
