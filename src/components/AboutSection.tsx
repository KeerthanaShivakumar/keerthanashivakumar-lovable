import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

const highlights = [
  { icon: GraduationCap, label: "PES University", desc: "B.Tech CSE · 8.85 GPA" },
  { icon: Sparkles, label: "AWS Certified", desc: "Cloud Practitioner" },
];


const AboutSection = () => (
  <section id="about" className="py-14 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-gradient-gold text-center mb-6"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Keerthana Shivakumar"
              className="w-32 h-32 rounded-full object-cover border-2 border-primary/40 glow-gold"
            />
          ) : (
            <div className="w-32 h-32 rounded-full border-2 border-primary/30 bg-muted flex items-center justify-center">
              <span className="font-display text-3xl text-gradient-gold">KS</span>
            </div>
          )}
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <p className="font-body text-foreground/75 leading-relaxed">
            Software Engineer at JPMorgan by day, incoming OMSCS student at Georgia Tech by
            night. I get disproportionately excited about distributed systems, reinforcement
            learning, and how Pixar's rendering pipeline makes fur look that good.
          </p>
          <p className="font-body text-foreground/75 leading-relaxed">
            Off the keyboard: yoga to undo the hunching, Lego architecture sets for the
            satisfaction of snapping things into place, a 1000-piece jigsaw always in progress
            somewhere, and long swim sets to think through system design problems without a
            whiteboard. Big fan of Disney and the art of computer graphics — the overlap between
            math and magic never gets old.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
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
    </div>
  </section>
);

export default AboutSection;
