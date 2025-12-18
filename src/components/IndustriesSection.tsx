import { motion } from "framer-motion";
import { useState } from "react";

const industries = [
  "Fashion",
  "Beauty & Cosmetics",
  "Personal Care",
  "Food & Beverage",
  "Pharma",
];

export const IndustriesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="platform"
      className="p-12 md:p-24 border-b border-border bg-background"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tailored for{" "}
          <motion.span
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            FMCG
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-mustard"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ originX: 0 }}
            />
          </motion.span>
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Built for brands operating where shelves move fast and packaging
          carries the story.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {industries.map((industry, index) => (
          <motion.span
            key={index}
            className="px-6 py-3 rounded-full border border-border text-sm font-bold uppercase cursor-pointer relative overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background fill on hover */}
            <motion.span
              className="absolute inset-0 bg-secondary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
            <span
              className={`relative z-10 transition-colors duration-300 ${
                hoveredIndex === index ? "text-secondary-foreground" : ""
              }`}
            >
              {industry}
            </span>
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};
