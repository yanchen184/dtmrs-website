import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getLogoUrl } from "../config/cdnConfig";

const EntryAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5500); // 從 6500 縮短到 5500 毫秒
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
              duration: 5.5,
              times: [0, 4.5 / 5.5, 1], // 0秒維持, 4.5秒開始淡出, 5.5秒結束
              ease: "linear",
            }}
            className="fixed inset-0 z-[9999] bg-black pointer-events-none"
          />

          {/* 碳纖維梯形動畫 - 左窄右寬的梯形（僅桌面版顯示） */}
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
                duration: 5.5,
                times: [0, 3.0 / 5.5, 4.5 / 5.5, 4.5 / 5.5, 1], // 0秒開始, 3秒維持, 4.5秒維持, 4.5秒開始淡出, 5.5秒結束
                ease: "linear",
              },
            }}
            className="hidden md:block fixed top-0 left-0 w-full h-full z-[10000] pointer-events-none overflow-hidden"
          >
            {/* 梯形形狀 - 碳纖維紋理 */}
            <div
              className="absolute top-0 h-full shadow-2xl"
              style={{
                width: "2000px",
                background: `
                  linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
                  linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
                  linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
                  linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
                  linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
                  linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)
                `,
                backgroundColor: "#131313",
                backgroundSize: "20px 20px",
                clipPath: "polygon(35% 0, 100% 0, 65% 100%, 0 100%)",
                boxShadow: "4px 0 30px rgba(0, 0, 0, 0.8), inset 0 0 100px rgba(255, 255, 255, 0.05)",
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
                duration: 4.5, // 加快速度：從 7.0 改為 4.5 秒
                delay: 0.3, // 提早開始：從 0.5 改為 0.3 秒
                ease: [0.25, 0.1, 0.25, 1.0],
              },
            }}
            className="fixed top-0 left-0 w-full h-full z-[10001] pointer-events-none flex items-center justify-center"
          >
            <img
              src={getLogoUrl('white')}
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
