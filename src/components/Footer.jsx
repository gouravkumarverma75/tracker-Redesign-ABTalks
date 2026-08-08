import React from 'react';
import { Flame, Github, Linkedin, Twitter, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="w-full bg-canvas border-t border-hairline py-16 px-6 sm:px-12 text-xs text-ink-subtle">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Brand Column */}
        <div className="col-span-2 space-y-3">
          <div className="flex items-center gap-2 text-ink font-semibold text-sm">
            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-white text-xs">
              <Flame className="w-3.5 h-3.5 fill-white" />
            </div>
            <span>ABTalks 60-Day Challenge</span>
          </div>
          <p className="text-ink-muted text-xs max-w-sm leading-relaxed">
            The 60-day proof-of-work engine for ambitious engineering students. Build daily, push commits, post proof, and get hired by top tech companies.
          </p>
          <div className="text-[11px] text-ink-tertiary pt-2">
            Built for engineering consistency and proof of work.
          </div>
        </div>

        {/* Column 1: Product */}
        <div className="space-y-2.5">
          <h4 className="text-ink font-medium text-xs uppercase tracking-eyebrow">Product</h4>
          <ul className="space-y-2 text-ink-subtle">
            <li><button onClick={() => onNavigate('/')} className="hover:text-ink transition-colors">Overview</button></li>
            <li><button onClick={() => onNavigate('/dashboard')} className="hover:text-ink transition-colors">Student Dashboard</button></li>
            <li><button onClick={() => onNavigate('/day/12')} className="hover:text-ink transition-colors">Daily Task Engine</button></li>
            <li><a href="#curriculum" className="hover:text-ink transition-colors">60-Day Roadmap</a></li>
          </ul>
        </div>

        {/* Column 2: Tracks */}
        <div className="space-y-2.5">
          <h4 className="text-ink font-medium text-xs uppercase tracking-eyebrow">Tracks</h4>
          <ul className="space-y-2 text-ink-subtle">
            <li><span className="hover:text-ink cursor-pointer">Full-Stack Web Engineering</span></li>
            <li><span className="hover:text-ink cursor-pointer">AI & Data Engineering</span></li>
            <li><span className="hover:text-ink cursor-pointer">Mobile App Development</span></li>
            <li><span className="hover:text-ink cursor-pointer">System Design & DevOps</span></li>
          </ul>
        </div>

        {/* Column 3: Community & Social */}
        <div className="space-y-2.5">
          <h4 className="text-ink font-medium text-xs uppercase tracking-eyebrow">Proof Network</h4>
          <ul className="space-y-2 text-ink-subtle">
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-ink transition-colors">
                <span>GitHub Org</span>
                <ArrowUpRight className="w-3 h-3 text-ink-tertiary" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-ink transition-colors">
                <span>#ABTalks60Day</span>
                <ArrowUpRight className="w-3 h-3 text-ink-tertiary" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-ink transition-colors">
                <span>X / Twitter</span>
                <ArrowUpRight className="w-3 h-3 text-ink-tertiary" />
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-hairline-tertiary flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-tertiary">
        <div>© 2026 ABTalks Inc. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
}
