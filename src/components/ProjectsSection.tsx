import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Globe, FileText, BookOpen } from "lucide-react";

type Category = "All" | "AI · ML" | "Systems" | "Research";
type ProjectLink = { label: "github" | "demo" | "article" | "paper"; href: string };

const FILTERS: Category[] = ["All", "AI · ML", "Systems", "Research"];

const projects: {
  title: string;
  category: Category;
  tags: string[];
  desc: string;
  links?: ProjectLink[];
}[] = [
  {
    title: "API Contract Debugger Env",
    category: "AI · ML",
    tags: ["Reinforcement Learning", "Python", "Hugging Face", "LLMs"],
    desc: "RL benchmark environment for training agents to debug API contract violations. Built a custom Gym environment, reward shaping strategy, and evaluated LLM-based agents — shipped in a single Friday evening.",
    links: [
      { label: "github", href: "https://github.com/KeerthanaShivakumar/api-contract-debugger-env" },
      { label: "demo", href: "https://huggingface.co/spaces/keerthanas1011/api-contract-debugger" },
      { label: "article", href: "https://pub.towardsai.net/i-built-an-rl-benchmark-for-api-contract-debugging-in-one-friday-evening-7770401d3a7b" },
    ],
  },
  {
    title: "AI Document Discrepancy Detection",
    category: "AI · ML",
    tags: ["GCP", "Vertex AI", "LLMs", "RAG"],
    desc: "Multi-stage LLM-driven document validation system with entity extraction, semantic comparison, and rule-based verification for enterprise banking workflows. Scalable GCP pipeline for OCR, chunking, embedding and indexing high-volume PDFs.",
  },
  {
    title: "Cursor for PM",
    category: "AI · ML",
    tags: ["AI Agents", "Python", "Hugging Face", "Hackathon"],
    desc: "AI-powered product management copilot built at a hackathon — drafts PRDs, generates user stories, suggests prioritisation frameworks, and answers product questions in natural language.",
    links: [
      { label: "github", href: "https://github.com/KeerthanaShivakumar/pm-ai" },
      { label: "demo", href: "https://huggingface.co/spaces/keerthanas1011/pm-ai" },
      { label: "article", href: "https://ai.plainenglish.io/we-built-a-cursor-for-product-managers-in-a-hackathon-and-it-actually-works-beb4cd6fd6b5" },
    ],
  },
  {
    title: "GAN-Based Dehazing Framework",
    category: "Research",
    tags: ["Python", "TensorFlow", "ML", "Research"],
    desc: "GAN-based multispectral image dehazing model outperforming existing methods on the SHIA dataset. Research presented at ISMSI 2024 international conference.",
    links: [
      { label: "paper", href: "https://dl.acm.org/doi/10.1145/3665065.3665087" },
    ],
  },
  {
    title: "Detection of Cyberbullying on Social Media Code Mixed Data",
    category: "Research",
    tags: ["NLP", "Python", "Deep Learning", "Research"],
    desc: "NLP research on detecting cyberbullying in code-mixed social media text. Developed classification models handling language-switching patterns in multilingual online content. Published at IEEE.",
    links: [
      { label: "paper", href: "https://ieeexplore.ieee.org/document/10555758" },
    ],
  },
  {
    title: "Yet Another MapReduce (YAMR)",
    category: "Systems",
    tags: ["Python", "React", "Docker", "PostgreSQL"],
    desc: "Distributed file storage system modeled on HDFS with a master–worker MapReduce execution framework. Full-stack job submission interface with Docker-based containerized worker nodes.",
  },
  {
    title: "Streaming Weather Data Pipeline",
    category: "Systems",
    tags: ["Kafka", "Spark", "PostgreSQL", "Python"],
    desc: "Lambda architecture-based streaming pipeline using Apache Kafka and Spark Streaming, integrating batch and real-time processing layers with fault recovery.",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-gradient-gold text-center mb-10"
        >
          Projects
        </motion.h2>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-body border transition-all ${
                active === f
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group bg-card border border-border/50 rounded-xl p-6 hover:border-primary/40 hover:glow-gold transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  {p.links?.[0] ? (
                    <a
                      href={p.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open project"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </a>
                  ) : (
                    <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                  )}
                </div>
                <p className="font-body text-sm text-foreground/65 leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-body rounded-full bg-muted text-secondary border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.links && p.links.length > 0 && (
                  <div className="flex gap-3 pt-2 border-t border-border/30">
                    {p.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label === "github" && <Github className="w-3.5 h-3.5" />}
                        {link.label === "demo" && <Globe className="w-3.5 h-3.5" />}
                        {link.label === "article" && <FileText className="w-3.5 h-3.5" />}
                        {link.label === "paper" && <BookOpen className="w-3.5 h-3.5" />}
                        <span className="capitalize">{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
