import React, { useState } from 'react';
import { 
  Flame, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Trophy, 
  Award, 
  Calendar, 
  Sparkles, 
  ShieldAlert, 
  Clock, 
  Code2, 
  Github, 
  Linkedin, 
  User, 
  ChevronRight, 
  Zap,
  Moon,
  Compass
} from 'lucide-react';
import { MOCK_TRACKS } from '../data/mockData';

export default function Dashboard({ studentState, onNavigate, setStudentStateKey }) {
  const [selectedTrackModal, setSelectedTrackModal] = useState(false);

  const {
    name,
    college,
    degree,
    avatar,
    trackName,
    currentStreak,
    longestStreak,
    completedDaysCount,
    currentDayNumber,
    xpPoints,
    rank,
    totalStudentsInCollege,
    freezeCreditsLeft,
    missedDay,
    missedDayNum,
    achievements
  } = studentState;

  // Calculate completion percentage
  const completionPercent = Math.round((completedDaysCount / 60) * 100);

  // Generate 60 days matrix array
  const daysArray = Array.from({ length: 60 }, (_, i) => {
    const dayNum = i + 1;
    let status = 'locked'; // 'completed', 'today', 'missed', 'locked', 'freeze'

    if (dayNum <= completedDaysCount) {
      status = 'completed';
    } else if (dayNum === currentDayNumber) {
      status = missedDay ? 'missed' : 'today';
    } else if (missedDay && dayNum === missedDayNum) {
      status = 'missed';
    }
    return { dayNum, status };
  });

  return (
    <div className="flex-1 flex flex-col bg-[#090D16] text-white p-4 space-y-4">
      
      {/* Edge Case 3: Empty Profile Modal / Banner */}
      {!name ? (
        <div className="glass-panel p-5 rounded-2xl border-2 border-purple-500/60 bg-gradient-to-b from-purple-950/40 to-[#0F1629] text-center space-y-3 my-auto">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto border border-purple-500/40">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-lg font-bold text-white font-heading">Welcome to ABTalks 60-Day Challenge!</h2>
          <p className="text-xs text-gray-300 max-w-xs mx-auto leading-relaxed">
            Your profile is unconfigured. Pick your engineering track to get started with your Day 1 task.
          </p>

          <div className="space-y-2 pt-2 text-left">
            <span className="text-[11px] text-purple-400 font-bold uppercase tracking-wider">Select Your Track:</span>
            {MOCK_TRACKS.map((t) => (
              <button
                key={t.id}
                onClick={() => setStudentStateKey('active')}
                className="w-full p-3 rounded-xl bg-[#141C30] border border-brand-border hover:border-cyan-400 text-left flex items-center justify-between transition-all"
              >
                <div>
                  <div className="text-xs font-bold text-white font-heading">{t.name}</div>
                  <div className="text-[10px] text-gray-400">{t.tagline}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            ))}
          </div>

          <p className="text-[10px] text-gray-400 italic">Tip: You can change presets anytime using the Edge State bar at top.</p>
        </div>
      ) : (
        <>
          {/* Top Profile Header Card */}
          <div className="glass-panel p-4 rounded-2xl border border-brand-border/80 flex items-center justify-between gap-3 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
                  alt={name}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-cyan-400/60 shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center text-[9px]">
                  ✓
                </span>
              </div>
              <div>
                <h2 className="text-sm font-extrabold text-white flex items-center gap-1.5 font-heading">
                  <span>{name}</span>
                </h2>
                <p className="text-[11px] text-gray-400">{college}</p>
                <div className="inline-flex items-center gap-1 text-[10px] text-cyan-400 font-mono mt-0.5">
                  <Code2 className="w-3 h-3" />
                  <span>{trackName}</span>
                </div>
              </div>
            </div>

            {/* Streak Flame Badge */}
            <div className="flex flex-col items-end shrink-0">
              <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-500/40 px-3 py-1.5 rounded-xl">
                <Flame className={`w-5 h-5 ${currentStreak > 0 ? 'text-amber-400 fill-amber-400 animate-pulse' : 'text-gray-500'}`} />
                <span className="text-lg font-extrabold text-amber-400 font-heading">{currentStreak}</span>
                <span className="text-[10px] text-amber-300/80 font-bold uppercase">DAY STREAK</span>
              </div>
              <span className="text-[10px] text-gray-400 mt-1 font-mono">Best: {longestStreak} days</span>
            </div>
          </div>

          {/* Edge Case 2: Missed Day Warning / Streak Repair Alert */}
          {missedDay && (
            <div className="bg-amber-950/40 border border-amber-500/60 p-3.5 rounded-2xl flex items-start gap-3 text-amber-200">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 animate-bounce" />
              <div className="flex-1 text-xs">
                <div className="font-bold text-amber-300 font-heading">Streak At Risk! You missed Day {missedDayNum}</div>
                <p className="text-[11px] text-amber-200/80 mt-0.5 leading-relaxed">
                  Submit <strong>Day 12 today + 1 Recovery Commit</strong> before 11:59 PM to repair your streak!
                </p>
                <button
                  onClick={() => onNavigate('/day/12')}
                  className="mt-2 px-3 py-1 rounded-lg bg-amber-500 text-black font-extrabold text-[11px] flex items-center gap-1 shadow font-heading"
                >
                  <span>REPAIR STREAK NOW</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {/* Edge Case 1: First Day (Day 1 / Zero Streak) Welcome Banner */}
          {currentStreak === 0 && !missedDay && (
            <div className="bg-gradient-to-r from-cyan-950/50 via-blue-950/40 to-purple-950/40 border border-cyan-500/50 p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold font-heading">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                <span>WELCOME TO DAY 1! BUILD YOUR FIRST PROOF OF WORK</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                You have 0 streak days. Completing today's task will start your official 60-day engineering streak!
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">
                  Target: Complete Day 1
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold">+50 XP Welcome Bonus</span>
              </div>
            </div>
          )}

          {/* Today's Primary Task Card */}
          <div className="glass-panel-glow p-4 rounded-2xl border border-cyan-500/50 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span className="bg-cyan-500/20 text-cyan-300 px-2.5 py-0.5 rounded-full font-bold text-[10px] border border-cyan-500/30">
                TODAY'S TASK • DAY {currentDayNumber}
              </span>
              <span className="flex items-center gap-1 text-amber-400 font-mono text-[11px]">
                <Clock className="w-3.5 h-3.5" />
                <span>Due 11:59 PM</span>
              </span>
            </div>

            <h3 className="text-base font-extrabold text-white mb-1 font-heading">
              Building a Scalable REST API with Node.js & Express
            </h3>
            <p className="text-xs text-gray-300 mb-4 line-clamp-2">
              Set up controller router modules, request validation middleware, and return JSON responses with proper HTTP status codes.
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-brand-border/60">
              <div className="flex items-center gap-3 text-[11px] text-gray-400 font-mono">
                <span>⏱️ 45 Mins</span>
                <span className="text-purple-400 font-semibold">+120 XP</span>
              </div>

              <button
                onClick={() => onNavigate(`/day/${currentDayNumber}`)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-xs shadow-glow-cyan hover:scale-[1.03] transition-all flex items-center gap-1.5 font-heading"
              >
                <span>GO TO DAY {currentDayNumber} TASK</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* Progress & Overall Completion Summary */}
          <div className="glass-panel p-4 rounded-2xl border border-brand-border space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white font-heading">Challenge Completion</span>
              <span className="text-cyan-400 font-mono font-extrabold text-sm">{completedDaysCount} / 60 Days ({completionPercent}%)</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-[#111827] rounded-full overflow-hidden p-0.5 border border-brand-border">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                style={{ width: `${Math.max(completionPercent, 3)}%` }}
              ></div>
            </div>

            {/* Thoughtful Innovation: Freeze Protection Indicator */}
            <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
              <span className="flex items-center gap-1">
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                <span>Late Night Mode Active</span>
              </span>
              <span className="text-amber-400 font-medium">
                ❄️ {freezeCreditsLeft} Streak Freeze Credit Left
              </span>
            </div>
          </div>

          {/* Interactive 60-Day Habit Matrix */}
          <div className="glass-panel p-4 rounded-2xl border border-brand-border space-y-3">
            <div className="flex items-center justify-between text-xs">
              <h3 className="font-bold text-white flex items-center gap-1.5 font-heading">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>60-Day Proof Matrix</span>
              </h3>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-500"></span> Done</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-cyan-400 animate-pulse"></span> Today</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-gray-700"></span> Locked</span>
              </div>
            </div>

            {/* Grid of 60 Days */}
            <div className="grid grid-cols-10 gap-1.5 pt-1">
              {daysArray.map(({ dayNum, status }) => (
                <button
                  key={dayNum}
                  onClick={() => onNavigate(`/day/${dayNum}`)}
                  className={`aspect-square rounded-lg text-[10px] font-mono font-bold flex items-center justify-center transition-all ${
                    status === 'completed'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30'
                      : status === 'today'
                      ? 'bg-cyan-500 text-black border border-white font-extrabold shadow-glow-cyan scale-110 z-10'
                      : status === 'missed'
                      ? 'bg-amber-500/30 text-amber-300 border border-amber-500/60'
                      : 'bg-[#111827] text-gray-600 border border-brand-border/40 hover:text-gray-400'
                  }`}
                  title={`Day ${dayNum} - ${status}`}
                >
                  {dayNum}
                </button>
              ))}
            </div>
          </div>

          {/* Student Standing & Achievements */}
          <div className="grid grid-cols-2 gap-3">
            
            {/* Standing Card */}
            <div className="glass-panel p-3.5 rounded-2xl border border-brand-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold font-heading">
                <Trophy className="w-4 h-4" />
                <span>College Rank</span>
              </div>
              <div className="text-2xl font-extrabold text-white font-heading">
                #{rank || '--'} <span className="text-xs font-normal text-gray-400">of {totalStudentsInCollege}</span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono">In {college || 'College'}</p>
            </div>

            {/* XP Points Card */}
            <div className="glass-panel p-3.5 rounded-2xl border border-brand-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-purple-400 font-bold font-heading">
                <Zap className="w-4 h-4" />
                <span>Total XP Earned</span>
              </div>
              <div className="text-2xl font-extrabold text-white font-heading">
                {xpPoints} <span className="text-xs text-purple-300">XP</span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono">Level 3 Developer</p>
            </div>

          </div>

          {/* Achievements Badges */}
          <div className="glass-panel p-4 rounded-2xl border border-brand-border space-y-2.5">
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5 font-heading">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Earned Badges ({achievements.length})</span>
            </h3>

            {achievements.length === 0 ? (
              <p className="text-xs text-gray-400 italic py-2 text-center">
                No badges earned yet. Complete Day 1 to unlock your first badge!
              </p>
            ) : (
              <div className="space-y-2">
                {achievements.map((ach) => (
                  <div key={ach.id} className="p-2.5 rounded-xl bg-[#111827] border border-brand-border/60 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-heading">{ach.title}</h4>
                      <p className="text-[10px] text-gray-400">{ach.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

    </div>
  );
}
