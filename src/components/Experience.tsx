import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-mono font-bold text-foreground mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Experience & Focus Areas
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            ref={leftRef}
            className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="border border-border p-6 rounded-sm bg-card">
              <h3 className="text-xl font-mono font-semibold text-primary mb-4">
                AI / ML Security
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Bypassed premium feature access in OpenAI.</li>
                <li>• Discovered prompt injection and improper access control in AI models.</li>
                <li>• Found blind XSS in BMW AI Assistant and data exposure in Grok AI Model.</li>
              </ul>
            </div>
          </div>
          <div 
            ref={rightRef}
            className={`transition-all duration-700 delay-100 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="border border-border p-6 rounded-sm bg-card">
              <h3 className="text-xl font-mono font-semibold text-primary mb-4">
                Web & Mobile Security
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Account Takeover in Swiggy, 2FA Bypass in TikTok, and Payment Bypass in LinkedIn</li>
                <li>• Reported SSRF, Blind XSS, and HTTP Smuggling vulnerabilities.</li>
                <li>• Identified Subdomain Takeovers and Broken Link Hijacking.</li>
                <li>• Enhanced security for Brave, Opera, and Samsung Internet browsers.</li>
                <li>• OWASP Top 10 vulnerability assessment</li>
                <li>• Authentication and authorization bypass</li>
                <li>• Cross-site scripting (XSS) and injection attacks</li>
                <li>• Business logic flaw identification</li>
                <li>• API security testing and exploitation</li>
                <li>• Mobile application reverse engineering</li>
              </ul>
            </div>
          </div>
        </div>
        <div 
          ref={quoteRef}
          className={`mt-12 text-center transition-all duration-700 delay-200 ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <blockquote className="text-lg text-muted-foreground font-mono italic border-l-4 border-primary pl-6 max-w-3xl mx-auto">
            "Security is not a product, but a process. Every vulnerability discovered and responsibly 
            disclosed makes the digital world a little bit safer for everyone."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Experience;
