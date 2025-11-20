import { motion } from 'framer-motion';
import { useState } from 'react';

const menuItems = [
  { href: '#home', label: 'DTM' },
  { href: '#about', label: '關於我們' },
  { href: '#tokyo', label: '東京車展' },
  { href: '#autosalon', label: 'Auto Salon' },
  { href: '#services', label: '改裝服務' },
  { href: '#gallery', label: '活動剪影' },
  { href: '#contact', label: '聯繫我們' },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('#home');

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
  };

  return (
    <motion.div
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="fixed left-0 top-0 h-full z-50"
      style={{
        width: '576px', // 從 w-72 (288px) 放大一倍到 576px
        background: 'linear-gradient(135deg, #CC0000 0%, #990000 100%)',
        clipPath: 'polygon(0 0, 100% 0, 65% 100%, 0 100%)', // 調整梯形角度
        boxShadow: '4px 0 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="flex flex-col h-full p-8 pt-16 pr-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <img
            src="/dtmrs-website/assets/logo/白字DTM LOGO.png"
            alt="DTM Logo"
            className="w-full h-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4 + index * 0.08,
                duration: 0.5,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className={`
                  w-full text-left py-3 px-5 text-white font-medium
                  transition-all duration-300 rounded-sm
                  relative overflow-hidden group
                  ${activeSection === item.href
                    ? 'bg-white/25 shadow-lg'
                    : 'hover:bg-white/10'
                  }
                `}
              >
                {/* 左側高亮條 */}
                <span
                  className={`
                    absolute left-0 top-0 h-full w-1 bg-white
                    transition-all duration-300
                    ${activeSection === item.href
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-50'
                    }
                  `}
                />

                {/* 文字 */}
                <span className="relative z-10 text-base tracking-wide">
                  {item.label}
                </span>

                {/* 背景光效 */}
                <span
                  className="
                    absolute inset-0 bg-white/5 opacity-0
                    group-hover:opacity-100 transition-opacity duration-300
                  "
                />
              </button>
            </motion.div>
          ))}
        </nav>

        {/* Language Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-auto flex gap-3 text-white text-sm font-medium pb-8"
        >
          <button className="hover:text-white/80 transition-colors duration-200 tracking-wider">
            TW
          </button>
          <span className="text-white/50">|</span>
          <button className="hover:text-white/80 transition-colors duration-200 tracking-wider">
            JP
          </button>
          <span className="text-white/50">|</span>
          <button className="hover:text-white/80 transition-colors duration-200 tracking-wider">
            EN
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
