import { motion } from "framer-motion";

const stats = [
  { title: "Fast", subtitle: "Reliable Infrastructure" },
  { title: "Secure", subtitle: "Enterprise Grade" },
  { title: "Global", subtitle: "GS1 Standards" },
  { title: "Smart", subtitle: "Dynamic Content" },
];

export const StatsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 bg-foreground text-background divide-y md:divide-y-0 md:divide-x divide-muted-foreground/20 border-b border-border">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="p-10 flex flex-col justify-between h-48 cursor-pointer relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ backgroundColor: "hsl(var(--charcoal) / 0.8)" }}
        >
          {/* Animated background on hover */}
          <motion.div
            className="absolute inset-0 bg-rust"
            initial={{ scaleY: 0 }}
            whileHover={{ scaleY: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 1 }}
          />

          <motion.span
            className="text-4xl font-light relative z-10"
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
          >
            {stat.title}
          </motion.span>

          <motion.p
            className="text-xs text-muted-foreground uppercase tracking-widest mt-auto relative z-10 group-hover:text-background/80 transition-colors"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
          >
            {stat.subtitle}
          </motion.p>

          {/* Corner accent */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-rust rounded-full group-hover:bg-background transition-colors"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        </motion.div>
      ))}
    </section>
  );
};
