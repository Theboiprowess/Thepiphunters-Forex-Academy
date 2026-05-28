import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="w-full pt-12 pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-invert">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-heading font-black mb-8">Terms of <span className="text-gradient">Service</span></h1>
          
          <div className="space-y-8 text-gray-300 text-sm md:text-base leading-relaxed bg-brand-navy p-8 rounded-3xl border border-white/10">
            <section>
              <h3 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h3>
              <p>By accessing or using THEPIPHUNTERS FOREX ACADEMY website, services, products, signals, trading bots, courses, or any related platforms, you agree to comply with and be bound by these Terms of Service.</p>
              <p>If you do not agree with these terms, please discontinue use of the website immediately.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">2. Services Provided</h3>
              <p>THEPIPHUNTERS FOREX ACADEMY provides:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Forex trading education</li>
                <li>Trading mentorship</li>
                <li>Trading signals</li>
                <li>MT5 trading bots</li>
                <li>Market analysis</li>
                <li>AI trading tools</li>
                <li>Financial educational content</li>
                <li>VIP membership services</li>
              </ul>
              <p className="mt-2">All services are provided for educational and informational purposes only.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">3. No Financial Advice</h3>
              <p>Nothing on this website constitutes financial, investment, legal, or professional advice. Users are solely responsible for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trading decisions</li>
                <li>Investment decisions</li>
                <li>Risk management</li>
                <li>Account management</li>
              </ul>
              <p className="mt-2">THEPIPHUNTERS FOREX ACADEMY is not a licensed financial advisory institution.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">4. User Responsibilities</h3>
              <p>By using this website, you agree:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Not to misuse or exploit the platform</li>
                <li>Not to redistribute paid content without permission</li>
                <li>Not to engage in illegal activities using our services</li>
                <li>To provide accurate registration information</li>
                <li>To maintain the confidentiality of your account credentials</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">5. Payments & Subscriptions</h3>
              <p>Certain services may require payment or subscription. By purchasing any service, you agree that:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Payments are final unless otherwise stated</li>
                <li>Subscription fees may renew automatically</li>
                <li>Failure to pay may result in suspension of access</li>
                <li>Prices may change at any time</li>
              </ul>
              <p className="mt-2">Users are responsible for managing their subscription settings.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">6. Intellectual Property</h3>
              <p>All website content including: Logos, Branding, Trading tools, Videos, Text, Graphics, Educational materials, and Trading bots remain the intellectual property of THEPIPHUNTERS FOREX ACADEMY unless otherwise stated.</p>
              <p>Unauthorized reproduction or distribution is strictly prohibited.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">7. Limitation of Liability</h3>
              <p>THEPIPHUNTERS FOREX ACADEMY, its founder, employees, affiliates, and partners shall not be liable for: Financial losses, Trading losses, Business interruptions, Technical issues, Data loss, or Indirect/consequential damages.</p>
              <p>Use of the platform is entirely at your own risk.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">8. Account Termination</h3>
              <p>We reserve the right to: Suspend accounts, Restrict access, Remove users, or Cancel subscriptions for violations of these Terms of Service or any harmful behavior.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">9. Third-Party Services</h3>
              <p>This website may contain links or integrations with third-party platforms including: Payment providers, Brokers, Telegram, WhatsApp, and Analytics services.</p>
              <p>We are not responsible for the practices or policies of third-party services.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">10. Modifications</h3>
              <p>THEPIPHUNTERS FOREX ACADEMY reserves the right to modify these Terms of Service at any time without prior notice. Continued use of the website after changes constitutes acceptance of updated terms.</p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
