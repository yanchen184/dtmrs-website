import { motion } from 'framer-motion';
import { getImageUrl } from '../config/cdnConfig';

const products = [
  {
    id: 1,
    title: '引擎改裝套件',
    description: '專業的引擎性能提升方案，包含進排氣系統、ECU 調校等',
    image: getImageUrl('DIR06227.jpg'),
    category: '動力系統',
  },
  {
    id: 2,
    title: '空力套件',
    description: '賽車級空氣動力學套件，提升下壓力與操控性',
    image: getImageUrl('DFM03708.jpg'),
    category: '外觀套件',
  },
  {
    id: 3,
    title: '懸吊系統',
    description: '可調式避震器與懸吊強化套件',
    image: getImageUrl('DFM03713.jpg'),
    category: '底盤系統',
  },
  {
    id: 4,
    title: '煞車系統',
    description: '高性能煞車套件，提供更強的制動力',
    image: getImageUrl('DIR06244.jpg'),
    category: '制動系統',
  },
];

const Products = () => {
  return (
    <div className="min-h-screen p-12 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-l-8 border-dtm-red pl-6">
          販售商品
        </h1>
        <p className="text-xl text-gray-600 mb-12 pl-6">
          專業賽車改裝零件與套件
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-dtm-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="bg-dtm-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                  了解更多
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Products;
