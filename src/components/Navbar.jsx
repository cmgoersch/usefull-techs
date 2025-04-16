import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="nav-link">Landingpage</Link></li>
        <li><Link to="/about" className="nav-link">About U</Link></li>
        <li><Link to="/filmbibliothek" className="nav-link">Film Bibliothek</Link></li>
        <li><Link to="/galerie" className="nav-link">Zur Gallerie</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;