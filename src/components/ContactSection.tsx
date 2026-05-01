import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const links = [
  { icon: Mail, label: "Email", href: "mailto:shivakumarkeerthana@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/keerthana-shivakumar" },
  { icon: Github, label: "GitHub", href: "https://github.com/KeerthanaShivakumar" },
  { icon: MediumIcon, label: "Medium", href: "https://medium.com/@shivakumarkeerthana" },
];

const ContactSection = () => (
  <section id="contact" className="py-10 px-6">
    <div className="container mx-auto max-w-2xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-gradient-gold mb-6"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-body text-foreground/70 mb-10"
      >
        I'm always open to discussing new opportunities, collaborations, or
        just chatting about tech and Disney movies!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-6"
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/60 group-hover:glow-gold transition-all">
              <l.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="font-body text-xs text-muted-foreground group-hover:text-primary transition-colors">
              {l.label}
            </span>
          </a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-20 font-body text-xs text-muted-foreground/50"
      >
        © 2026 Keerthana Shivakumar · Built with a sprinkle of magic ✨
      </motion.p>
    </div>
  </section>
);

export default ContactSection;
