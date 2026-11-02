import { useCallback, useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SignatureSelection from './components/SignatureSelection';
import CulinaryExperience from './components/CulinaryExperience';
import FeaturedPlates from './components/FeaturedPlates';
import Footer from './components/Footer';
import DishModal from './components/DishModal';

export default function App() {
  const [activeDish, setActiveDish] = useState(null);
  const [enquiry, setEnquiry] = useState('');
  const [toast, setToast] = useState('');
  const toastTimer = useRef(0);

  const notify = useCallback((message) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(''), 4200);
  }, []);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const handleEnquire = useCallback((dishName) => {
    setActiveDish(null);
    setEnquiry(dishName);
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 90);
  }, []);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <SignatureSelection onOpenDish={setActiveDish} />
        <CulinaryExperience />
        <FeaturedPlates onOpenDish={setActiveDish} />
      </main>
      <Footer enquiry={enquiry} onClearEnquiry={() => setEnquiry('')} onToast={notify} />

      <DishModal dish={activeDish} onClose={() => setActiveDish(null)} onEnquire={handleEnquire} />

      <div className={`toast ${toast ? 'is-on' : ''}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
