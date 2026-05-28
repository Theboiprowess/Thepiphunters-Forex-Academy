import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { BookOpen, TrendingUp, BarChart2, Brain, Shield, Crosshair, Cpu, Globe, Newspaper, ArrowLeft } from 'lucide-react';

const categoriesData = [
  {
    name: "Forex Trading Strategies",
    topics: ["Best Forex Strategies For Beginners", "Trend Following Strategy", "Breakout Trading Strategy", "Scalping vs Swing Trading", "Support & Resistance Trading", "Price Action Trading", "Multi-Timeframe Analysis", "Session Trading Strategies", "Risk-To-Reward Optimization", "High Probability Entry Techniques"],
    features: ["Strategy comparison tables", "Live chart examples", "Entry/exit examples", "Downloadable PDFs", "Video tutorials"]
  },
  {
    name: "Boom & Crash Analysis",
    topics: ["Best Boom 1000 Strategy", "Crash 500 Scalping Guide", "How To Catch Spikes", "Synthetic Indices Psychology", "Trend Continuation Entries", "Avoiding Fake Spikes", "Best Indicators For Boom & Crash", "Volatility Timing"],
    features: ["Spike alerts", "Synthetic volatility tracker", "Boom & Crash AI analysis", "Live synthetic charts", "Signal widgets"]
  },
  {
    name: "XAUUSD (Gold) Analysis",
    topics: ["Daily Gold Forecast", "Gold Scalping Strategy", "Gold Session Trading", "CPI & Gold Correlation", "Gold Liquidity Zones", "Institutional Gold Trading", "XAUUSD Price Action", "Gold News Trading"],
    features: ["Live gold price ticker", "Gold volatility meter", "Session heatmaps", "Gold news impact alerts", "AI gold analysis"]
  },
  {
    name: "Trading Psychology",
    topics: ["How To Control Emotions In Trading", "Fear & Greed In Forex", "Discipline In Trading", "Trading Patience", "Revenge Trading Explained", "Building A Professional Trader Mindset", "Confidence After Losses", "Consistency Habits"],
    features: ["Trading mindset quotes", "Daily discipline tracker", "Trading journal", "Emotional analysis tools"]
  },
  {
    name: "Risk Management",
    topics: ["Proper Lot Size Calculation", "Stop Loss Placement", "Risk-To-Reward Ratios", "Capital Preservation", "Position Sizing", "Avoiding Overleveraging", "Daily Loss Limits", "Drawdown Management"],
    features: ["Risk calculator", "Lot size calculator", "Drawdown calculator", "Profit/loss calculator"]
  },
  {
    name: "Prop Firm Challenges",
    topics: ["How To Pass FTMO Challenges", "Daily Drawdown Strategies", "Consistency Rules", "Best Prop Firm Strategies", "Low-Risk Trading Plans", "Challenge Psychology", "Account Protection Techniques"],
    features: ["Prop challenge tracker", "Daily drawdown monitor", "Profit target progress bars", "Risk analytics dashboard"]
  },
  {
    name: "MT5 Trading Bots",
    topics: ["Best MT5 Bots For Forex", "Automated Trading Systems", "Scalping Bots", "Gold Trading Bots", "Boom & Crash Bots", "How Expert Advisors Work", "Backtesting Strategies", "Bot Optimization"],
    features: ["Bot marketplace", "Live bot performance", "Backtest reports", "Video demos", "Licensing system"]
  },
  {
    name: "AI Trading Systems",
    topics: ["AI In Forex Trading", "Machine Learning In Trading", "AI Risk Analysis", "Automated Signal Generation", "Neural Networks In Trading", "Predictive Market Models", "AI Scalping Systems"],
    features: ["AI market scanner", "AI signal generator", "Smart volatility detection", "AI trade analysis"]
  },
  {
    name: "Market News",
    topics: ["Forex News Today", "Breaking Financial News", "FOMC Analysis", "CPI Reports", "Interest Rate Decisions", "Central Bank Updates", "NFP Market Reactions"],
    features: ["Live news feed", "Economic calendar", "High-impact news alerts", "News sentiment meter"]
  },
  {
    name: "Technical Analysis",
    topics: ["Candlestick Patterns", "Chart Patterns", "Trendlines", "Support & Resistance", "RSI Strategy", "MACD Trading", "Fibonacci Retracements", "Market Structure Analysis"],
    features: ["Interactive charts", "Pattern recognition AI", "Technical indicator widgets", "Drawing tools"]
  },
  {
    name: "Beginner Forex Guides",
    topics: ["What Is Forex Trading?", "Understanding Currency Pairs", "Pips & Lot Sizes Explained", "How Leverage Works", "How To Open Your First Trade", "Beginner Risk Management", "Forex Terminology"],
    features: ["Beginner roadmap", "Forex glossary", "Interactive tutorials", "Beginner quizzes"]
  },
  {
    name: "Smart Money Concepts (SMC)",
    topics: ["Order Blocks", "Liquidity Sweeps", "Fair Value Gaps (FVG)", "Market Structure Shifts", "Institutional Trading Concepts", "Break Of Structure (BOS)", "Change Of Character (CHOCH)", "Liquidity Concepts"],
    features: ["SMC chart examples", "Institutional heatmaps", "Liquidity tracking tools", "Smart money dashboards"]
  },
  {
    name: "ICT Trading Concepts",
    topics: ["ICT Kill Zones", "ICT Liquidity Concepts", "Market Maker Models", "Judas Swing", "Optimal Trade Entries (OTE)", "ICT Silver Bullet Strategy", "Session Manipulation Concepts"],
    features: ["Kill zone timers", "ICT session indicators", "Liquidity maps", "Trade replay system"]
  },
  {
    name: "Scalping Strategies",
    topics: ["1-Minute Scalping Strategy", "Gold Scalping Techniques", "Session Scalping", "Momentum Scalping", "High-Frequency Trading Concepts", "Scalping Psychology", "Fast Entry Systems"],
    features: ["Scalping dashboards", "Live momentum scanner", "Tick movement tracker", "Fast-entry alerts"]
  }
];

const sharedPremiumAdditions = [
  "AI-powered article recommendations", "VIP locked premium articles", "Downloadable trading PDFs", 
  "Embedded YouTube videos", "Interactive charts", "Telegram integration", 
  "Community comments", "Article bookmarking", "Search system", "Trending articles section"
];

const posts = [
  {
    title: "How To Trade Boom & Crash Profitably in 2026",
    topics: ["Spike entries", "Risk management", "Best timeframes", "Trend confirmation", "Avoiding fake signals"],
    category: "Boom & Crash Analysis",
    content: (
      <>
        <h3>Introduction</h3>
        <p>Boom and Crash indices have become some of the most popular synthetic markets among traders due to their volatility, spike opportunities, and ability to generate profits within short periods. However, many traders fail because they enter randomly without understanding market structure, trend direction, or proper risk management.</p>
        <p>In 2026, profitable Boom & Crash trading is no longer about gambling on spikes — it is about precision, discipline, and probability.</p>
        <p>This guide explains how professional traders approach Boom & Crash markets consistently.</p>

        <h3>Understanding Boom & Crash Markets</h3>
        <p>Boom and Crash are synthetic indices designed to simulate volatile market conditions.</p>
        <ul>
          <li><strong>Boom indices</strong> are known for sudden upward spikes.</li>
          <li><strong>Crash indices</strong> are known for sudden downward spikes.</li>
        </ul>
        <p>The market moves normally most of the time before producing explosive spikes that traders aim to capture.</p>
        <h4>Successful traders learn to:</h4>
        <ul>
          <li>Follow trend direction</li>
          <li>Wait for confirmations</li>
          <li>Manage risk carefully</li>
          <li>Avoid emotional entries</li>
        </ul>

        <h3>Best Timeframes For Trading</h3>
        <p>Choosing the right timeframe is critical.</p>
        <h4>Recommended Timeframes</h4>
        <ul>
          <li><strong>M1</strong> → Fast scalping entries</li>
          <li><strong>M5</strong> → Best for confirmations</li>
          <li><strong>M15</strong> → Trend direction</li>
          <li><strong>H1</strong> → Major market structure</li>
        </ul>
        <p>Professional traders usually combine H1 for overall trend, M15 for structure, and M5 or M1 for entries. This multi-timeframe approach reduces false signals.</p>

        <h3>How To Identify High-Probability Spike Entries</h3>
        <h4>For Boom Indices</h4>
        <p>Look for:</p>
        <ul>
          <li>Strong bullish trend</li>
          <li>Pullbacks into support zones</li>
          <li>Rejection candles</li>
          <li>Momentum continuation</li>
        </ul>
        <h4>For Crash Indices</h4>
        <p>Look for:</p>
        <ul>
          <li>Strong bearish trend</li>
          <li>Pullbacks into resistance</li>
          <li>Bearish rejection confirmations</li>
        </ul>
        <p>Never enter randomly because you “expect” a spike. The market rewards patience.</p>

        <h3>Trend Confirmation Techniques</h3>
        <p>Before entering trades, confirm:</p>
        <ul>
          <li>Market structure direction</li>
          <li>Higher highs & higher lows</li>
          <li>Lower highs & lower lows</li>
          <li>Moving average direction</li>
          <li>Momentum strength</li>
        </ul>
        <p>A trader who follows trend direction has a much higher probability of success.</p>

        <h3>Risk Management</h3>
        <p>Risk management separates profitable traders from gamblers.</p>
        <h4>Recommended Rules</h4>
        <ul>
          <li>Risk only 1–3% per trade</li>
          <li>Always use stop loss</li>
          <li>Avoid overleveraging</li>
          <li>Do not revenge trade</li>
        </ul>
        <p>Consistency matters more than one large profit.</p>

        <h3>Avoiding Fake Signals</h3>
        <p>One of the biggest mistakes traders make is entering every movement they see.</p>
        <p>Avoid:</p>
        <ul>
          <li>Trading against strong trends</li>
          <li>Entering after extended spikes</li>
          <li>Emotional trading</li>
          <li>Chasing the market</li>
        </ul>
        <p>Wait for confirmations and quality setups.</p>

        <h3>Trading Psychology</h3>
        <p>Your mindset determines your long-term success. Successful traders stay patient, follow rules, accept losses, and think long term. Emotional traders usually destroy accounts quickly.</p>

        <h3>Final Thoughts</h3>
        <p>Boom & Crash trading can be extremely profitable when approached professionally. Focus on trend direction, proper entries, patience, risk management, and discipline. The goal is not to catch every spike — the goal is consistency.</p>
      </>
    )
  },
  {
    title: "The Best XAUUSD Strategy For Consistent Profits",
    topics: ["Gold market structure", "Supply & demand", "London/New York sessions", "Scalping entries"],
    category: "XAUUSD (Gold) Analysis",
    content: (
      <>
        <h3>Introduction</h3>
        <p>Gold (XAUUSD) is one of the most volatile and profitable instruments in forex trading. Its large price movements create excellent opportunities for scalpers, day traders, and swing traders.</p>
        <p>However, without structure and discipline, Gold can also destroy trading accounts quickly.</p>
        <p>This guide explains a professional XAUUSD strategy used by experienced traders.</p>

        <h3>Understanding Gold Market Structure</h3>
        <p>Before entering any trade, understand market structure.</p>
        <ul>
          <li><strong>Bullish Structure:</strong> Higher highs, Higher lows</li>
          <li><strong>Bearish Structure:</strong> Lower highs, Lower lows</li>
        </ul>
        <p>Trading with structure increases probability.</p>

        <h3>Supply & Demand Zones</h3>
        <p>Gold reacts strongly to institutional supply and demand levels.</p>
        <ul>
          <li><strong>Demand Zones:</strong> Areas where buyers previously pushed price upward.</li>
          <li><strong>Supply Zones:</strong> Areas where sellers previously pushed price downward.</li>
        </ul>
        <p>These zones often provide high-probability entries.</p>

        <h3>Best Trading Sessions</h3>
        <ul>
          <li><strong>London Session:</strong> High volatility begins.</li>
          <li><strong>New York Session:</strong> Best momentum and strongest moves.</li>
        </ul>
        <p>The overlap between London and New York often provides the best setups.</p>

        <h3>Scalping Entries</h3>
        <p>Professional scalpers wait for:</p>
        <ul>
          <li>Breakouts</li>
          <li>Retests</li>
          <li>Confirmation candles</li>
          <li>Momentum continuation</li>
        </ul>
        <p>Avoid entering trades impulsively.</p>

        <h3>Risk Management</h3>
        <p>Gold is highly volatile. Recommended:</p>
        <ul>
          <li>Tight stop losses</li>
          <li>Proper lot sizing</li>
          <li>Avoid oversized trades</li>
          <li>Maintain good risk-to-reward ratios</li>
        </ul>
        <p>Protecting capital is essential.</p>

        <h3>Trading Psychology</h3>
        <p>Gold moves quickly and can trigger emotions. Successful traders remain calm, follow setups, avoid greed, and accept losses professionally.</p>

        <h3>Final Thoughts</h3>
        <p>Gold trading rewards disciplined traders who follow structure, respect volatility, manage risk properly, and trade patiently. Consistency is built through discipline, not luck.</p>
      </>
    )
  },
  {
    title: "Top 5 Mistakes Beginner Forex Traders Make",
    topics: ["Overtrading", "Revenge trading", "Poor risk management", "No trading plan", "Emotional trading"],
    category: "Trading Psychology",
    content: (
      <>
        <h3>Introduction</h3>
        <p>Most beginner traders lose money not because forex is impossible, but because they repeat avoidable mistakes. Understanding these mistakes early can dramatically improve your trading journey.</p>
        
        <h3>1. Overtrading</h3>
        <p>Many beginners believe more trades equal more profits. In reality, overtrading creates emotional decisions, increases losses, and reduces discipline. Professional traders wait for quality setups.</p>
        
        <h3>2. Revenge Trading</h3>
        <p>After losing, beginners often try to recover losses immediately. This leads to emotional entries, larger losses, and destroyed accounts. Losses are normal in trading.</p>

        <h3>3. Poor Risk Management</h3>
        <p>Risking too much per trade is dangerous. Professional traders protect capital first.</p>
        <p>Recommended: Risk 1–2% per trade, use stop losses, and maintain discipline.</p>

        <h3>4. Trading Without A Plan</h3>
        <p>Entering trades randomly creates inconsistency. A trading plan should include:</p>
        <ul>
          <li>Entry rules</li>
          <li>Exit rules</li>
          <li>Risk management</li>
          <li>Trading schedule</li>
        </ul>

        <h3>5. Emotional Trading</h3>
        <p>Fear and greed destroy consistency. Emotional traders panic close trades, move stop losses, and overtrade. Professional traders remain disciplined.</p>

        <h3>Final Thoughts</h3>
        <p>Avoiding these mistakes can significantly improve your results. Trading success comes from discipline, patience, consistency, and risk management.</p>
      </>
    )
  },
  {
    title: "How To Pass Prop Firm Challenges Faster",
    topics: ["Daily drawdown control", "Consistency tips", "Lot size management", "Risk-to-reward strategies"],
    category: "Prop Firm Challenges",
    content: (
      <>
        <h3>Introduction</h3>
        <p>Prop firms provide traders with access to funded accounts, but passing their challenges requires consistency and discipline. Many traders fail because they focus too much on profits and ignore risk management.</p>

        <h3>Understand The Rules</h3>
        <p>Before trading:</p>
        <ul>
          <li>Read all challenge rules</li>
          <li>Understand drawdown limits</li>
          <li>Understand daily loss limits</li>
        </ul>
        <p>Ignoring rules leads to instant failure.</p>

        <h3>Daily Drawdown Control</h3>
        <p>Protecting your account is the priority. Tips:</p>
        <ul>
          <li>Use smaller lot sizes</li>
          <li>Avoid revenge trading</li>
          <li>Stop trading after large losses</li>
        </ul>
        <p>Consistency matters more than speed.</p>

        <h3>Risk-To-Reward Strategy</h3>
        <p>Professional traders aim for 1:2 or 1:3 risk-to-reward ratios. This allows profitability even with average win rates.</p>

        <h3>Consistency Over Aggression</h3>
        <p>Many traders fail because they try to pass quickly. Successful traders stay disciplined, protect capital, and follow strategy. Slow consistency wins.</p>

        <h3>Trading Psychology</h3>
        <p>Passing challenges requires emotional control. Avoid FOMO, greed, and emotional entries. Professional mindset is essential.</p>

        <h3>Final Thoughts</h3>
        <p>Prop firm success comes from discipline, risk management, patience, and consistency. Think like a professional trader, not a gambler.</p>
      </>
    )
  },
  {
    title: "AI Trading Bots vs Manual Trading",
    topics: ["Automation", "Advantages", "Risks", "Market adaptation"],
    category: "AI Trading Systems",
    content: (
      <>
        <h3>Introduction</h3>
        <p>Technology is transforming trading rapidly. AI trading bots are becoming increasingly popular, while manual trading still remains widely used by experienced traders. Both approaches have advantages and disadvantages.</p>

        <h3>What Are AI Trading Bots?</h3>
        <p>AI trading bots are automated systems designed to analyze markets, execute trades, follow programmed strategies, and remove emotional decisions. Bots can trade 24/7 without fatigue.</p>

        <h3>Advantages Of AI Trading Bots</h3>
        <ul>
          <li><strong>Speed:</strong> Bots execute trades instantly.</li>
          <li><strong>Emotion-Free Trading:</strong> No fear or greed.</li>
          <li><strong>Automation:</strong> Bots monitor markets continuously.</li>
          <li><strong>Consistency:</strong> Bots follow rules precisely.</li>
        </ul>

        <h3>Risks Of AI Trading Bots</h3>
        <ul>
          <li><strong>Market Changes:</strong> Bots may struggle in changing conditions.</li>
          <li><strong>Technical Failures:</strong> Internet or server issues can affect performance.</li>
          <li><strong>Over-Optimization:</strong> Some bots perform well historically but fail live.</li>
        </ul>

        <h3>Advantages Of Manual Trading</h3>
        <p>Manual traders can adapt to market conditions, interpret news, use discretion, and avoid unexpected market behavior. Human judgment still matters.</p>

        <h3>Which Is Better?</h3>
        <p>The best approach often combines AI automation, human supervision, risk management, and strategy adaptation. Technology should support traders — not replace discipline.</p>

        <h3>Final Thoughts</h3>
        <p>AI trading systems are shaping the future of financial markets. However, successful trading still depends on proper strategy, risk management, discipline, and continuous learning. Whether automated or manual, consistency remains the key to long-term success.</p>
      </>
    )
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <div className="w-full pt-32 pb-32 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {selectedPost === null ? (
            <motion.div
              key="index"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">
                  THEPIPHUNTERS FOREX ACADEMY <span className="text-gradient">Blog</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Stay updated with the latest trading strategies, market analysis, and psychological insights.
                </p>
              </div>

              {/* Categories Grid */}
              <div className="mb-20">
                <h2 className="text-3xl font-heading font-black text-white mb-8 border-b border-white/10 pb-4">Featured Blog Categories</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoriesData.map((category, i) => (
                    <div key={i} className="bg-[#1A1E29] border border-white/10 rounded-2xl p-6 hover:border-brand-gold/50 transition-all group">
                      <h3 className="text-xl font-bold text-brand-gold mb-4 group-hover:text-yellow-400 transition-colors">{category.name}</h3>
                      <div className="space-y-4">
                        <div>
                           <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Topics:</h4>
                           <ul className="space-y-1">
                             {category.topics.slice(0, 5).map((topic, j) => (
                               <li key={j} className="text-sm text-gray-300 flex items-center gap-2">
                                 <div className="w-1 h-1 bg-brand-gold rounded-full"/> {topic}
                               </li>
                             ))}
                             {category.topics.length > 5 && (
                               <li className="text-sm text-brand-gold/60 font-medium italic mt-1">+ {category.topics.length - 5} more topics</li>
                             )}
                           </ul>
                        </div>
                        <div className="pt-4 border-t border-white/5">
                           <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Features:</h4>
                           <div className="flex flex-wrap gap-2">
                             {category.features.slice(0, 3).map((feature, j) => (
                               <span key={j} className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded-md">{feature}</span>
                             ))}
                           </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shared Premium Features */}
              <div className="mb-20 bg-gradient-to-br from-brand-navy to-[#1A1E29] p-8 md:p-12 rounded-3xl border border-brand-gold/30">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-gold" /> Premium Academy Additions
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {sharedPremiumAdditions.map((feature, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                       <span className="text-sm font-semibold text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Posts Grid */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Featured Blog Posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post, i) => (
                    <div 
                      key={i}
                      className="bg-brand-navy border border-white/10 rounded-2xl p-6 hover:border-brand-gold/30 transition-all flex flex-col cursor-pointer group"
                      onClick={() => setSelectedPost(i)}
                    >
                      <div className="text-xs text-brand-gold font-semibold mb-3 bg-brand-gold/10 w-fit px-3 py-1 rounded-full">{post.category}</div>
                      <h3 className="text-lg font-bold text-white mb-4 leading-snug group-hover:text-brand-gold transition-colors">{post.title}</h3>
                      
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Topics Covered:</h4>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {post.topics.map((topic, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                      
                      <button className="text-brand-gold text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit">
                        Read Article <ArrowLeft className="w-4 h-4 rotate-180" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="post"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
               <button 
                 onClick={() => setSelectedPost(null)}
                 className="flex items-center gap-2 text-brand-gold font-bold mb-12 hover:text-white transition-colors"
               >
                 <ArrowLeft className="w-5 h-5"/> Back to Blog
               </button>

               <div className="max-w-4xl mx-auto">
                 <div className="text-center mb-12">
                   <div className="inline-block bg-brand-gold/10 px-4 py-1.5 rounded-full text-brand-gold font-semibold text-sm mb-6 border border-brand-gold/20">
                     {posts[selectedPost].category}
                   </div>
                   <h1 className="text-3xl md:text-5xl font-heading font-black text-white">
                     {posts[selectedPost].title}
                   </h1>
                 </div>

                 <div className="prose prose-invert prose-brand max-w-none bg-brand-navy p-6 md:p-12 rounded-3xl border border-white/10">
                   {posts[selectedPost].content}
                 </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
