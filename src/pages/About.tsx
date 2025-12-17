import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import heroImage from "@/assets/hero-image.jpg";

const About = () => {
  const values = [
    {
      title: "Quality First",
      description: "Premium fabrics and meticulous construction in every piece we create.",
    },
    {
      title: "Minimal Design",
      description: "Clean aesthetics that let your personality take center stage.",
    },
    {
      title: "Sustainable Approach",
      description: "Conscious production methods and ethical manufacturing partners.",
    },
    {
      title: "Community Driven",
      description: "Built by creatives, for creatives. You inspire everything we do.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="container-custom py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-subhead mb-4">About Us</p>
              <h1 className="text-headline mb-6">
                Streetwear for the<br />Modern Creative
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Infytee was born in 2024 from a simple belief: premium basics 
                shouldn't cost a fortune, and what you wear should feel as 
                intentional as everything else you create.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/5] bg-secondary">
                <img
                  src={heroImage}
                  alt="About Infytee"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-subhead mb-4">Our Story</p>
              <h2 className="text-headline mb-8">
                Where Minimal Meets Street
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We started Infytee because we couldn't find tees that matched our 
                  vision—pieces that bridged the gap between high-end streetwear and 
                  everyday essentials. We wanted quality you could feel, cuts that 
                  actually fit, and designs that spoke without shouting.
                </p>
                <p>
                  Every collection is a reflection of the creative community that 
                  inspires us. From graphic artists to minimalist designers, we draw 
                  from diverse influences to create pieces that feel both timeless 
                  and distinctly now.
                </p>
                <p>
                  Our commitment goes beyond aesthetics. We work with ethical 
                  manufacturers, use sustainable materials where possible, and focus 
                  on creating garments that last—because the most sustainable choice 
                  is always the one you keep wearing.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-subhead mb-4">What We Stand For</p>
              <h2 className="text-headline">Our Values</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border border-border/50"
                >
                  <h3 className="font-display font-semibold text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "2024", label: "Established" },
                { number: "100%", label: "Premium Cotton" },
                { number: "50+", label: "Unique Designs" },
                { number: "10K+", label: "Happy Customers" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-display font-bold mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default About;
