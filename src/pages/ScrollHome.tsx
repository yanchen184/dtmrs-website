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

    // 移除預載入邏輯，改用 preload="metadata" 提升效能
    console.log('DTMRS Website v2.9.5 - Logo 圖片快速進場動畫');
  }, []);

  // 視差效果
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.5, 0.3]);

  // 淡進淡出動畫設定 - 加快速度
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
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
          {/* 影片背景 - 延伸到整個畫面包括 Sidebar 下方 */}
          <motion.div
            className="absolute w-full h-full"
            style={{
              y,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source
                src="/dtmrs-website/assets/videos/20250420 SGT6 DTMRS Asurada.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* 漸層遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

          {/* 標題文字 - 保持在 Sidebar 右側 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center z-10"
            style={{
              opacity,
              paddingLeft: '600px' // 文字不被 Sidebar 遮擋
            }}
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

        {/* Section 2: 關於我們 */}
        <section className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden py-20" id="about" ref={aboutRef}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            className="px-8"
            style={{ paddingLeft: 'max(600px, 3rem)' }} // 文字保持在 Sidebar 右側
          >
            {/* 標題 */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                關於 DTM Racing Sport
              </h2>
              <div className="w-32 h-1 bg-red-600 mx-auto"></div>
            </motion.div>

            {/* 公司簡介 */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-gray-300">
                <h3 className="text-3xl font-bold text-white mb-4">專業賽車改裝團隊</h3>
                <p className="text-lg leading-relaxed">
                  DTM Racing Sport 成立於 2014 年，是台灣領先的專業賽車改裝團隊。我們專注於高性能車輛的改裝與調校，
                  為追求極致駕馭體驗的車主提供最專業的服務。
                </p>
                <p className="text-lg leading-relaxed">
                  我們的團隊擁有超過 10 年的賽車改裝經驗，參與過多項國際賽事，累積了豐富的實戰經驗。
                  從引擎調校、底盤強化到空力套件，我們提供全方位的改裝方案，讓每一輛車都能發揮極致性能。
                </p>
                <p className="text-lg leading-relaxed">
                  我們堅持使用高品質零件，並採用先進的調校設備，確保每一項改裝都達到最佳效果。
                  無論是街道駕駛還是賽道競技，DTM Racing Sport 都能為您打造完美的駕馭機器。
                </p>
              </div>

              <div className="relative">
                <img
                  src="/dtmrs-website/assets/images/DIRK7360.jpg"
                  alt="DTM Racing Team"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
            </motion.div>

            {/* 核心價值 */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 p-8 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🏁</span>
                </div>
                <h4 className="text-2xl font-bold text-white text-center mb-4">專業技術</h4>
                <p className="text-gray-300 text-center leading-relaxed">
                  擁有國際認證的專業技師團隊，採用先進的改裝技術與設備，確保每一項工程都達到最高標準。
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🏆</span>
                </div>
                <h4 className="text-2xl font-bold text-white text-center mb-4">賽道實證</h4>
                <p className="text-gray-300 text-center leading-relaxed">
                  參與多項國際賽事，在賽道上驗證我們的改裝技術。實戰經驗讓我們更了解性能車輛的極限與潛力。
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h4 className="text-2xl font-bold text-white text-center mb-4">客製化服務</h4>
                <p className="text-gray-300 text-center leading-relaxed">
                  根據每位車主的需求與預算，量身打造最適合的改裝方案。從街道到賽道，我們都能滿足您的需求。
                </p>
              </div>
            </motion.div>

            {/* 團隊照片 */}
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/dtmrs-website/assets/images/DIR06525.jpg"
                alt="Team Workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-12 w-full">
                  <h3 className="text-4xl font-bold text-white mb-4">打造您的夢想座駕</h3>
                  <p className="text-xl text-gray-200 max-w-2xl">
                    DTM Racing Sport - 讓每一次駕駛都成為極致體驗
                  </p>
                </div>
              </div>
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
            {/* 影片延伸到整個畫面 */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute w-full h-full object-cover"
              style={{ left: 0, top: 0, right: 0, bottom: 0 }}
            >
              <source
                src="/dtmrs-website/assets/videos/20241208 DTM東京車展60sec.mp4"
                type="video/mp4"
              />
            </video>

            {/* 漸層遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            {/* 文字面板 - 保持在 Sidebar 右側 */}
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 p-12 max-w-xl"
              style={{ left: '600px' }} // 文字不被 Sidebar 遮擋
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
          {/* 圖片從畫面左邊開始，可以延伸到 Sidebar 下方 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
            style={{ position: 'relative', left: 0 }}
          >
            {/* 大圖片區塊 */}
            <motion.div
              className="col-span-2 row-span-2 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/dtmrs-website/assets/images/DIR06557.jpg"
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
                  src={`/dtmrs-website/assets/images/${img}`}
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
                src="/dtmrs-website/assets/images/DIR06244.jpg"
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
                  src={`/dtmrs-website/assets/images/${img}`}
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
            {/* 影片延伸到整個畫面 */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute w-full h-full object-cover"
              style={{ left: 0, top: 0, right: 0, bottom: 0 }}
            >
              <source
                src="/dtmrs-website/assets/videos/20250112 DTMRS Autosalon序HD .mp4"
                type="video/mp4"
              />
            </video>

            {/* 漸層遮罩 */}
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
            className="px-4 py-20"
            style={{ paddingLeft: 'max(600px, 2rem)' }} // 文字保持在 Sidebar 右側
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
                      src={`/dtmrs-website/assets/images/${service.img}`}
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
            className="px-12 text-center w-full"
            style={{ paddingLeft: 'max(620px, 3rem)' }} // 文字保持在 Sidebar 右側
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