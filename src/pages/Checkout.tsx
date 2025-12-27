import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Truck, Shield, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const shipping = totalPrice > 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();

    toast({
      title: "Order Confirmed!",
      description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
    });
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 md:pt-28 pb-20">
          <div className="container-custom">
            <div className="max-w-lg mx-auto text-center py-20">
              <h1 className="text-headline mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">Add some items to your cart to checkout.</p>
              <Link to="/shop" className="btn-gold">
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 md:pt-28 pb-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <Check size={40} className="text-white" />
              </motion.div>
              <h1 className="text-headline mb-4">Thank You!</h1>
              <p className="text-muted-foreground mb-2">Your order has been confirmed.</p>
              <p className="text-sm text-muted-foreground mb-8">
                Order #INF-{Math.random().toString(36).substring(2, 8).toUpperCase()}
              </p>
              <div className="divider-gold max-w-xs mx-auto mb-8" />
              <p className="text-sm text-muted-foreground mb-8">
                We'll send you a confirmation email with tracking details shortly.
              </p>
              <Link to="/shop" className="btn-gold">
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 md:pt-28 pb-20">
        <div className="container-custom">
          {/* Back Link */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Checkout Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-headline mb-8">Checkout</h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact */}
                <div>
                  <h2 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-white text-xs flex items-center justify-center">1</span>
                    Contact
                  </h2>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                {/* Shipping */}
                <div>
                  <h2 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-white text-xs flex items-center justify-center">2</span>
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-card border border-border focus:border-gold focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-card border border-border focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border focus:border-gold focus:outline-none transition-colors mt-4"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-card border border-border focus:border-gold focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-card border border-border focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
                      required
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-card border border-border focus:border-gold focus:outline-none transition-colors"
                    />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-card border border-border focus:border-gold focus:outline-none transition-colors"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>

                {/* Payment */}
                <div>
                  <h2 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-white text-xs flex items-center justify-center">3</span>
                    Payment
                  </h2>
                  <div className="p-4 bg-card border border-border mb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard size={20} className="text-gold" />
                      <span className="text-sm font-medium">Credit Card</span>
                    </div>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      required
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors mb-4"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiry"
                        placeholder="MM / YY"
                        required
                        value={formData.expiry}
                        onChange={handleInputChange}
                        className="px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors"
                      />
                      <input
                        type="text"
                        name="cvc"
                        placeholder="CVC"
                        required
                        value={formData.cvc}
                        onChange={handleInputChange}
                        className="px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn-gold w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Processing...
                    </span>
                  ) : (
                    `Pay $${grandTotal.toFixed(2)}`
                  )}
                </button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield size={14} />
                    Secure checkout
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Truck size={14} />
                    Free shipping $50+
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-card border border-border p-6 lg:p-8 sticky top-28">
                <h2 className="text-lg font-display font-semibold mb-6">Order Summary</h2>
                <div className="divider-gold mb-6" />

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                      <div className="w-16 h-16 bg-secondary flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">{item.product.name}</h3>
                        <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="divider-gold mb-6" />

                {/* Totals */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="divider-gold my-6" />

                <div className="flex justify-between items-center">
                  <span className="font-display font-semibold">Total</span>
                  <span className="text-xl font-display font-bold text-gold">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;