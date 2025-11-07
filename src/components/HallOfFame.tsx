import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HallOfFame = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();
  const companies = [
    { name: "Swiggy"},
    { name: "TikTok"},
    { name: "BMW"},
    { name: "LinkedIn"},
    { name: "OpenAI"},
    { name: "Brave"},
    { name: "Opera" },
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
        <p 
          ref={subtitleRef}
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Organizations that have acknowledged my responsible vulnerability disclosures
        </p>
        <div 
          ref={logosRef}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {companies.map((company, idx) => (
            <a
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl md:text-2xl font-mono font-semibold text-muted-foreground hover:text-primary transition-all duration-700 ${logosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 100 + 200}ms` }}
            >
              {company.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
