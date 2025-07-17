import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of <span className="text-gradient">Service</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 15, 2024
              </p>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Prism's services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily use Prism's services for personal or 
                  commercial use. This is the grant of a license, not a transfer of title.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose without permission</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. 
                  We reserve the right to modify or discontinue services with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Prism be liable for any damages arising out of the use or 
                  inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@prism.com" className="text-foreground hover:underline">
                    legal@prism.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;