import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaLine, FaWeixin } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import ContactButtons from '../components/ContactButtons';
import EntryAnimation from '../components/EntryAnimation';
import { videoUrls, getImageUrl } from '../config/cdnConfig';

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
    console.log('DTMRS Website v2.9.24 - 修正手機版右側白邊問題');
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
                src={videoUrls.hero}
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* 漸層遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

          {/* 標題文字 - 手機版置中，桌面版偏右 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center z-10 px-4 md:pl-[22vw] md:pr-8 pt-16 md:pt-0"
            style={{
              opacity
            }}
          >
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUpVariants}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4 sm:mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                DTM RACING
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-lg font-light tracking-wider px-4 sm:px-0">
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
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInVariants}
            className="px-4 sm:px-8 md:pl-[22vw] md:pr-8 lg:pr-12"
          >
            {/* 標題 */}
            <motion.div
              className="text-center mb-8 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                關於 DTM Racing Sport
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto"></div>
            </motion.div>

            {/* 公司簡介 */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
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
                  src={getImageUrl('DIRK7360.jpg')}
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
              viewport={{ once: false, amount: 0.3 }}
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
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={getImageUrl('DIR06525.jpg')}
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

        {/* Section 3: 我們會什麼 - 3D 服務總覽 */}
        <section className="py-20 w-full bg-gradient-to-b from-black to-gray-900" id="services">
          <motion.div
            className="px-4 sm:px-8 md:pl-[22vw] md:pr-8 lg:pr-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 sm:mb-6">
              我們會什麼
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/80 text-center max-w-3xl mx-auto mb-16">
              結合先進 3D 技術與賽車改裝專業，為您提供從設計到成品的完整解決方案
            </p>
          </motion.div>
        </section>

        {/* 3D 設計 */}
        <section className="py-20 w-full bg-gray-900 overflow-hidden" id="design-3d">
          <motion.div
            className="px-4 sm:px-8 md:pl-[22vw] md:pr-8 lg:pr-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">3D 設計</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  運用專業 CAD 軟體進行精密的 3D 建模設計，從概念發想到細節雕琢，打造獨一無二的改裝零件。
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    客製化空力套件設計
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    引擎室零件優化設計
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    內裝配件精密設計
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    結構強度分析與優化
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={getImageUrl('DIR06406.jpg')}
                  alt="3D Design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 3D 掃描 */}
        <section className="py-20 w-full bg-black overflow-hidden" id="scan-3d">
          <motion.div
            className="px-4 sm:px-8 md:pl-[22vw] md:pr-8 lg:pr-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={getImageUrl('3d-scan.jpg')}
                  alt="3D Scan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">3D 掃描</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  採用高精度 3D 掃描設備，精確擷取車輛零件的三維數據，確保改裝件與原廠零件完美契合。
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    高精度光學掃描技術
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    複雜曲面完整擷取
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    逆向工程數據建立
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    精準尺寸量測分析
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 3D 建模 */}
        <section className="py-20 w-full bg-gray-900 overflow-hidden" id="modeling-3d">
          <motion.div
            className="px-4 sm:px-8 md:pl-[22vw] md:pr-8 lg:pr-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">3D 建模</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  將掃描數據或設計概念轉化為精確的 3D 模型，支援各種製造工藝需求，實現從虛擬到實體的完美轉換。
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    參數化精密建模
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    曲面造型優化
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    組裝干涉檢查
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    多格式檔案輸出
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={getImageUrl('DIR06240.jpg')}
                  alt="3D Modeling"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 3D 列印 */}
        <section className="py-20 w-full bg-black overflow-hidden" id="print-3d">
          <motion.div
            className="px-4 sm:px-8 md:pl-[22vw] md:pr-8 lg:pr-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={getImageUrl('DFM03708.jpg')}
                  alt="3D Print"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">3D 列印</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  運用工業級 3D 列印技術，快速製作原型件與小批量生產零件，縮短開發週期，實現快速迭代。
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    多材質列印選擇
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    高強度工程塑料
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    快速原型製作
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    小批量客製生產
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Section 4: 產品展示 */}
        <section className="py-20 w-full bg-gray-900" id="products">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInVariants}
            className="px-4 py-12 sm:py-20 md:pl-[22vw] md:pr-8 lg:pr-12"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              產品
            </motion.h2>
            <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/80 text-center max-w-3xl mx-auto mb-16">
              高品質改裝零件與配件，為您的愛車注入賽道基因
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  img: 'DIR06227.jpg',
                  title: '空力套件',
                  desc: '前唇、側裙、後擾流、尾翼等賽道級空力組件',
                  span: 'lg:col-span-2 lg:row-span-2'
                },
                {
                  img: 'DIR06240.jpg',
                  title: '碳纖維零件',
                  desc: '輕量化碳纖維引擎蓋、車頂、後視鏡殼'
                },
                {
                  img: 'DIR06244.jpg',
                  title: '排氣系統',
                  desc: '高流量觸媒、中尾段、閥門排氣'
                },
                {
                  img: 'DIR06516.jpg',
                  title: '懸吊系統',
                  desc: '避震器、短彈簧、防傾桿、魚眼'
                },
                {
                  img: 'DIR06483.jpg',
                  title: '輪圈與煞車',
                  desc: '鍛造輪圈、大六活塞卡鉗、競技來令',
                  span: 'lg:col-span-2'
                }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden group rounded-xl ${product.span || ''}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={`relative ${product.span ? 'h-[500px]' : 'h-[280px]'}`}>
                    <img
                      src={getImageUrl(product.img)}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-sm text-white/80">{product.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 5: 參與活動總覽 */}
        <section className="py-20 w-full bg-gradient-to-b from-black to-gray-900" id="events">
          <motion.div
            className="px-4 sm:px-8 md:pl-[22vw] md:pr-8 lg:pr-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              參與活動
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              我們的足跡遍布各大國際賽事與車展，見證 DTM Racing Sport 的專業與熱情
            </p>
          </motion.div>
        </section>

        {/* Event 1: 2024 Supra Tokyo Intro */}
        <section className="h-screen w-full relative overflow-hidden bg-black" id="event-2024-supra">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInVariants}
            className="h-full relative"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute w-full h-full object-cover"
            >
              <source
                src={videoUrls.events.supra2024}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 p-6 sm:p-12 max-w-xl left-4 md:left-[300px] lg:left-[400px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                2024 Supra
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-red-500 mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                Toyota Supra 改裝展示
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Event 2: 2024 Tokyo Auto Show */}
        <section className="h-screen w-full relative overflow-hidden bg-black" id="event-2024-tokyo">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInVariants}
            className="h-full relative"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute w-full h-full object-cover"
            >
              <source
                src={videoUrls.events.tokyo2024}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
            <motion.div
              className="absolute right-4 sm:right-8 md:right-12 top-1/2 transform -translate-y-1/2 p-4 sm:p-6 md:p-12 max-w-xl text-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                2024 東京車展
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-red-500 mb-4 sm:mb-6 ml-auto"></div>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                參與亞洲最大規模的汽車展覽
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Event 3: 2025 SGT6 */}
        <section className="h-screen w-full relative overflow-hidden bg-black" id="event-2025-sgt6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInVariants}
            className="h-full relative"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute w-full h-full object-cover"
            >
              <source
                src={videoUrls.events.sgt6_2025}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 p-6 sm:p-12 max-w-xl left-4 md:left-[300px] lg:left-[400px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Super GT Round 6
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-red-500 mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                2025 Super GT 第六站賽事
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Event 4: 2025 Tokyo Auto Show */}
        <section className="h-screen w-full relative overflow-hidden bg-black" id="event-2025-tokyo">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInVariants}
            className="h-full relative"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute w-full h-full object-cover"
            >
              <source
                src={videoUrls.events.tokyoIntro2025}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
            <motion.div
              className="absolute right-4 sm:right-8 md:right-12 top-1/2 transform -translate-y-1/2 p-4 sm:p-6 md:p-12 max-w-xl text-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                2025 東京車展
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-red-500 mb-4 sm:mb-6 ml-auto"></div>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                展示最新改裝技術與作品
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Event 5: 2025 Auto Salon */}
        <section className="h-screen w-full relative overflow-hidden bg-black" id="event-2025-autosalon">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInVariants}
            className="h-full relative"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute w-full h-full object-cover"
            >
              <source
                src={videoUrls.events.autoshow2025}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 p-6 sm:p-12 max-w-xl left-4 md:left-[300px] lg:left-[400px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Auto Salon 2025
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-red-500 mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                展出頂級改裝作品與創新技術
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 6: 聯絡我們 */}
        <section
          className="min-h-screen w-full flex flex-col justify-center py-12 pb-24 md:pb-12"
          id="contact"
          style={{
            background: `
              linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
              linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
              linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
              linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
              linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
              linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)
            `,
            backgroundColor: '#131313',
            backgroundSize: '20px 20px',
          }}
        >
          <motion.div
            className="px-4 sm:px-8 text-center w-full md:pl-[22vw] md:pr-8 lg:pr-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-8">
              聯絡我們
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-white mx-auto mb-6 sm:mb-12"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 sm:mb-16">
              讓 DTM 為您打造夢想中的賽車
            </p>

            {/* 聯絡資訊卡片 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {/* Email */}
              <motion.a
                href="mailto:dtmracingsport@gmail.com"
                className="group relative overflow-hidden rounded-2xl p-4 sm:p-8 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(234, 67, 53, 0.1) 0%, rgba(234, 67, 53, 0.05) 100%)',
                  border: '1px solid rgba(234, 67, 53, 0.2)',
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #EA4335 0%, #c5221f 100%)', boxShadow: '0 8px 32px rgba(234, 67, 53, 0.4)' }}>
                    <MdEmail className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">Email</h3>
                  <p className="text-gray-300 text-xs sm:text-sm break-all">dtmracingsport@gmail.com</p>
                </div>
              </motion.a>

              {/* Line */}
              <motion.a
                href="https://line.me/ti/p/@dtmrs"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl p-4 sm:p-8 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 185, 0, 0.1) 0%, rgba(0, 185, 0, 0.05) 100%)',
                  border: '1px solid rgba(0, 185, 0, 0.2)',
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #00B900 0%, #009900 100%)', boxShadow: '0 8px 32px rgba(0, 185, 0, 0.4)' }}>
                    <FaLine className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">Line</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">@dtmrs</p>
                </div>
              </motion.a>

              {/* WeChat */}
              <motion.div
                className="group relative overflow-hidden rounded-2xl p-4 sm:p-8 text-center cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(9, 184, 62, 0.1) 0%, rgba(9, 184, 62, 0.05) 100%)',
                  border: '1px solid rgba(9, 184, 62, 0.2)',
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #09B83E 0%, #07a035 100%)', boxShadow: '0 8px 32px rgba(9, 184, 62, 0.4)' }}>
                    <FaWeixin className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">WeChat</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">yanzai729</p>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/886912998231"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl p-4 sm:p-8 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(37, 211, 102, 0.05) 100%)',
                  border: '1px solid rgba(37, 211, 102, 0.2)',
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)' }}>
                    <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">WhatsApp</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">0912-998-231</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ScrollHome;
