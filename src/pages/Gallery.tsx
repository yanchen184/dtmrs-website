import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  { id: 1, src: '/dtmrs-website/assets/images/DFM03708.jpg', title: '東京車展展位' },
  { id: 2, src: '/dtmrs-website/assets/images/DFM03713.jpg', title: '賽車展示' },
  { id: 3, src: '/dtmrs-website/assets/images/DIR06227.jpg', title: '引擎改裝展示' },
  { id: 4, src: '/dtmrs-website/assets/images/DIR06240.jpg', title: '活動現場' },
  { id: 5, src: '/dtmrs-website/assets/images/DIR06244.jpg', title: '專業團隊' },
  { id: 6, src: '/dtmrs-website/assets/images/DIR06483.jpg', title: 'Auto Salon' },
  { id: 7, src: '/dtmrs-website/assets/images/DIR06485.jpg', title: '賽車細節' },
  { id: 8, src: '/dtmrs-website/assets/images/DIR06506.jpg', title: '車展活動' },
  { id: 9, src: '/dtmrs-website/assets/images/DIR06516.jpg', title: '改裝作品' },
  { id: 10, src: '/dtmrs-website/assets/images/DIR06525.jpg', title: '專業講解' },
  { id: 11, src: '/dtmrs-website/assets/images/DIR06557.jpg', title: '賽道英姿' },
  { id: 12, src: '/dtmrs-website/assets/images/DIR06574.jpg', title: '團隊合照' },
  { id: 13, src: '/dtmrs-website/assets/images/DIR06591.jpg', title: '精彩瞬間' },
  { id: 14, src: '/dtmrs-website/assets/images/DIRK7360.jpg', title: 'Super GT' },
  { id: 15, src: '/dtmrs-website/assets/images/DSC00004.JPG', title: '賽事花絮' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-12 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-l-8 border-dtm-red pl-6">
          活動剪影
        </h1>
        <p className="text-xl text-gray-600 mb-12 pl-6">
          紀錄每一個精彩時刻
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={images[selectedImage].src}
            alt={images[selectedImage].title}
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-dtm-red transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
