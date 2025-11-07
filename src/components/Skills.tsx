import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const skillCategories = [
    {
      category: "Security Testing",
      skills: ["VAPT", "Web Security", "Mobile Security", "API Security", "Network Security", "Threat Analysis", "Cloud Security"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Burp Suite", "OWASP ZAP", "Metasploit", "Nmap", "Wireshark", "SQLMap"],
    },
    {
      category: "Programming",
      skills: ["Python", "C", "Bash"],
    },
    {
      category: "Methodologies",
      skills: ["OWASP Top 10", "SANS Top 25", "Penetration Testing", "Vulnerability Assessment", "Threat Modeling"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-mono font-bold text-foreground mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Skills & Expertise
        </h2>
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-lg font-mono font-semibold text-primary mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-card border border-border text-muted-foreground text-sm font-mono rounded-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
