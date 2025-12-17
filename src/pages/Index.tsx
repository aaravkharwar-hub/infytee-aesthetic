import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import heroImage from "@/assets/hero-image.jpg";
import { products, collections } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

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
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-subhead mb-6"
            >
              New Collection 2024
            </motion.p>
            <h1 className="text-display mb-6">
              Wear Your<br />Identity
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-md">
              Premium streetwear essentials designed for the modern creative. 
              Quality basics that speak for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary">
                Shop Now
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/collections" className="btn-secondary">
                View Collections
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-subhead mb-4">Explore</p>
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
                  className="block p-8 bg-card border border-border/50 hover:border-foreground/20 transition-all duration-300 group"
                >
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:tracking-wide transition-all duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {collection.description}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {collection.count} items
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-subhead mb-4">Featured</p>
              <h2 className="text-headline">Best Sellers</h2>
            </motion.div>
            <Link
              to="/shop"
              className="mt-4 md:mt-0 text-sm font-medium link-underline flex items-center gap-2"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-subhead mb-4">Our Story</p>
              <h2 className="text-headline mb-6">
                Built for Creatives,<br />By Creatives
              </h2>
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
              <Link to="/about" className="btn-secondary">
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
              <div className="absolute -bottom-6 -left-6 bg-card p-6 border border-border">
                <p className="text-4xl font-display font-bold">2024</p>
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
