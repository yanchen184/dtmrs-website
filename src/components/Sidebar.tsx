import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { path: '/', label: 'DTM' },
  { path: '/about', label: '關於我們' },
  { path: '/products', label: '販售商品' },
  { path: '/events', label: '參與過的活動' },
  { path: '/gallery', label: '活動剪影' },
  { path: '/catalog', label: '電子型錄' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-64 bg-dtm-red z-50"
      style={{
        clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)',
      }}
    >
      <div className="flex flex-col h-full p-8 pt-16">
        {/* Logo */}
        <div className="mb-12">
          <img
            src="/assets/logo/白字DTM LOGO.png"
            alt="DTM Logo"
            className="w-full h-auto"
          />
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-4">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              <Link
                to={item.path}
                className={`block py-3 px-4 text-white text-lg font-medium transition-all duration-300 hover:bg-white/20 rounded ${
                  location.pathname === item.path
                    ? 'bg-white/30 border-l-4 border-white'
                    : ''
                }`}
              >
                {item.label}
              </Link>
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
          <span>|</span>
          <button className="hover:underline">Q微博</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
