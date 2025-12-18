import { motion } from "framer-motion";

const footerLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Legal", href: "#" },
];

export const Footer = () => {
  return (
    <motion.footer
      className="bg-foreground text-background p-12 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h4
            className="text-3xl font-bold uppercase mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Curbits
          </motion.h4>
          <p className="text-muted-foreground text-sm max-w-xs">
            Scandinavian by origin. Global by design. Innovation meets
            practicality.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {footerLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="relative group"
              whileHover={{ x: 5 }}
            >
              <span className="group-hover:text-mustard transition-colors">
                {link.label}
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-px bg-mustard group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Address */}
        <motion.div
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>Swedpal</p>
          <p>Gamla Brogatan 13</p>
          <p>111 20 Stockholm, Sweden</p>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="mt-12 pt-8 border-t border-muted-foreground/20 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-4 uppercase tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span>© 2024 Curbits</span>
        <motion.span
          className="flex items-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          System Status: Operational
        </motion.span>
      </motion.div>
    </motion.footer>
  );
};
