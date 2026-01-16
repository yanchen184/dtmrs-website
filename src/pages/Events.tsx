import { motion } from 'framer-motion';
import { videoUrls, getImageUrl } from '../config/cdnConfig';

const events = [
  {
    id: 1,
    title: '2024 東京車展',
    date: '2024.12.08',
    location: '東京國際展覽中心',
    description: '參與日本最大規模的汽車展覽，展示最新的改裝技術與產品',
    image: getImageUrl('DFM03708.jpg'),
    video: videoUrls.tokyoAutoshow2024,
  },
  {
    id: 2,
    title: '2025 Auto Salon',
    date: '2025.01.12',
    location: '幕張展覽館',
    description: '亞洲最大改裝車展，展出頂級改裝作品',
    image: getImageUrl('DIR06483.jpg'),
    video: videoUrls.autosalon2025,
  },
  {
    id: 3,
    title: 'Super GT Round 6',
    date: '2025.04.20',
    location: 'Fuji Speedway',
    description: '參與 Super GT 第六站賽事，展現賽車技術',
    image: getImageUrl('DIRK7360.jpg'),
    video: videoUrls.sgt6,
  },
];

const Events = () => {
  return (
    <div className="min-h-screen p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4 border-l-8 border-dtm-red pl-6">
          參與過的活動
        </h1>
        <p className="text-xl text-gray-600 mb-12 pl-6">
          我們的足跡遍布各大國際賽事與車展
        </p>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden`}
            >
              <div className="md:w-1/2 relative group overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">點擊查看影片</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8">
                <div className="inline-block bg-dtm-red text-white px-4 py-1 rounded-full text-sm mb-4">
                  {event.date}
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  {event.title}
                </h2>
                <p className="text-lg text-dtm-red mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {event.location}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
