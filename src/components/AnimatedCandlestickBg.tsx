import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function AnimatedCandlestickBg() {
  const [candles, setCandles] = useState<any[]>([]);

  useEffect(() => {
    // Generate random candlesticks spaced across the screen
    const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 30;
    
    const items = Array.from({ length: count }).map((_, i) => {
      const isBullish = Math.random() > 0.4; // Slightly more bullish
      return {
        id: i,
        left: `${(i / count) * 100}%`,
        isBullish,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 6,
        baseHeight: 10 + Math.random() * 30, // 10% to 40% base start
      };
    });
    setCandles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {candles.map((candle) => (
        <motion.div
          key={candle.id}
          className="absolute bottom-0 w-[4px] sm:w-[8px]"
          style={{ left: candle.left }}
          initial={{ height: `${candle.baseHeight}%`, y: '0%' }}
          animate={{
            height: [
              `${candle.baseHeight}%`, 
              `${candle.baseHeight + 20 + Math.random() * 30}%`, 
              `${candle.baseHeight - 10 + Math.random() * 20}%`, 
              `${candle.baseHeight}%`
            ],
            y: [
              '0%', 
              `-${Math.random() * 10}%`, 
              `${Math.random() * 5}%`, 
              '0%'
            ]
          }}
          transition={{
            duration: candle.duration,
            repeat: Infinity,
            delay: candle.delay,
            ease: "easeInOut",
          }}
        >
          {/* Wick */}
          <div 
            className={`absolute left-1/2 transform -translate-x-1/2 w-[1px] sm:w-[2px] h-[140%] -top-[20%] ${
              candle.isBullish ? 'bg-brand-neon' : 'bg-red-500'
            }`} 
          />
          {/* Body */}
          <div 
            className={`relative w-full h-full rounded shadow-[0_0_10px_currentColor] ${
              candle.isBullish ? 'bg-brand-neon/80 text-brand-neon' : 'bg-red-500/80 text-red-500'
            }`}
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/95 to-transparent" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px]" />
    </div>
  );
}
