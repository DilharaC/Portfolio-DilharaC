import About from "./components/About";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Matrix from "./components/Matrix";
import Navbar from "./components/Navbar";
import Philosophy from "./components/Philosophy";
import Projects from "./components/Projects";
import ScrollIndicators from "./components/ScrollIndicators";
import Writing from "./components/Writing";
import { useScrollProgress } from "./hooks/useScrollProgress";

export default function App() {
  const { scrolled, progressPct, trackFillPct } = useScrollProgress();

  return (
    <>
      <ScrollIndicators progressPct={progressPct} trackFillPct={trackFillPct} />
      <Navbar scrolled={scrolled} />

      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <About />
        <Projects />
        <Matrix />
        <Credentials />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
