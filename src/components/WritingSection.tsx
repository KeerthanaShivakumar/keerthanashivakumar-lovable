import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    publication: "Towards AI",
    title: "I Built an RL Benchmark for API Contract Debugging in One Friday Evening",
    href: "https://pub.towardsai.net/i-built-an-rl-benchmark-for-api-contract-debugging-in-one-friday-evening-7770401d3a7b",
    readTime: "6 min read",
    tag: "Reinforcement Learning",
  },
  {
    publication: "Plain English AI",
    title: "We Built a Cursor for Product Managers in a Hackathon and It Actually Works",
    href: "https://ai.plainenglish.io/we-built-a-cursor-for-product-managers-in-a-hackathon-and-it-actually-works-beb4cd6fd6b5",
    readTime: "5 min read",
    tag: "AI Agents",
  },
  {
    publication: "IEEE",
    title: "Detection of Cyberbullying on Social Media Code Mixed Data",
    href: "https://ieeexplore.ieee.org/document/10555758",
    readTime: "Research paper",
    tag: "NLP",
  },
  {
    publication: "ACM",
    title: "GAN-Based Multispectral Image Dehazing — ISMSI 2024",
    href: "https://dl.acm.org/doi/10.1145/3665065.3665087",
    readTime: "Research paper",
    tag: "Computer Vision",
  },
];

const pubColor: Record<string, string> = {
  "Towards AI": "text-emerald-400",
  "Plain English AI": "text-sky-400",
  "IEEE": "text-blue-400",
  "ACM": "text-violet-400",
};

const WritingSection = () => (
  <section id="writing" className="py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-gradient-gold text-center mb-16"
      >
        Writing
      </motion.h2>

      <div className="flex flex-col gap-4">
        {articles.map((a, i) => (
          <motion.a
            key={a.href}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className="group bg-card border border-border/50 rounded-xl p-5 hover:border-primary/40 hover:glow-gold transition-all flex items-center gap-5"
          >
            {/* publication pill */}
            <span className={`hidden sm:block text-xs font-body font-semibold w-28 shrink-0 ${pubColor[a.publication] ?? "text-muted-foreground"}`}>
              {a.publication}
            </span>

            {/* title */}
            <p className="font-display text-sm md:text-base text-foreground group-hover:text-primary transition-colors flex-1 leading-snug">
              {a.title}
            </p>

            {/* meta */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden md:block px-2 py-0.5 text-xs font-body rounded-full bg-muted text-secondary border border-border/50">
                {a.tag}
              </span>
              <span className="text-xs font-body text-muted-foreground whitespace-nowrap">
                {a.readTime}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default WritingSection;
