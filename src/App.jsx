import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ChallengeDay from './pages/ChallengeDay';
import { MOCK_STUDENT_PRESETS } from './data/mockData';

export default function App() {
  // Client-side URL Path Routing State
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname || '/');

  // Student State Preset ('active', 'day1_newbie', 'missed_day', 'empty_profile')
  const [studentStateKey, setStudentStateKey] = useState('active');
  const [studentState, setStudentState] = useState(MOCK_STUDENT_PRESETS.active);

  // Sync state key changes
  useEffect(() => {
    setStudentState(MOCK_STUDENT_PRESETS[studentStateKey] || MOCK_STUDENT_PRESETS.active);
  }, [studentStateKey]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Custom Navigation function
  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Callback when a user completes a day task
  const handleCompleteDay = (dayNumber) => {
    setStudentState(prev => ({
      ...prev,
      currentStreak: prev.currentStreak + 1,
      completedDaysCount: Math.max(prev.completedDaysCount, dayNumber),
      xpPoints: prev.xpPoints + 120,
      missedDay: false
    }));
  };

  // Render view based on route
  const renderCurrentView = () => {
    if (currentRoute === '/') {
      return <LandingPage onNavigate={navigateTo} studentState={studentState} setStudentStateKey={setStudentStateKey} />;
    }
    
    if (currentRoute === '/dashboard') {
      return (
        <Dashboard 
          studentState={studentState} 
          onNavigate={navigateTo} 
          setStudentStateKey={setStudentStateKey}
        />
      );
    }
    
    if (currentRoute.startsWith('/day/')) {
      const parts = currentRoute.split('/');
      const dayNum = parts[2] || '12';
      return (
        <ChallengeDay 
          dayNum={dayNum} 
          onNavigate={navigateTo} 
          onCompleteDay={handleCompleteDay}
          studentState={studentState}
        />
      );
    }

    // Default Fallback
    return <LandingPage onNavigate={navigateTo} studentState={studentState} setStudentStateKey={setStudentStateKey} />;
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-primary/30 selection:text-ink">
      <Navigation
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        studentState={studentState}
        setStudentStateKey={setStudentStateKey}
      />
      
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentView()}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
