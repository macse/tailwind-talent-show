import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Digital Product\nPassports",
    description:
      "Build passports with ease. Compliance ready for full transparency from material to lifecycle.",
    bgColor: "bg-muted",
  },
  {
    number: "02",
    title: "Simplify\nTraceability",
    description:
      "Improve safety and response times. Track products across production, warehouses, and stores.",
    bgColor: "bg-mustard",
  },
  {
    number: "03",
    title: "GS1 2D\nBarcodes",
    description:
      "One code for everyone. Retail ready, logistics optimized, and consumer facing.",
    bgColor: "bg-secondary",
    textColor: "text-secondary-foreground",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const FeaturesSection = () => {
  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-3 bg-background"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={`p-12 border-b md:border-b-0 ${
            index < features.length - 1 ? "md:border-r" : ""
          } border-border hover:bg-card transition-colors group cursor-pointer`}
          variants={itemVariants}
          whileHover={{ backgroundColor: "hsl(var(--card))" }}
        >
          <motion.div
            className={`w-12 h-12 ${feature.bgColor} rounded-full mb-6 flex items-center justify-center border border-border ${feature.textColor || ""}`}
            whileHover={{
              scale: 1.1,
              backgroundColor: "hsl(var(--rust))",
              color: "hsl(var(--background))",
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-mono text-lg">{feature.number}</span>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold mb-4 whitespace-pre-line"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {feature.title}
          </motion.h3>

          <motion.p
            className="text-sm text-muted-foreground leading-relaxed"
            initial={{ y: 0 }}
            whileHover={{ y: -2 }}
          >
            {feature.description}
          </motion.p>

          {/* Hover indicator */}
          <motion.div
            className="mt-6 flex items-center gap-2 text-rust opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <span className="text-sm font-bold uppercase tracking-wider">
              Learn more
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
};
