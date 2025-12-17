import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  colors?: string[];
}

const ProductCard = ({ name, price, image, category, colors = [] }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="card-product"
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
          className="absolute inset-0 bg-foreground/5 flex items-center justify-center"
        >
          <button className="btn-primary flex items-center gap-2">
            <Eye size={16} />
            Quick View
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="font-display font-medium text-base mb-2">{name}</h3>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">${price.toFixed(2)}</span>
          
          {/* Color Options */}
          {colors.length > 0 && (
            <div className="flex gap-1.5">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="w-3 h-3 rounded-full border border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
