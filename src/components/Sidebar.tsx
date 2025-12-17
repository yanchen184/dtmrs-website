import { motion } from 'framer-motion';
import { useState } from 'react';

type Language = 'TW' | 'JP' | 'EN';

interface MenuItem {
  href: string;
  label: {
    TW: string;
    JP: string;
    EN: string;
  };
}

const menuItems: MenuItem[] = [
  {
    href: '#home',
    label: {
      TW: 'DTM',
      JP: 'DTM',
      EN: 'DTM'
    }
  },
  {
    href: '#about',
    label: {
      TW: '關於我們',
      JP: '私たちについて',
      EN: 'About Us'
    }
  },
  {
    href: '#tokyo',
    label: {
      TW: '東京車展',
      JP: '東京モーターショー',
      EN: 'Tokyo Motor Show'
    }
  },
  {
    href: '#autosalon',
    label: {
      TW: 'Auto Salon',
      JP: 'オートサロン',
      EN: 'Auto Salon'
    }
  },
  {
    href: '#services',
    label: {
      TW: '改裝服務',
      JP: 'カスタムサービス',
      EN: 'Custom Services'
    }
  },
  {
    href: '#gallery',
    label: {
      TW: '活動剪影',
      JP: 'イベントギャラリー',
      EN: 'Event Gallery'
    }
  },
  {
    href: '#contact',
    label: {
      TW: '聯繫我們',
      JP: 'お問い合わせ',
      EN: 'Contact Us'
    }
  },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('#home');
  const [language, setLanguage] = useState<Language>('TW');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
      setIsMobileMenuOpen(false); // 關閉手機選單
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
                    w-full text-left py-3 px-5 font-medium
                    transition-all duration-300 rounded-sm
                    relative group
                    ${activeSection === item.href
                      ? 'text-yellow-300'
                      : 'text-white hover:text-yellow-100'
                    }
                  `}
                >
                  <span
                    className="relative z-10 text-base tracking-wide"
                    style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {item.label[language]}
                  </span>
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Language Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-auto flex gap-3 text-sm font-medium pb-8"
          >
            <button
              onClick={() => setLanguage('TW')}
              className={`transition-colors duration-200 tracking-wider ${
                language === 'TW' ? 'text-yellow-300' : 'text-white hover:text-white/80'
              }`}
            >
              TW
            </button>
            <span className="text-white/50">|</span>
            <button
              onClick={() => setLanguage('JP')}
              className={`transition-colors duration-200 tracking-wider ${
                language === 'JP' ? 'text-yellow-300' : 'text-white hover:text-white/80'
              }`}
            >
              JP
            </button>
            <span className="text-white/50">|</span>
            <button
              onClick={() => setLanguage('EN')}
              className={`transition-colors duration-200 tracking-wider ${
                language === 'EN' ? 'text-yellow-300' : 'text-white hover:text-white/80'
              }`}
            >
              EN
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* 手機版頂部工具列 */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="md:hidden fixed top-0 left-0 w-full z-50 safe-area-inset-top"
        style={{
          background: 'linear-gradient(135deg, #CC0000 0%, #990000 100%)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="flex items-center justify-between px-4 py-3 min-h-[64px]">
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src="/dtmrs-website/assets/logo/白字DTM LOGO.png"
            alt="DTM Logo"
            className="h-10 w-auto drop-shadow-lg"
          />

          {/* 漢堡選單按鈕 - 44x44px 符合觸控目標要求 */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-11 h-11 flex items-center justify-center rounded-lg
                     bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors"
            aria-label="選單"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white rounded-full"
              />
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* 手機版側邊抽屜選單 - 直角設計，無死區 */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="md:hidden fixed top-0 left-0 h-full z-40"
        style={{
          width: '80vw',
          maxWidth: '320px',
          background: 'linear-gradient(135deg, #CC0000 0%, #990000 100%)',
          boxShadow: '4px 0 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/dtmrs-website/assets/logo/白字DTM LOGO.png"
              alt="DTM Logo"
              className="w-3/4 h-auto drop-shadow-lg"
            />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ x: -30, opacity: 0 }}
                animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{
                  delay: isMobileMenuOpen ? 0.1 + index * 0.05 : 0,
                  duration: 0.3,
                }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    w-full text-left py-3 px-4 font-medium text-base
                    transition-all duration-300 rounded-sm
                    ${activeSection === item.href
                      ? 'text-yellow-300 bg-white/10'
                      : 'text-white hover:text-yellow-100 hover:bg-white/5'
                    }
                  `}
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {item.label[language]}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="mt-auto flex gap-3 text-sm font-medium pb-6">
            <button
              onClick={() => setLanguage('TW')}
              className={`transition-colors duration-200 ${
                language === 'TW' ? 'text-yellow-300' : 'text-white hover:text-white/80'
              }`}
            >
              TW
            </button>
            <span className="text-white/50">|</span>
            <button
              onClick={() => setLanguage('JP')}
              className={`transition-colors duration-200 ${
                language === 'JP' ? 'text-yellow-300' : 'text-white hover:text-white/80'
              }`}
            >
              JP
            </button>
            <span className="text-white/50">|</span>
            <button
              onClick={() => setLanguage('EN')}
              className={`transition-colors duration-200 ${
                language === 'EN' ? 'text-yellow-300' : 'text-white hover:text-white/80'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </motion.div>

      {/* 遮罩層 - 點擊關閉選單 */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
};

export default Sidebar;
