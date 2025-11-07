import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-mono font-bold text-foreground mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            ref={leftRef}
            className={`space-y-6 transition-all duration-700 delay-100 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a Security Engineer and Bug Bounty Researcher with a passion for identifying and responsibly 
              disclosing security vulnerabilities. With over 45 responsible disclosures across industry-leading 
              platforms, I specialize in web application security, mobile security, AI/ML security, and ethical hacking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work focuses on making the digital world safer by finding critical vulnerabilities before 
              malicious actors can exploit them. I've contributed to the security of major companies including 
              Swiggy, TikTok, BMW, LinkedIn, OpenAI, Brave, and Opera.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not hunting bugs, I participate in Capture The Flag (CTF) competitions and contribute 
              to the cybersecurity community through knowledge sharing and mentorship.
            </p>
          </div>
          <div 
            ref={rightRef}
            className={`space-y-6 transition-all duration-700 delay-200 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div>
              <h3 className="text-xl font-mono font-semibold text-primary mb-4">Education</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bachelor of Technology in Electronics and Communication
                  <br />Vidya Academy of Science and Technology (2019-2023)
                </li>
                <li>• Advanced Diploma in Cyber Defence
                  <br />RedTeam Hacker Academy (2023-2024)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-mono font-semibold text-primary mb-4">Core Expertise</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Web Application Security Testing</li>
                <li>• AI/ML Security & Adversarial Attacks</li>
                <li>• Mobile Application Security</li>
                <li>• Responsible Vulnerability Disclosure</li>
                <li>• Security Research & CTF Competitions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
