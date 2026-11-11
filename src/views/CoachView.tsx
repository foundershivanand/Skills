import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, ShieldAlert, Cpu, Sparkles, RefreshCw, Trash2, ArrowRight } from 'lucide-react';
import { AIAgentRole, ChatMessage, Skill, DrillAttempt } from '../types';
import { processAgentMessage } from '../services/aiEngine';
import { loadApiConfig } from '../services/storage';
import { LLMConfig } from '../services/geminiService';

interface CoachViewProps {
  messages: ChatMessage[];
  onSendMessage: (msg: ChatMessage) => void;
  onClearMessages: () => void;
  activeSkill?: Skill;
  recentAttempts: DrillAttempt[];
  apiConfig?: LLMConfig | null;
}

export const CoachView: React.FC<CoachViewProps> = ({
  messages,
  onSendMessage,
  onClearMessages,
  activeSkill,
  recentAttempts,
  apiConfig: propApiConfig
}) => {
  const [inputText, setInputText] = useState('');
  const [selectedRole, setSelectedRole] = useState<AIAgentRole>('brutal-coach');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const apiConfig = propApiConfig !== undefined ? propApiConfig : loadApiConfig();

  useEffect(() => {
    if (typeof messagesEndRef.current?.scrollIntoView === 'function') {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isProcessing]);

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || inputText;
    if (!textToSend.trim() || isProcessing) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: Date.now()
    };
    onSendMessage(userMsg);
    if (!overrideText) setInputText('');

    setIsProcessing(true);
    try {
      const response = await processAgentMessage(selectedRole, textToSend.trim(), {
        activeSkill,
        recentAttempts,
        apiConfig
      });

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        agentRole: selectedRole,
        text: response.text,
        timestamp: Date.now(),
        drillRecommendation: response.recommendedDrill
      };
      onSendMessage(assistantMsg);
    } catch (e: any) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        agentRole: selectedRole,
        text: `COMMUNICATION ERROR: ${e.message || 'Failed to dispatch to agent core.'}`,
        timestamp: Date.now()
      };
      onSendMessage(errorMsg);
    } finally {
      setIsProcessing(false);
    }
  };

  const roles: { id: AIAgentRole; name: string; desc: string }[] = [
    { id: 'brutal-coach', name: 'BRUTAL COACH', desc: 'Strict performance evaluation & discipline' },
    { id: 'performance-analyst', name: 'ANALYST', desc: 'Isolates 4-factor bottlenecks' },
    { id: 'drill-generator', name: 'DRILL GENERATOR', desc: 'Creates targeted micro-drills' },
    { id: 'skill-architect', name: 'SKILL ARCHITECT', desc: 'Deconstructs new pursuit into levels' },
    { id: 'accountability-agent', name: 'ACCOUNTABILITY', desc: 'Tracks excuses and consistency' },
    { id: 'tester', name: 'TESTER', desc: 'Blind official benchmark runner' },
    { id: 'resource-agent', name: 'RESOURCE AGENT', desc: 'Single high-leverage reference' },
    { id: 'skill-discovery', name: 'SKILL DISCOVERY', desc: 'Time-boxed skill catalog finder' },
  ];

  const quickPrompts = [
    "Analyze my last attempts and identify the bottleneck.",
    "Target: 30. My last solve was 31.8s. Prescribe corrective drill.",
    "I skipped training yesterday because I was exhausted.",
    "Give me an official blind benchmark test right now.",
    "Generate a new micro-drill targeting F2L recognition speed."
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-4 py-4 font-mono flex flex-col h-[calc(100vh-140px)] min-h-[500px]">
      {/* Header Bar */}
      <div className="border-b border-steel-800 pb-3 flex items-center justify-between shrink-0">
        <div>
          <span className="text-[10px] text-forge-amber uppercase tracking-widest block font-bold">
            SECTION 7 & 23: TRAINING CONSOLE
          </span>
          <h1 className="text-xl font-extrabold text-steel-100 flex items-center space-x-2">
            <span>BRUTAL AI COACHING CORE</span>
            <span className="text-xs px-2 py-0.5 bg-steel-900 border border-steel-700 text-steel-400 font-normal">
              {apiConfig?.apiKey ? `CONNECTED TO ${apiConfig.provider.toUpperCase()}` : 'INTERNAL BRUTAL ENGINE'}
            </span>
          </h1>
        </div>

        <button
          onClick={onClearMessages}
          className="p-1.5 bg-steel-900 hover:bg-steel-800 text-steel-400 hover:text-rose-400 border border-steel-800 text-xs flex items-center space-x-1"
          title="Clear Conversation History"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">RESET TERMINAL</span>
        </button>
      </div>

      {/* Multi-Agent Role Selector Tabs */}
      <div className="flex flex-wrap gap-1.5 shrink-0 bg-steel-950 p-2 border border-steel-800">
        <span className="text-[10px] text-steel-500 uppercase self-center mr-1">DISPATCH AGENT:</span>
        {roles.map(r => (
          <button
            key={r.id}
            onClick={() => setSelectedRole(r.id)}
            className={`px-2.5 py-1 text-xs border transition-all ${
              selectedRole === r.id
                ? 'bg-forge-amber text-black border-forge-amber font-bold'
                : 'bg-steel-900 text-steel-400 border-steel-800 hover:text-steel-200'
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      {/* Message Stream */}
      <div className="flex-1 bg-steel-950 border border-steel-800 p-4 overflow-y-auto space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3 text-steel-500">
            <Terminal className="w-8 h-8 text-steel-700" />
            <div className="space-y-1 max-w-sm">
              <span className="text-xs font-bold text-steel-300 uppercase block">CONSOLE IDLE</span>
              <p className="text-xs text-steel-500 leading-relaxed">
                The Coach enforces 15 hard rules. No cheerleading, no empty praise. Report your drill score or request a bottleneck diagnosis.
              </p>
            </div>
          </div>
        ) : (
          messages.map(msg => (
            <div
              key={msg.id}
              className={`space-y-1 ${msg.sender === 'user' ? 'pl-8' : 'pr-8'}`}
            >
              <div className="flex items-center space-x-2 text-[10px] text-steel-500">
                <span className="font-bold uppercase tracking-wider text-steel-400">
                  {msg.sender === 'user' ? 'LEARNER // YOU' : `AGENT: ${msg.agentRole?.toUpperCase() || 'COACH'}`}
                </span>
                <span>• {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>

              <div className={`p-4 border text-xs leading-relaxed whitespace-pre-wrap ${
                msg.sender === 'user'
                  ? 'bg-steel-900 border-steel-700 text-steel-100'
                  : 'bg-steel-900/90 border-steel-800 text-steel-200 border-l-2 border-l-forge-amber'
              }`}>
                {msg.text}
              </div>
            </div>
          ))
        )}

        {isProcessing && (
          <div className="pr-8 space-y-1">
            <span className="text-[10px] text-steel-500 font-bold uppercase tracking-wider">
              AGENT // COMPUTING
            </span>
            <div className="p-3 bg-steel-900 border border-steel-800 text-xs text-forge-amber flex items-center space-x-2 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-forge-amber" />
              <span>Analyzing performance history and isolating next drill...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Action Chips */}
      <div className="flex items-center space-x-1.5 overflow-x-auto py-1 shrink-0 text-[11px] text-steel-400">
        <span className="text-steel-600 whitespace-nowrap">QUICK PROMPTS:</span>
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            className="px-2.5 py-1 bg-steel-900 border border-steel-800 hover:border-steel-600 hover:text-steel-100 whitespace-nowrap transition-colors"
          >
            {p.length > 35 ? p.slice(0, 35) + '...' : p}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <div className="flex space-x-2 shrink-0">
        <input
          type="text"
          placeholder="Report attempt result or ask Coach for prescriptive drill..."
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="flex-1 bg-steel-950 border border-steel-800 p-3 text-xs text-steel-100 focus:border-forge-amber outline-none placeholder:text-steel-600 font-mono"
        />

        <button
          onClick={() => handleSend()}
          disabled={!inputText.trim() || isProcessing}
          className="px-6 bg-forge-amber hover:bg-amber-400 disabled:opacity-40 text-black text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
        >
          <span>SEND</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
