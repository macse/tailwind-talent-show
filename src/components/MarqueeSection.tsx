import { motion } from "framer-motion";

const items = [
  "Compliance Ready",
  "GS1 Standards",
  "Digital Passports",
  "Traceability",
  "Consumer Engagement",
];

export const MarqueeSection = () => {
  return (
    <div className="border-b border-border bg-rust text-primary-foreground py-3 overflow-hidden">
      <motion.div
        className="flex gap-12 text-sm font-bold uppercase tracking-widest whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-12">
            {item}
            <span className="text-background/60">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
