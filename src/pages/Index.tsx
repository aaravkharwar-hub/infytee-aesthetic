import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import ShootingStars from "@/components/ShootingStars";
import heroImage from "@/assets/hero-image.jpg";
import infyteeHero from "@/assets/infytee-hero.png";
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
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero Section - Lando Norris Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Organic blob shapes background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large organic shapes */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-[10%] left-[5%] w-[400px] h-[350px] blob-muted"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute top-[20%] right-[10%] w-[500px] h-[400px] blob-muted"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="absolute bottom-[15%] left-[20%] w-[450px] h-[380px] blob-muted"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-[20%] right-[15%] w-[350px] h-[300px] blob-muted"
          />
          
          {/* Track-like curved lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <path
              d="M-50,200 Q200,100 400,200 T800,180 T1200,250 T1500,200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M-50,400 Q300,300 500,400 T900,380 T1300,450 T1500,400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M-50,600 Q200,500 400,600 T800,580 T1200,650 T1500,600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="container-custom relative z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Brand name - large display */}
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-display mb-4"
            >
              INFYTEE
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-headline text-muted-foreground mb-8"
            >
              PREMIUM STREETWEAR
            </motion.p>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed font-light"
            >
              Quality basics designed for the modern creative. 
              Wear your identity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/shop" className="btn-lime group">
                  <ShoppingBag size={18} className="mr-2" />
                  Store
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

        {/* Bottom left info card - like Lando's "Next Race" card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 left-8 hidden md:block"
        >
          <div className="border border-border/50 rounded-lg p-4 bg-card/50 backdrop-blur-sm">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">New Drop</p>
            <p className="font-display text-lg">COLLECTION '24</p>
            <div className="divider-lime my-3" />
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">INFYTEE</span>
              <span className="text-xs text-muted-foreground">SINCE 2024</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 right-8 hidden md:flex items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowRight size={14} className="rotate-90 text-lime" />
          </motion.div>
        </motion.div>
      </section>

      {/* Scrolling Marquee */}
      <ScrollingMarquee />

      {/* Brand Hero Image Section */}
      <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
        {/* Shooting Stars Animation */}
        <ShootingStars />
        
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--gold) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img 
              src={infyteeHero} 
              alt="INFYTEE - Stop Time" 
              className="max-w-full h-auto max-h-[80vh] object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 md:py-32 relative">
        {/* Background blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[500px] blob-muted opacity-50" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-subhead text-lime mb-4"
            >
              EXPLORE
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-headline">
              OUR COLLECTIONS
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                  className="block p-8 bg-card border border-border/50 hover:border-lime/50 transition-all duration-300 group rounded-2xl"
                >
                  <h3 className="font-display text-2xl mb-2 group-hover:text-lime transition-colors">
                    {collection.name.toUpperCase()}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-light">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {collection.count} items
                    </span>
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="text-lime"
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
              <Link to="/shop" className="btn-outline-lime group">
                Shop All Products
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote/Message Section - Like Lando's "Message from Lando" */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[250px] blob-muted" />
          <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[350px] blob-muted" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-subhead text-lime mb-8">OUR PHILOSOPHY</p>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight mb-8">
              <span className="text-lime">"</span>
              REDEFINING LIMITS, CRAFTING QUALITY, BRINGING STYLE IN ALL WAYS. DEFINING A LEGACY IN STREETWEAR.
              <span className="text-lime">"</span>
            </blockquote>
            <div className="divider-lime max-w-24 mx-auto mb-6" />
            <p className="text-muted-foreground font-light">INFYTEE, 2024</p>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] blob-muted opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p 
                variants={fadeInUp}
                className="text-subhead text-lime mb-4"
              >
                OUR STORY
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-headline mb-6">
                BUILT FOR CREATIVES,<br />BY CREATIVES
              </motion.h2>
              <motion.div variants={fadeInUp} className="divider-lime max-w-24 mb-6" />
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6 leading-relaxed font-light">
                Infytee was born from a simple idea: premium basics shouldn't 
                break the bank. We blend streetwear aesthetics with timeless 
                minimalism.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 leading-relaxed font-light">
                Every piece is crafted with premium fabrics and attention to 
                detail, because what you wear should feel as good as it looks.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link to="/about" className="btn-outline-lime">
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <motion.div 
                className="aspect-[4/5] bg-secondary overflow-hidden rounded-3xl"
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
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -left-6 bg-lime text-charcoal p-6 rounded-xl cursor-pointer"
              >
                <p className="text-4xl font-display font-bold">2024</p>
                <p className="text-sm opacity-70">Est.</p>
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