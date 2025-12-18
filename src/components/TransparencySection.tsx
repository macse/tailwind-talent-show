import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const listItems = [
  { text: "Centralized Management", color: "bg-secondary" },
  { text: "Dynamic Updates without re-printing", color: "bg-rust" },
  { text: "GDPR-Aligned Experiences", color: "bg-mustard" },
];

export const TransparencySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 border-y border-border"
    >
      {/* Left - Card Visual */}
      <div className="bg-muted p-12 md:p-20 flex items-center justify-center border-b md:border-b-0 md:border-r border-border relative overflow-hidden">
        <motion.div
          className="bg-background border border-border p-6 w-80 shadow-xl rounded-xl relative z-10"
          style={{ rotate: cardRotate, y: cardY }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex justify-between items-start mb-6">
            <motion.div
              className="w-12 h-12 bg-muted rounded-full border border-border overflow-hidden"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover grayscale"
                alt="Product"
              />
            </motion.div>
            <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-muted-foreground">
                Status
              </div>
              <motion.div
                className="text-xs font-bold text-secondary flex items-center gap-1"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Verified <span className="text-green-500">●</span>
              </motion.div>
            </div>
          </div>

          <div className="space-y-3">
            <motion.div
              className="h-2 w-1/3 bg-foreground rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "33%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className="h-2 w-full bg-muted rounded-full overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-foreground/20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.div
              className="h-2 w-3/4 bg-muted rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>

          <div className="mt-8 pt-4 border-t border-dashed border-muted-foreground/40 flex justify-between items-center">
            <motion.div
              className="text-[10px] font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ID: 489-AB
            </motion.div>
            <motion.div
              className="w-8 h-8 bg-foreground"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Background gradient */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foreground to-transparent" />
      </div>

      {/* Right - Content */}
      <motion.div
        className="bg-background p-12 md:p-20 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          THE FUTURE OF
          <br />
          <span className="text-rust">TRANSPARENCY</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The EU's Digital Product Passport (DPP) initiative promotes full
          transparency with detailed lifecycle insight. Curbits helps you manage
          large quantities of serialised codes that identify each product and
          link it to its passport.
        </motion.p>

        <ul className="space-y-4 font-medium text-sm">
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <motion.div
                className={`w-2 h-2 ${item.color} rounded-full`}
                whileHover={{ scale: 1.5 }}
              />
              <span className="group-hover:text-rust transition-colors">
                {item.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
