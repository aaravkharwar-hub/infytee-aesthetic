import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  collection: string;
  colors: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Urban Graphics Tee",
    price: 48.00,
    image: product1,
    category: "Graphic Tees",
    collection: "Graphic Tees",
    colors: ["#1a1a1a", "#f5f5f5", "#9c8b7a"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Essential White Tee",
    price: 38.00,
    image: product2,
    category: "Minimal Tees",
    collection: "Minimal Tees",
    colors: ["#f5f5f5", "#1a1a1a"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "Sand Oversized Fit",
    price: 52.00,
    image: product3,
    category: "Oversized Fits",
    collection: "Oversized Fits",
    colors: ["#c4b5a5", "#1a1a1a", "#f5f5f5"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Charcoal Essential",
    price: 42.00,
    image: product4,
    category: "Minimal Tees",
    collection: "Minimal Tees",
    colors: ["#3a3a3a", "#1a1a1a"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Street Art Print",
    price: 55.00,
    image: product1,
    category: "Graphic Tees",
    collection: "Limited Drops",
    colors: ["#1a1a1a"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 6,
    name: "Pure White Oversized",
    price: 48.00,
    image: product2,
    category: "Oversized Fits",
    collection: "Oversized Fits",
    colors: ["#f5f5f5", "#c4b5a5"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 7,
    name: "Beige Basic Tee",
    price: 36.00,
    image: product3,
    category: "Minimal Tees",
    collection: "Minimal Tees",
    colors: ["#c4b5a5", "#f5f5f5", "#1a1a1a"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Dark Mode Essential",
    price: 44.00,
    image: product4,
    category: "Minimal Tees",
    collection: "Minimal Tees",
    colors: ["#3a3a3a", "#1a1a1a"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

export const collections = [
  {
    name: "Graphic Tees",
    description: "Bold statements, unique designs",
    count: products.filter(p => p.collection === "Graphic Tees").length,
  },
  {
    name: "Minimal Tees",
    description: "Clean lines, timeless style",
    count: products.filter(p => p.collection === "Minimal Tees").length,
  },
  {
    name: "Oversized Fits",
    description: "Relaxed comfort, street style",
    count: products.filter(p => p.collection === "Oversized Fits").length,
  },
  {
    name: "Limited Drops",
    description: "Exclusive releases, limited stock",
    count: products.filter(p => p.collection === "Limited Drops").length,
  },
];
