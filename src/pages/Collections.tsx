import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections, products } from "@/data/products";

const Collections = () => {
  const getCollectionImage = (collectionName: string) => {
    const product = products.find(p => p.collection === collectionName);
    return product?.image || products[0].image;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 md:pt-28 pb-20">
        <div className="container-custom">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-subhead mb-4">Browse by style</p>
            <h1 className="text-headline">Our Collections</h1>
          </motion.div>

          {/* Collections Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/shop?collection=${encodeURIComponent(collection.name)}`}
                  className="group block relative overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={getCollectionImage(collection.name)}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-background mb-2">
                      {collection.name}
                    </h2>
                    <p className="text-background/70 text-sm mb-4">
                      {collection.description}
                    </p>
                    <div className="flex items-center gap-2 text-background text-sm font-medium">
                      Shop Collection
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
