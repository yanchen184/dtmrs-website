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
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 h-full w-64 bg-dtm-red z-50"
      style={{
        clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)',
      }}
    >
      <div className="flex flex-col h-full p-8 pt-16">
        {/* Logo */}
        <div className="mb-12">
          <img
            src="/dtmrs-website/assets/logo/白字DTM LOGO.png"
            alt="DTM Logo"
            className="w-full h-auto"
          />
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index + 0.3 }}
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left py-3 px-4 text-white text-lg font-medium transition-all duration-300 hover:bg-white/20 rounded ${
                  activeSection === item.href
                    ? 'bg-white/30 border-l-4 border-white'
                    : ''
                }`}
              >
                {item.label}
              </button>
            </motion.div>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="mt-auto flex gap-2 text-white text-sm">
          <button className="hover:underline">TW</button>
          <span>|</span>
          <button className="hover:underline">JP</button>
          <span>|</span>
          <button className="hover:underline">EN</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
