import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { getLogoUrl } from '../config/cdnConfig';

type Language = 'TW' | 'JP' | 'EN';

interface MenuItem {
  href: string;
  label: {
    TW: string;
    JP: string;
    EN: string;
  };
  isSubItem?: boolean;
  parentId?: string;
}

interface MenuGroup {
  id: string;
  href: string;
  label: {
    TW: string;
    JP: string;
    EN: string;
  };
  subItems: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    id: 'services',
    href: '#services',
    label: {
      TW: '我們會什麼',
      JP: '私たちができること',
      EN: 'What We Do'
    },
    subItems: [
      {
        href: '#design-3d',
        label: { TW: '3D設計', JP: '3Dデザイン', EN: '3D Design' },
        isSubItem: true,
        parentId: 'services'
      },
      {
        href: '#scan-3d',
        label: { TW: '掃描', JP: 'スキャン', EN: 'Scan' },
        isSubItem: true,
        parentId: 'services'
      },
      {
        href: '#modeling-3d',
        label: { TW: '建模', JP: 'モデリング', EN: 'Modeling' },
        isSubItem: true,
        parentId: 'services'
      },
      {
        href: '#print-3d',
        label: { TW: '3D列印', JP: '3Dプリント', EN: '3D Print' },
        isSubItem: true,
        parentId: 'services'
      }
    ]
  },
  {
    id: 'events',
    href: '#events',
    label: {
      TW: '參與活動',
      JP: '参加イベント',
      EN: 'Events'
    },
    subItems: [
      {
        href: '#event-2024-supra',
        label: { TW: '2024 Supra', JP: '2024 スープラ', EN: '2024 Supra' },
        isSubItem: true,
        parentId: 'events'
      },
      {
        href: '#event-2024-tokyo',
        label: { TW: '2024 東京車展', JP: '2024 東京モーターショー', EN: '2024 Tokyo Auto Show' },
        isSubItem: true,
        parentId: 'events'
      },
      {
        href: '#event-2025-sgt6',
        label: { TW: '2025 SGT6', JP: '2025 SGT6', EN: '2025 SGT6' },
        isSubItem: true,
        parentId: 'events'
      },
      {
        href: '#event-2025-tokyo',
        label: { TW: '2025 東京車展', JP: '2025 東京モーターショー', EN: '2025 Tokyo Auto Show' },
        isSubItem: true,
        parentId: 'events'
      },
      {
        href: '#event-2025-autosalon',
        label: { TW: '2025 Auto Salon', JP: '2025 オートサロン', EN: '2025 Auto Salon' },
        isSubItem: true,
        parentId: 'events'
      }
    ]
  }
];

const standaloneItems: MenuItem[] = [
  {
    href: '#products',
    label: { TW: '產品', JP: '製品', EN: 'Products' }
  },
  {
    href: '#contact',
    label: { TW: '聯絡我們', JP: 'お問い合わせ', EN: 'Contact Us' }
  }
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('#home');
  const [language, setLanguage] = useState<Language>('TW');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    services: true,
    events: true
  });

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
      setIsMobileMenuOpen(false);
    }
  };

  const renderMenuItem = (item: MenuItem, index: number, isDesktop: boolean) => (
    <motion.div
      key={item.href}
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: isDesktop ? 0.4 + index * 0.05 : (isMobileMenuOpen ? 0.1 + index * 0.03 : 0),
        duration: isDesktop ? 0.5 : 0.3,
        ease: [0.6, 0.05, 0.01, 0.9]
      }}
    >
      <button
        onClick={() => scrollToSection(item.href)}
        className={`
          w-full text-left py-2.5 font-medium
          transition-all duration-300 rounded-sm
          relative group
          ${item.isSubItem ? 'px-8' : 'px-5'}
          ${activeSection === item.href
            ? 'text-yellow-300'
            : 'text-white hover:text-yellow-100'
          }
        `}
      >
        <span
          className={`relative z-10 tracking-wide ${item.isSubItem ? 'text-sm' : 'text-base'}`}
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)'
          }}
        >
          {item.label[language]}
        </span>
      </button>
    </motion.div>
  );

  const renderMenuGroup = (group: MenuGroup, startIndex: number, isDesktop: boolean) => (
    <div key={group.id}>
      {/* 群組標題 - 有收合按鈕 */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: isDesktop ? 0.4 + startIndex * 0.05 : (isMobileMenuOpen ? 0.1 + startIndex * 0.03 : 0),
          duration: isDesktop ? 0.5 : 0.3,
          ease: [0.6, 0.05, 0.01, 0.9]
        }}
      >
        <button
          onClick={() => {
            scrollToSection(group.href);
            toggleGroup(group.id);
          }}
          className={`
            w-full text-left py-2.5 px-5 font-medium
            transition-all duration-300 rounded-sm
            relative group flex items-center justify-between
            ${activeSection === group.href
              ? 'text-yellow-300'
              : 'text-white hover:text-yellow-100'
            }
          `}
        >
          <span
            className="relative z-10 tracking-wide text-base"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            {group.label[language]}
          </span>
          <motion.svg
            className="w-4 h-4 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: expandedGroups[group.id] ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
      </motion.div>

      {/* 子項目 - 可收合 */}
      <AnimatePresence>
        {expandedGroups[group.id] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {group.subItems.map((item, subIndex) =>
              renderMenuItem(item, startIndex + 1 + subIndex, isDesktop)
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderNavContent = (isDesktop: boolean) => {
    let index = 0;
    return (
      <>
        {/* 我們會什麼 */}
        {renderMenuGroup(menuGroups[0], index, isDesktop)}
        {index += 1 + menuGroups[0].subItems.length}

        {/* 產品 */}
        {renderMenuItem(standaloneItems[0], index++, isDesktop)}

        {/* 參與活動 */}
        {renderMenuGroup(menuGroups[1], index, isDesktop)}
        {index += 1 + menuGroups[1].subItems.length}

        {/* 聯絡我們 */}
        {renderMenuItem(standaloneItems[1], index, isDesktop)}
      </>
    );
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
          background: `
            linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
            linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
            linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
            linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
            linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
            linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)
          `,
          backgroundColor: '#131313',
          backgroundSize: '20px 20px',
          clipPath: 'polygon(0 0, 100% 0, 65% 100%, 0 100%)',
          boxShadow: '4px 0 30px rgba(0, 0, 0, 0.8), inset 0 0 100px rgba(255, 255, 255, 0.05)',
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
              src={getLogoUrl('white')}
              alt="DTM Logo"
              className="w-full h-auto drop-shadow-lg"
            />
          </motion.div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-1 overflow-y-auto">
            {renderNavContent(true)}
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
          background: `
            linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
            linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
            linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
            linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
            linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
            linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)
          `,
          backgroundColor: '#131313',
          backgroundSize: '20px 20px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="flex items-center justify-between px-4 py-3 min-h-[64px]">
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src={getLogoUrl('white')}
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
          background: `
            linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
            linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
            linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
            linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
            linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
            linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)
          `,
          backgroundColor: '#131313',
          backgroundSize: '20px 20px',
          boxShadow: '4px 0 30px rgba(0, 0, 0, 0.8)',
        }}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={getLogoUrl('white')}
              alt="DTM Logo"
              className="w-3/4 h-auto drop-shadow-lg"
            />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-1 overflow-y-auto">
            {renderNavContent(false)}
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
