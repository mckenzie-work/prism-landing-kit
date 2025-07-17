import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'You get full access to all features for 14 days, no credit card required. You can upgrade to a paid plan anytime during or after the trial period.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer email support for all plans, priority support for Professional, and 24/7 dedicated support for Enterprise customers. Our average response time is under 2 hours.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take security seriously. We use bank-grade encryption, regular security audits, and comply with SOC2, GDPR, and HIPAA standards. Your data is stored in secure, redundant data centers.'
    },
    {
      question: 'Do you offer custom integrations?',
      answer: 'Yes! Professional plans include pre-built integrations with 50+ popular tools. Enterprise customers get custom integrations and dedicated API support.'
    },
    {
      question: 'What happens if I cancel?',
      answer: 'You can cancel anytime. Your account remains active until the end of your billing period, and you can export all your data. No cancellation fees, ever.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied within the first 30 days, we\'ll refund your payment in full, no questions asked.'
    },
    {
      question: 'Do you offer discounts for nonprofits or students?',
      answer: 'Yes! We offer 50% discounts for eligible nonprofits and educational institutions. Contact our sales team to verify your eligibility and get your discount code.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-border/50 hover:border-border transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Contact Support
              </a>
              <a 
                href="mailto:hello@prism.com" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                hello@prism.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;