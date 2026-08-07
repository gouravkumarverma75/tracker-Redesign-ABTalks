import React, { useState } from 'react';
import { Smartphone, Monitor, Flame, User, AlertCircle, RefreshCw, Sparkles, Navigation } from 'lucide-react';

export default function MobileContainer({ 
  children, 
  currentRoute, 
  onNavigate, 
  studentState, 
  setStudentStateKey 
}) {
  const [isMobileFrame, setIsMobileFrame] = useState(true);

  return (
    <div className="min-h-screen bg-[#060911] text-gray-100 flex flex-col items-center">
      {/* Top Evaluator Bar / Judge Control Header */}
      <header className="w-full bg-[#0D1322] border-b border-brand-border/60 py-2.5 px-4 text-xs z-50 sticky top-0 shadow-lg backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Brand Logo & Live Badge */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="font-heading font-extrabold text-sm tracking-tight text-white flex items-center gap-1.5">
              ABTalks <span className="bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-500/30 text-[10px]">60-DAY CHALLENGE</span>
            </span>
          </div>

          {/* Quick Route Navigators (Exact order requested) */}
          <div className="flex items-center gap-1 bg-[#12192B] p-1 rounded-lg border border-brand-border">
            <button
              onClick={() => onNavigate('/')}
              className={`px-2.5 py-1 rounded font-medium transition-all flex items-center gap-1 ${
                currentRoute === '/' 
                  ? 'bg-cyan-500 text-black font-semibold shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              /
            </button>
            <button
              onClick={() => onNavigate('/dashboard')}
              className={`px-2.5 py-1 rounded font-medium transition-all flex items-center gap-1 ${
                currentRoute === '/dashboard' 
                  ? 'bg-cyan-500 text-black font-semibold shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              /dashboard
            </button>
            <button
              onClick={() => onNavigate('/day/12')}
              className={`px-2.5 py-1 rounded font-medium transition-all flex items-center gap-1 ${
                currentRoute === '/day/12' || currentRoute.startsWith('/day/')
                  ? 'bg-cyan-500 text-black font-semibold shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              /day/12
            </button>
          </div>

          {/* Edge Case State Switcher & Frame Toggle */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 bg-[#12192B] p-1 rounded-lg border border-brand-border">
              <span className="text-gray-400 px-1 font-medium text-[11px] hidden sm:inline">Edge State:</span>
              <button
                onClick={() => setStudentStateKey('active')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  studentState.currentStreak > 0 && !studentState.missedDay && studentState.name
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                title="Active student with 12-day streak"
              >
                🔥 Active (Day 12)
              </button>

              <button
                onClick={() => setStudentStateKey('day1_newbie')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  studentState.currentStreak === 0 && studentState.name && !studentState.missedDay
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40 font-semibold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                title="First day student with zero streak"
              >
                🌱 Day 1 Newbie
              </button>

              <button
                onClick={() => setStudentStateKey('missed_day')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  studentState.missedDay
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-semibold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                title="Student who missed yesterday"
              >
                ⚠️ Missed Day
              </button>

              <button
                onClick={() => setStudentStateKey('empty_profile')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  !studentState.name
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40 font-semibold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                title="Unconfigured student state"
              >
                👤 Empty Profile
              </button>
            </div>

            {/* Mobile Viewport Toggle (390px Lock) */}
            <button
              onClick={() => setIsMobileFrame(!isMobileFrame)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#182238] border border-brand-border text-cyan-400 hover:bg-cyan-500/10 transition-all font-medium"
              title="Toggle 390px Mobile Viewport Frame"
            >
              {isMobileFrame ? (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>390px Viewport</span>
                </>
              ) : (
                <>
                  <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Full Screen</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full flex-1 flex flex-col items-center justify-start p-0 md:p-4">
        {isMobileFrame ? (
          /* Locked 390px Mobile Frame Simulation Container */
          <div className="w-full max-w-[390px] min-h-[820px] bg-[#090D16] border border-brand-border/80 shadow-2xl rounded-none md:rounded-[36px] overflow-hidden my-0 md:my-4 flex flex-col transition-all relative">
            
            {/* Simulated Phone Top Notch / Speaker Bar */}
            <div className="w-full bg-[#090D16] pt-2 pb-1 px-6 flex items-center justify-between text-[11px] text-gray-400 border-b border-white/5 select-none">
              <span className="font-semibold text-gray-300">9:41 PM</span>
              <div className="w-16 h-3 bg-black rounded-full mx-auto hidden md:block border border-white/10"></div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-cyan-400 font-mono">5G</span>
                <span className="text-[10px]">100%</span>
              </div>
            </div>

            {/* Viewport Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
              {children}
            </div>

            {/* Bottom Mobile Floating Navigation Bar */}
            <nav className="sticky bottom-0 left-0 right-0 bg-[#0D1322]/95 backdrop-blur-lg border-t border-brand-border/80 px-4 py-2 flex items-center justify-around z-40">
              <button
                onClick={() => onNavigate('/')}
                className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-all ${
                  currentRoute === '/' ? 'text-cyan-400 font-bold scale-105' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="text-base">🏠</span>
                <span>Home</span>
              </button>

              <button
                onClick={() => onNavigate('/dashboard')}
                className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-all relative ${
                  currentRoute === '/dashboard' ? 'text-cyan-400 font-bold scale-105' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="text-base">🔥</span>
                <span>Dashboard</span>
                {studentState.currentStreak > 0 && (
                  <span className="absolute -top-1 -right-2 bg-gradient-to-r from-amber-500 to-red-500 text-white text-[9px] px-1 rounded-full font-extrabold">
                    {studentState.currentStreak}
                  </span>
                )}
              </button>

              <button
                onClick={() => onNavigate('/day/12')}
                className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-all ${
                  currentRoute.startsWith('/day/') ? 'text-cyan-400 font-bold scale-105' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="text-base">⚡</span>
                <span>Today's Task</span>
              </button>
            </nav>
          </div>
        ) : (
          /* Full Responsive Viewport Mode */
          <div className="w-full max-w-5xl bg-[#090D16] min-h-screen flex flex-col shadow-xl">
            {children}
          </div>
        )}
      </main>
    </div>
  );
}
