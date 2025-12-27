import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ShootingStars from "@/components/ShootingStars";
import heroImage from "@/assets/hero-image.jpg";
import { collections } from "@/data/products";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Shooting Stars */}
        <ShootingStars />
        
        <motion.div 
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          <img
            src={heroImage}
            alt="Infytee streetwear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </motion.div>

        <div className="container-custom relative z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <Sparkles size={16} className="text-gold" />
              </motion.div>
              <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium">
                New Collection 2024
              </p>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-display mb-6"
            >
              Wear Your<br />
              <motion.span 
                className="text-gold inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Identity
              </motion.span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed"
            >
              Premium streetwear essentials designed for the modern creative. 
              Quality basics that speak for themselves.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/shop" className="btn-gold group">
                  Shop Collection
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/collections" className="btn-secondary">
                  View Collections
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-gold"
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Gold Divider */}
      <div className="py-8">
        <div className="container-custom">
          <div className="divider-gold" />
        </div>
      </div>

      {/* Collections Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-4"
            >
              Explore
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-headline">
              Our Collections
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {collections.map((collection) => (
              <motion.div
                key={collection.name}
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to={`/shop?collection=${encodeURIComponent(collection.name)}`}
                  className="block p-8 bg-card border border-border/50 hover:border-gold/50 transition-all duration-300 group shimmer"
                >
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {collection.count} items
                    </span>
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="text-gold"
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to="/shop" className="btn-outline-gold group">
                Shop All Products
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="py-4">
        <div className="container-custom">
          <div className="divider-gold" />
        </div>
      </div>

      {/* About Preview */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p 
                variants={fadeInUp}
                className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-4"
              >
                Our Story
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-headline mb-6">
                Built for Creatives,<br />By Creatives
              </motion.h2>
              <motion.div variants={fadeInUp} className="divider-gold max-w-24 mb-6" />
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6 leading-relaxed">
                Infytee was born from a simple idea: premium basics shouldn't 
                break the bank. We blend streetwear aesthetics with timeless 
                minimalism, creating pieces that let your personality shine.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 leading-relaxed">
                Every piece is crafted with premium fabrics and attention to 
                detail, because we believe what you wear should feel as good 
                as it looks.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link to="/about" className="btn-outline-gold">
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <motion.div 
                className="aspect-[4/5] bg-secondary overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={heroImage}
                  alt="About Infytee"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="absolute -bottom-6 -left-6 bg-card p-6 border border-gold/30 cursor-pointer"
              >
                <p className="text-4xl font-display font-bold text-gold">2024</p>
                <p className="text-sm text-muted-foreground">Est.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Index;
