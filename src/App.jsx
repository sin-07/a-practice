import { lazy, Suspense } from 'react';
import Header from './components/Header.jsx';
import ProfileSummary from './components/ProfileSummary.jsx';
import AccessibilityAnnouncer from './components/AccessibilityAnnouncer.jsx';

// Lazy load less critical components for better performance
const Education = lazy(() => import('./components/Education.jsx'));
const TechnicalSkills = lazy(() => import('./components/TechnicalSkills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Hackathon = lazy(() => import('./components/Hackathon.jsx'));
const CoreCompetencies = lazy(() => import('./components/CoreCompetencies.jsx'));
const Declaration = lazy(() => import('./components/Declaration.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

// Loading component for better UX
const SectionLoader = () => (
  <div className="section-padding">
    <div className="container mx-auto container-padding">
      <div className="lazy-placeholder max-w-4xl mx-auto">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white gpu-accelerated">
      <AccessibilityAnnouncer />
      <Header />
      <main id="main-content" className="pt-16 sm:pt-20 lg:pt-24" tabIndex="-1" role="main" aria-label="Main content">
        <ProfileSummary />
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TechnicalSkills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Hackathon />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CoreCompetencies />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Declaration />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;