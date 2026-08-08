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
  Flame,
  Terminal,
  Code2
} from 'lucide-react';
import { MOCK_DAY_12_TASK } from '../data/mockData';

export default function ChallengeDay({ dayNum, onNavigate, onCompleteDay, studentState }) {
  const currentDay = parseInt(dayNum) || 12;
  const task = MOCK_DAY_12_TASK;

  const [githubUrl, setGithubUrl] = useState('https://github.com/DM-codes-dev/abtalks-60day/commit/8f2a1b9');
  const [linkedinUrl, setLinkedinUrl] = useState('https://linkedin.com/posts/divyanshu-maurya-day12-proof');
  const [reflection, setReflection] = useState('Built controller middleware for Express and tested endpoints with ThunderClient!');
  
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
    }, 1000);
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
    <div className="flex-1 flex flex-col space-y-6">
      
      {/* TOP HEADER & BREADCRUMB NAVIGATION */}
      <div className="flex items-center justify-between pb-3 border-b border-hairline">
        <button
          onClick={() => onNavigate('/dashboard')}
          className="flex items-center gap-1.5 text-xs text-ink-subtle hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            disabled={currentDay <= 1}
            onClick={() => onNavigate(`/day/${currentDay - 1}`)}
            className="p-1 rounded bg-surface-1 border border-hairline text-ink-subtle hover:text-ink disabled:opacity-30"
            title="Previous Day"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <span className="font-mono text-xs text-ink font-medium">
            DAY {currentDay} OF 60
          </span>
          <button
            disabled={currentDay >= 60}
            onClick={() => onNavigate(`/day/${currentDay + 1}`)}
            className="p-1 rounded bg-surface-1 border border-hairline text-ink-subtle hover:text-ink disabled:opacity-30"
            title="Next Day"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* TASK OVERVIEW CARD */}
      <div className="product-screenshot-card p-6 space-y-4">
        
        {/* Track Tag & Reward */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary-hover font-mono text-[11px] font-medium border border-primary/30 uppercase">
            {task.track}
          </span>
          <div className="flex items-center gap-4 text-xs font-mono text-ink-subtle">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> {task.estimatedMinutes} Mins
            </span>
            <span className="text-primary font-semibold flex items-center gap-0.5">
              <Zap className="w-3.5 h-3.5" /> +{task.xpReward} XP Reward
            </span>
          </div>
        </div>

        {/* Task Title & Lead */}
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-semibold text-ink tracking-headline">
            {task.title}
          </h1>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            {task.overview}
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="linear-surface-2 p-4 rounded-lg border border-hairline-strong space-y-3">
          <h3 className="text-xs font-semibold text-ink">What You Will Build & Deliver Today:</h3>
          <ul className="space-y-2 text-xs text-ink-muted">
            {task.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-semantic-success shrink-0 mt-0.5" />
                <span className="leading-tight">{obj}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* STARTER CODE SNIPPET PANEL */}
      <div className="linear-surface-1 p-6 rounded-xl border border-hairline space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-ink">
            <Terminal className="w-4 h-4 text-primary" />
            <span>starter-code.js</span>
          </div>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 text-xs text-primary hover:text-primary-hover font-mono px-3 py-1 rounded bg-surface-2 border border-hairline"
          >
            {copiedCode ? <Check className="w-3.5 h-3.5 text-semantic-success" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCode ? 'Copied!' : 'Copy Code Snippet'}</span>
          </button>
        </div>

        <div className="bg-canvas p-4 rounded-lg border border-hairline font-mono text-xs text-ink overflow-x-auto leading-relaxed">
          <pre className="text-[12px]">
            <code>{task.starterSnippet}</code>
          </pre>
        </div>
      </div>

      {/* HINTS ACCORDION */}
      <div className="linear-surface-1 border border-hairline rounded-lg p-4">
        <button
          onClick={() => setShowHints(!showHints)}
          className="w-full flex items-center justify-between text-xs font-semibold text-ink"
        >
          <span className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span>Need a hint or commit tip?</span>
          </span>
          <span className="text-[11px] font-mono text-ink-subtle">{showHints ? 'Hide Hints' : 'Show Hints'}</span>
        </button>

        {showHints && (
          <div className="mt-3 pt-3 border-t border-hairline text-xs text-ink-muted space-y-2">
            {task.hints.map((hint, idx) => (
              <p key={idx} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{hint}</span>
              </p>
            ))}
          </div>
        )}
      </div>

      {/* PROOF OF WORK SUBMISSION FORM */}
      <div className="linear-surface-2 p-6 rounded-xl border border-hairline-strong space-y-5">
        
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <div>
            <h2 className="text-base font-semibold text-ink flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Submit Proof of Work</span>
            </h2>
            <p className="text-xs text-ink-subtle">Push your commit and post on LinkedIn to lock your day streak.</p>
          </div>
          <span className="text-xs font-mono bg-semantic-success/20 text-semantic-success px-2.5 py-1 rounded border border-semantic-success/30">
            Day {currentDay}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* Field 1: GitHub Commit URL */}
          <div className="space-y-1.5">
            <label className="font-medium text-ink flex items-center gap-2">
              <Github className="w-4 h-4 text-ink-subtle" />
              <span>GitHub Commit URL <span className="text-primary">*</span></span>
            </label>
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/username/repo/commit/hash"
              className="w-full px-3.5 py-2.5 rounded-md bg-surface-1 border border-hairline focus:border-primary-focus focus:outline-none font-mono text-xs text-ink"
              required
            />
          </div>

          {/* Field 2: LinkedIn Post URL */}
          <div className="space-y-1.5">
            <label className="font-medium text-ink flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-primary" />
              <span>LinkedIn Post URL <span className="text-primary">*</span></span>
            </label>
            <input
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://linkedin.com/posts/username-day12-proof"
              className="w-full px-3.5 py-2.5 rounded-md bg-surface-1 border border-hairline focus:border-primary-focus focus:outline-none font-mono text-xs text-ink"
              required
            />
          </div>

          {/* Field 3: Reflection */}
          <div className="space-y-1.5">
            <label className="font-medium text-ink flex items-center justify-between">
              <span>Today's Learning Reflection (Optional)</span>
              <span className="text-[10px] text-ink-subtle">Recruiters read this</span>
            </label>
            <textarea
              rows={2}
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="What main concept or bug did you solve today?"
              className="w-full px-3.5 py-2.5 rounded-md bg-surface-1 border border-hairline focus:border-primary-focus focus:outline-none text-xs text-ink"
            />
          </div>

          {/* AI Pre-flight Validator */}
          <div className="pt-1 space-y-2">
            <button
              type="button"
              onClick={handlePreflightValidate}
              disabled={isValidating}
              className="btn-secondary w-full text-xs py-2"
            >
              <Sparkles className={`w-3.5 h-3.5 text-primary ${isValidating ? 'animate-spin' : ''}`} />
              <span>{isValidating ? 'Running AI Validation...' : 'Run AI Proof-of-Work Pre-flight Check'}</span>
            </button>

            {validationResult && (
              <div className={`p-3 rounded-md text-xs flex items-start gap-2 border ${
                validationResult.valid 
                  ? 'bg-semantic-success/10 border-semantic-success/40 text-semantic-success'
                  : 'bg-rose-500/10 border-rose-500/40 text-rose-300'
              }`}>
                {validationResult.valid ? (
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                )}
                <span>{validationResult.msg}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-primary w-full text-xs py-3"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Submit Proof of Work & Lock Day Streak</span>
          </button>

        </form>

      </div>

      {/* SUBMISSION SUCCESS MODAL */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-canvas/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="linear-surface-2 max-w-sm w-full p-6 rounded-xl border border-hairline-strong text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-semantic-success/20 text-semantic-success flex items-center justify-center mx-auto border border-semantic-success/40">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-ink">Proof of Work Verified! 🎉</h2>
              <p className="text-xs text-ink-muted leading-relaxed">
                Your GitHub commit and LinkedIn post have been registered. Your streak is officially locked for Day {currentDay}!
              </p>
            </div>

            <div className="linear-surface-1 p-3 rounded-md border border-hairline text-left space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-ink">
                <span>Streak Updated:</span>
                <span className="text-amber-400 font-semibold">🔥 {currentDay} Days</span>
              </div>
              <div className="flex items-center justify-between text-ink">
                <span>XP Earned:</span>
                <span className="text-primary font-semibold">+120 XP</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/dashboard')}
              className="btn-primary w-full text-xs py-2.5"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
