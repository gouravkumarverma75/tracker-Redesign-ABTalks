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
  Compass,
  Check
} from 'lucide-react';
import { MOCK_TRACKS } from '../data/mockData';

export default function Dashboard({ studentState, onNavigate, setStudentStateKey }) {
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
    let status = 'locked'; // 'completed', 'today', 'missed', 'locked'

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
    <div className="flex-1 flex flex-col space-y-6">
      
      {/* EDGE CASE: Empty Profile Unconfigured State */}
      {!name ? (
        <div className="linear-surface-1 p-8 sm:p-12 rounded-xl border border-hairline text-center space-y-6 max-w-xl mx-auto my-12">
          <div className="w-12 h-12 rounded-lg bg-surface-2 border border-hairline-strong flex items-center justify-center mx-auto text-primary">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-ink tracking-headline">Welcome to ABTalks 60-Day Challenge</h2>
            <p className="text-xs text-ink-muted leading-relaxed">
              Your profile is unconfigured. Select your engineering pathway below to start your Day 1 task.
            </p>
          </div>

          <div className="space-y-2 text-left pt-2">
            <span className="text-[11px] text-ink-subtle font-mono uppercase tracking-eyebrow">Available Tracks:</span>
            {MOCK_TRACKS.map((t) => (
              <button
                key={t.id}
                onClick={() => setStudentStateKey('active')}
                className="w-full p-4 rounded-md linear-surface-2 border border-hairline-strong hover:border-primary text-left flex items-center justify-between transition-all"
              >
                <div>
                  <div className="text-xs font-semibold text-ink">{t.name}</div>
                  <div className="text-[11px] text-ink-muted">{t.tagline}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-primary" />
              </button>
            ))}
          </div>

          <p className="text-[11px] text-ink-tertiary">Tip: Use the "State" switcher in top nav bar to test different evaluator presets.</p>
        </div>
      ) : (
        <>
          {/* TOP PROFILE & STREAK HEADER PANEL */}
          <div className="linear-surface-1 p-6 rounded-xl border border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Student Info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
                  alt={name}
                  className="w-14 h-14 rounded-lg object-cover border border-hairline-strong"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-semantic-success border-2 border-canvas flex items-center justify-center text-[9px] text-white">
                  ✓
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold text-ink tracking-card-title">{name}</h1>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-2 text-ink-muted border border-hairline">
                    {degree || 'B.Tech CSE'}
                  </span>
                </div>
                <p className="text-xs text-ink-subtle">{college}</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-primary font-mono mt-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{trackName}</span>
                </div>
              </div>
            </div>

            {/* Streak & Stats Badges */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-hairline">
              
              {/* Streak Badge */}
              <div className="p-3 rounded-lg bg-surface-2 border border-hairline-strong flex items-center gap-3">
                <div className="p-2 rounded bg-amber-500/10 text-amber-400">
                  <Flame className={`w-5 h-5 ${currentStreak > 0 ? 'fill-amber-400 text-amber-400' : 'text-ink-tertiary'}`} />
                </div>
                <div>
                  <div className="text-base font-semibold text-amber-400 font-display leading-tight">{currentStreak} Days</div>
                  <div className="text-[10px] text-ink-subtle font-mono">Best: {longestStreak} days</div>
                </div>
              </div>

              {/* College Rank */}
              <div className="p-3 rounded-lg bg-surface-2 border border-hairline-strong flex items-center gap-3">
                <div className="p-2 rounded bg-surface-3 text-ink">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-base font-semibold text-ink font-display leading-tight">#{rank || '--'}</div>
                  <div className="text-[10px] text-ink-subtle font-mono">of {totalStudentsInCollege} Students</div>
                </div>
              </div>

            </div>

          </div>

          {/* EDGE CASE: MISSED DAY WARNING BANNER */}
          {missedDay && (
            <div className="linear-surface-2 border border-rose-500/50 p-5 rounded-xl flex items-start gap-4 text-ink">
              <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1 text-xs">
                <div className="font-semibold text-rose-300 text-sm">Streak at Risk! Missed Day {missedDayNum} Task</div>
                <p className="text-ink-muted leading-relaxed">
                  Submit <strong>Day 12 task today + 1 Streak Recovery commit</strong> before 11:59 PM tonight to repair your streak!
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('/day/12')}
                    className="btn-primary text-xs px-4 py-2"
                  >
                    <span>Repair Streak Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* EDGE CASE: DAY 1 NEWBIE WELCOME */}
          {currentStreak === 0 && !missedDay && (
            <div className="linear-surface-2 border border-primary/40 p-5 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-eyebrow">
                <Sparkles className="w-4 h-4" />
                <span>Welcome to Day 1 • Your 60-Day Habit Begins Tonight</span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                You currently have a 0-day streak. Complete today's assigned engineering task to register your first verified GitHub commit!
              </p>
            </div>
          )}

          {/* TODAY'S PRIMARY TASK SPOTLIGHT */}
          <div className="product-screenshot-card p-6 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary-hover font-mono text-[11px] font-medium border border-primary/30">
                TODAY'S TASK • DAY {currentDayNumber}
              </span>
              <span className="flex items-center gap-1.5 text-ink-subtle font-mono text-xs">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Due Tonight by 11:59 PM</span>
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-ink tracking-headline">
                Building a Scalable REST API with Node.js & Express
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Set up controller router modules, request validation middleware, and return JSON responses with proper HTTP status codes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-hairline">
              <div className="flex items-center gap-4 text-xs font-mono text-ink-subtle">
                <span>⏱️ 45 Mins</span>
                <span className="text-primary font-semibold">+120 XP Reward</span>
                <span className="text-semantic-success">✓ Starter Snippet Included</span>
              </div>

              <button
                onClick={() => onNavigate(`/day/${currentDayNumber}`)}
                className="btn-primary text-xs px-5 py-2.5 w-full sm:w-auto"
              >
                <span>Go to Day {currentDayNumber} Task</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* PROGRESS & COMPLETION SUMMARY */}
          <div className="linear-surface-1 p-6 rounded-xl border border-hairline space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-ink">Overall Challenge Completion</span>
              <span className="font-mono text-primary font-semibold">{completedDaysCount} / 60 Days ({completionPercent}%)</span>
            </div>

            {/* Clean Linear Progress Bar */}
            <div className="w-full h-2 bg-surface-2 rounded-full overflow-hidden border border-hairline p-0.5">
              <div
                className="h-full bg-primary rounded-full transition-all duration-700"
                style={{ width: `${Math.max(completionPercent, 2)}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-ink-subtle">
              <span className="flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-primary" />
                <span>Night-Owl Schedule Sync Active</span>
              </span>
              <span className="text-amber-400 font-mono">
                ❄️ {freezeCreditsLeft} Streak Freeze Credit Available
              </span>
            </div>
          </div>

          {/* INTERACTIVE 60-DAY HABIT MATRIX */}
          <div className="linear-surface-1 p-6 rounded-xl border border-hairline space-y-4">
            <div className="flex items-center justify-between text-xs">
              <h3 className="font-semibold text-ink flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>60-Day Proof Matrix</span>
              </h3>
              <div className="flex items-center gap-3 text-[11px] font-mono text-ink-subtle">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-semantic-success"></span> Completed</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-primary"></span> Today</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-surface-3"></span> Locked</span>
              </div>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2 pt-2">
              {daysArray.map(({ dayNum, status }) => (
                <button
                  key={dayNum}
                  onClick={() => onNavigate(`/day/${dayNum}`)}
                  className={`aspect-square rounded-md text-xs font-mono font-medium flex items-center justify-center transition-all ${
                    status === 'completed'
                      ? 'bg-semantic-success/20 text-semantic-success border border-semantic-success/40 hover:bg-semantic-success/30'
                      : status === 'today'
                      ? 'bg-primary text-white border border-primary-hover font-bold shadow-sm'
                      : status === 'missed'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-surface-2 text-ink-tertiary border border-hairline hover:text-ink-muted'
                  }`}
                  title={`Day ${dayNum} - ${status}`}
                >
                  {dayNum}
                </button>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS & BADGES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="linear-surface-1 p-6 rounded-xl border border-hairline space-y-3">
              <div className="flex items-center justify-between text-xs">
                <h3 className="font-semibold text-ink flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Earned Achievements ({achievements.length})</span>
                </h3>
              </div>

              {achievements.length === 0 ? (
                <p className="text-xs text-ink-subtle py-4 text-center">
                  No badges earned yet. Complete Day 1 to unlock your first achievement badge!
                </p>
              ) : (
                <div className="space-y-2">
                  {achievements.map((ach) => (
                    <div key={ach.id} className="p-3 rounded-lg bg-surface-2 border border-hairline flex items-center gap-3">
                      <div className="p-2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-ink">{ach.title}</div>
                        <div className="text-[11px] text-ink-subtle">{ach.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="linear-surface-1 p-6 rounded-xl border border-hairline space-y-3">
              <div className="flex items-center justify-between text-xs">
                <h3 className="font-semibold text-ink flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>XP & Rank Level</span>
                </h3>
              </div>

              <div className="p-4 rounded-lg bg-surface-2 border border-hairline space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-ink-subtle">Total XP:</span>
                  <span className="text-primary font-semibold">{xpPoints} XP</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-ink-subtle">Level Tier:</span>
                  <span className="text-ink">Level 3 Developer</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-ink-subtle">College Standings:</span>
                  <span className="text-semantic-success">Top 3% of Batch</span>
                </div>
              </div>
            </div>

          </div>
        </>
      )}

    </div>
  );
}
