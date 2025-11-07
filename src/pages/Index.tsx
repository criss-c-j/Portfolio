import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CTFsRecognition from "@/components/CTFsRecognition";
import Certifications from "@/components/Certifications";
import HallOfFame from "@/components/HallOfFame";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CTFsRecognition />
      <Certifications />
      <HallOfFame />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
