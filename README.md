# ABTalks 60-Day Coding Challenge Platform

A mobile-first web application designed for Indian college students building daily proof-of-work habits late at night after college.

---

## Route Map

Provide the three routes below, one per line, in this exact order:

```
/
/dashboard
/day/12
```

---

## Key Features & Highlights

### 1. Mobile-First (390px Viewport) Optimization
- Built specifically for 390px mobile viewports (iPhone 12/13/14 Pro dimensions).
- Includes an interactive **390px Viewport Simulator Frame** for desktop evaluators.

### 2. The 3 Core Screens
- **Landing Page (`/`)**: High-trust motivational experience explaining the 3-step proof-of-work workflow (Track -> GitHub Commit -> LinkedIn Post), displaying track choices, metrics, and placement testimonials from Tier 2/3 engineering colleges.
- **Student Dashboard (`/dashboard`)**: Post-login home screen featuring live streak counter, today's task CTA, 60-day visual habit matrix, college rank, and XP badges.
- **Challenge Day (`/day/12`)**: Complete single-day coding experience with learning objectives, 1-click code snippet copy, hint drawer, proof-of-work submit form, and confetti celebration.

### 3. Edge-Case Support (State Switcher Toolbar)
Judges can test all real-world edge cases with 1 click using the top control bar:
- 🔥 **Active Student**: 12-day streak active (default: Aarav Sharma).
- 🌱 **Day 1 Newbie**: First day with 0 streak onboarding banner (Riya Patel).
- ⚠️ **Missed Day**: Streak Repair alert banner with dual-commit recovery task (Karan Verma).
- 👤 **Empty Profile**: Unconfigured student track selector.

### 4. Thoughtful Innovations
- **AI Proof-of-Work Pre-flight Validator**: Checks pasted GitHub commit URLs and LinkedIn post tags before submission.
- **Late-Night Streak Saver**: Protects student streaks during college midterm exams.

---

## Quick Start / How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```

3. **Build Production Bundle**:
   ```bash
   npm run build
   ```

---

## Tech Stack
- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS, Lucide Icons, Custom Glassmorphism CSS
- **Animations**: Canvas Confetti
