import { Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HallOfFame = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();
  const companies = [
    { 
      name: "Swiggy",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg",
    },
    { 
      name: "TikTok",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
    },
    { 
      name: "BMW",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    },
    { 
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    },
    { 
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    { 
      name: "Brave",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Brave_Browser_Logo.svg",
    },
    { 
      name: "Opera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Opera_2015_icon.svg",
    },
  ];

  return (
    <section id="hall-of-fame" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-mono font-bold text-foreground mb-8 text-center transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Security Hall of Fame
        </h2>
        <div className="max-w-3xl mx-auto">
          <div 
            ref={subtitleRef}
            className={`flex items-center gap-3 mb-8 transition-all duration-700 delay-100 ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Shield className="w-6 h-6 text-primary" />
            <p className="text-muted-foreground">
              Organizations that have acknowledged my responsible vulnerability disclosures
            </p>
          </div>
          <div 
            ref={logosRef}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {companies.map((company, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center gap-3 p-4 border border-border bg-card rounded-sm hover:border-primary transition-all duration-700 ${logosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 50 + 100}ms` }}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-16 h-16 object-contain transition-all duration-300"
                />
                <span className="text-sm font-mono text-muted-foreground">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
