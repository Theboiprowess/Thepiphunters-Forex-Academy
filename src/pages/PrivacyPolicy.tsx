import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="w-full pt-12 pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-invert">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-heading font-black mb-8">Privacy <span className="text-gradient">Policy</span></h1>
          
          <div className="space-y-8 text-gray-300 text-sm md:text-base leading-relaxed bg-brand-navy p-8 rounded-3xl border border-white/10">
            
            <section>
              <h3 className="text-xl font-bold text-white mb-4">1. Introduction</h3>
              <p>THEPIPHUNTERS FOREX ACADEMY respects your privacy and is committed to protecting your personal information.</p>
              <p>This Privacy Policy explains how we collect, use, and protect your data when you use our website and services.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">2. Information We Collect</h3>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing information</li>
                <li>Trading preferences</li>
                <li>Device/browser information</li>
                <li>IP address</li>
                <li>Website usage data</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h3>
              <p>Your information may be used to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide services</li>
                <li>Process payments</li>
                <li>Improve website functionality</li>
                <li>Send updates and notifications</li>
                <li>Deliver signals and educational content</li>
                <li>Respond to customer support requests</li>
                <li>Improve marketing and user experience</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">4. Email & Marketing Communications</h3>
              <p>By registering or subscribing, you may receive: Emails, Promotions, Market updates, Educational content, and VIP notifications.</p>
              <p>You may unsubscribe at any time.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">5. Data Protection</h3>
              <p>We implement reasonable security measures to protect your information from: Unauthorized access, Data misuse, and Loss or theft.</p>
              <p>However, no online system can guarantee complete security.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">6. Cookies</h3>
              <p>This website may use cookies and analytics technologies to: Improve user experience, Track website performance, Analyze traffic, and Personalize content.</p>
              <p>Users can disable cookies through browser settings.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">7. Third-Party Sharing</h3>
              <p>We do not sell your personal information.</p>
              <p>We may share limited data with trusted third-party services such as: Payment processors, Email marketing providers, Analytics providers, and Hosting providers only when necessary to operate the platform.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">8. User Rights</h3>
              <p>Users may request:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access to their data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of personal information</li>
                <li>Cancellation of marketing communications</li>
              </ul>
              <p className="mt-2">Requests may be submitted through the website contact channels.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">9. Children's Privacy</h3>
              <p>THEPIPHUNTERS FOREX ACADEMY services are not intended for individuals under the age of 18.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">10. Policy Updates</h3>
              <p>This Privacy Policy may be updated periodically. Continued use of the website after updates indicates acceptance of revised policies.</p>
            </section>

            <section className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-8">
              <h3 className="text-lg font-bold text-brand-gold mb-3">Contact Information</h3>
              <p>For questions regarding these policies or website services, contact:</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li><strong>THEPIPHUNTERS FOREX ACADEMY</strong></li>
                <li>Founded by Prowess Chirombo</li>
                <li>Established 2026</li>
                <li><span className="text-gray-400">Email:</span> <a href="mailto:thepiphuntersforexacademy@gmail.com" className="text-brand-gold hover:underline">thepiphuntersforexacademy@gmail.com</a></li>
                <li><span className="text-gray-400">Website:</span> THEPIPHUNTERS FOREX ACADEMY</li>
              </ul>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
