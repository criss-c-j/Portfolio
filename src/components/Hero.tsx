import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { displayedText, isComplete } = useTypewriter("Cristo C Johnson", 80, 300);
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div ref={ref} className={`container max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl md:text-7xl font-mono font-bold text-foreground mb-6">
          {displayedText}<span className={`text-primary ${isComplete ? 'animate-fast-pulse' : ''}`}>_</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
          Security Engineer & Bug Bounty Researcher
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Specializing in Web Security, Mobile Security, AI/ML Security, and Responsible Disclosure. 
          45+ vulnerabilities discovered across major platforms including Swiggy, TikTok, BMW, LinkedIn, Samsung and OpenAI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-primary text-background hover:bg-accent font-mono w-full sm:w-1/3"
          >
            View Work
          </Button>
          <Button
            onClick={() => scrollToSection("experience")}
            className="bg-primary text-background hover:bg-accent font-mono w-full sm:w-1/3"
          >
            Experience
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-background font-mono w-full sm:w-1/3"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
