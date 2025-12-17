import { motion } from 'framer-motion';

const catalogs = [
  {
    id: 1,
    title: '引擎改裝系列',
    description: '完整的引擎性能提升解決方案',
    image: '/dtmrs-website/assets/images/DIR06227.jpg',
    pdfLink: '#',
  },
  {
    id: 2,
    title: '外觀套件系列',
    description: '空力套件與視覺改裝',
    image: '/dtmrs-website/assets/images/DFM03708.jpg',
    pdfLink: '#',
  },
  {
    id: 3,
    title: '底盤升級系列',
    description: '懸吊與煞車系統升級',
    image: '/dtmrs-website/assets/images/DFM03713.jpg',
    pdfLink: '#',
  },
];

const Catalog = () => {
  return (
    <div className="min-h-screen p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-l-8 border-dtm-red pl-6">
          電子型錄
        </h1>
        <p className="text-xl text-gray-600 mb-12 pl-6">
          下載詳細的產品型錄與規格說明
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogs.map((catalog, index) => (
            <motion.div
              key={catalog.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={catalog.image}
                  alt={catalog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {catalog.title}
                  </h3>
                  <p className="text-white/90 text-sm">{catalog.description}</p>
                </div>
              </div>
              <div className="p-6">
                <button className="w-full bg-dtm-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  下載型錄 PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-dtm-red to-red-700 rounded-lg p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">需要更多資訊？</h2>
          <p className="text-lg mb-6">
            歡迎聯繫我們，專業團隊將為您提供詳細諮詢
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>bobchen184@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>聯繫我們</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Catalog;
