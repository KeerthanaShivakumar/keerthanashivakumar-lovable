import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Code } from "lucide-react";

const highlights = [
  { icon: Code, label: "2+ Years", desc: "Professional Experience" },
  { icon: GraduationCap, label: "PES University", desc: "B.Tech CSE · 8.85 GPA" },
  { icon: Sparkles, label: "AWS Certified", desc: "Cloud Practitioner" },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-gradient-gold text-center mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-body text-foreground/75 text-center leading-relaxed max-w-2xl mx-auto mb-14"
      >
        I'm a Software Engineer at JPMorganChase with a passion for building
        robust distributed systems and intelligent AI-powered solutions. My
        journey spans from re-architecting CI/CD pipelines for payment services
        to designing RAG systems that ranked in a firm-wide hackathon. When I'm
        not coding, you'll find me fascinated by the intersection of technology
        and storytelling — a true Disney enthusiast at heart.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className="bg-card border border-border/50 rounded-xl p-6 text-center hover:glow-gold transition-shadow"
          >
            <h.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="font-display text-lg text-foreground mb-1">{h.label}</p>
            <p className="font-body text-sm text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Photo placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex justify-center"
      >
        <div className="w-32 h-32 rounded-full border-2 border-primary/30 bg-muted flex items-center justify-center">
          <span className="font-display text-3xl text-gradient-gold">KS</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
