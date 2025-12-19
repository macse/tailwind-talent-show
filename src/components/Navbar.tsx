import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
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
      className="bg-charcoal sticky top-0 z-50"
    >
      {/* Desktop Nav */}
      <div className="hidden md:flex">
        {/* Logo */}
        <motion.a
          href="#"
          className="group flex items-center justify-center px-8 py-6 border-r-2 border-foreground/20 bg-charcoal hover:bg-lime transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div className="flex items-center">
            <span className="text-cream group-hover:text-charcoal font-black text-2xl tracking-tighter uppercase">
              CURBITS
            </span>
          </motion.div>
        </motion.a>

        {/* Spacer */}
        <div className="flex-grow bg-charcoal border-r-2 border-foreground/20" />

        {/* Nav Items */}
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className={`relative flex items-center justify-center px-8 py-6 font-bold text-lg uppercase tracking-wide transition-all duration-300 border-r-2 border-foreground/20 overflow-hidden ${
              item.highlight 
                ? "bg-lime text-charcoal" 
                : "bg-charcoal text-charcoal"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background fill on hover for non-highlighted items */}
            {!item.highlight && (
              <motion.div
                className="absolute inset-0 bg-coral"
                initial={{ y: "100%" }}
                animate={{ y: hoveredIndex === index ? "0%" : "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            
            {/* Text */}
            <motion.span
              className={`relative z-10 ${
                item.highlight 
                  ? "text-charcoal" 
                  : hoveredIndex === index 
                    ? "text-cream" 
                    : "text-cream/70"
              }`}
              animate={{
                y: hoveredIndex === index && !item.highlight ? -2 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.span>

            {/* Bauhaus geometric accent on hover */}
            {!item.highlight && hoveredIndex === index && (
              <motion.div
                className="absolute bottom-2 left-1/2 w-2 h-2 bg-cream rounded-full"
                initial={{ scale: 0, x: "-50%" }}
                animate={{ scale: 1, x: "-50%" }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.a>
        ))}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center justify-between p-4 border-b-2 border-foreground/20">
        <span className="font-black text-2xl text-cream tracking-tighter uppercase">CURBITS</span>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          className="text-cream"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
        className="md:hidden overflow-hidden bg-charcoal"
      >
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className={`block p-4 border-b-2 border-foreground/20 font-bold uppercase tracking-wide ${
              item.highlight 
                ? "bg-lime text-charcoal" 
                : "bg-charcoal text-cream/70 hover:text-cream hover:bg-coral"
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