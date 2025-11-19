import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const EntryAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 6500); // 總時間 = 梯形(3秒) → Logo(3秒，2.5秒開始) → 淡出(1.5秒，5秒開始) = 6.5秒

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
            transition={{ duration: 1.5, delay: 5.0 }} // Logo快結束（5秒）時開始淡出（1.5秒）
            className="fixed inset-0 z-[9999] bg-black pointer-events-none"
          />

          {/* 紅色梯形動畫 - 左窄右寬的梯形 */}
          <motion.div
            initial={{ x: '100%', opacity: 1 }}
            animate={{ x: '-150%' }}
            exit={{ opacity: 0 }}
            transition={{
              x: {
                duration: 3.0, // 梯形飛行：3秒
                ease: [0.6, 0.05, 0.01, 0.9]
              },
              opacity: {
                duration: 1.5, // 淡出：1.5秒
                delay: 5.0 // Logo快結束（5秒）時開始淡出
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
          </motion.div>

          {/* DTMRS Logo動畫 - 獨立飛行（在梯形上方，梯形快結束時開始飛） */}
          <motion.div
            initial={{ x: '100%', opacity: 1 }}
            animate={{ x: '-150%' }}
            exit={{ opacity: 0 }}
            transition={{
              x: {
                duration: 3.0, // Logo飛行：3秒
                delay: 2.5, // 梯形快結束時（2.5秒）開始飛
                ease: [0.6, 0.05, 0.01, 0.9]
              },
              opacity: {
                duration: 1.5, // 淡出：1.5秒
                delay: 5.0 // Logo快結束（5秒）時開始淡出
              }
            }}
            className="fixed top-0 left-0 w-full h-full z-[10001] pointer-events-none flex items-center justify-center"
          >
            <img
              src="/dtmrs-website/assets/logo/白字DTM LOGO.png"
              alt="DTM Logo"
              className="w-96 h-auto drop-shadow-2xl"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EntryAnimation;