import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Document Discrepancy Detection",
    tags: ["GCP", "Vertex AI", "LLMs", "RAG"],
    desc: "Multi-stage LLM-driven document validation system with entity extraction, semantic comparison, and rule-based verification for enterprise banking workflows. Scalable GCP pipeline for OCR, chunking, embedding and indexing high-volume PDFs.",
  },
  {
    title: "Yet Another MapReduce (YAMR)",
    tags: ["Python", "React", "Docker", "PostgreSQL"],
    desc: "Distributed file storage system modeled on HDFS with a master–worker MapReduce execution framework. Full-stack job submission interface with Docker-based containerized worker nodes.",
  },
  {
    title: "GAN-Based Dehazing Framework",
    tags: ["Python", "TensorFlow", "ML", "Research"],
    desc: "GAN-based multispectral image dehazing model outperforming existing methods on the SHIA dataset. Research presented at ISMSI 2024 international conference.",
  },
  {
    title: "Streaming Weather Data Pipeline",
    tags: ["Kafka", "Spark", "PostgreSQL", "Python"],
    desc: "Lambda architecture-based streaming pipeline using Apache Kafka and Spark Streaming, integrating batch and real-time processing layers with fault recovery.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-gradient-gold text-center mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className="group bg-card border border-border/50 rounded-xl p-6 hover:border-primary/40 hover:glow-gold transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
            <p className="font-body text-sm text-foreground/65 leading-relaxed mb-4">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-body rounded-full bg-muted text-secondary border border-border/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
