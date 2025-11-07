import { Shield, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Certifications = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const certifications = [
    "Certified Ethical Hacker (CEH) - EC-Council",
    "Advanced Diploma in Cyber Defence - RedTeam Hacker Academy",
    "TryHackMe | HackTheBox Active Learner",
    "Tata Cybersecurity Analyst Training (Forage)",
    "Internshala Ethical Hacking Training",
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-mono font-bold text-foreground mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Certifications & Training
        </h2>
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto"
        >
          <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Shield className="w-6 h-6 text-primary" />
            <p className="text-muted-foreground">
              Industry-recognized certifications demonstrating expertise in cybersecurity and ethical hacking
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 p-4 border border-border bg-card rounded-sm hover:border-primary transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 50 + 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
