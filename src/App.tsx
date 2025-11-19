import ScrollHome from './pages/ScrollHome';

// 版本號
const VERSION = 'v2.3.0';

function App() {
  // 在 console 輸出版本號
  console.log(`%c DTMRS Website ${VERSION}`, 'color: #CC0000; font-size: 16px; font-weight: bold;');
  console.log('%c Developed by DTM Racing Sport', 'color: #0066CC; font-size: 12px;');
  console.log('%c 單頁下滑式設計 - 參考 SIRUDA 官網', 'color: #0066CC; font-size: 12px;');

  return <ScrollHome />;
}

export default App;
