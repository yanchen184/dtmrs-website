import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const EntryAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1200); // 加快到 1200ms，讓梯形飛過去就淡出

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
            transition={{ duration: 0.3, delay: 0.8 }} // 梯形飛過去立即淡出
            className="fixed inset-0 z-[9999] bg-black pointer-events-none"
          />

          {/* 紅色梯形動畫 - 左窄右寬的梯形 */}
          <motion.div
            initial={{ x: '100%', opacity: 1 }}
            animate={{ x: '-150%' }}
            exit={{ opacity: 0 }}
            transition={{
              x: {
                duration: 0.9, // 飛行速度
                ease: [0.6, 0.05, 0.01, 0.9]
              },
              opacity: {
                duration: 0.3,
                delay: 0.8 // 飛過去立即淡出
              }
            }}
            className="fixed top-0 left-0 w-full h-full z-[10000] pointer-events-none overflow-hidden"
          >
            {/* 梯形形狀 - 像截圖中左窄右寬的梯形 */}
            <div
              className="absolute top-0 h-full bg-gradient-to-br from-red-600 via-red-500 to-red-700 shadow-2xl"
              style={{
                width: '200vw', // 加大寬度
                left: '-30vw',
                clipPath: 'polygon(0 0, 100% 0, 65% 100%, 20% 100%)', // 左窄右寬的梯形
                boxShadow: '0 0 100px rgba(220, 0, 0, 0.6)'
              }}
            >
              {/* 添加光澤效果 */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  animation: 'shimmer 0.8s ease-out'
                }}
              />

              {/* 添加邊緣高光 */}
              <div className="absolute inset-0 border-r-4 border-white/20" />
            </div>

            {/* DTMRS Logo動畫 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }} // 加快出現
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