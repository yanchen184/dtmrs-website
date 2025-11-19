import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const EntryAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showAnimation && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="fixed inset-0 z-[9999] bg-black pointer-events-none"
          />

          {/* 紅色梯形動畫 */}
          <motion.div
            initial={{ x: '100%', opacity: 1 }}
            animate={{ x: '-150%' }}
            exit={{ opacity: 0 }}
            transition={{
              x: {
                duration: 1.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              },
              opacity: {
                duration: 0.5,
                delay: 1.5
              }
            }}
            className="fixed top-0 left-0 w-full h-full z-[10000] pointer-events-none overflow-hidden"
          >
            {/* 梯形形狀 */}
            <div
              className="absolute top-0 h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 shadow-2xl"
              style={{
                width: '120vw',
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
                transform: 'skewX(-15deg)',
              }}
            >
              {/* 添加光澤效果 */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  animation: 'shimmer 1s ease-out'
                }}
              />
            </div>

            {/* DTMRS Logo動畫 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-white text-8xl md:text-9xl font-bold tracking-wider drop-shadow-2xl">
                DTMRS
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EntryAnimation;