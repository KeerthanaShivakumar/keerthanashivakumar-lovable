import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

    <div className="relative z-10 text-center px-6 max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
      >
        Software Engineer · AI Enthusiast
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-display text-5xl md:text-7xl font-semibold text-gradient-gold leading-tight mb-6"
      >
        Keerthana Shivakumar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="font-body text-lg text-foreground/80 max-w-xl mx-auto mb-10"
      >
        Building scalable systems by day, exploring the magic of AI by night.
        Currently crafting reliable software at JPMorganChase.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-4 justify-center flex-wrap"
      >
        <a
          href="#projects"
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm hover:glow-gold transition-shadow"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 rounded-full border border-primary/40 text-primary font-body font-semibold text-sm hover:bg-primary/10 transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex justify-center pt-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary/60"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
