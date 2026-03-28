import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer I",
    company: "JPMorganChase",
    location: "Bengaluru, India",
    period: "Jul 2024 – Present",
    bullets: [
      "Designed Grafana observability dashboards and alerting pipelines, reducing MTTR during incident debugging.",
      "Re-architected Gradle build pipelines for distributed payment services with parallelized test execution across 100+ integration suites.",
      "Built a RAG-based knowledge system (embedding retrieval + LLM inference), ranking 5th among 200+ teams in a firm-wide hackathon.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "JPMorganChase",
    location: "Bengaluru, India",
    period: "Jun 2023 – Jul 2023 · Jan 2024 – Jun 2024",
    bullets: [
      "Developed Spring Boot REST APIs to automate Jira-based release workflows with validation and automated testing.",
      "Improved backend reliability of Sales & Trading OMS by raising test coverage to 85%.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "PES University",
    location: "Bengaluru, India",
    period: "Jan 2024 – May 2024",
    bullets: [
      "Instructed 200+ students in Java backend systems (Servlets, JSP, JDBC) emphasizing scalable architecture.",
    ],
  },
  {
    title: "Summer Research Intern",
    company: "Center for Data Sciences & Applied ML, PES University",
    location: "Bengaluru, India",
    period: "Jun 2022 – Jul 2022",
    bullets: [
      "Designed a hybrid ML framework achieving 88.06% accuracy for cyberbullying detection; presented at IEEE CCEM 2022.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 bg-enchanted">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-gradient-gold text-center mb-16"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
            }`}
          >
            {/* Dot */}
            <div
              className={`absolute top-2 w-3 h-3 rounded-full bg-primary glow-gold left-3 md:left-auto ${
                i % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"
              }`}
            />

            <span className="font-body text-xs tracking-wider uppercase text-primary/80">
              {exp.period}
            </span>
            <h3 className="font-display text-xl text-foreground mt-1">{exp.title}</h3>
            <p className="font-body text-sm text-secondary mb-3">
              {exp.company} · {exp.location}
            </p>
            <ul
              className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}
            >
              {exp.bullets.map((b, j) => (
                <li key={j} className="font-body text-sm text-foreground/70 leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
