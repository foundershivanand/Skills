import React, { useState } from 'react';
import { Search, Plus, Filter, Play, CheckCircle, Clock, Zap, BookOpen, Layers, Sparkles } from 'lucide-react';
import { Skill, DomainId, TimeCategory } from '../types';
import { DOMAINS } from '../data/domains';

interface SkillsViewProps {
  skills: Skill[];
  onSelectSkill: (skill: Skill) => void;
  onAddNewCustomSkill: (skillData: {
    title: string;
    domainId: DomainId;
    timeCategory: TimeCategory;
    targetOutcome: string;
  }) => void;
}

export const SkillsView: React.FC<SkillsViewProps> = ({
  skills,
  onSelectSkill,
  onAddNewCustomSkill
}) => {
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedTimeCat, setSelectedTimeCat] = useState<TimeCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Skill form state
  const [newTitle, setNewTitle] = useState('');
  const [newDomain, setNewDomain] = useState<DomainId>('technology');
  const [newTimeCat, setNewTimeCat] = useState<TimeCategory>('20-hours');
  const [newOutcome, setNewOutcome] = useState('');

  const filteredSkills = skills.filter(skill => {
    if (selectedDomain !== 'all' && skill.domainId !== selectedDomain) return false;
    if (selectedTimeCat !== 'all' && skill.timeCategory !== selectedTimeCat) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = skill.title.toLowerCase().includes(q);
      const matchMastery = skill.masteryDefinition.toLowerCase().includes(q);
      const matchNum = skill.number.toString().includes(q);
      if (!matchTitle && !matchMastery && !matchNum) return false;
    }
    return true;
  });

  const handleCreateSkillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    onAddNewCustomSkill({
      title: newTitle.trim(),
      domainId: newDomain,
      timeCategory: newTimeCat,
      targetOutcome: newOutcome.trim() || `Attain observable competence with quantifiable benchmark test.`
    });

    setNewTitle('');
    setNewOutcome('');
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 py-4">
      {/* View Header */}
      <div className="border-b border-steel-800 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono text-steel-500 uppercase tracking-widest block mb-1">
            CURRICULUM REPOSITORY // 75 MASTER TRACKS
          </span>
          <h1 className="text-3xl font-extrabold text-steel-100 font-mono tracking-tight">
            THE 75 SKILLS
          </h1>
          <p className="text-xs font-mono text-steel-400 mt-1">
            Organized across 8 deliberate training domains. Measurable mastery contracts only.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 bg-forge-amber hover:bg-amber-400 text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 self-start md:self-auto shadow-[0_0_12px_rgba(245,158,11,0.25)]"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>+ NEW SKILL ARCHITECT</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div className="space-y-3 bg-steel-950 p-4 border border-steel-800">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-steel-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills by number (#1 to #75), name, or mastery keywords..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-steel-900 border border-steel-700 pl-9 pr-4 py-2 text-xs font-mono text-steel-100 focus:border-forge-amber outline-none placeholder:text-steel-600"
          />
        </div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`px-3 py-1 text-xs font-mono border transition-all ${
              selectedDomain === 'all'
                ? 'bg-forge-amber text-black border-forge-amber font-bold'
                : 'bg-steel-900 text-steel-400 border-steel-800 hover:text-steel-200'
            }`}
          >
            ALL DOMAINS (75)
          </button>
          {DOMAINS.map(d => (
            <button
              key={d.id}
              onClick={() => setSelectedDomain(d.id)}
              className={`px-2.5 py-1 text-xs font-mono border transition-all ${
                selectedDomain === d.id
                  ? 'bg-forge-amber text-black border-forge-amber font-bold'
                  : 'bg-steel-900 text-steel-400 border-steel-800 hover:text-steel-200'
              }`}
            >
              {d.code}. {d.title.split(' ')[0]} ({d.count})
            </button>
          ))}
        </div>

        {/* Time filters */}
        <div className="flex items-center space-x-2 pt-1 border-t border-steel-900 text-[11px] font-mono text-steel-400">
          <span className="text-steel-500 uppercase">TIME HORIZON:</span>
          {(['all', '1-hour', '1-day', '20-hours', '7-days', 'deep-mastery'] as const).map(timeCat => (
            <button
              key={timeCat}
              onClick={() => setSelectedTimeCat(timeCat)}
              className={`hover:text-steel-100 ${
                selectedTimeCat === timeCat ? 'text-forge-amber font-bold underline underline-offset-4' : 'text-steel-500'
              }`}
            >
              {timeCat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Listing Grid */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-mono text-steel-500 uppercase px-1">
          <span>SHOWING {filteredSkills.length} SKILLS</span>
          <span>SELECT SKILL TO INSPECT CONTRACT & DRILLS</span>
        </div>

        <div className="divide-y divide-steel-800/80 border border-steel-800 bg-steel-950">
          {filteredSkills.map(skill => {
            return (
              <div
                key={skill.id}
                onClick={() => onSelectSkill(skill)}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-steel-900/60 cursor-pointer transition-colors group"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-5 bg-steel-800 group-hover:bg-forge-amber group-hover:text-black text-steel-300 font-mono text-xs font-bold flex items-center justify-center transition-colors">
                      #{skill.number.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-steel-900 border border-steel-800 text-steel-400">
                      DOMAIN {skill.domainCode}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-steel-900 border border-steel-800 text-forge-amber">
                      {skill.timeCategory}
                    </span>
                    {skill.isCustom && (
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-cyan-950/40 border border-cyan-800 text-cyan-400 font-bold">
                        AI CUSTOM
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-steel-100 font-mono group-hover:text-forge-amber transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-xs text-steel-400 font-mono line-clamp-2 leading-relaxed">
                    <strong className="text-steel-300">Mastery Contract:</strong> {skill.masteryDefinition}
                  </p>
                </div>

                <div className="flex items-center space-x-3 shrink-0 self-end sm:self-auto">
                  <span className="text-xs font-mono text-steel-500 group-hover:text-steel-300">
                    {skill.totalLevels} Levels
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSkill(skill);
                    }}
                    className="px-4 py-1.5 bg-steel-900 hover:bg-steel-800 group-hover:bg-forge-amber group-hover:text-black text-steel-200 border border-steel-700 group-hover:border-forge-amber text-xs font-mono font-bold transition-all"
                  >
                    SELECT
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* NEW SKILL MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-steel-900 border border-steel-700 shadow-2xl overflow-hidden font-mono">
            <div className="p-4 border-b border-steel-800 bg-steel-950 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-forge-amber" />
                <h3 className="text-sm font-bold text-steel-100 uppercase">
                  AI SKILL ARCHITECT // CREATE CUSTOM SKILL
                </h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-steel-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateSkillSubmit} className="p-6 space-y-4">
              <div className="p-3 bg-steel-950 border border-steel-800 text-xs text-steel-400 leading-relaxed">
                Input any raw hobby, athletic pursuit, or technical goal. The Skill Architect will deconstruct it into a measurable Mastery Contract, levels, and drills with visual cues.
              </div>

              <div className="space-y-1">
                <label className="text-xs text-steel-300 uppercase block">SKILL NAME / PURSUIT:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Build an autonomous scraping agent in 20 hours"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  className="w-full bg-steel-950 border border-steel-800 p-2 text-xs text-steel-100 focus:border-forge-amber outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-steel-300 uppercase block">DOMAIN:</label>
                  <select
                    value={newDomain}
                    onChange={e => setNewDomain(e.target.value as DomainId)}
                    className="w-full bg-steel-950 border border-steel-800 p-2 text-xs text-steel-100 focus:border-forge-amber outline-none"
                  >
                    {DOMAINS.map(d => (
                      <option key={d.id} value={d.id}>{d.code}. {d.title}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-steel-300 uppercase block">TIME HORIZON:</label>
                  <select
                    value={newTimeCat}
                    onChange={e => setNewTimeCat(e.target.value as TimeCategory)}
                    className="w-full bg-steel-950 border border-steel-800 p-2 text-xs text-steel-100 focus:border-forge-amber outline-none"
                  >
                    <option value="1-hour">1 Hour</option>
                    <option value="1-day">1 Day</option>
                    <option value="20-hours">20 Hours</option>
                    <option value="7-days">7 Days</option>
                    <option value="deep-mastery">Deep Mastery</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-steel-300 uppercase block">MEASURABLE TARGET OUTCOME:</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Run 5 consecutive automated pipelines without manual error..."
                  value={newOutcome}
                  onChange={e => setNewOutcome(e.target.value)}
                  className="w-full bg-steel-950 border border-steel-800 p-2 text-xs text-steel-100 focus:border-forge-amber outline-none"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-steel-800 text-steel-300 text-xs"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-forge-amber hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider"
                >
                  ARCHITECT & GENERATE SKILL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
