// ABTalks 60-Day Coding Challenge - Mock Database

export const MOCK_TRACKS = [
  {
    id: 'fullstack',
    name: 'Full-Stack Web Engineering',
    tagline: 'React, Node.js, PostgreSQL, Docker & System Design',
    color: 'from-cyan-500 to-blue-600',
    icon: 'Code2',
    enrolledCount: '3,420 students',
    prereq: 'Basic JavaScript knowledge'
  },
  {
    id: 'aiml',
    name: 'AI & Data Engineering',
    tagline: 'Python, PyTorch, RAG Systems, Fine-Tuning & LLMs',
    color: 'from-purple-500 to-pink-600',
    icon: 'Brain',
    enrolledCount: '1,850 students',
    prereq: 'Basic Python & Algebra'
  },
  {
    id: 'mobile',
    name: 'Mobile App Development',
    tagline: 'React Native, Expo, Firebase & Mobile Architecture',
    color: 'from-emerald-500 to-teal-600',
    icon: 'Smartphone',
    enrolledCount: '1,120 students',
    prereq: 'Basic React or JS'
  }
];

export const MOCK_STUDENT_PRESETS = {
  active: {
    name: 'Aarav Sharma',
    college: 'VTU Bengaluru',
    degree: 'B.Tech CSE (3rd Year)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    trackId: 'fullstack',
    trackName: 'Full-Stack Web Engineering',
    currentStreak: 12,
    longestStreak: 12,
    completedDaysCount: 12,
    currentDayNumber: 12,
    xpPoints: 1450,
    rank: 14,
    totalStudentsInCollege: 340,
    freezeCreditsLeft: 1,
    missedDay: false,
    githubUsername: 'aarav-codes-dev',
    linkedinHandle: 'in/aarav-sharma-tech',
    achievements: [
      { id: 1, title: '7-Day Iron Streak', icon: 'Flame', desc: 'Completed 7 consecutive days of proof of work' },
      { id: 2, title: 'First Open Source Push', icon: 'GitPullRequest', desc: 'Submitted valid public GitHub commit' },
      { id: 3, title: 'Late Night Coder', icon: 'Moon', desc: 'Submitted proof of work between 11 PM and 2 AM' }
    ]
  },
  day1_newbie: {
    name: 'Riya Patel',
    college: 'AKTU Lucknow',
    degree: 'B.Tech IT (2nd Year)',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    trackId: 'fullstack',
    trackName: 'Full-Stack Web Engineering',
    currentStreak: 0,
    longestStreak: 0,
    completedDaysCount: 0,
    currentDayNumber: 1,
    xpPoints: 50,
    rank: 182,
    totalStudentsInCollege: 210,
    freezeCreditsLeft: 2,
    missedDay: false,
    githubUsername: '',
    linkedinHandle: '',
    achievements: []
  },
  missed_day: {
    name: 'Karan Verma',
    college: 'Anna University Chennai',
    degree: 'B.E. ECE (4th Year)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    trackId: 'fullstack',
    trackName: 'Full-Stack Web Engineering',
    currentStreak: 8,
    longestStreak: 8,
    completedDaysCount: 8,
    currentDayNumber: 10,
    xpPoints: 920,
    rank: 45,
    totalStudentsInCollege: 290,
    freezeCreditsLeft: 0,
    missedDay: true,
    missedDayNum: 9,
    githubUsername: 'karanv-dev',
    linkedinHandle: 'in/karan-verma-eng',
    achievements: [
      { id: 1, title: '7-Day Iron Streak', icon: 'Flame', desc: 'Completed 7 consecutive days' }
    ]
  },
  empty_profile: {
    name: '',
    college: '',
    degree: '',
    avatar: '',
    trackId: '',
    trackName: '',
    currentStreak: 0,
    longestStreak: 0,
    completedDaysCount: 0,
    currentDayNumber: 1,
    xpPoints: 0,
    rank: 0,
    totalStudentsInCollege: 0,
    freezeCreditsLeft: 2,
    missedDay: false,
    githubUsername: '',
    linkedinHandle: '',
    achievements: []
  }
};

export const MOCK_DAY_12_TASK = {
  dayNumber: 12,
  title: 'Building a Scalable REST API with Node.js & Express',
  track: 'Full-Stack Web Engineering',
  estimatedMinutes: 45,
  xpReward: 120,
  deadlineText: 'Tonight by 11:59 PM',
  overview: `Today you will build a production-structured RESTful API endpoint with Express.js that handles authentication headers, query parameters, input validation, and structured error responses.`,
  learningObjectives: [
    'Set up Express router modules cleanly with Controller pattern',
    'Implement request validation middleware for mandatory payload fields',
    'Return consistent JSON responses with proper HTTP status codes (200, 400, 404, 500)',
    'Push code to GitHub repository with descriptive commit message',
    'Share your progress breakdown on LinkedIn with #ABTalks60DayChallenge'
  ],
  starterSnippet: `// Day 12: Express REST Controller Structure
const express = require('express');
const router = express.Router();

// GET /api/v1/students/standing
router.get('/standing', (req, res) => {
  const { trackId } = req.query;
  if (!trackId) {
    return res.status(400).json({
      success: false,
      error: 'trackId query parameter is required'
    });
  }
  
  res.status(200).json({
    success: true,
    data: {
      totalCompleted: 12,
      streakActive: true
    }
  });
});

module.exports = router;`,
  hints: [
    'Ensure you use `express.json()` middleware before registering routes.',
    'Commit message recommended format: `feat(day12): implement student standing endpoint with validation`',
    'Include screenshot of your Postman / ThunderClient response in your LinkedIn post!'
  ],
  previousSubmissions: [
    {
      githubUrl: 'https://github.com/aarav-codes-dev/abtalks-60day/commit/8f2a1b9',
      linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-day11-proof',
      submittedAt: 'Yesterday, 11:42 PM',
      status: 'VERIFIED'
    }
  ]
};

export const MOCK_TESTIMONIALS = [
  {
    name: 'Ananya Roy',
    college: 'RTU Kota',
    placedAt: 'Landed ₹14 LPA Software Engineer Role at Tech Unicorn',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    quote: 'Before ABTalks 60-day challenge, my GitHub was completely empty and recruiters ignored my resume. Building daily for 60 days gave me 6 real projects and 60 public proof of work posts. A founder DM’d me directly on LinkedIn!'
  },
  {
    name: 'Siddharth Nair',
    college: 'VTU Belagavi',
    placedAt: 'SDE Intern at Fast-Growing AI Startup',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'Coding late at night after college lectures was tough, but seeing my streak flame rise every day kept me going. The daily LinkedIn proof-of-work habit changed my discipline completely.'
  }
];

export const MOCK_FAQS = [
  {
    q: 'How much time does it take every day?',
    a: 'Around 30 to 60 minutes. The tasks are designed specifically for college students balancing lectures, exams, and late-night coding sessions.'
  },
  {
    q: 'What if I miss a day due to college midterms?',
    a: 'You receive 2 Streak Freeze credits at start. You can also perform a "Streak Repair" task by submitting dual proof-of-work the following day.'
  },
  {
    q: 'Is this really free?',
    a: 'Yes, 100% free for Indian college students. Our mission at ABTalks is to help developers from Tier 1, 2, and 3 colleges get visible to top recruiters through proof of work.'
  }
];
