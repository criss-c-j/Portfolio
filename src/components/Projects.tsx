import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Web Application Security Scanner",
      description:
        "Created an automated security scanner that identifies common web vulnerabilities including XSS, SQL injection, and authentication bypasses. Features custom rule engine and detailed reporting.",
      tags: ["Python", "Web Security", "Automation"],
      github: null,
    },
    {
      title: "Credential Leak Detection Tool for GitHub",
      description:
        "Python-based scanner that detects API keys, tokens, and secrets in public repos. Integrates with GitHub API to monitor new commits and alerts users of potential leaks.",
      tags: ["Python", "Bug Bounty", "Security Tool"],
      github: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-mono font-bold text-foreground mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Featured Projects
        </h2>
        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`border border-border bg-card p-6 rounded-sm hover:border-primary transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-mono font-semibold text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2 py-1 bg-secondary border border-border text-muted-foreground text-xs font-mono rounded-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-mono text-sm"
                >
                  View on GitHub <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
