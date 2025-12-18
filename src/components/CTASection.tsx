import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const circle1Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const circle2Y = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const circle1X = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const circle2X = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2">
      {/* Left - CTA Content */}
      <motion.div
        className="bg-mustard p-12 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold uppercase leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to upgrade
          <br />
          your packaging?
        </motion.h2>

        <motion.p
          className="font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The fastest way to understand what Curbits can do is to walk through a
          concrete use case together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="bg-foreground text-background px-8 py-4 rounded-full font-bold uppercase tracking-wider relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-rust"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10">Book a Meeting</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right - Animated Shapes */}
      <div className="bg-background p-12 md:p-20 flex items-center justify-center relative overflow-hidden min-h-[400px]">
        {/* Grid background */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
          {[...Array(36)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
            />
          ))}
        </div>

        {/* Animated circles with parallax */}
        <motion.div
          className="w-48 h-48 bg-rust rounded-full mix-blend-multiply opacity-80 absolute"
          style={{ y: circle1Y, x: circle1X }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-48 h-48 bg-secondary rounded-full mix-blend-multiply opacity-80 absolute"
          style={{ y: circle2Y, x: circle2X, marginLeft: -48 }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Center text overlay */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.span
            className="text-6xl font-bold text-foreground/10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            ◐
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};
