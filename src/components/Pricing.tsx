import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for individuals and small teams getting started',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'Standard security',
        'API access'
      ],
      buttonText: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      icon: Crown,
      description: 'Best for growing teams and businesses',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Enhanced security',
        'Advanced API access',
        'Custom integrations',
        'Workflow automation'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Building,
      description: 'For large organizations with custom needs',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Custom analytics',
        '24/7 dedicated support',
        'Enterprise security',
        'White-label solution',
        'Custom development',
        'SLA guarantee',
        'On-premise deployment'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  const calculatePrice = (tier: typeof pricingTiers[0]) => {
    return isYearly ? tier.yearlyPrice : tier.monthlyPrice;
  };

  const calculateSavings = (tier: typeof pricingTiers[0]) => {
    if (!isYearly) return 0;
    const monthlyTotal = tier.monthlyPrice * 12;
    const yearlyPrice = tier.yearlyPrice;
    return Math.round(((monthlyTotal - yearlyPrice) / monthlyTotal) * 100);
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient">transparent pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. Upgrade or downgrade at any time.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-foreground' : 'bg-muted'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute w-5 h-5 bg-background rounded-full top-1 shadow-sm"
                animate={{ x: isYearly ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.button>
            <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full font-medium"
              >
                Save up to 20%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-strong ${
                tier.popular 
                  ? 'ring-2 ring-foreground/20 scale-105 lg:scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center">
                  <tier.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground">{tier.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">${calculatePrice(tier)}</span>
                  <span className="text-muted-foreground ml-1">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                {isYearly && calculateSavings(tier) > 0 && (
                  <div className="text-sm text-green-600 mt-1">
                    Save {calculateSavings(tier)}% annually
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${tier.popular ? 'shadow-strong' : ''}`}
                variant={tier.popular ? 'default' : 'outline'}
              >
                {tier.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;