import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold tracking-tight">
              INFYTEE
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Streetwear essentials for the modern creative. Quality basics that speak for themselves.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-subhead mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">New Arrivals</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Best Sellers</span>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-subhead mb-4">Info</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Shipping</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Returns</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">FAQ</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-subhead mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border rounded-sm hover:bg-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border rounded-sm hover:bg-accent transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              contact@infytee.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Infytee. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground">Privacy Policy</span>
            <span className="text-xs text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
