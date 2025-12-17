import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, collections, productColors } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const selectedCollection = searchParams.get("collection") || "All";
  const selectedSize = searchParams.get("size") || "All";
  const selectedPrice = searchParams.get("price") || "All";
  const selectedColor = searchParams.get("color") || "All";

  const sizes = ["All", "S", "M", "L", "XL", "XXL"];
  const priceRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "Under $40", min: 0, max: 40 },
    { label: "$40 - $55", min: 40, max: 55 },
    { label: "Over $55", min: 55, max: Infinity },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCollection = selectedCollection === "All" || product.collection === selectedCollection;
      const matchesSize = selectedSize === "All" || product.sizes.includes(selectedSize);
      const priceRange = priceRanges.find(p => p.label === selectedPrice);
      const matchesPrice = !priceRange || (product.price >= priceRange.min && product.price < priceRange.max);
      const matchesColor = selectedColor === "All" || product.colors.some(c => {
        const colorInfo = productColors.find(pc => pc.name === selectedColor);
        return colorInfo && c.toLowerCase() === colorInfo.value.toLowerCase();
      });
      
      return matchesCollection && matchesSize && matchesPrice && matchesColor;
    });
  }, [selectedCollection, selectedSize, selectedPrice, selectedColor]);

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

  const hasActiveFilters = selectedCollection !== "All" || selectedSize !== "All" || selectedPrice !== "All" || selectedColor !== "All";

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
            className="mb-8"
          >
            <p className="text-subhead mb-2">Collection</p>
            <h1 className="text-headline mb-4">Shop All</h1>
            <div className="divider-gold max-w-xs" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            {filteredProducts.length} products
          </motion.p>

          {/* Filter Toggle (Mobile) */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 border border-border hover:border-gold transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
              <ChevronDown size={14} className={`transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-gold hover:underline"
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
                  <h3 className="text-subhead mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gold" />
                    Collection
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => updateFilter("collection", "All")}
                      className={`block text-sm transition-all duration-200 ${
                        selectedCollection === "All" ? "text-gold font-medium" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      All Collections
                    </button>
                    {collections.map((collection) => (
                      <button
                        key={collection.name}
                        onClick={() => updateFilter("collection", collection.name)}
                        className={`block text-sm transition-all duration-200 ${
                          selectedCollection === collection.name ? "text-gold font-medium" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {collection.name} ({collection.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div>
                  <h3 className="text-subhead mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gold" />
                    Color
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => updateFilter("color", "All")}
                      className={`px-3 py-1.5 text-xs border transition-all duration-200 ${
                        selectedColor === "All"
                          ? "border-gold bg-gold text-white"
                          : "border-border hover:border-gold text-muted-foreground"
                      }`}
                    >
                      All
                    </button>
                    {productColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => updateFilter("color", color.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 text-xs border transition-all duration-200 ${
                          selectedColor === color.name
                            ? "border-gold"
                            : "border-border hover:border-gold"
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-border/50"
                          style={{ backgroundColor: color.value }}
                        />
                        {color.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div>
                  <h3 className="text-subhead mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gold" />
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => updateFilter("size", size)}
                        className={`px-3 py-1.5 text-xs border transition-all duration-200 ${
                          selectedSize === size
                            ? "border-gold bg-gold text-white"
                            : "border-border hover:border-gold text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-subhead mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gold" />
                    Price
                  </h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => updateFilter("price", range.label)}
                        className={`block text-sm transition-all duration-200 ${
                          selectedPrice === range.label ? "text-gold font-medium" : "text-muted-foreground hover:text-foreground"
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
                    className="hidden lg:flex items-center gap-2 text-sm text-gold hover:underline"
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
                    className="btn-outline-gold"
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
