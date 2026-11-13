import React from 'react';
import { Target, Zap, Clock, Compass, Settings, Flame, ShieldAlert, Globe } from 'lucide-react';
import { StreakData } from '../services/storage';

export type ScreenId = 'today' | 'skills' | 'train' | 'progress' | 'coach';

interface NavigationProps {
  currentScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  streakData: StreakData;
  onOpenQuickLaunch: () => void;
  onOpenSettings: () => void;
  onOpenAllLinks: () => void;
  activeSkillTitle?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  onSelectScreen,
  streakData,
  onOpenQuickLaunch,
  onOpenSettings,
  onOpenAllLinks,
  activeSkillTitle
}) => {
  const screens: { id: ScreenId; label: string; number: string }[] = [
    { id: 'today', label: 'TODAY', number: '01' },
    { id: 'skills', label: 'SKILLS', number: '02' },
    { id: 'train', label: 'TRAIN', number: '03' },
    { id: 'progress', label: 'PROGRESS', number: '04' },
    { id: 'coach', label: 'COACH', number: '05' },
  ];

  return (
    <header className="border-b border-steel-800 bg-steel-950 sticky top-0 z-40 select-none">
      {/* Top micro bar */}
      <div className="border-b border-steel-900 px-4 py-1.5 flex items-center justify-between text-[11px] font-mono text-steel-400">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-forge-amber animate-pulse-fast"></span>
            <span className="font-bold text-steel-200">CORE KINEMATICS ENGINE // V2.0</span>
          </span>
          {activeSkillTitle && (
            <span className="hidden md:inline-block text-steel-500">
              ACTIVE FOCUS: <span className="text-forge-amber font-semibold">{activeSkillTitle}</span>
            </span>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-steel-300">
            <Flame className="w-3.5 h-3.5 text-forge-amber" />
            <span className="font-bold">{streakData.currentStreak} DAY STREAK</span>
          </div>

          <button
            onClick={onOpenAllLinks}
            className="flex items-center space-x-1 text-forge-amber hover:text-steel-100 transition-colors"
            title="View All Ecosystem Links"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="font-bold">ALL LINKS</span>
          </button>

          <button
            onClick={onOpenSettings}
            className="flex items-center space-x-1 hover:text-steel-100 transition-colors"
            title="Configure AI API & System Parameters"
          >
            <Settings className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">AI CONFIG</span>
          </button>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div 
            onClick={() => onSelectScreen('today')}
            className="cursor-pointer group flex items-center space-x-2"
          >
            <div className="w-7 h-7 bg-forge-amber text-black font-extrabold flex items-center justify-center font-mono text-base">
              SF
            </div>
            <div>
              <span className="text-base font-extrabold tracking-widest text-steel-100 font-mono block leading-none">
                SKILLFORGE
              </span>
              <span className="text-[10px] text-steel-500 font-mono tracking-wider block">
                TRAIN. TEST. MASTER.
              </span>
            </div>
          </div>
        </div>

        {/* Screen tabs */}
        <nav className="flex items-center space-x-1 md:space-x-2">
          {screens.map(s => {
            const isActive = currentScreen === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectScreen(s.id)}
                className={`px-2.5 md:px-4 py-1.5 text-xs font-mono font-bold tracking-wider transition-all border ${
                  isActive
                    ? 'bg-forge-amber text-black border-forge-amber shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                    : 'bg-transparent text-steel-400 border-transparent hover:text-steel-100 hover:border-steel-700'
                }`}
              >
                <span className="opacity-60 mr-1 text-[10px]">{s.number}</span>
                <span>{s.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right action buttons: All Links + Quick Session launcher */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenAllLinks}
            className="px-2.5 md:px-3 py-1.5 bg-steel-900 hover:bg-steel-800 text-steel-200 hover:text-forge-amber border border-steel-700 hover:border-forge-amber/40 text-xs font-mono font-bold flex items-center space-x-1.5 transition-all"
            title="View All Ecosystem Links"
          >
            <Globe className="w-3.5 h-3.5 text-forge-amber" />
            <span>ALL LINKS</span>
          </button>

          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={onOpenQuickLaunch}
              className="px-3.5 py-1.5 bg-steel-900 hover:bg-steel-800 text-forge-amber border border-forge-amber/40 text-xs font-mono font-bold flex items-center space-x-1.5 transition-all"
            >
              <Clock className="w-3.5 h-3.5 text-forge-amber" />
              <span>I HAVE 30 MIN</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
