import React, { useState } from 'react';
import { 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Brain, 
  Smartphone, 
  Award, 
  Github, 
  Linkedin, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  Users, 
  Terminal,
  GitCommit,
  Check,
  ArrowUpRight,
  ChevronRight,
  Clock,
  Search,
  Filter
} from 'lucide-react';
import { MOCK_TRACKS, MOCK_TESTIMONIALS, MOCK_FAQS } from '../data/mockData';

export default function LandingPage({ onNavigate, studentState, setStudentStateKey }) {
  const [selectedTrack, setSelectedTrack] = useState('fullstack');
  const [openFaq, setOpenFaq] = useState(0);
  const [heroTab, setHeroTab] = useState('matrix'); // 'matrix' | 'editor' | 'leaderboard'

  const activeTrackObj = MOCK_TRACKS.find(t => t.id === selectedTrack) || MOCK_TRACKS[0];

  return (
    <div className="flex-1 flex flex-col space-y-24 py-6">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto pt-6">
        
        {/* Semantic Success Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-hairline text-semantic-success text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-semantic-success animate-pulse"></span>
          <span className="text-ink-muted">Season 4 Live</span>
          <span className="text-hairline">|</span>
          <span className="text-ink">6,200+ Developers Enrolled</span>
        </div>

        {/* Hero Display XL Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-semibold text-ink tracking-display-xl leading-[1.05]">
          60 days of proof of work.<br />
          <span className="text-ink-muted">Zero fluff. Land tech roles.</span>
        </h1>

        {/* Lead Paragraph */}
        <p className="text-base sm:text-xl text-ink-muted font-normal tracking-subhead max-w-2xl leading-relaxed">
          Build a real engineering feature every night after college. Submit your public GitHub commit & LinkedIn post to lock your streak and get discovered by recruiters.
        </p>

        {/* CTAs Pair */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
          <button
            onClick={() => onNavigate('/dashboard')}
            className="btn-primary text-sm px-6 py-3 w-full sm:w-auto"
          >
            <Flame className="w-4 h-4 fill-white text-white" />
            <span>Start Day 1 Challenge</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('curriculum');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary text-sm px-6 py-3 w-full sm:w-auto"
          >
            <span>Explore 60-Day Curriculum</span>
          </button>
        </div>

        {/* Trust Meta */}
        <div className="flex items-center gap-4 text-xs text-ink-subtle pt-1">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-semantic-success" />
            <span>100% Free for Students</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Verified GitHub Integration</span>
          </span>
        </div>

      </section>

      {/* PROTagonist: DOMINANT PRODUCT UI SCREENSHOT PANEL */}
      <section className="w-full">
        <div className="product-screenshot-card p-4 sm:p-6 space-y-4 relative overflow-hidden">
          
          {/* Simulated App Chrome / Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-hairline flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-surface-2 border border-hairline text-xs font-mono text-ink-subtle">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span>abtalks.app/dashboard/divyanshu-maurya</span>
              </div>
            </div>

            {/* App Tab Switcher Inside Screenshot */}
            <div className="flex items-center gap-1 bg-surface-2 p-1 rounded-md border border-hairline text-xs">
              <button
                onClick={() => setHeroTab('matrix')}
                className={`px-3 py-1 rounded text-xs transition-colors ${
                  heroTab === 'matrix' ? 'bg-surface-3 text-ink font-medium' : 'text-ink-subtle hover:text-ink'
                }`}
              >
                60-Day Matrix
              </button>
              <button
                onClick={() => setHeroTab('editor')}
                className={`px-3 py-1 rounded text-xs transition-colors ${
                  heroTab === 'editor' ? 'bg-surface-3 text-ink font-medium' : 'text-ink-subtle hover:text-ink'
                }`}
              >
                Live Code Task
              </button>
              <button
                onClick={() => setHeroTab('leaderboard')}
                className={`px-3 py-1 rounded text-xs transition-colors ${
                  heroTab === 'leaderboard' ? 'bg-surface-3 text-ink font-medium' : 'text-ink-subtle hover:text-ink'
                }`}
              >
                Rankings
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview Content */}
          {heroTab === 'matrix' && (
            <div className="space-y-6 pt-2">
              {/* App User Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-surface-2 border border-hairline">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
                    alt="Divyanshu Maurya"
                    className="w-12 h-12 rounded-lg object-cover border border-hairline-strong"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-ink">Divyanshu Maurya</h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-semantic-success/20 text-semantic-success border border-semantic-success/30">
                        VERIFIED DEV
                      </span>
                    </div>
                    <p className="text-xs text-ink-subtle">ABES Engineering College • Full-Stack Web Track</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-right">
                    <div className="text-xs text-ink-subtle font-mono">Current Streak</div>
                    <div className="text-base font-semibold text-amber-400 font-display flex items-center gap-1 justify-end">
                      <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>12 Days</span>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-hairline"></div>
                  <div className="text-right">
                    <div className="text-xs text-ink-subtle font-mono">College Rank</div>
                    <div className="text-base font-semibold text-ink font-display">#10 <span className="text-xs font-normal text-ink-subtle">/ 370</span></div>
                  </div>
                </div>
              </div>

              {/* 60-Day Visual Grid Mockup */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-ink-muted">
                  <span className="font-medium text-ink">60-Day Proof Matrix</span>
                  <span className="font-mono text-ink-subtle">12 / 60 Completed (20%)</span>
                </div>

                <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
                  {Array.from({ length: 30 }, (_, i) => {
                    const dayNum = i + 1;
                    const isDone = dayNum <= 12;
                    const isToday = dayNum === 12;
                    return (
                      <div
                        key={dayNum}
                        className={`aspect-square rounded-md text-[10px] font-mono font-medium flex items-center justify-center transition-all ${
                          isToday
                            ? 'bg-primary text-white border border-primary-hover font-bold shadow-sm'
                            : isDone
                            ? 'bg-semantic-success/20 text-semantic-success border border-semantic-success/40'
                            : 'bg-surface-2 text-ink-tertiary border border-hairline'
                        }`}
                      >
                        {dayNum}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {heroTab === 'editor' && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between text-xs text-ink-muted font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-primary/20 text-primary-hover text-[10px]">
                    DAY 12 TASK
                  </span>
                  <span className="text-ink font-semibold">Building a Scalable REST API with Express</span>
                </div>
                <span className="text-ink-subtle">⏱️ 45 mins • +120 XP</span>
              </div>

              <div className="bg-canvas p-4 rounded-lg border border-hairline font-mono text-xs text-ink-muted leading-relaxed overflow-x-auto">
                <div className="text-ink-tertiary border-b border-hairline pb-2 mb-2 flex items-center justify-between">
                  <span>// routes/api/v1/students.js</span>
                  <span className="text-semantic-success">✓ Syntax Checked</span>
                </div>
                <pre className="text-ink text-[11px] sm:text-xs">
{`const express = require('express');
const router = express.Router();

// GET /api/v1/students/standing
router.get('/standing', (req, res) => {
  const { trackId } = req.query;
  if (!trackId) {
    return res.status(400).json({ success: false, error: 'trackId query param missing' });
  }
  return res.status(200).json({ success: true, streak: 12, rank: 10 });
});

module.exports = router;`}
                </pre>
              </div>
            </div>
          )}

          {heroTab === 'leaderboard' && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-ink-muted">
                <span className="font-semibold text-ink">ABES Engineering College Leaderboard</span>
                <span className="font-mono text-ink-subtle">Season 4 Standings</span>
              </div>

              <div className="space-y-2">
                {[
                  { rank: 1, name: 'Gaurav Kumar', streak: 48, xp: '5,800 XP', track: 'Full-Stack Web', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' },
                  { rank: 2, name: 'Aarav Sharma', streak: 42, xp: '5,100 XP', track: 'AI & Data Eng', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
                  { rank: 10, name: 'Divyanshu Maurya (You)', streak: 12, xp: '1,550 XP', track: 'Full-Stack Web', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', isUser: true },
                ].map((st) => (
                  <div 
                    key={st.rank}
                    className={`p-3 rounded-lg flex items-center justify-between text-xs border ${
                      st.isUser ? 'bg-surface-2 border-primary/50' : 'bg-surface-1 border-hairline'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-ink-subtle w-6 text-center">#{st.rank}</span>
                      <img src={st.avatar} alt={st.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="font-medium text-ink">{st.name}</div>
                        <div className="text-[10px] text-ink-subtle">{st.track}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 font-mono">
                      <span className="text-amber-400 font-semibold">🔥 {st.streak}d</span>
                      <span className="text-ink-muted">{st.xp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshot Panel Footer Tagline */}
          <div className="pt-3 border-t border-hairline flex items-center justify-between text-[11px] text-ink-subtle">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Real-time GitHub webhook & LinkedIn verification active</span>
            </span>
            <button 
              onClick={() => onNavigate('/dashboard')}
              className="text-primary hover:text-primary-hover font-medium flex items-center gap-1"
            >
              <span>Launch Live Dashboard</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </section>

      {/* KEY METRICS STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Students Enrolled', val: '6,200+', sub: 'From 120+ Engineering Colleges' },
          { label: 'Proof Verified', val: '95.4%', sub: 'Public GitHub Commits & LinkedIn' },
          { label: 'Top Placement CTC', val: '₹21 LPA', sub: 'Landed at Tech Unicorns' },
          { label: 'Real Projects Built', val: '60', sub: 'Production-ready Codebases' },
        ].map((m, idx) => (
          <div key={idx} className="linear-surface-1 p-5 rounded-lg border border-hairline space-y-1">
            <div className="text-2xl sm:text-3xl font-semibold text-ink tracking-headline font-display">{m.val}</div>
            <div className="text-xs font-medium text-ink-muted">{m.label}</div>
            <div className="text-[11px] text-ink-subtle">{m.sub}</div>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS: THE DAILY PROOF-OF-WORK HABIT */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-medium tracking-eyebrow text-primary">THE DAILY PROOF-OF-WORK HABIT</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-ink tracking-headline">Engineered for real consistency.</h2>
          <p className="text-sm text-ink-muted max-w-xl mx-auto">
            30-45 minutes every night. Designed specifically for college students balancing lectures, midterms, and late-night coding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="linear-surface-1 p-6 rounded-lg border border-hairline space-y-4">
            <div className="w-9 h-9 rounded-md bg-surface-2 border border-hairline-strong flex items-center justify-center text-ink font-mono font-semibold text-sm">
              01
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-ink tracking-card-title">Read Daily Engineering Task</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Receive structured night-owl coding assignments tailored for your chosen track (Full-Stack, AI, Mobile).
              </p>
            </div>
            <div className="pt-2 text-[11px] text-ink-subtle font-mono border-t border-hairline">
              ⏱️ 30-45 Mins • Code Starter Snippets Provided
            </div>
          </div>

          {/* Step 2 */}
          <div className="linear-surface-1 p-6 rounded-lg border border-hairline space-y-4">
            <div className="w-9 h-9 rounded-md bg-surface-2 border border-hairline-strong flex items-center justify-center text-ink font-mono font-semibold text-sm">
              02
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-ink tracking-card-title flex items-center justify-between">
                <span>Push GitHub Commit</span>
                <Github className="w-4 h-4 text-ink-subtle" />
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Write clean code on your laptop or phone and push public commits to your challenge GitHub repository.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-ink-subtle font-mono border-t border-hairline">
              Git Commit Verification • Auto-Streak Increment
            </div>
          </div>

          {/* Step 3 */}
          <div className="linear-surface-1 p-6 rounded-lg border border-hairline space-y-4">
            <div className="w-9 h-9 rounded-md bg-surface-2 border border-hairline-strong flex items-center justify-center text-ink font-mono font-semibold text-sm">
              03
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-ink tracking-card-title flex items-center justify-between">
                <span>Post LinkedIn Proof</span>
                <Linkedin className="w-4 h-4 text-primary" />
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Share what you built today using <span className="text-ink font-mono">#ABTalks60DayChallenge</span>. Top tech founders and recruiters follow the tag daily.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-ink-subtle font-mono border-t border-hairline">
              Recruiter Feed Exposure • Public Portfolio Build
            </div>
          </div>

        </div>
      </section>

      {/* CURRICULUM & TRACK SELECTOR SECTION */}
      <section id="curriculum" className="space-y-8 pt-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-medium tracking-eyebrow text-primary">CURRICULUM PATHWAYS</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-ink tracking-headline">Choose your engineering discipline.</h2>
          <p className="text-sm text-ink-muted max-w-xl mx-auto">
            3 industry-vetted tracks designed by senior software architects to prepare you for actual technical interviews and production work.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_TRACKS.map((track) => {
            const isSelected = selectedTrack === track.id;
            return (
              <div
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`p-6 rounded-lg transition-all cursor-pointer space-y-4 ${
                  isSelected 
                    ? 'linear-surface-2 border-hairline-strong shadow-surface-lift' 
                    : 'linear-surface-1 hover:border-hairline-strong'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-md bg-surface-3 text-ink border border-hairline">
                    {track.id === 'fullstack' && <Code2 className="w-5 h-5 text-primary" />}
                    {track.id === 'aiml' && <Brain className="w-5 h-5 text-primary" />}
                    {track.id === 'mobile' && <Smartphone className="w-5 h-5 text-primary" />}
                  </div>
                  {isSelected && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary-hover text-[10px] font-mono font-medium">
                      ACTIVE SELECTION
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-ink tracking-card-title">{track.name}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{track.tagline}</p>
                </div>

                <div className="pt-3 border-t border-hairline space-y-2 text-xs text-ink-subtle">
                  <div className="flex items-center justify-between">
                    <span>Enrolled:</span>
                    <span className="text-ink font-mono">{track.enrolledCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Prerequisites:</span>
                    <span className="text-ink font-mono">{track.prereq}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('/dashboard');
                  }}
                  className={`w-full text-xs py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    isSelected ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  <span>Enroll in Track</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCT UI SCREENSHOT SPOTLIGHT: RECRUITER VERIFICATION */}
      <section className="linear-surface-1 p-6 sm:p-10 rounded-xl border border-hairline grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs uppercase font-medium tracking-eyebrow text-semantic-success">RECRUITER VERIFICATION</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-ink tracking-headline">
            Proof of work speaks louder than a static PDF resume.
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            When you complete the 60-day challenge, recruiters don't just see a certificate — they inspect your commit timeline, code quality, and public technical writing on LinkedIn.
          </p>
          
          <ul className="space-y-2 text-xs text-ink-muted">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-semantic-success" />
              <span>Public GitHub repository with 60 consecutive daily commits</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-semantic-success" />
              <span>Verified proof of work posts indexed by technical hiring teams</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-semantic-success" />
              <span>2 Streak Freeze credits to protect against college exams</span>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('/dashboard')}
              className="btn-primary text-xs px-5 py-2.5"
            >
              <span>Launch Your Proof Pipeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Framing screenshot card */}
        <div className="product-screenshot-card p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-ink-subtle border-b border-hairline pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-semantic-success" />
              <span className="font-mono text-ink">Recruiter Discovery Feed</span>
            </div>
            <span className="text-[10px] font-mono bg-semantic-success/20 text-semantic-success px-2 py-0.5 rounded">LIVE VERIFIED</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-md bg-surface-2 border border-hairline space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-ink">Divyanshu Maurya • B.Tech CSE DS</span>
                <span className="text-amber-400 font-mono text-[11px]">🔥 12-Day Streak</span>
              </div>
              <p className="text-[11px] text-ink-muted">
                "Built an Express.js REST API with input validation middleware & structured error responses."
              </p>
              <div className="flex items-center gap-3 text-[10px] font-mono text-ink-subtle pt-1 border-t border-hairline">
                <span className="text-primary hover:underline flex items-center gap-1">github.com/DM-codes-dev/day12 <ArrowUpRight className="w-3 h-3" /></span>
                <span>Verified by ABTalks Bot</span>
              </div>
            </div>

            <div className="p-3 rounded-md bg-surface-2 border border-hairline space-y-2 opacity-80">
              <div className="flex items-center justify-between">
                <span className="font-medium text-ink">Gaurav Kumar • Landed ₹20 LPA</span>
                <span className="text-semantic-success font-mono text-[11px]">✓ Placed at Unicorn</span>
              </div>
              <p className="text-[11px] text-ink-muted">
                "Completed 60 days of full-stack engineering tasks. Recruiter reached out directly on LinkedIn!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED PLACEMENT STORIES / TESTIMONIALS */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-medium tracking-eyebrow text-primary">VERIFIED PLACEMENTS</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-ink tracking-headline">Real stories from Tier 1, 2 & 3 colleges.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="linear-surface-1 p-6 rounded-lg border border-hairline space-y-4">
              <p className="text-xs sm:text-sm text-ink-muted italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-hairline">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-10 h-10 rounded-full object-cover border border-hairline-strong"
                />
                <div>
                  <h4 className="text-xs font-semibold text-ink">{t.name} • <span className="font-normal text-ink-subtle">{t.college}</span></h4>
                  <p className="text-[11px] text-semantic-success font-medium">{t.placedAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="space-y-6 max-w-3xl mx-auto w-full">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-ink tracking-headline">Frequently Asked Questions</h2>
          <p className="text-xs text-ink-subtle">Everything you need to know about starting your 60-day engineering habit.</p>
        </div>

        <div className="space-y-3">
          {MOCK_FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="linear-surface-1 border border-hairline rounded-lg p-4 cursor-pointer transition-all"
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            >
              <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-ink">
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-ink-subtle transition-transform ${openFaq === i ? 'rotate-180 text-primary' : ''}`} />
              </div>
              {openFaq === i && (
                <p className="text-xs text-ink-muted mt-3 pt-3 border-t border-hairline leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA BANNER */}
      <section className="linear-surface-1 p-8 sm:p-12 rounded-xl border border-hairline text-center space-y-6">
        <div className="space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-ink tracking-headline">Ready to build your proof of work?</h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            Join 6,200+ engineering students. Season 4 starts tonight with Day 1.
          </p>
        </div>

        <button
          onClick={() => onNavigate('/dashboard')}
          className="btn-primary text-sm px-8 py-3.5 mx-auto"
        >
          <Flame className="w-4 h-4 fill-white text-white" />
          <span>Start Day 1 Challenge Today</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
}
