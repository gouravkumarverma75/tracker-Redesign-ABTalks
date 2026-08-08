// ABTalks 60-Day Coding Challenge - Mock Database

export const MOCK_TRACKS = [
  {
    id: 'fullstack',
    name: 'Full-Stack Web Engineering',
    tagline: 'React, Node.js, PostgreSQL, Docker & System Design',
    color: 'from-cyan-500 to-blue-600',
    icon: 'Code2',
    enrolledCount: '2,476 students',
    prereq: 'Basic JavaScript knowledge'
  },
  {
    id: 'aiml',
    name: 'AI & Data Engineering',
    tagline: 'Python, PyTorch, RAG Systems, Fine-Tuning & LLMs',
    color: 'from-purple-500 to-pink-600',
    icon: 'Brain',
    enrolledCount: '2,350 students',
    prereq: 'Basic Python & Algebra'
  },
  {
    id: 'mobile',
    name: 'Mobile App Development',
    tagline: 'React Native, Expo, Firebase & Mobile Architecture',
    color: 'from-emerald-500 to-teal-600',
    icon: 'Smartphone',
    enrolledCount: '3,420 students',
    prereq: 'Basic React or JS'
  }
];

export const MOCK_STUDENT_PRESETS = {
  active: {
    name: 'Divyanshu Maurya',
    college: 'ABES Engineering College',
    degree: 'B.Tech CSE DS(2nd Year)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    trackId: 'fullstack',
    trackName: 'Full-Stack Web Engineering',
    currentStreak: 12,
    longestStreak: 12,
    completedDaysCount: 12,
    currentDayNumber: 12,
    xpPoints: 1550,
    rank: 10,
    totalStudentsInCollege: 370,
    freezeCreditsLeft: 1,
    missedDay: false,
    githubUsername: 'DM-codes-dev',
    linkedinHandle: 'in/divyanshu-maurya-tech',
    achievements: [
      { id: 1, title: '7-Day Iron Streak', icon: 'Flame', desc: 'Completed 7 consecutive days of proof of work' },
      { id: 2, title: 'First Open Source Push', icon: 'GitPullRequest', desc: 'Submitted valid public GitHub commit' },
      { id: 3, title: 'Late Night Coder', icon: 'Moon', desc: 'Submitted proof of work between 11 PM and 2 AM' }
    ]
  },
  day1_newbie: {
    name: 'Aman Gurnani',
    college: 'ABES Engineering College',
    degree: 'B.Tech CSE DS(2nd Year)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    trackId: 'fullstack',
    trackName: 'Full-Stack Web Engineering',
    currentStreak: 0,
    longestStreak: 0,
    completedDaysCount: 0,
    currentDayNumber: 1,
    xpPoints: 50,
    rank: 192,
    totalStudentsInCollege: 210,
    freezeCreditsLeft: 2,
    missedDay: false,
    githubUsername: '',
    linkedinHandle: '',
    achievements: []
  },
  missed_day: {
    name: 'Gaurav kumar',
    college: 'ABES Engineering College',
    degree: 'B.Tech CSE DS(2nd Year)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    trackId: 'fullstack',
    trackName: 'Full-Stack Web Engineering',
    currentStreak: 8,
    longestStreak: 8,
    completedDaysCount: 8,
    currentDayNumber: 10,
    xpPoints: 990,
    rank: 35,
    totalStudentsInCollege: 290,
    freezeCreditsLeft: 0,
    missedDay: true,
    missedDayNum: 9,
    githubUsername: 'GK-codes-dev',
    linkedinHandle: 'in/gaurav-kumar-eng',
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
      githubUrl: 'https://github.com/DM-codes-dev/abtalks-60day/commit/8f2a1b9',
      linkedinUrl: 'https://linkedin.com/posts/divyanshu-maurya-day11-proof',
      submittedAt: 'Yesterday, 11:42 PM',
      status: 'VERIFIED'
    }
  ]
};

export const MOCK_TESTIMONIALS = [
  {
    name: 'Amisha Gupta',
    college: 'ABES Engineering College',
    placedAt: 'Landed ₹20 LPA Software Engineer Role at Tech Unicorn',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    quote: 'Before ABTalks 60-day challenge, my GitHub was completely empty and recruiters ignored my resume. Building daily for 60 days gave me 6 real projects and 60 public proof of work posts. A founder DM’d me directly on LinkedIn!'
  },
  {
    name: 'Divyanshu Maurya',
    college: 'ABES Engineering College',
    placedAt: 'Founder of DMSTARS -A Bakery Startup.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'Building a startup while managing college was not easy, but every small step forward reminded me why I started. Discipline turned my ideas into action.'
  },
  {
    name: 'Gaurav Kumar',
    college: 'ABES Engineering College',
    placedAt: 'Landed ₹24 LPA Software Engineer Role at Tech Unicorn',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'The ABTalks 60-day challenge was a game-changer for me. I went from having no projects to showcasing 5 real-world applications on my GitHub. The daily tasks kept me accountable, and the community support was incredible.'
  },
  {
    name: 'Aman Gurnani',
    college: 'ABES Engineering College',
    placedAt: 'Landed ₹18 LPA Software Engineer Role at Tech Unicorn',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'Building a startup while managing college was not easy, but every small step forward reminded me why I started. Discipline turned my ideas into action.'
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
  },
  {
    q: 'Will I build real projects?',
    a: 'Yes. You’ll work on practical projects that help you apply what you learn and strengthen your portfolio.'
  },
  {
    q: 'Will I get a certificate after completing the course?',
    a: 'yes, you will receive a certificate of completion after successfully finishing the 60-day challenge, which can be added to your LinkedIn profile and resume.'
  }
];
