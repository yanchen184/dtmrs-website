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
    <>
      {/* 桌面版 Sidebar - 左側垂直 */}
      <motion.div
        initial={{ x: -600, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="hidden md:fixed md:block left-0 top-0 h-full z-50"
        style={{
          width: '20vw',
          minWidth: '280px',
          maxWidth: '600px',
          background: 'linear-gradient(135deg, #CC0000 0%, #990000 100%)',
          clipPath: 'polygon(0 0, 100% 0, 65% 100%, 0 100%)',
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
                  <span className="relative z-10 text-base tracking-wide">
                    {item.label}
                  </span>
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

      {/* 手機版 Sidebar - 頂部水平 */}
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="md:hidden fixed top-0 left-0 w-full z-50"
        style={{
          background: 'linear-gradient(180deg, #CC0000 0%, #990000 100%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="flex flex-col p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 flex justify-center"
          >
            <img
              src="/dtmrs-website/assets/logo/白字DTM LOGO.png"
              alt="DTM Logo"
              className="h-12 w-auto drop-shadow-lg"
            />
          </motion.div>

          <nav className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 pb-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.05,
                    duration: 0.4,
                  }}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    whitespace-nowrap px-4 py-2 text-white text-sm font-medium
                    rounded-full transition-all duration-300
                    ${activeSection === item.href
                      ? 'bg-white/25 shadow-lg'
                      : 'bg-white/10 hover:bg-white/15'
                    }
                  `}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-3 text-white text-xs font-medium mt-2"
          >
            <button className="hover:text-white/80 transition-colors">TW</button>
            <span className="text-white/50">|</span>
            <button className="hover:text-white/80 transition-colors">JP</button>
            <span className="text-white/50">|</span>
            <button className="hover:text-white/80 transition-colors">EN</button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
