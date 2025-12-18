import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "", href: "#", highlight: false, isEmpty: true },
  { label: "Portfolio", href: "#portfolio", highlight: false },
  { label: "People", href: "#people", highlight: true, bgClass: "bg-lime" },
  { label: "Programs", href: "#programs", highlight: false },
  { label: "Perspectives", href: "#perspectives", highlight: false },
  { label: "Contact", href: "#contact", highlight: false },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-charcoal text-primary-foreground sticky top-0 z-50 shadow-lg"
    >
      {/* Desktop Nav */}
      <div className="hidden md:flex flex-grow divide-x divide-foreground/20 border-b border-foreground/20">
        {/* Logo */}
        <motion.a
          href="#"
          className="group flex flex-col justify-end flex-grow min-w-0 p-4 lg:p-6 transition-colors duration-300 hover:bg-background h-28"
          whileHover={{ backgroundColor: "hsl(var(--background))" }}
        >
          <div className="flex justify-start items-center">
            <motion.div
              className="h-10 w-24 bg-foreground rounded p-2 flex items-center justify-center group-hover:bg-background transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-background group-hover:text-foreground font-bold text-lg tracking-tight">
                CURBITS
              </span>
            </motion.div>
          </div>
        </motion.a>

        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className={`group flex flex-col justify-end flex-grow min-w-0 p-4 lg:p-6 transition-all duration-300 h-28 relative overflow-hidden ${
              item.highlight ? item.bgClass + " text-foreground" : ""
            } ${item.isEmpty ? "pointer-events-none" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={
              !item.isEmpty && !item.highlight
                ? { backgroundColor: item.highlight ? undefined : "hsl(var(--background))" }
                : undefined
            }
          >
            {!item.highlight && !item.isEmpty && (
              <motion.div
                className="absolute inset-0 bg-background"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            )}
            <div className="flex justify-between items-center relative z-10">
              <motion.span
                className={`text-lg font-bold leading-none truncate ${
                  hoveredIndex === index && !item.highlight ? "text-foreground" : ""
                }`}
                animate={{
                  y: hoveredIndex === index ? -2 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-foreground/20">
        <span className="font-bold text-xl">CURBITS</span>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        {navItems.filter(item => !item.isEmpty).map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className={`block p-4 border-b border-foreground/20 ${
              item.highlight ? item.bgClass + " text-foreground" : ""
            }`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
};
