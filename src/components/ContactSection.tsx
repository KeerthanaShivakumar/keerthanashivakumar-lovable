import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:shivakumarkeerthana@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/keerthana-shivakumar" },
  { icon: Github, label: "GitHub", href: "https://github.com/KeerthanaShivakumar" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
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
        just chatting about tech, jigsaws, Legos, or swimming!
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
