import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, ShoppingBag, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps extends Product {}

const ProductCard = ({ id, name, price, image, category, colors = [], sizes = [] }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "M");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product: Product = { id, name, price, image, category, collection: category, colors, sizes };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize);
    toast({
      title: "Added to cart",
      description: `${name} (${selectedSize}) has been added to your cart.`,
    });
  };

  return (
    <motion.div
      className="card-product group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="card-product-image"
        />
        
        {/* Quick View Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-foreground/10 flex flex-col items-center justify-center gap-3"
        >
          <button className="btn-primary flex items-center gap-2">
            <Eye size={16} />
            Quick View
          </button>
          <button
            onClick={handleAddToCart}
            className="btn-gold flex items-center gap-2"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </motion.div>

        {/* Quick Add Button (visible on hover) */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 p-2.5 bg-gold text-white rounded-full shadow-gold hover:bg-gold-dark transition-colors"
        >
          <Plus size={18} />
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-gold uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="font-display font-medium text-base mb-2 group-hover:text-gold transition-colors">{name}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold">${price.toFixed(2)}</span>
          
          {/* Color Options */}
          {colors.length > 0 && (
            <div className="flex gap-1.5">
              {colors.slice(0, 4).map((color, index) => (
                <span
                  key={index}
                  className="w-3 h-3 rounded-full border border-border hover:border-gold transition-colors cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Size Selector */}
        <div className="flex gap-1.5 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-2 py-1 text-xs border transition-all duration-200 ${
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
    </motion.div>
  );
};

export default ProductCard;
