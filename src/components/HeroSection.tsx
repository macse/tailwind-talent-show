import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <header ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 border-b border-border">
      {/* Left Content */}
      <div className="lg:col-span-7 p-10 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border bg-background relative overflow-hidden">
        {/* Decorative blur */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-muted rounded-full opacity-50 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div className="relative z-10" style={{ y, opacity }}>
          <motion.span
            className="block text-xs font-bold uppercase tracking-[0.2em] mb-6 text-secondary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ● Smart Touchpoints
          </motion.span>

          <motion.h2
            className="text-5xl md:text-7xl font-semibold leading-[0.9] tracking-tight mb-8 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Turn every
            <br />
            product{" "}
            <motion.span
              className="text-rust italic font-serif"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              scannable.
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-md leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Connect physical products to digital experiences with serialised QR
            codes, GS1 2D and Digital Product Passports.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full font-bold uppercase tracking-wider relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-rust"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Book A Meeting</span>
            </motion.a>

            <motion.a
              href="#learn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border font-bold uppercase tracking-wider relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-background"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-foreground transition-colors">
                Explore Platform
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Visual */}
      <motion.div
        className="lg:col-span-5 bg-secondary relative overflow-hidden flex items-center justify-center p-10 min-h-[500px]"
        style={{ scale }}
      >
        {/* Arch Video Container */}
        <motion.div
          className="relative w-full max-w-sm aspect-[3/4] shape-arch overflow-hidden border border-border bg-background shadow-2xl group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ y: -8 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale contrast-125 opacity-80 scale-105 group-hover:scale-110 transition-transform duration-[2000ms]"
          >
            <source
              src="https://assets.mixkit.co/videos/23327/23327-720.mp4"
              type="video/mp4"
            />
          </video>

          {/* Color overlay */}
          <div className="absolute inset-0 bg-rust mix-blend-overlay opacity-40" />

          {/* Scanline effect */}
          <div className="absolute inset-0 scanline-overlay z-10 pointer-events-none" />

          {/* Bottom info overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end bg-gradient-to-t from-foreground/80 to-transparent">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  className="w-2 h-2 bg-rust rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-background text-[10px] font-bold uppercase tracking-widest">
                  Live Feed
                </span>
              </div>
              <div className="text-background font-mono text-xs border border-background/30 rounded-full px-3 py-1 inline-block backdrop-blur-md bg-background/10">
                SCAN_ID: 8902-XJ
              </div>
            </div>
            <motion.div
              className="w-8 h-8 rounded-full border border-background/40 flex items-center justify-center text-background/80"
              whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.8)" }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-mustard rounded-full mix-blend-multiply opacity-90"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-16 h-16 bg-rust rounded-full mix-blend-multiply opacity-90"
          animate={{
            y: [0, 10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </header>
  );
};
