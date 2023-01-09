import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Accomodation from './pages/Accomodation.js';
import About from './pages/About.js';
import Page404 from './pages/Page404.js';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/logement/:id' element={<Accomodation />} />
      {/*La route path='*' est suivie pour toute url inconnue. */}
      <Route path='*' element={<Page404 />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;

