import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
//import Footer from './Footer.js';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/*La route path='*' est suivie pour toute url inconnue. */}
      <Route path='*' element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;


