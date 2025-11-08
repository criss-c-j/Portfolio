import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, X, TwitterIcon, LucideTwitter, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: { name?: string; email?: string; message?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof typeof fieldErrors] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const resp = await fetch("https://formspree.io/f/meovjono", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok) {
        // Formspree can return validation errors in the response
        const errMsg = data.error || data.message || "Failed to send message. Please try again later.";
        toast({
          title: "Error",
          description: String(errMsg),
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Network error",
        description: "Unable to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 
          ref={titleRef}
          className={`text-left text-3xl md:text-4xl font-mono font-bold text-foreground mb-8 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Get In Touch
        </h2>
        <p 
          ref={descRef}
          className={`text-muted-foreground mb-12 max-w-2xl transition-all duration-700 delay-100 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Have a security question, collaboration, or research opportunity? I'm always open to discussing 
          web security, bug bounty programs, and vulnerability research. Drop me a message below — let's 
          connect responsibly.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div 
            ref={leftRef}
            className={`space-y-6 transition-all duration-700 delay-200 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="text-xl font-mono font-semibold text-primary mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:cristocrisscj@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="font-mono">cristocrisscj@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/cristocj27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-mono">cristocj27</span>
              </a>
              <a
                href="https://x.com/Cristo_C_J"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Twitter className="w-5 h-5" />
                <span className="font-mono">Cristo_C_J</span>
              </a>
            </div>
            <div className="pt-6">
              <p className="text-sm text-muted-foreground border-l-2 border-border pl-4 hover:border-primary transition-colors">
                <strong className="text-foreground">Response Time:</strong><br />
                I typically respond to security-related inquiries within 24-48 hours. 
                For urgent security matters, please use email.
              </p>
            </div>
          </div>

          <div 
            ref={rightRef}
            className={`transition-all duration-700 delay-300 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border font-mono"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border font-mono"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="bg-card border-border font-mono resize-none"
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-background hover:bg-accent font-mono" aria-busy={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
