import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const milestones = [
    { year: '2019', event: 'Company founded with a vision for better SaaS' },
    { year: '2020', event: 'First 1,000 customers and $1M ARR' },
    { year: '2021', event: 'Series A funding and international expansion' },
    { year: '2022', event: 'Reached 10,000+ active users' },
    { year: '2023', event: 'Launched enterprise features' },
    { year: '2024', event: 'AI-powered analytics and automation' },
  ];

  const stats = [
    { icon: Calendar, value: '2019', label: 'Founded' },
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: Zap, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: '0', label: 'Security Incidents' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Building the future of{' '}
                <span className="text-gradient">business tools</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                We believe technology should amplify human potential, not complicate it. 
                That's why we've built Prism from the ground up to be intuitive, powerful, 
                and reliable. Our mission is simple: help businesses grow faster by removing 
                the friction from their daily operations.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="group">
                Learn more about our story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-xl text-center group hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold mb-6 text-center">Our Journey</h3>
              <div className="space-y-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-16 text-sm font-bold text-foreground">
                      {milestone.year}
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-muted-foreground/30 mt-2 group-hover:bg-foreground transition-colors duration-300" />
                    <div className="flex-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {milestone.event}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;