import { motion } from 'motion/react';

export default function RiskDisclosure() {
  return (
    <div className="w-full pt-12 pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-invert">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-heading font-black mb-8">Risk <span className="text-gradient">Disclosure</span></h1>
          
          <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed bg-brand-navy p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white">Trading Risk Warning</h3>
            <p>
              Trading foreign exchange (Forex), synthetic indices, CFDs, commodities, cryptocurrencies, and other financial instruments involves substantial risk and may not be suitable for all investors. There is a possibility of losing part or all of your invested capital, and you should never trade with money you cannot afford to lose.
            </p>
            <p>
              The Pip Hunters Academy does not guarantee profits, income, or successful trading performance. Past performance, historical results, or examples shown on this website are not reliable indicators of future results.
            </p>
            <p>
              All educational content, signals, analysis, trading bots, tools, strategies, and market insights provided by THEPIPHUNTERS FOREX ACADEMY are intended strictly for educational and informational purposes only and should not be considered financial or investment advice.
            </p>

            <h3 className="text-xl font-bold text-white mt-8">By using this website and its services, you acknowledge and agree that:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trading financial markets carries high risk.</li>
              <li>You are solely responsible for your trading decisions.</li>
              <li>THEPIPHUNTERS FOREX ACADEMY and its founder, Prowess Chirombo, shall not be held liable for any financial losses, damages, or trading outcomes resulting from the use of our services, products, signals, bots, or educational materials.</li>
              <li>Any profits or income examples displayed are not guarantees of future earnings.</li>
              <li>Users should conduct their own research and seek independent financial advice if necessary.</li>
            </ul>

            <p>
              You understand that leveraged trading can work both for and against you, potentially leading to significant gains or losses.
            </p>
            
            <p className="font-bold text-brand-gold">
              By continuing to use this website, you fully accept all risks associated with trading and financial market participation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
