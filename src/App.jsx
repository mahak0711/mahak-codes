import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { Landing } from './components/Landing';
import AboutPage from './components/About';
import ProjectsPage from './components/Projects';
import ContactPage from './components/Contacts';
import PageTransition from './components/ui/PageTransition';
import CursorSpotlight from './components/ui/CursorSpotlight';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 z-50 origin-left"
      style={{ scaleX }}
    />
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <CursorSpotlight />
      <ScrollProgressBar />
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
