import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import ContactUs from './pages/ContactUs';

// Components
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

// Animations
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<AboutUs />} />
          <Route path='/work' exact element={<OurWork />} />
          <Route path='/work/:id' element={<MovieDetail />} />
          <Route path='/contact' exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
