import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ChatAssistant from "./Components/ChatAssistant/ChatAssistant";

// Lazy-load route pages for optimal performance & code-splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));

// Minimal fallback loading state
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center font-mono text-xs text-[#71717a]">
      <span>Loading...</span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] flex flex-col justify-between selection:bg-[#262626] selection:text-white">
        
        {/* Minimal Navigation */}
        <Navbar />

        {/* Main Content Pages with Route Split */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:projectId" element={<ProjectDetail />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Minimal Footer */}
        <Footer />

        {/* Floating Minimal Chat Assistant */}
        <ChatAssistant />
      </div>
    </BrowserRouter>
  );
}