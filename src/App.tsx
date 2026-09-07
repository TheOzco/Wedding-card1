import { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import StoryPage from './components/StoryPage';
import DetailsPage from './components/DetailsPage';
import GalleryPage from './components/GalleryPage';
import RSVPPage from './components/RSVPPage';
import Navigation from './components/Navigation';
import LoadingAnimation from './components/LoadingAnimation';

export default function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setCurrentPage('home');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  if (showWelcome) {
    return <WelcomePage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {isLoading && <LoadingAnimation />}
      
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'story' && <StoryPage />}
        {currentPage === 'details' && <DetailsPage />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'rsvp' && <RSVPPage />}
      </div>

      {!isLoading && <Navigation currentPage={currentPage} onNavigate={navigateTo} />}
    </div>
  );
}
