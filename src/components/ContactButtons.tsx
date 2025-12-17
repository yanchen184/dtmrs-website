import { motion } from 'framer-motion';
import { MdEmail, MdPhone } from 'react-icons/md';

const contactItems = [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'bobchen184@gmail.com',
    link: 'mailto:bobchen184@gmail.com',
    color: '#000000',
  },
  {
    icon: MdPhone,
    label: 'Phone',
    value: '+886-XXX-XXXX',
    link: 'tel:+886xxxxxxxxx',
    color: '#CC0000',
  },
];

const ContactButtons = () => {
  return (
    <>
      {/* 桌面版：右側垂直排列 */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 pr-6">
        {contactItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 * index + 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            {/* Circle Button */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl"
              style={{ backgroundColor: item.color }}
            >
              <item.icon className="w-7 h-7" />
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                {item.value}
                <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-px">
                  <div className="border-8 border-transparent border-l-gray-800"></div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* 手機版：底部水平排列 */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-inset-bottom"
      >
        <div className="flex justify-center items-center gap-6 px-4 py-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          {contactItems.map((item) => (
            <motion.a
              key={`mobile-${item.label}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-1"
            >
              {/* Circle Button - 48x48px for touch target */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer transition-all duration-300 active:shadow-lg"
                style={{ backgroundColor: item.color }}
              >
                <item.icon className="w-6 h-6" />
              </div>
              {/* Label */}
              <span className="text-xs text-gray-600 font-medium">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ContactButtons;
