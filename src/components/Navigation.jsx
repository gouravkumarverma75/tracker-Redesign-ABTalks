import React, { useState } from 'react';
import { Flame, Code2, ChevronRight, Menu, X, Layers, Sparkles, User, AlertCircle, ShieldAlert, Check } from 'lucide-react';

export default function Navigation({ currentRoute, onNavigate, studentState, setStudentStateKey }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [edgeDropdownOpen, setEdgeDropdownOpen] = useState(false);

  const presets = [
    { key: 'active', label: 'Active Student (Day 12)', badge: '🔥 Streak 12', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
    { key: 'day1_newbie', label: 'Day 1 Newbie', badge: '🌱 Day 1', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
    { key: 'missed_day', label: 'Missed Day (Streak Risk)', badge: '⚠️ Missed Day 9', color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
    { key: 'empty_profile', label: 'Unconfigured Profile', badge: '👤 Empty Profile', color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' },
  ];

  // Determine current active preset key
  const getCurrentPresetKey = () => {
    if (!studentState.name) return 'empty_profile';
    if (studentState.missedDay) return 'missed_day';
    if (studentState.currentStreak === 0) return 'day1_newbie';
    return 'active';
  };

  const activePresetKey = getCurrentPresetKey();
  const currentPreset = presets.find(p => p.key === activePresetKey) || presets[0];

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-md border-b border-hairline h-14 flex items-center justify-between px-4 sm:px-8">
      {/* Brand & Logo */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 text-ink hover:text-white transition-opacity"
        >
          {/* ABTalks Brand Mark */}
          <div className="w-6.5 h-6.5 rounded bg-primary flex items-center justify-center text-white font-bold text-xs shadow-sm">
            <Flame className="w-4 h-4 fill-white text-white" />
          </div>
          <span className="font-display font-bold text-base tracking-tight text-ink flex items-center gap-2">
            ABTalks <span className="bg-primary/20 text-primary-hover px-1.5 py-0.5 rounded text-[10px] font-mono border border-primary/30">60-DAY</span>
          </span>
        </button>

        <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-2 border border-hairline text-semantic-success text-[11px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-semantic-success animate-pulse"></span>
          <span>Season 4 Live</span>
        </span>
      </div>

      {/* Center Nav Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-1 bg-surface-1 p-1 rounded-md border border-hairline text-xs">
        <button
          onClick={() => onNavigate('/')}
          className={`px-3 py-1.5 rounded-sm font-medium transition-all ${
            currentRoute === '/' 
              ? 'bg-surface-3 text-ink shadow-sm font-semibold' 
              : 'text-ink-subtle hover:text-ink'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => onNavigate('/dashboard')}
          className={`px-3 py-1.5 rounded-sm font-medium transition-all flex items-center gap-1.5 ${
            currentRoute === '/dashboard' 
              ? 'bg-surface-3 text-ink shadow-sm font-semibold' 
              : 'text-ink-subtle hover:text-ink'
          }`}
        >
          <span>Dashboard</span>
          {studentState.currentStreak > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold">
              🔥 {studentState.currentStreak}
            </span>
          )}
        </button>
        <button
          onClick={() => onNavigate('/day/12')}
          className={`px-3 py-1.5 rounded-sm font-medium transition-all flex items-center gap-1.5 ${
            currentRoute.startsWith('/day/') 
              ? 'bg-surface-3 text-ink shadow-sm font-semibold' 
              : 'text-ink-subtle hover:text-ink'
          }`}
        >
          <span>Day 12 Task</span>
          <span className="px-1.5 py-0.2 rounded-full bg-primary/20 text-primary-hover text-[10px] font-mono">
            +120 XP
          </span>
        </button>
      </nav>

      {/* Right Controls: Evaluator Edge-State Switcher + Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        
        {/* Evaluator State Selector Pill Dropdown */}
        <div className="relative">
          <button
            onClick={() => setEdgeDropdownOpen(!edgeDropdownOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-1 border border-hairline text-[11px] font-medium text-ink-muted hover:text-ink transition-all"
            title="Switch Evaluator Test State"
          >
            <span className="text-ink-subtle hidden sm:inline">State:</span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono border ${currentPreset.color}`}>
              {currentPreset.badge}
            </span>
          </button>

          {edgeDropdownOpen && (
            <div 
              className="absolute right-0 mt-2 w-64 rounded-lg bg-surface-2 border border-hairline-strong shadow-2xl p-1.5 z-50 space-y-1"
              onMouseLeave={() => setEdgeDropdownOpen(false)}
            >
              <div className="px-2 py-1 text-[10px] font-semibold text-ink-subtle uppercase tracking-wider border-b border-hairline mb-1">
                Evaluator State Switcher
              </div>
              {presets.map((p) => (
                <button
                  key={p.key}
                  onClick={() => {
                    setStudentStateKey(p.key);
                    setEdgeDropdownOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-2 rounded-md text-xs flex items-center justify-between transition-colors ${
                    activePresetKey === p.key 
                      ? 'bg-surface-3 text-ink font-medium' 
                      : 'text-ink-muted hover:bg-surface-1 hover:text-ink'
                  }`}
                >
                  <span>{p.label}</span>
                  {activePresetKey === p.key && <Check className="w-3.5 h-3.5 text-primary" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action CTAs (Linear button-secondary + button-primary pair) */}
        <button
          onClick={() => onNavigate('/dashboard')}
          className="hidden sm:inline-flex btn-secondary text-xs px-3 py-1.5"
        >
          Sign in
        </button>

        <button
          onClick={() => onNavigate('/dashboard')}
          className="btn-primary text-xs px-3.5 py-1.5"
        >
          <span>Get Started</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-md text-ink-subtle hover:text-ink bg-surface-1 border border-hairline"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-surface-1 border-b border-hairline p-4 md:hidden flex flex-col gap-2 shadow-2xl z-50">
          <button
            onClick={() => { onNavigate('/'); setMobileMenuOpen(false); }}
            className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
              currentRoute === '/' ? 'bg-surface-2 text-ink' : 'text-ink-subtle'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => { onNavigate('/dashboard'); setMobileMenuOpen(false); }}
            className={`text-left px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between ${
              currentRoute === '/dashboard' ? 'bg-surface-2 text-ink' : 'text-ink-subtle'
            }`}
          >
            <span>Dashboard</span>
            {studentState.currentStreak > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                🔥 {studentState.currentStreak} Days
              </span>
            )}
          </button>
          <button
            onClick={() => { onNavigate('/day/12'); setMobileMenuOpen(false); }}
            className={`text-left px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between ${
              currentRoute.startsWith('/day/') ? 'bg-surface-2 text-ink' : 'text-ink-subtle'
            }`}
          >
            <span>Day 12 Task</span>
            <span className="text-primary text-xs font-mono">+120 XP</span>
          </button>
        </div>
      )}
    </header>
  );
}
