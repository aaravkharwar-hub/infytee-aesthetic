import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import heroImage from "@/assets/hero-image.jpg";
import { collections } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Infytee streetwear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles size={16} className="text-gold" />
              <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium">
                New Collection 2024
              </p>
            </motion.div>
            <h1 className="text-display mb-6">
              Wear Your<br /><span className="text-gold">Identity</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
              Premium streetwear essentials designed for the modern creative. 
              Quality basics that speak for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-gold">
                Shop Collection
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/collections" className="btn-secondary">
                View Collections
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
          />
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-4">Explore</p>
            <h2 className="text-headline">Our Collections</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/shop?collection=${encodeURIComponent(collection.name)}`}
                  className="block p-8 bg-card border border-border/50 hover:border-gold/50 transition-all duration-300 group"
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
                    <ArrowRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/shop" className="btn-outline-gold">
              Shop All Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
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
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-4">Our Story</p>
              <h2 className="text-headline mb-6">
                Built for Creatives,<br />By Creatives
              </h2>
              <div className="divider-gold max-w-24 mb-6" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Infytee was born from a simple idea: premium basics shouldn't 
                break the bank. We blend streetwear aesthetics with timeless 
                minimalism, creating pieces that let your personality shine.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every piece is crafted with premium fabrics and attention to 
                detail, because we believe what you wear should feel as good 
                as it looks.
              </p>
              <Link to="/about" className="btn-outline-gold">
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-secondary">
                <img
                  src={heroImage}
                  alt="About Infytee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 border border-gold/30">
                <p className="text-4xl font-display font-bold text-gold">2024</p>
                <p className="text-sm text-muted-foreground">Est.</p>
              </div>
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
