import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const EntryAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 4000); // 總時間 = 梯形(1.5秒) + Logo閃爍(1.5秒) + 淡出(1秒) = 4秒

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
            transition={{ duration: 1.0, delay: 3.0 }} // Logo閃爍完（3秒）後開始淡出（1秒）
            className="fixed inset-0 z-[9999] bg-black pointer-events-none"
          />

          {/* 紅色梯形動畫 - 左窄右寬的梯形 */}
          <motion.div
            initial={{ x: '100%', opacity: 1 }}
            animate={{ x: '-150%' }}
            exit={{ opacity: 0 }}
            transition={{
              x: {
                duration: 1.5, // 梯形飛行：1.5秒
                ease: [0.6, 0.05, 0.01, 0.9]
              },
              opacity: {
                duration: 1.0, // 淡出：1秒
                delay: 3.0 // Logo閃爍完（3秒）後開始淡出
              }
            }}
            className="fixed top-0 left-0 w-full h-full z-[10000] pointer-events-none overflow-hidden"
          >
            {/* 梯形形狀 - 跟 Sidebar 相同的斜度和顏色 */}
            <div
              className="absolute top-0 h-full shadow-2xl"
              style={{
                width: '200vw', // 加大寬度
                left: '-30vw',
                background: 'linear-gradient(135deg, #CC0000 0%, #990000 100%)', // 跟 Sidebar 一樣的紅色
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)', // 跟 Sidebar 一樣的斜度
                boxShadow: '0 0 100px rgba(204, 0, 0, 0.6)'
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

            {/* DTMRS Logo動畫 - 淡入後閃爍 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 1, 1, 0.2, 1, 0.2, 1, 0.2, 1], // 淡入 → 保持 → 閃爍3次（亮→暗→亮）
                scale: [0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1]
              }}
              transition={{
                duration: 3.0,
                times: [0, 0.2, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1.0], // 精確控制時間點
                ease: "easeInOut"
              }}
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