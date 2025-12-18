import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TransparencySection } from "@/components/TransparencySection";
import { StatsSection } from "@/components/StatsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Helmet>
        <title>Curbits - Neo-Bauhaus Solutions | Digital Product Passports</title>
        <meta
          name="description"
          content="Turn every product scannable. Connect physical products to digital experiences with serialised QR codes, GS1 2D and Digital Product Passports."
        />
      </Helmet>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-rust origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Grain overlay */}
      <div className="grain-overlay" />

      <main className="max-w-[1440px] mx-auto border-x border-border min-h-screen relative z-10 bg-background">
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <FeaturesSection />
        <TransparencySection />
        <StatsSection />
        <IndustriesSection />
        <CTASection />
        <Footer />
      </main>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center z-50 shadow-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: scrollYProgress.get() > 0.1 ? 1 : 0, y: scrollYProgress.get() > 0.1 ? 0 : 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ↑
        </motion.span>
      </motion.button>
    </>
  );
};

export default Index;
