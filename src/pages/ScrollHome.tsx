import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import ContactButtons from '../components/ContactButtons';

const ScrollHome = () => {
  return (
    <>
      <Sidebar />
      <ContactButtons />

      <div className="scroll-container">

        {/* Section 1: Hero - Super GT 影片背景 */}
        <section className="h-screen w-full relative overflow-hidden" id="home">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/dtmrs-website/assets/videos/20250420 SGT6 DTMRS Asurada.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 drop-shadow-2xl">
                DTM RACING
              </h1>
              <p className="text-3xl md:text-4xl text-white drop-shadow-lg">
                專業賽車改裝 | 性能提升專家
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: 關於我們 */}
        <section className="min-h-screen w-full bg-white flex items-center" id="about">
          <div className="container mx-auto px-12 py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-6xl font-bold text-gray-800 mb-8 border-l-8 border-dtm-red pl-6">
                  關於我們
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  DTM RACING SPORT 是台灣頂尖的賽車改裝團隊，專注於高性能車輛調校與競技賽車服務。
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  我們參與國際頂級賽事，包括 Super GT、東京車展、Auto Salon 等，
                  將賽道上的專業技術帶給每一位車主。
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-gray-100 rounded-lg">
                    <div className="text-5xl font-bold text-dtm-red">10+</div>
                    <div className="text-gray-600 mt-2">年專業經驗</div>
                  </div>
                  <div className="text-center p-6 bg-gray-100 rounded-lg">
                    <div className="text-5xl font-bold text-dtm-red">500+</div>
                    <div className="text-gray-600 mt-2">成功案例</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[600px]"
              >
                <img
                  src="/dtmrs-website/assets/images/DIRK7360.jpg"
                  alt="DTM Racing Team"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: 東京車展 2024 */}
        <section className="h-screen w-full relative overflow-hidden bg-black" id="tokyo">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source
              src="/dtmrs-website/assets/videos/20241208 DTM東京車展60sec.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <h2 className="text-7xl font-bold text-white mb-6">
                  東京車展 2024
                </h2>
                <p className="text-2xl text-white leading-relaxed mb-8">
                  參與日本最大規模的汽車展覽，展示最新的改裝技術與產品。
                  我們的展位吸引了無數車迷與專業人士的關注。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/dtmrs-website/assets/images/DFM03708.jpg"
                    alt="Tokyo Auto Salon 1"
                    className="w-full h-48 object-cover rounded-lg shadow-xl"
                  />
                  <img
                    src="/dtmrs-website/assets/images/DFM03713.jpg"
                    alt="Tokyo Auto Salon 2"
                    className="w-full h-48 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Auto Salon 2025 */}
        <section className="h-screen w-full relative overflow-hidden bg-black" id="autosalon">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source
              src="/dtmrs-website/assets/videos/20250112 DTMRS Autosalon序HD .mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="container mx-auto px-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl ml-auto"
              >
                <h2 className="text-7xl font-bold text-white mb-6 text-right">
                  Auto Salon 2025
                </h2>
                <p className="text-2xl text-white leading-relaxed mb-8 text-right">
                  亞洲最大改裝車展，展出頂級改裝作品。
                  DTM 以專業的技術與創新的設計驚艷全場。
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="/dtmrs-website/assets/images/DIR06483.jpg"
                    alt="Auto Salon 1"
                    className="w-full h-40 object-cover rounded-lg shadow-xl"
                  />
                  <img
                    src="/dtmrs-website/assets/images/DIR06485.jpg"
                    alt="Auto Salon 2"
                    className="w-full h-40 object-cover rounded-lg shadow-xl"
                  />
                  <img
                    src="/dtmrs-website/assets/images/DIR06506.jpg"
                    alt="Auto Salon 3"
                    className="w-full h-40 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: 專業改裝 */}
        <section className="min-h-screen w-full bg-gray-50" id="services">
          <div className="container mx-auto px-12 py-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl font-bold text-gray-800 mb-16 text-center"
            >
              專業改裝服務
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { img: 'DIR06227.jpg', title: '引擎改裝', desc: '專業引擎調校與性能提升' },
                { img: 'DIR06240.jpg', title: '外觀套件', desc: '賽車級空力套件設計' },
                { img: 'DIR06244.jpg', title: '底盤強化', desc: '懸吊與煞車系統升級' },
                { img: 'DIR06516.jpg', title: '客製化服務', desc: '量身打造專屬改裝方案' },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={`/dtmrs-website/assets/images/${service.img}`}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: 活動剪影 */}
        <section className="min-h-screen w-full bg-black py-20" id="gallery">
          <div className="container mx-auto px-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl font-bold text-white mb-16 text-center"
            >
              活動剪影
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'DIR06525.jpg',
                'DIR06557.jpg',
                'DIR06574.jpg',
                'DIR06591.jpg',
                'DSC00004.JPG',
                'DFM03708.jpg',
                'DFM03713.jpg',
                'DIR06227.jpg',
                'DIR06240.jpg',
                'DIR06244.jpg',
                'DIR06483.jpg',
                'DIR06485.jpg',
                'DIR06506.jpg',
                'DIR06516.jpg',
                'DIRK7360.jpg',
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                >
                  <img
                    src={`/dtmrs-website/assets/images/${img}`}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: 聯繫我們 */}
        <section className="min-h-screen w-full bg-gradient-to-br from-dtm-red to-red-700 flex items-center" id="contact">
          <div className="container mx-auto px-12 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-7xl font-bold text-white mb-8">
                聯繫我們
              </h2>
              <p className="text-3xl text-white mb-12">
                讓 DTM 為您打造夢想中的賽車
              </p>
              <div className="flex justify-center gap-12 text-white text-2xl">
                <div className="flex items-center gap-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>bobchen184@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScrollHome;
