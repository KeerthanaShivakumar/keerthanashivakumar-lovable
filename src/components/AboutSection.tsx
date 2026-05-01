import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

const highlights = [
  { icon: GraduationCap, label: "PES University", desc: "B.Tech CSE · 8.85 GPA" },
  { icon: Sparkles, label: "AWS Certified", desc: "Cloud Practitioner" },
];


const AboutSection = () => (
  <section id="about" className="py-10 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-gradient-gold text-center mb-6"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          {profilePhoto ? (
            <div className="relative w-36 h-36">
              <img
                src={profilePhoto}
                alt="Keerthana Shivakumar"
                className="w-full h-full rounded-full object-cover object-top"
                style={{ maskImage: "radial-gradient(circle, black 60%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)" }}
              />
              {/* gradient ring */}
              <div className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, transparent 55%, rgba(212,175,55,0.35) 75%, transparent 100%)" }} />
            </div>
          ) : (
            <div className="w-36 h-36 rounded-full border-2 border-primary/30 bg-muted flex items-center justify-center">
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
            Software Engineer at JPMorganChase by day, distributed systems and reinforcement
            learning enthusiast by night. I get disproportionately excited about the intersection
            of math and magic—especially how Pixar's rendering pipelines make animated fur look
            so incredibly real. Off the keyboard, you'll find me doing yoga to undo the desk
            hunch, snapping Lego architecture sets together, or chipping away at a 1000-piece
            jigsaw puzzle. I also rely on long swim sets as my favorite way to think through
            complex system design problems when I don't have a whiteboard handy.
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
            className="bg-card border border-border/50 rounded-xl p-4 text-center hover:glow-gold transition-shadow"
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
