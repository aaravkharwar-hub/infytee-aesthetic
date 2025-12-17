import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, collections } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const selectedCollection = searchParams.get("collection") || "All";
  const selectedSize = searchParams.get("size") || "All";
  const selectedPrice = searchParams.get("price") || "All";

  const sizes = ["All", "S", "M", "L", "XL", "XXL"];
  const priceRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "Under $40", min: 0, max: 40 },
    { label: "$40 - $50", min: 40, max: 50 },
    { label: "Over $50", min: 50, max: Infinity },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCollection = selectedCollection === "All" || product.collection === selectedCollection;
      const matchesSize = selectedSize === "All" || product.sizes.includes(selectedSize);
      const priceRange = priceRanges.find(p => p.label === selectedPrice);
      const matchesPrice = !priceRange || (product.price >= priceRange.min && product.price < priceRange.max);
      
      return matchesCollection && matchesSize && matchesPrice;
    });
  }, [selectedCollection, selectedSize, selectedPrice]);

  const updateFilter = (key: string, value: string) => {
    if (value === "All") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCollection !== "All" || selectedSize !== "All" || selectedPrice !== "All";

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
            className="mb-12"
          >
            <h1 className="text-headline mb-4">Shop All</h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products
            </p>
          </motion.div>

          {/* Filter Toggle (Mobile) */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <motion.aside
              initial={false}
              animate={{ height: showFilters ? "auto" : "0" }}
              className={`lg:w-56 flex-shrink-0 overflow-hidden lg:overflow-visible lg:!h-auto ${
                showFilters ? "mb-8" : ""
              }`}
            >
              <div className="space-y-8">
                {/* Collections */}
                <div>
                  <h3 className="text-subhead mb-4">Collection</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => updateFilter("collection", "All")}
                      className={`block text-sm transition-opacity ${
                        selectedCollection === "All" ? "opacity-100 font-medium" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      All
                    </button>
                    {collections.map((collection) => (
                      <button
                        key={collection.name}
                        onClick={() => updateFilter("collection", collection.name)}
                        className={`block text-sm transition-opacity ${
                          selectedCollection === collection.name ? "opacity-100 font-medium" : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        {collection.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div>
                  <h3 className="text-subhead mb-4">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => updateFilter("size", size)}
                        className={`px-3 py-1.5 text-xs border transition-colors ${
                          selectedSize === size
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-subhead mb-4">Price</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => updateFilter("price", range.label)}
                        className={`block text-sm transition-opacity ${
                          selectedPrice === range.label ? "opacity-100 font-medium" : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <X size={14} />
                    Clear all filters
                  </button>
                )}
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground mb-4">No products match your filters</p>
                  <button
                    onClick={clearFilters}
                    className="btn-secondary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
