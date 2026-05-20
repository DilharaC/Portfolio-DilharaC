import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import Nav from "./components/portfolio/Nav";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Experience from "./components/portfolio/Experience";
import Blog from "./components/portfolio/Blog";
import Testimonials from "./components/portfolio/Testimonials";
import Contact from "./components/portfolio/Contact";

function Portfolio() {
  return (
    <div
      data-testid="portfolio-root"
      className="min-h-screen bg-ink text-white font-body"
    >
      <Nav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Testimonials />
        <Contact />
      </main>

      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0f0f0f",
            color: "#f5f5f5",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 0,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 12,
            letterSpacing: "0.05em",
          },
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/Portfolio-DilharaC">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}