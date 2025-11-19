import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import ContactButtons from '../components/ContactButtons';
import EntryAnimation from '../components/EntryAnimation';

const ScrollHome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // 用於追蹤各個 section 的滾動進度
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    // 預載入影片
    const videos = [
      '/assets/videos/20250420 SGT6 DTMRS Asurada.mp4',
      '/assets/videos/20241208 DTM東京車展60sec.mp4',
      '/assets/videos/20250112 DTMRS Autosalon序HD .mp4'
    ];

    videos.forEach(src => {
      const video = document.createElement('video');
      video.src = src;
      video.load();
    });

    console.log('DTMRS Website v2.0.0 - Visual Focus Edition');
  }, []);

  // 視差效果
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.5, 0.3]);

  // 淡進淡出動畫設定
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  return (
    <>
      <EntryAnimation />
      <Sidebar />
      <ContactButtons />

      <div className="scroll-container" ref={containerRef}>

        {/* Section 1: Hero - 全螢幕影片背景 */}
        <section className="h-screen w-full relative overflow-hidden" id="home" ref={heroRef}>
          {/* 影片背景 */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ y }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/assets/videos/20250420 SGT6 DTMRS Asurada.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* 漸層遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

          {/* 標題文字 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center z-10"
            style={{ opacity }}
          >
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUpVariants}
            >
              <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                DTM RACING
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 drop-shadow-lg font-light tracking-wider">
                專業賽車改裝 | 性能提升專家
              </p>
            </motion.div>
          </motion.div>

          {/* 向下滾動提示 */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* Section 2: 視覺展示區 - 大圖片為主 */}
        <section className="min-h-screen w-full bg-black relative overflow-hidden" id="showcase" ref={aboutRef}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="grid grid-cols-1 md:grid-cols-2 h-screen"
          >
            {/* 左側大圖 */}
            <motion.div
              className="relative h-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/images/DIRK7360.jpg"
                alt="DTM Racing Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <motion.div
                className="absolute bottom-10 left-10 text-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-4xl font-bold mb-2">專業團隊</h3>
                <p className="text-lg text-white/80">10年以上賽車改裝經驗</p>
              </motion.div>
            </motion.div>

            {/* 右側大圖 */}
            <motion.div
              className="relative h-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/images/DIR06525.jpg"
                alt="Performance Upgrade"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <motion.div
                className="absolute bottom-10 right-10 text-white text-right"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-4xl font-bold mb-2">頂級改裝</h3>
                <p className="text-lg text-white/80">賽道級性能提升</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 3: 東京車展影片區 */}
        <section className="h-screen w-full relative overflow-hidden bg-black" id="tokyo">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="h-full relative"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="/assets/videos/20241208 DTM東京車展60sec.mp4"
                type="video/mp4"
              />
            </video>

            {/* 左側文字面板 */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <motion.div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-12 max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-6xl font-bold text-white mb-6">
                東京車展 2024
              </h2>
              <div className="w-24 h-1 bg-red-500 mb-6"></div>
              <p className="text-xl text-white/90 leading-relaxed">
                參與亞洲最大規模的汽車展覽
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 4: 圖片牆 - Masonry Layout */}
        <section className="min-h-screen w-full bg-black py-2" id="gallery">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
          >
            {/* 大圖片區塊 */}
            <motion.div
              className="col-span-2 row-span-2 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/images/DIR06557.jpg"
                alt="Feature 1"
                className="w-full h-full object-cover"
                style={{ minHeight: '600px' }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </motion.div>

            {/* 中型圖片 */}
            {[
              'DIR06574.jpg',
              'DIR06591.jpg',
              'DFM03708.jpg',
              'DFM03713.jpg',
              'DIR06227.jpg',
              'DIR06240.jpg'
            ].map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={`/assets/images/${img}`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </motion.div>
            ))}

            {/* 另一個大圖片 */}
            <motion.div
              className="col-span-2 row-span-2 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/images/DIR06244.jpg"
                alt="Feature 2"
                className="w-full h-full object-cover"
                style={{ minHeight: '600px' }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </motion.div>

            {/* 其餘圖片 */}
            {[
              'DIR06483.jpg',
              'DIR06485.jpg',
              'DIR06506.jpg',
              'DIR06516.jpg',
              'DSC00004.JPG'
            ].map((img, index) => (
              <motion.div
                key={`extra-${index}`}
                className="relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={`/assets/images/${img}`}
                  alt={`Gallery Extra ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 5: Auto Salon 影片區 */}
        <section className="h-screen w-full relative overflow-hidden bg-black" id="autosalon">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="h-full relative"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="/assets/videos/20250112 DTMRS Autosalon序HD .mp4"
                type="video/mp4"
              />
            </video>

            {/* 右側文字面板 */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
            <motion.div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-12 max-w-xl text-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-6xl font-bold text-white mb-6">
                Auto Salon 2025
              </h2>
              <div className="w-24 h-1 bg-red-500 mb-6 ml-auto"></div>
              <p className="text-xl text-white/90 leading-relaxed">
                展出頂級改裝作品與創新技術
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 6: 專業服務展示 - 圖片為主 */}
        <section className="min-h-screen w-full bg-gray-900" id="services">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInVariants}
            className="container mx-auto px-4 py-20"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              專業改裝服務
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {[
                {
                  img: 'DIR06227.jpg',
                  title: '引擎調校',
                  desc: '馬力提升 / ECU優化',
                  span: 'lg:col-span-2 lg:row-span-2'
                },
                {
                  img: 'DIR06240.jpg',
                  title: '空力套件',
                  desc: '賽道級空氣動力學'
                },
                {
                  img: 'DIR06244.jpg',
                  title: '底盤強化',
                  desc: '懸吊系統優化'
                },
                {
                  img: 'DIR06516.jpg',
                  title: '內裝改裝',
                  desc: '賽車化內裝設計'
                },
                {
                  img: 'DIR06483.jpg',
                  title: '排氣系統',
                  desc: '高性能排氣改裝',
                  span: 'lg:col-span-2'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden group ${service.span || ''}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={`relative ${service.span ? 'h-[600px]' : 'h-[300px]'}`}>
                    <img
                      src={`/assets/images/${service.img}`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-lg text-white/80">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 7: 聯繫資訊 - 簡潔設計 */}
        <section className="h-screen w-full bg-gradient-to-br from-red-600 to-red-800 flex items-center" id="contact">
          <motion.div
            className="container mx-auto px-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">
              START YOUR JOURNEY
            </h2>
            <div className="w-32 h-1 bg-white mx-auto mb-12"></div>
            <p className="text-2xl text-white/90 mb-12">
              讓 DTM 為您打造夢想中的賽車
            </p>
            <motion.div
              className="flex flex-col md:flex-row justify-center items-center gap-8 text-white text-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a href="mailto:bobchen184@gmail.com" className="flex items-center gap-4 hover:text-white/80 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>bobchen184@gmail.com</span>
              </a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ScrollHome;