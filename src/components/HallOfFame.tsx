import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HallOfFame = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();
  const companies = [
    { 
      name: "TikTok",
      logo: "https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-White-Dark-Background-Logo.wine.svg",
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
      logo: "https://lh4.googleusercontent.com/proxy/giEDaX3GfzFq-HAvCa_92K-8lRvuedIQiGrBvxVAqXdRmXoNj-CTe0nJNJVM5P5DYZV7m3imSRVlx7YAPVu4gurNo4jSVXJ8d220_ZWhCyqz08KE53GqC54ayElFbrNb92iOdZMfYXz6",
    },
    { 
      name: "Microsoft",
      logo: "https://s3-alpha.figma.com/hub/file/2747494711/31b6ad5c-b404-4086-a685-89b1d5294f1c-cover.png",
    },
    { 
      name: "Hackerone",
      logo: "https://logowik.com/content/uploads/images/hackerone5828.jpg",
    },
    { 
      name: "Firefox",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
    },
    { 
      name: "Brave",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png",
    },
    { 
      name: "Opera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Opera_2015_icon.svg",
    },
    { 
      name: "Samsung",
      logo: "https://1000logos.net/wp-content/uploads/2017/06/Font-Samsung-Logo.jpg",
    },
    { 
      name: "Grok",
      logo: "https://images.seeklogo.com/logo-png/61/2/grok-logo-png_seeklogo-615650.png",
    },    
    { 
      name: "Supabase",
      logo: "https://miro.medium.com/1*znpVac0II45Ysa0xIiB2dQ.png",
    },
    { 
      name: "Swiggy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    },
    { 
      name: "Affirm",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Affirm_logo.svg/2560px-Affirm_logo.svg.png",
    },
  ];

  return (
    <section id="hall-of-fame" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-mono font-bold text-foreground mb-8 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
          className={`marquee transition-all duration-700 ${logosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="marquee-track gap-8 md:gap-12">
            {companies.map((company, idx) => (
              <div key={`a-${idx}`} className="flex flex-col items-center gap-2">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-16 h-16 object-contain transition-all duration-300"
                />
                <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
            {companies.map((company, idx) => (
              <div key={`b-${idx}`} className="flex flex-col items-center gap-2" aria-hidden="true">
                <img
                  src={company.logo}
                  alt=""
                  className="w-16 h-16 object-contain transition-all duration-300"
                />
                <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
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
