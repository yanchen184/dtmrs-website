import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const EntryAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3500); // 延長到 3500ms，給影片更多載入時間

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
            transition={{ duration: 1.0, delay: 1.5 }} // 延長淡出時間，延遲開始
            className="fixed inset-0 z-[9999] bg-black pointer-events-none"
          />

          {/* 紅色梯形動畫 - 左窄右寬的梯形 */}
          <motion.div
            initial={{ x: '100%', opacity: 1 }}
            animate={{ x: '-150%' }}
            exit={{ opacity: 0 }}
            transition={{
              x: {
                duration: 1.8, // 延長飛行時間，從 0.9秒增加到 1.8秒
                ease: [0.6, 0.05, 0.01, 0.9]
              },
              opacity: {
                duration: 1.0, // 延長淡出時間
                delay: 1.5 // 延遲淡出開始時間
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

            {/* DTMRS Logo動畫 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }} // 延長出現時間，更柔和
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