import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const EntryAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showAnimation && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{
              duration: 6.5,
              times: [0, 5.0 / 6.5, 1], // 0秒維持, 5秒開始淡出, 6.5秒結束
              ease: "linear",
            }}
            className="fixed inset-0 z-[9999] bg-black pointer-events-none"
          />

          {/* 紅色梯形動畫 - 左窄右寬的梯形 */}
          <motion.div
            initial={{ x: "100%", opacity: 1 }}
            animate={{
              x: "-150%",
              opacity: [1, 1, 1, 1, 0],
            }}
            transition={{
              x: {
                duration: 3.0, // 梯形飛行：3秒
                ease: [0.6, 0.05, 0.01, 0.9],
              },
              opacity: {
                duration: 6.5,
                times: [0, 3.0 / 6.5, 5.0 / 6.5, 5.0 / 6.5, 1], // 0秒開始, 3秒維持, 5秒維持, 5秒開始淡出, 6.5秒結束
                ease: "linear",
              },
            }}
            className="fixed top-0 left-0 w-full h-full z-[10000] pointer-events-none overflow-hidden"
          >
            {/* 梯形形狀 - 跟 Sidebar 相同的斜度和顏色 */}
            <div
              className="absolute top-0 h-full shadow-2xl"
              style={{
                width: "2000px", // 從 w-72 (288px) 放大一倍到 576px
                background: "linear-gradient(135deg, #CC0000 0%, #990000 100%)",
                clipPath: "polygon(35% 0, 100% 0, 65% 100%, 0 100%)", // 調整梯形角度
                boxShadow: "4px 0 20px rgba(0, 0, 0, 0.3)",
              }}
            ></div>
          </motion.div>

          {/* DTMRS Logo動畫 - 獨立飛行（在梯形上方，梯形快結束時開始飛） */}
          <motion.div
            initial={{ x: "100%", opacity: 1 }}
            animate={{
              x: "-150%",
              opacity: 1, // 全程不透明
            }}
            transition={{
              x: {
                duration: 7.0, // 比較慢
                delay: 0.5, // 1.2秒後開始移動
                ease: [0.25, 0.1, 0.25, 1.0],
              },
            }}
            className="fixed top-0 left-0 w-full h-full z-[10001] pointer-events-none flex items-center justify-center"
          >
            <img
              src="/dtmrs-website/assets/logo/白字DTM LOGO.png"
              alt="DTM Logo"
              className="w-full h-auto drop-shadow-lg"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EntryAnimation;
