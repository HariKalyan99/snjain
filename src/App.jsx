import { lazy } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './lib/SmoothScroll';
import { QuoteProvider } from './context/QuoteContext';
import { SiteAudioProvider } from './context/SiteAudioContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Materials = lazy(() => import('./pages/Materials'));
const Industries = lazy(() => import('./pages/Industries'));
const GlobalPresence = lazy(() => import('./pages/GlobalPresence'));
const Operations = lazy(() => import('./pages/Operations'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/sustainability" element={<Navigate to="/operations" replace />} />
          <Route path="/infrastructure" element={<Navigate to="/operations" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <QuoteProvider>
      <SiteAudioProvider>
        <SmoothScroll>
          <AnimatedRoutes />
        </SmoothScroll>
      </SiteAudioProvider>
    </QuoteProvider>
  );
}
