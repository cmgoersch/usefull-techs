import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landingpage from './pages/Landingpage';
import About from './pages/About';
import FilmBibliothek from './pages/FilmBibliothek';
import Galerie from './pages/Galerie';

function AppContent() {
  const location = useLocation();

  const isLanding = location.pathname === '/';

  return (
    <>
      {!isLanding && <Navbar />}

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/filmbibliothek" element={<FilmBibliothek />} />
        <Route path="/galerie" element={<Galerie />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;