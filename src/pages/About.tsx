import { motion } from 'framer-motion';
import { getImageUrl } from '../config/cdnConfig';

const About = () => {
  return (
    <div className="min-h-screen p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-8 border-l-8 border-dtm-red pl-6">
          關於我們
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img
              src={getImageUrl('DIRK7360.jpg')}
              alt="DTM Racing Team"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6 text-gray-700"
          >
            <h2 className="text-3xl font-semibold text-dtm-red mb-4">
              DTM RACING SPORT
            </h2>
            <p className="text-lg leading-relaxed">
              DTM RACING SPORT 是專注於賽車改裝與性能提升的專業團隊。
              我們致力於為車主提供最優質的改裝服務，從引擎調校到外觀套件，
              我們都擁有豐富的經驗和專業的技術。
            </p>
            <p className="text-lg leading-relaxed">
              我們的團隊成員都擁有多年的賽車經驗，參與過多項國際賽事，
              包括 Super GT、Formula Drift 等頂級賽事。
              我們將賽道上的經驗帶到每一次的改裝服務中。
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-100 rounded-lg">
                <div className="text-4xl font-bold text-dtm-red">10+</div>
                <div className="text-sm text-gray-600 mt-2">年專業經驗</div>
              </div>
              <div className="text-center p-4 bg-gray-100 rounded-lg">
                <div className="text-4xl font-bold text-dtm-red">500+</div>
                <div className="text-sm text-gray-600 mt-2">成功案例</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
