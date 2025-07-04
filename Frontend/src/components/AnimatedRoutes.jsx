import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import WrappedLanding from "./Landing"; // already wrapped in Transitions
import History from './History';
import UserForm from './UserForm';
import Selection from './Selection';
import Minimalist from '../templates/Minimalist';
import Creative from '../templates/Creative';
import Corporate from '../templates/Corporate';
import Developer from '../templates/Developer';
import Login from '../auth/Login';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6,
};

const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
    style={{ minHeight: '100vh' }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const share = params.get('share');
    if (share) {
      // Fetch shared portfolio
      fetch(`http://localhost:5000/api/portfolio-share/${share}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.template && data.data) {
            // Lowercase and route match
            const templateRoute = `/${data.template.toLowerCase()}`;
            navigate(templateRoute, { state: data.data, replace: true });
          }
        })
        .catch(err => {
          alert('Failed to load shared portfolio.');
        });
    }
  }, [location.search, navigate]);

  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WrappedLanding />} />
        <Route path="/history" element={<AnimatedPage><History /></AnimatedPage>} />
        <Route path="/form" element={<AnimatedPage><UserForm /></AnimatedPage>} />
        <Route path="/style" element={<AnimatedPage><Selection /></AnimatedPage>} />
        <Route path="/minimalist" element={<AnimatedPage><Minimalist /></AnimatedPage>} />
        <Route path="/creative" element={<AnimatedPage><Creative /></AnimatedPage>} />
        <Route path="/corporate" element={<AnimatedPage><Corporate /></AnimatedPage>} />
        <Route path="/developer" element={<AnimatedPage><Developer /></AnimatedPage>} />
        <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
        <Route path="/minimalist/:portfolioId" element={<AnimatedPage><Minimalist /></AnimatedPage>} />
        <Route path="/creative/:portfolioId" element={<AnimatedPage><Creative /></AnimatedPage>} />
        <Route path="/corporate/:portfolioId" element={<AnimatedPage><Corporate /></AnimatedPage>} />
        <Route path="/developer/:portfolioId" element={<AnimatedPage><Developer /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;