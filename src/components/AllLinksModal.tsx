import React, { useState, useEffect } from 'react';
import { X, Globe, ExternalLink, Copy, Check, Search, ShieldCheck } from 'lucide-react';
import { getFilteredEcosystemLinks, EcosystemLink } from '../data/ecosystemLinks';

interface AllLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AllLinksModal: React.FC<AllLinksModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = getFilteredEcosystemLinks();
  const filteredLinks = links.filter((link: EcosystemLink) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      link.name.toLowerCase().includes(query) ||
      link.url.toLowerCase().includes(query) ||
      link.description.toLowerCase().includes(query) ||
      link.category.toLowerCase().includes(query) ||
      link.type.toLowerCase().includes(query)
    );
  });

  const handleCopy = (link: EcosystemLink) => {
    navigator.clipboard.writeText(link.url);
    setCopiedId(link.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="All Ecosystem Links"
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-steel-900 border border-steel-700 shadow-2xl flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-steel-800 bg-steel-950">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-forge-amber/10 border border-forge-amber/30 flex items-center justify-center">
              <Globe className="w-4 h-4 text-forge-amber" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-bold text-steel-100 font-mono uppercase tracking-wider">
                  ALL LINKS // ECOSYSTEM REGISTRY
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-steel-800 text-steel-300 border border-steel-700 rounded">
                  {links.length} LINKS
                </span>
              </div>
              <p className="text-[11px] text-steel-400 font-mono mt-0.5">
                Centralized access hub to affiliated ecosystem platforms and services
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-steel-400 hover:text-white hover:bg-steel-800 rounded transition-colors"
            title="Close dialog (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Exclusion notification banner & Search bar */}
        <div className="p-4 border-b border-steel-800 bg-steel-950/60 space-y-3">
          {/* Notice banner */}
          <div className="px-3 py-2 bg-steel-900/90 border border-steel-800 rounded flex items-center justify-between text-xs font-mono text-steel-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-forge-amber shrink-0" />
              <span>
                <strong className="text-steel-200">EXCLUSION FILTER ACTIVE:</strong> Current project (<span className="text-forge-amber">SkillForge</span> - <span className="text-steel-300">skillforge-i9b.pages.dev</span>) is excluded.
              </span>
            </div>
            <span className="text-[10px] text-steel-400 uppercase hidden sm:inline">
              8 of 9 links visible
            </span>
          </div>

          {/* Search input */}
          <div className="relative">
            <Search className="w-4 h-4 text-steel-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search links by name, URL, tag, or description..."
              className="w-full bg-steel-950 border border-steel-700 rounded px-9 py-2 text-xs font-mono text-steel-100 placeholder-steel-400 focus:outline-none focus:border-forge-amber transition-colors"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-400 hover:text-steel-200 text-xs font-mono"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredLinks.length === 0 ? (
            <div className="text-center py-12 text-steel-400 font-mono text-xs">
              <p>NO ECOSYSTEM LINKS MATCH "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-forge-amber underline hover:text-forge-amber-light"
              >
                Reset search filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredLinks.map(link => {
                const isCopied = copiedId === link.id;
                return (
                  <div
                    key={link.id}
                    className="p-3.5 bg-steel-950 border border-steel-800 hover:border-forge-amber/40 rounded transition-all group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top row: Name & Badges */}
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-forge-amber group-hover:scale-125 transition-transform"></span>
                          <h4 className="text-sm font-bold text-steel-100 font-mono group-hover:text-forge-amber transition-colors">
                            {link.name}
                          </h4>
                        </div>
                        <div className="flex items-center space-x-1 shrink-0">
                          <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase bg-steel-900 border border-steel-700 text-steel-400 rounded">
                            {link.category}
                          </span>
                          <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase bg-steel-900 border border-forge-amber/30 text-forge-amber rounded">
                            {link.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-steel-400 font-mono mb-3 leading-relaxed">
                        {link.description}
                      </p>
                    </div>

                    {/* Bottom row: URL preview + action buttons */}
                    <div className="pt-2 border-t border-steel-900/80 flex items-center justify-between gap-2">
                      <span
                        className="text-[11px] font-mono text-steel-400 truncate max-w-[180px] sm:max-w-[220px]"
                        title={link.url}
                      >
                        {link.url.replace(/^https?:\/\//, '')}
                      </span>

                      <div className="flex items-center space-x-1.5 shrink-0">
                        <button
                          onClick={() => handleCopy(link)}
                          className={`px-2 py-1 text-[11px] font-mono border rounded flex items-center space-x-1 transition-all ${
                            isCopied
                              ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                              : 'bg-steel-900 hover:bg-steel-800 text-steel-300 border-steel-700 hover:border-steel-600'
                          }`}
                          title="Copy link to clipboard"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="font-bold">COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>COPY</span>
                            </>
                          )}
                        </button>

                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 text-[11px] font-mono font-bold bg-steel-900 hover:bg-forge-amber hover:text-black text-forge-amber border border-forge-amber/40 hover:border-forge-amber rounded flex items-center space-x-1 transition-all"
                          title={`Open ${link.name} in new tab`}
                        >
                          <span>OPEN</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-steel-800 bg-steel-950 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-steel-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All external endpoints operational</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-1.5 bg-steel-900 hover:bg-steel-800 text-steel-300 border border-steel-700 hover:border-steel-600 text-xs font-mono font-bold transition-all"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
