import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  angle: number;
  delay: number;
  duration: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const id = Date.now() + Math.random();
      const newStar: Star = {
        id,
        x: Math.random() * 100,
        y: Math.random() * 40,
        angle: 35 + Math.random() * 20,
        delay: 0,
        duration: 0.8 + Math.random() * 0.6,
      };
      
      setStars(prev => [...prev, newStar]);
      
      // Remove star after animation
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== id));
      }, newStar.duration * 1000 + 500);
    };

    // Create initial stars
    for (let i = 0; i < 2; i++) {
      setTimeout(() => createStar(), i * 800);
    }

    // Create new stars periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        createStar();
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              rotate: `${star.angle}deg`,
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              x: 200,
              y: 200,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: star.duration,
              ease: "easeOut",
              times: [0, 0.1, 0.7, 1],
            }}
          >
            {/* Star head */}
            <div className="relative">
              <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_2px_hsl(43,74%,49%,0.8)]" />
              {/* Tail */}
              <div 
                className="absolute top-1/2 right-full -translate-y-1/2 h-px w-24"
                style={{
                  background: "linear-gradient(to left, hsl(43 74% 49% / 0.8), hsl(43 74% 65% / 0.4), transparent)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Static twinkling stars */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`static-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full bg-gold/60"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${5 + (i * 13) % 35}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;