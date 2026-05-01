import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "Java", "C", "SQL"],
  },
  {
    category: "Frameworks & Infra",
    skills: ["Spring Boot", "Docker", "Kubernetes", "Kafka", "Git", "Gradle", "MySQL"],
  },
  {
    category: "Machine Learning",
    skills: ["GANs", "RAG Systems", "TensorFlow", "Embedding Retrieval"],
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS (Certified)", "GCP", "Vertex AI", "Grafana"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-14 px-6 bg-enchanted">
    <div className="container mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-gradient-gold text-center mb-8"
      >
        Technical Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
          >
            <h3 className="font-display text-lg text-secondary mb-4">{g.category}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 font-body text-sm rounded-lg bg-card border border-border/50 text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
