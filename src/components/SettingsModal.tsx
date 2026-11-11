import React, { useState } from 'react';
import { X, Key, Shield, Zap, Check, AlertCircle } from 'lucide-react';
import { LLMConfig } from '../services/geminiService';
import { saveApiConfig, loadApiConfig } from '../services/storage';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfigSaved: (config: LLMConfig) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  onConfigSaved
}) => {
  const current = loadApiConfig();
  const [provider, setProvider] = useState<'gemini' | 'openai'>(current?.provider || 'gemini');
  const [apiKey, setApiKey] = useState<string>(current?.apiKey || '');
  const [model, setModel] = useState<string>(current?.model || (provider === 'gemini' ? 'gemini-1.5-flash' : 'gpt-4o-mini'));
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    const config: LLMConfig = {
      provider,
      apiKey: apiKey.trim(),
      model
    };
    saveApiConfig(config);
    onConfigSaved(config);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-steel-900 border border-steel-700 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-steel-800 bg-steel-950">
          <div className="flex items-center space-x-2">
            <Key className="w-4 h-4 text-forge-amber" />
            <h3 className="text-sm font-bold text-steel-100 font-mono uppercase tracking-wider">
              AI ENGINE CONFIGURATION
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-steel-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="p-3 bg-steel-950 border border-steel-800 text-xs font-mono text-steel-400 leading-relaxed">
            <strong className="text-steel-200 block mb-1">LOCAL-FIRST MULTI-AGENT ARCHITECTURE</strong>
            SKILLFORGE includes a built-in offline multi-agent coaching engine that requires zero configuration. To connect live Gemini 1.5/2.0 or OpenAI GPT-4o for live custom drill synthesis, input your API key below.
          </div>

          {/* Provider selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-steel-400 uppercase">AI PROVIDER:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setProvider('gemini');
                  setModel('gemini-1.5-flash');
                }}
                className={`py-2 text-xs font-mono border ${
                  provider === 'gemini'
                    ? 'bg-forge-amber text-black border-forge-amber font-bold'
                    : 'bg-steel-950 text-steel-300 border-steel-800 hover:border-steel-600'
                }`}
              >
                Google Gemini API
              </button>
              <button
                onClick={() => {
                  setProvider('openai');
                  setModel('gpt-4o-mini');
                }}
                className={`py-2 text-xs font-mono border ${
                  provider === 'openai'
                    ? 'bg-forge-amber text-black border-forge-amber font-bold'
                    : 'bg-steel-950 text-steel-300 border-steel-800 hover:border-steel-600'
                }`}
              >
                OpenAI API
              </button>
            </div>
          </div>

          {/* API Key */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-steel-400 uppercase">
              {provider === 'gemini' ? 'GEMINI API KEY:' : 'OPENAI API KEY:'}
            </label>
            <input
              type="password"
              placeholder={provider === 'gemini' ? 'AIzaSy...' : 'sk-proj-...'}
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              className="w-full bg-steel-950 border border-steel-800 p-2.5 text-xs font-mono text-steel-100 focus:border-forge-amber outline-none"
            />
            <span className="text-[10px] text-steel-500 font-mono block">
              Stored exclusively origin-local in your browser's private localStorage. Never transmitted to third-party tracking servers.
            </span>
          </div>

          {/* Model name */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-steel-400 uppercase">MODEL ENDPOINT:</label>
            <input
              type="text"
              value={model}
              onChange={e => setModel(e.target.value)}
              className="w-full bg-steel-950 border border-steel-800 p-2.5 text-xs font-mono text-steel-100 focus:border-forge-amber outline-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-steel-800 bg-steel-950 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-steel-800 hover:bg-steel-700 text-steel-300 text-xs font-mono"
          >
            DISMISS
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-2 bg-forge-amber hover:bg-amber-400 text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5"
          >
            {isSaved ? <Check className="w-4 h-4" /> : null}
            <span>{isSaved ? 'SAVED' : 'SAVE CONFIGURATION'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
