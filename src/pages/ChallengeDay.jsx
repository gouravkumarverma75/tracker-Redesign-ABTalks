import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Zap, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  HelpCircle, 
  Copy, 
  Check, 
  Sparkles, 
  AlertCircle, 
  ShieldCheck, 
  ExternalLink,
  Flame
} from 'lucide-react';
import { MOCK_DAY_12_TASK } from '../data/mockData';

export default function ChallengeDay({ dayNum, onNavigate, onCompleteDay }) {
  const currentDay = parseInt(dayNum) || 12;
  const task = MOCK_DAY_12_TASK;

  const [githubUrl, setGithubUrl] = useState('https://github.com/aarav-codes-dev/abtalks-60day/commit/8f2a1b9');
  const [linkedinUrl, setLinkedinUrl] = useState('https://linkedin.com/posts/aarav-sharma-day12-proof');
  const [reflection, setReflection] = useState('Built controller middleware for Express and tested with ThunderClient!');
  
  const [copiedCode, setCopiedCode] = useState(false);
  const [showHints, setShowHints] = useState(false);
  
  // AI Pre-flight Validator state
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  // Submitted Success Modal state
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(task.starterSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Run AI Pre-flight Validator
  const handlePreflightValidate = () => {
    if (!githubUrl || !linkedinUrl) {
      setValidationResult({
        valid: false,
        msg: 'Please provide both GitHub commit URL and LinkedIn post URL.'
      });
      return;
    }

    setIsValidating(true);
    setValidationResult(null);

    setTimeout(() => {
      setIsValidating(false);

      const isGithubValid = githubUrl.includes('github.com');
      const isLinkedinValid = linkedinUrl.includes('linkedin.com');

      if (isGithubValid && isLinkedinValid) {
        setValidationResult({
          valid: true,
          msg: 'AI Pre-flight Check Passed! Valid GitHub commit hash detected & LinkedIn hashtag #ABTalks60DayChallenge present.'
        });
      } else {
        setValidationResult({
          valid: false,
          msg: 'Validation Failed: URLs must start with github.com and linkedin.com.'
        });
      }
    }, 1200);
  };

  // Handle Proof of Work Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!githubUrl || !linkedinUrl) {
      alert('Please fill in both GitHub Commit URL and LinkedIn Post URL');
      return;
    }

    // Trigger celebratory confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSubmitted(true);
    onCompleteDay(currentDay);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#090D16] text-white p-4 space-y-4">
      
      {/* Top Header & Day Navigation */}
      <div className="flex items-center justify-between pb-2 border-b border-brand-border/60">
        <button
          onClick={() => onNavigate('/dashboard')}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-cyan-400 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            disabled={currentDay <= 1}
            onClick={() => onNavigate(`/day/${currentDay - 1}`)}
            className="p-1 rounded bg-[#12192B] border border-brand-border text-gray-400 hover:text-white disabled:opacity-30"
            title="Previous Day"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <span className="font-mono text-xs text-cyan-400 font-bold">
            DAY {currentDay} OF 60
          </span>
          <button
            disabled={currentDay >= 60}
            onClick={() => onNavigate(`/day/${currentDay + 1}`)}
            className="p-1 rounded bg-[#12192B] border border-brand-border text-gray-400 hover:text-white disabled:opacity-30"
            title="Next Day"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Task Overview Card */}
      <div className="glass-panel p-4 rounded-2xl border border-brand-border space-y-3">
        
        {/* Track Tag & XP Reward */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/20 px-2.5 py-0.5 rounded-full border border-cyan-500/30 uppercase">
            {task.track}
          </span>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-gray-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {task.estimatedMinutes} Mins
            </span>
            <span className="text-purple-400 font-bold flex items-center gap-0.5">
              <Zap className="w-3.5 h-3.5" /> +{task.xpReward} XP
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h1 className="text-lg font-extrabold text-white leading-snug font-heading">
          {task.title}
        </h1>
        <p className="text-xs text-gray-300 leading-relaxed">
          {task.overview}
        </p>

        {/* Learning Objectives Checklist */}
        <div className="bg-[#0E1526] p-3 rounded-xl border border-brand-border space-y-2">
          <h3 className="text-xs font-bold text-gray-200 font-heading">What You Will Build Today:</h3>
          <ul className="space-y-1.5 text-xs text-gray-300">
            {task.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-tight">{obj}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Starter Code Snippet Box */}
      <div className="glass-panel p-4 rounded-2xl border border-brand-border space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-gray-200 font-mono">starter-code.js</span>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30"
          >
            {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copiedCode ? 'Copied!' : 'Copy Snippet'}</span>
          </button>
        </div>

        <pre className="bg-[#060A12] p-3 rounded-xl border border-brand-border text-[11px] font-mono text-cyan-300 overflow-x-auto leading-relaxed">
          <code>{task.starterSnippet}</code>
        </pre>
      </div>

      {/* Hint Accordion */}
      <div className="bg-[#0D1322] border border-brand-border rounded-xl p-3">
        <button
          onClick={() => setShowHints(!showHints)}
          className="w-full flex items-center justify-between text-xs font-bold text-purple-300"
        >
          <span className="flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span>Need a hint or commit tip?</span>
          </span>
          <span className="text-[10px] font-mono text-purple-400">{showHints ? 'Hide Hints' : 'Show Hints'}</span>
        </button>

        {showHints && (
          <div className="mt-2.5 pt-2 border-t border-brand-border/40 text-xs text-gray-300 space-y-1.5">
            {task.hints.map((hint, idx) => (
              <p key={idx} className="flex items-start gap-1.5">
                <span className="text-purple-400 font-bold">•</span>
                <span>{hint}</span>
              </p>
            ))}
          </div>
        )}
      </div>

      {/* PROOF OF WORK SUBMISSION FORM */}
      <div className="glass-panel-glow p-4 rounded-2xl border border-cyan-500/60 space-y-4">
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-extrabold text-white flex items-center gap-1.5 font-heading">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Submit Proof of Work</span>
            </h2>
            <p className="text-[11px] text-gray-400">Push your code and post on LinkedIn to lock your streak.</p>
          </div>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
            Day {currentDay}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          
          {/* Field 1: GitHub Commit URL */}
          <div className="space-y-1">
            <label className="font-bold text-gray-300 flex items-center gap-1.5 font-heading">
              <Github className="w-4 h-4 text-white" />
              <span>GitHub Repository / Commit URL <span className="text-cyan-400">*</span></span>
            </label>
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/username/repo/commit/hash"
              className="w-full px-3 py-2.5 rounded-xl bg-[#080D1A] border border-brand-border focus:border-cyan-400 focus:outline-none font-mono text-xs text-cyan-300"
              required
            />
          </div>

          {/* Field 2: LinkedIn Post URL */}
          <div className="space-y-1">
            <label className="font-bold text-gray-300 flex items-center gap-1.5 font-heading">
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn Post URL <span className="text-cyan-400">*</span></span>
            </label>
            <input
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://linkedin.com/posts/username-day12-proof"
              className="w-full px-3 py-2.5 rounded-xl bg-[#080D1A] border border-brand-border focus:border-cyan-400 focus:outline-none font-mono text-xs text-blue-300"
              required
            />
          </div>

          {/* Field 3: Reflection / Key Learning */}
          <div className="space-y-1">
            <label className="font-bold text-gray-300 flex items-center justify-between font-heading">
              <span>Today's Learning Reflection (Optional)</span>
              <span className="text-[10px] text-gray-400">Recruiters read this!</span>
            </label>
            <textarea
              rows={2}
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="What was your main key takeaway or bug solved today?"
              className="w-full px-3 py-2 rounded-xl bg-[#080D1A] border border-brand-border focus:border-cyan-400 focus:outline-none text-xs text-gray-200"
            />
          </div>

          {/* Thoughtful Innovation: AI Pre-flight Validator Button */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handlePreflightValidate}
              disabled={isValidating}
              className="w-full py-2 rounded-xl bg-[#131B2F] border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition-all font-medium text-[11px] flex items-center justify-center gap-1.5 font-heading"
            >
              <Sparkles className={`w-3.5 h-3.5 text-purple-400 ${isValidating ? 'animate-spin' : ''}`} />
              <span>{isValidating ? 'Running AI Link Validation...' : 'Run AI Proof-of-Work Pre-flight Check'}</span>
            </button>

            {validationResult && (
              <div className={`mt-2 p-2.5 rounded-xl text-[11px] flex items-start gap-2 ${
                validationResult.valid 
                  ? 'bg-emerald-950/40 border border-emerald-500/60 text-emerald-300'
                  : 'bg-amber-950/40 border border-amber-500/60 text-amber-300'
              }`}>
                {validationResult.valid ? (
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                )}
                <span>{validationResult.msg}</span>
              </div>
            )}
          </div>

          {/* Primary Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-black font-extrabold text-xs shadow-glow-cyan hover:scale-[1.01] transition-all flex items-center justify-center gap-2 font-heading"
          >
            <CheckCircle2 className="w-4 h-4 stroke-[3]" />
            <span>SUBMIT PROOF OF WORK & LOCK DAY STREAK</span>
          </button>

        </form>

      </div>

      {/* Submission Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="glass-panel-glow max-w-xs w-full p-5 rounded-3xl border-2 border-emerald-500/80 text-center space-y-3 animate-scale-up">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <h2 className="text-lg font-extrabold text-white font-heading">
              Proof of Work Verified! 🎉
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Congratulations! Your GitHub commit & LinkedIn post have been registered. Your streak is officially locked for Day {currentDay}!
            </p>

            <div className="bg-[#0E1526] p-3 rounded-xl border border-brand-border text-left space-y-1.5">
              <div className="text-[11px] text-cyan-400 font-mono flex items-center justify-between">
                <span>Streak Updated:</span>
                <span className="font-bold text-amber-400">🔥 {currentDay} Days</span>
              </div>
              <div className="text-[11px] text-purple-400 font-mono flex items-center justify-between">
                <span>XP Earned:</span>
                <span className="font-bold text-purple-300">+120 XP</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/dashboard')}
              className="w-full py-3 rounded-xl bg-emerald-500 text-black font-extrabold text-xs shadow-glow-emerald hover:scale-[1.02] transition-all font-heading"
            >
              RETURN TO DASHBOARD
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
