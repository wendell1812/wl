import { useState, useEffect } from 'react';
import { QuizAnswers } from './types';
import LandingPage from './components/LandingPage';
import QuizFlow from './components/QuizFlow';
import LoadingScreen from './components/LoadingScreen';
import ResultsScreen from './components/ResultsScreen';
import SalesPage from './components/SalesPage';

type ScreenState = 'landing' | 'quiz' | 'loading' | 'results' | 'sales';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('landing');
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [initialAge, setInitialAge] = useState<number>(1);

  // Restore answers from LocalStorage on mount if present, but start on landing page
  useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem('military_calisthenics_answers');
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
      }
      // Reset screen to landing to allow starting fresh on load/refresh
      localStorage.removeItem('military_calisthenics_screen');
      setScreen('landing');
    } catch (e) {
      console.error('Failed to load saved state:', e);
    }
  }, []);

  // Persist state changes
  const updateScreenState = (newScreen: ScreenState, newAnswers?: QuizAnswers) => {
    setScreen(newScreen);
    localStorage.setItem('military_calisthenics_screen', newScreen);
    if (newAnswers) {
      setAnswers(newAnswers);
      localStorage.setItem('military_calisthenics_answers', JSON.stringify(newAnswers));
    }
  };

  const handleStart = (ageValue: number) => {
    setInitialAge(ageValue);
    const updatedAnswers = { 3: ageValue };
    updateScreenState('quiz', updatedAnswers);
  };

  const handleQuizComplete = (quizAnswers: QuizAnswers) => {
    updateScreenState('loading', quizAnswers);
  };

  const handleLoadingComplete = () => {
    updateScreenState('results');
  };

  const handleResultsComplete = () => {
    // Go directly to sales
    updateScreenState('sales');
  };

  const handleRestart = () => {
    localStorage.removeItem('military_calisthenics_screen');
    localStorage.removeItem('military_calisthenics_answers');
    setAnswers({});
    setScreen('landing');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {screen === 'landing' && (
        <LandingPage onStart={handleStart} />
      )}

      {screen === 'quiz' && (
        <QuizFlow
          initialAgeAnswer={initialAge}
          onComplete={handleQuizComplete}
        />
      )}

      {screen === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {screen === 'results' && (
        <ResultsScreen
          answers={answers}
          onContinue={handleResultsComplete}
        />
      )}

      {screen === 'sales' && (
        <SalesPage onRestart={handleRestart} />
      )}
    </div>
  );
}

