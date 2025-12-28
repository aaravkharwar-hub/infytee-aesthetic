import { motion } from "framer-motion";

const ScrollingMarquee = () => {
  const marqueeItems = [
    "PREMIUM STREETWEAR",
    "★",
    "CRAFTED WITH PASSION",
    "★",
    "TIMELESS DESIGN",
    "★",
    "STOP TIME",
    "★",
    "INFYTEE",
    "★",
    "ESTD. 2024",
    "★",
  ];

  return (
    <div className="relative overflow-hidden py-6 bg-gold border-y border-gold-dark/20">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Double the items for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-8 text-charcoal font-display text-2xl sm:text-3xl md:text-4xl tracking-wider"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingMarquee;
