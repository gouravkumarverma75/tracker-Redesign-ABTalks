import React, { useState, useEffect } from 'react';
import MobileContainer from './components/MobileContainer';
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
      return <LandingPage onNavigate={navigateTo} />;
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
        />
      );
    }

    // Default Fallback
    return <LandingPage onNavigate={navigateTo} />;
  };

  return (
    <MobileContainer
      currentRoute={currentRoute}
      onNavigate={navigateTo}
      studentState={studentState}
      setStudentStateKey={setStudentStateKey}
    >
      {renderCurrentView()}
    </MobileContainer>
  );
}
