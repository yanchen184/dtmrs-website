import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Catalog from './pages/Catalog';

// 版本號
const VERSION = 'v1.0.1';

function App() {
  // 在 console 輸出版本號
  console.log(`%c DTMRS Website ${VERSION}`, 'color: #CC0000; font-size: 16px; font-weight: bold;');
  console.log('%c Developed by DTM Racing Sport', 'color: #0066CC; font-size: 12px;');

  return (
    <Router basename="/dtmrs-website">
      <Routes>
        {/* Home page without layout (full screen video) */}
        <Route path="/" element={<Home />} />

        {/* Other pages with layout */}
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/catalog"
          element={
            <Layout>
              <Catalog />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
