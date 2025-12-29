import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-2xl md:text-3xl tracking-wider hover:text-lime transition-colors"
          >
            INFYTEE
          </Link>

          {/* Center Logo Icon - like LN4 */}
          <Link 
            to="/" 
            className="absolute left-1/2 -translate-x-1/2 font-display text-3xl md:text-4xl tracking-wider hidden md:block hover:text-lime transition-colors"
          >
            ∞
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide transition-all duration-300 link-lime uppercase ${
                    isActive(link.path) ? "text-lime" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Store Button - Lime like Lando's */}
            <motion.button 
              onClick={() => setIsCartOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 px-4 py-2 bg-lime text-charcoal rounded-lg font-semibold text-sm tracking-wide uppercase transition-all hover:bg-lime-light"
            >
              
              <span className="hidden sm:inline">Store</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-charcoal text-lime text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 ml-2 hover:text-lime transition-colors border border-border rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-2xl font-display tracking-wide hover:text-lime transition-colors uppercase ${
                      isActive(link.path) ? "text-lime" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;