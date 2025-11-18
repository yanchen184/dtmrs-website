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
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 pr-6">
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
  );
};

export default ContactButtons;
