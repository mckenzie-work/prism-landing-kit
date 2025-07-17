import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Shield, Rocket, Target, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized infrastructure that delivers sub-100ms response times globally",
      benefit: "3x faster than competitors"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with SOC2, GDPR, and HIPAA standards",
      benefit: "Zero security incidents"
    },
    {
      icon: Rocket,
      title: "Instant Deployment",
      description: "Deploy from code to production in seconds with our automated pipeline",
      benefit: "10x faster deployment"
    },
    {
      icon: Target,
      title: "Smart Analytics",
      description: "AI-powered insights that help you make data-driven decisions",
      benefit: "40% better conversions"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Worldwide CDN and edge computing for optimal user experience",
      benefit: "99.99% uptime guarantee"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration tools that keep your team in sync",
      benefit: "50% faster development"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Why choose</span> Prism?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature is designed to accelerate your growth and simplify your workflow
          </p>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="glass-card"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-foreground scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="glass-card"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="max-w-4xl mx-auto">
                <div className="glass-card p-8 md:p-12 rounded-2xl shadow-strong">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-medium">
                        {React.createElement(services[currentIndex].icon, {
                          className: "h-10 w-10 text-primary-foreground"
                        })}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-2"
                      >
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent text-accent-foreground">
                          {services[currentIndex].benefit}
                        </span>
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-2xl md:text-3xl font-bold mb-4"
                      >
                        {services[currentIndex].title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-lg text-muted-foreground"
                      >
                        {services[currentIndex].description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Dots */}
        <div className="flex md:hidden justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-foreground scale-125' 
                  : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Mobile swipe hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-muted-foreground mt-4 md:hidden"
        >
          Swipe or tap dots to explore features
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesCarousel;