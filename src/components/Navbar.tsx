import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => (
  <motion.nav
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50"
  >
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <a href="#" className="font-display text-lg text-gradient-gold">KS</a>
      <div className="hidden md:flex gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
