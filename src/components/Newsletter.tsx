import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the family",
        description: "You'll be the first to know about new drops.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-subhead mb-4">Stay in the loop</p>
          <h2 className="text-headline mb-6">
            Join the Infytee Community
          </h2>
          <p className="text-muted-foreground mb-10">
            Be the first to know about new collections, exclusive drops, and members-only offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-background border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              required
            />
            <button type="submit" className="btn-primary gap-2">
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
