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
  Briefcase 
} from 'lucide-react';
import { MOCK_TRACKS, MOCK_TESTIMONIALS, MOCK_FAQS } from '../data/mockData';

export default function LandingPage({ onNavigate }) {
  const [selectedTrack, setSelectedTrack] = useState('fullstack');
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="flex-1 flex flex-col bg-[#090D16] text-white">
      {/* Hero Section */}
      <section className="relative px-5 pt-8 pb-10 flex flex-col items-center text-center overflow-hidden bg-radial-gradient">
        
        {/* Trust Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-4 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>For Indian College Students • Season 4 Open</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl font-extrabold tracking-tight leading-tight mb-3 font-heading">
          60 Days. 1 Daily Habit.<br />
          <span className="text-gradient">Land Your Dream Tech Job.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
          Build a real software project every single night after college. Submit your GitHub commit & LinkedIn post to maintain your streak and get discovered by top tech recruiters.
        </p>

        {/* Primary CTA */}
        <button
          onClick={() => onNavigate('/dashboard')}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-black font-extrabold text-sm shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-heading"
        >
          <Flame className="w-5 h-5 fill-black text-black animate-bounce" />
          <span>START DAY 1 CHALLENGE (FREE)</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>

        <p className="text-[11px] text-gray-400 mt-2.5 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>No credit card required • Designed for mobile</span>
        </p>

        {/* Key Metrics Strip */}
        <div className="w-full grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-brand-border/60">
          <div className="bg-[#121A2D] p-2.5 rounded-xl border border-brand-border/80 text-center">
            <div className="text-base font-extrabold text-cyan-400 font-heading">5,200+</div>
            <div className="text-[10px] text-gray-400">Students Joined</div>
          </div>
          <div className="bg-[#121A2D] p-2.5 rounded-xl border border-brand-border/80 text-center">
            <div className="text-base font-extrabold text-emerald-400 font-heading">85%</div>
            <div className="text-[10px] text-gray-400">Placement Rate</div>
          </div>
          <div className="bg-[#121A2D] p-2.5 rounded-xl border border-brand-border/80 text-center">
            <div className="text-base font-extrabold text-purple-400 font-heading">₹12 LPA</div>
            <div className="text-[10px] text-gray-400">Avg CTC Boost</div>
          </div>
        </div>

      </section>

      {/* How Proof of Work Works (Clear Process) */}
      <section className="px-5 py-8 bg-[#0D1322] border-y border-brand-border/60">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase">THE DAILY PROOF-OF-WORK HABIT</span>
          <h2 className="text-xl font-bold text-white mt-1 font-heading">How You Win in 3 Steps</h2>
        </div>

        <div className="space-y-3">
          
          {/* Step 1 */}
          <div className="glass-panel p-4 rounded-xl flex items-start gap-3 border border-brand-border">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-extrabold text-sm shrink-0 font-heading">
              1
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-heading">Pick Your Track & Read Daily Task</h3>
              <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                Receive structured late-night coding tasks tailored for college schedules (30-45 mins).
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-panel p-4 rounded-xl flex items-start gap-3 border border-brand-border">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-extrabold text-sm shrink-0 font-heading">
              2
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-heading">
                Build & Push GitHub Commit
                <Github className="w-3.5 h-3.5 text-gray-400" />
              </h3>
              <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                Write real code on your phone or laptop and push your commit to your public GitHub repo.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-panel p-4 rounded-xl flex items-start gap-3 border border-brand-border">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-sm shrink-0 font-heading">
              3
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-heading">
                Post LinkedIn Proof of Work
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              </h3>
              <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                Share what you built today. recruiters follow our hashtag <span className="text-cyan-400 font-mono">#ABTalks60DayChallenge</span> to hire top talent.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Track Selector Section */}
      <section className="px-5 py-8">
        <div className="text-center mb-5">
          <span className="text-[11px] font-bold tracking-widest text-purple-400 uppercase">CHOOSE YOUR PATHWAY</span>
          <h2 className="text-xl font-bold text-white mt-1 font-heading">3 Industry-Designed Tracks</h2>
        </div>

        <div className="space-y-3">
          {MOCK_TRACKS.map((track) => (
            <div
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedTrack === track.id
                  ? 'bg-[#151D33] border-cyan-500/80 shadow-glow-cyan'
                  : 'bg-[#0E1526] border-brand-border hover:border-gray-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${track.color} text-black font-bold`}>
                    {track.id === 'fullstack' && <Code2 className="w-4 h-4 text-white" />}
                    {track.id === 'aiml' && <Brain className="w-4 h-4 text-white" />}
                    {track.id === 'mobile' && <Smartphone className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-heading">{track.name}</h3>
                    <p className="text-[11px] text-cyan-400 font-mono">{track.enrolledCount}</p>
                  </div>
                </div>
                {selectedTrack === track.id && (
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                )}
              </div>

              <p className="text-xs text-gray-300 mb-2.5 leading-normal">
                {track.tagline}
              </p>

              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-brand-border/40">
                <span>Prereq: {track.prereq}</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  Day 1 to 60 Roadmap <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Placement Stories / Social Proof */}
      <section className="px-5 py-8 bg-[#0D1322] border-t border-brand-border/60">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1 text-amber-400 text-xs font-bold mb-1">
            <Award className="w-4 h-4" />
            <span>REAL STUDENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-xl font-bold text-white font-heading">From Tier 3 College to High-Paying Tech Roles</h2>
        </div>

        <div className="space-y-4">
          {MOCK_TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl border border-brand-border">
              <p className="text-xs italic text-gray-200 leading-relaxed mb-3">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-brand-border/40">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-9 h-9 rounded-full object-cover border border-cyan-400/40"
                />
                <div>
                  <h4 className="text-xs font-bold text-white font-heading">{t.name} • <span className="text-gray-400 font-normal">{t.college}</span></h4>
                  <p className="text-[10px] text-emerald-400 font-semibold">{t.placedAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-5 py-8">
        <h2 className="text-xl font-bold text-white text-center mb-5 font-heading">Frequently Asked Questions</h2>
        <div className="space-y-2.5">
          {MOCK_FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="bg-[#0E1526] border border-brand-border rounded-xl p-3.5 cursor-pointer transition-all"
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            >
              <div className="flex items-center justify-between text-xs font-bold text-white font-heading">
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </div>
              {openFaq === i && (
                <p className="text-xs text-gray-300 mt-2 pt-2 border-t border-brand-border/40 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Sticky Floating CTA */}
      <div className="p-4 bg-[#0B0F19] border-t border-brand-border sticky bottom-[53px] z-30 shadow-2xl">
        <button
          onClick={() => onNavigate('/dashboard')}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-black font-extrabold text-xs tracking-wide shadow-glow-cyan flex items-center justify-center gap-2 font-heading"
        >
          <Zap className="w-4 h-4 fill-black text-black" />
          <span>JOIN SEASON 4 & START DAY 1 TODAY</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

    </div>
  );
}
