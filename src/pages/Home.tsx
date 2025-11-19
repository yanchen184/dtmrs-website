import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import ContactButtons from '../components/ContactButtons';

const Home = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Logo fade out after 2 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    // Video fade in after 3 seconds
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(videoTimer);
    };
  }, []);

  return (
    <>
      {showVideo && (
        <>
          <Sidebar />
          <ContactButtons />
        </>
      )}
      <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence>
        {showLogo && (
          <motion.div
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center z-20 bg-black"
          >
            <motion.img
              src="/assets/logo/白字DTM LOGO.png"
              alt="DTM Logo"
              className="w-1/2 max-w-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-10"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/dtmrs-website/assets/videos/20250420 SGT6 DTMRS Asurada.mp4"
                type="video/mp4"
              />
              您的瀏覽器不支援影片播放。
            </video>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>

            {/* Content overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-30"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
                DTM RACING SPORT
              </h1>
              <p className="text-2xl md:text-3xl text-white drop-shadow-lg">
                專業賽車改裝與性能提升
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
