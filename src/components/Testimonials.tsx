import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      company: 'TechFlow',
      content: 'Prism transformed how our team collaborates. The deployment time went from hours to minutes.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder at StartupX',
      company: 'StartupX',
      content: 'The analytics dashboard gives us insights we never had before. Revenue increased 40% in 3 months.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'VP Engineering at ScaleUp',
      company: 'ScaleUp',
      content: 'Best decision we made was switching to Prism. The security features alone saved us countless hours.',
      rating: 5,
      avatar: 'EW'
    },
    {
      name: 'David Kim',
      role: 'Product Manager at InnovateCorp',
      company: 'InnovateCorp',
      content: 'The user experience is phenomenal. Our team adopted it immediately without any training.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'CEO at GrowthLabs',
      company: 'GrowthLabs',
      content: 'Prism scaled with us from 10 to 100+ employees seamlessly. Could not recommend more.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'Alex Johnson',
      role: 'CTO at DataDriven',
      company: 'DataDriven',
      content: 'The API integrations are flawless. Connected our entire tech stack in less than a day.',
      rating: 5,
      avatar: 'AJ'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Loved by <span className="text-gradient">thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our customers have to say about their experience with Prism
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl hover:shadow-medium transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors duration-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join thousands of happy customers</h3>
            <p className="text-muted-foreground mb-6">
              Start your journey with Prism today and see why teams love working with us
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">4.9/5 from 500+ reviews</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;