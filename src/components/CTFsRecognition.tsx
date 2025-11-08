import { Trophy, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTFsRecognition = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
  const ctfs = [
    "Ranked 6th among 250+ teams in the C3iHub CTF.",
    "Participated in RedTeam Hackers Academy CTF and Meta CTF.",
    "Solved challenges in HackTheBox, TryHackMe, and PicoCTF.",
  ];

  const achievements = [
    "45+ Responsible Vulnerability Disclosures",
    "Featured in Security Hall of Fame (7 organizations)",
    "Bug Bounty Recognition from OpenAI, Brave, Opera, and more",
  ];

  return (
    <section id="ctfs" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-mono font-bold text-foreground mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          CTFs & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            ref={leftRef}
            className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-mono font-semibold text-primary">
                CTF Competitions
              </h3>
            </div>
            <ul className="space-y-3">
              {ctfs.map((ctf, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-muted-foreground border-l-2 border-border pl-4 hover:border-primary transition-colors"
                >
                  <span className="text-primary mt-1">▸</span>
                  <span>{ctf}</span>
                </li>
              ))}
            </ul>
          </div>
          <div 
            ref={rightRef}
            className={`transition-all duration-700 delay-100 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-mono font-semibold text-primary">
                Achievements
              </h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-muted-foreground border-l-2 border-border pl-4 hover:border-primary transition-colors"
                >
                  <span className="text-primary mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTFsRecognition;
