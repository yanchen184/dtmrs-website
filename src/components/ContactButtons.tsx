import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaLine, FaWeixin } from 'react-icons/fa';

const contactItems = [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'dtmracingsport@gmail.com',
    link: 'mailto:dtmracingsport@gmail.com',
    color: '#EA4335',
    glowColor: 'rgba(234, 67, 53, 0.5)',
    gradientFrom: '#EA4335',
    gradientTo: '#FF6B5B',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '0912-998-231',
    link: 'https://wa.me/886912998231',
    color: '#25D366',
    glowColor: 'rgba(37, 211, 102, 0.5)',
    gradientFrom: '#25D366',
    gradientTo: '#5FE89A',
  },
  {
    icon: FaLine,
    label: 'Line',
    value: '@dtmrs',
    link: 'https://line.me/ti/p/@dtmrs',
    color: '#00B900',
    glowColor: 'rgba(0, 185, 0, 0.5)',
    gradientFrom: '#00B900',
    gradientTo: '#4AD94A',
  },
  {
    icon: FaWeixin,
    label: 'WeChat',
    value: 'yanzai729',
    link: 'weixin://dl/chat?yanzai729',
    color: '#07C160',
    glowColor: 'rgba(7, 193, 96, 0.5)',
    gradientFrom: '#07C160',
    gradientTo: '#4DD88A',
  },
];

const ContactButtons = () => {
  return (
    <>
      {/* 桌面版：右側垂直排列 - 玻璃擬態風格 */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 pr-4">
        {/* 背景容器 - 玻璃效果 */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="relative bg-black/30 backdrop-blur-xl rounded-2xl p-3 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        >
          {/* 微妙的漸層邊框效果 */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          <div className="relative flex flex-col gap-3">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.15 * index + 0.8,
                  duration: 0.5,
                  ease: 'easeOut'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {/* 外層光暈效果 */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`,
                    filter: 'blur(10px)',
                    transform: 'scale(1.6)',
                  }}
                />

                {/* 主按鈕 - 漸層 + 玻璃效果 */}
                <div
                  className="relative w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${item.gradientFrom} 0%, ${item.gradientTo} 100%)`,
                    boxShadow: `0 4px 20px ${item.glowColor}`,
                  }}
                >
                  {/* 內部光澤效果 */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-70" />

                  {/* 圖標 */}
                  <item.icon className="relative w-5 h-5 drop-shadow-md" />
                </div>

                {/* 精緻 Tooltip - 玻璃擬態 */}
                <div className="absolute right-[calc(100%+1rem)] top-1/2 -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-[60]">
                  <div className="relative bg-gray-900/95 backdrop-blur-md text-white px-4 py-2.5 rounded-xl text-sm whitespace-nowrap shadow-2xl border border-white/10">
                    {/* Tooltip 頂部光澤 */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-xl" />

                    {/* 標籤與值 */}
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">{item.label}</span>
                      <span className="font-medium text-white">{item.value}</span>
                    </div>

                    {/* 箭頭 */}
                    <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-[1px]">
                      <div
                        className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px]"
                        style={{ borderLeftColor: 'rgba(17, 24, 39, 0.95)' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 手機版：底部水平排列 - 高端玻璃擬態風格 */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      >
        {/* 模糊背景層 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent backdrop-blur-xl" />

        {/* 主容器 */}
        <div className="relative bg-white/80 backdrop-blur-2xl border-t border-white/50 shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
          {/* 頂部高光線 */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          {/* Safe area padding for iOS */}
          <div className="flex justify-center items-center gap-4 px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            {contactItems.map((item, index) => (
              <motion.a
                key={`mobile-${item.label}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 * index + 1,
                  duration: 0.4,
                  ease: 'easeOut'
                }}
                whileTap={{ scale: 0.92 }}
                className="group flex flex-col items-center gap-1.5"
              >
                {/* 按鈕容器 */}
                <div className="relative">
                  {/* 背景光暈 */}
                  <motion.div
                    className="absolute inset-0 rounded-full transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`,
                      filter: 'blur(6px)',
                      transform: 'scale(1.5)',
                      opacity: 0.4,
                    }}
                  />

                  {/* 主按鈕 */}
                  <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300 overflow-hidden active:shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${item.gradientFrom} 0%, ${item.gradientTo} 100%)`,
                      boxShadow: `0 4px 20px ${item.glowColor}`,
                    }}
                  >
                    {/* 玻璃光澤 */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/35 to-transparent" />

                    {/* 圖標 */}
                    <item.icon className="relative w-5 h-5 drop-shadow-sm" />
                  </div>
                </div>

                {/* 標籤 - 更精緻的樣式 */}
                <span className="text-[10px] text-gray-600 font-semibold tracking-wide uppercase">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactButtons;
