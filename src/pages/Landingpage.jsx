import './Landingpage.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Typed from 'typed.js';

const Landingpage = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Hey I’m Calle, a junior Web Developer!', 'This Effect is build with npm install typed.js', 'Hey I’m Calle, a junior Web Developer!'],
        typeSpeed: 120,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <div className="landingpage">
      <div className="hero-container">
  <video autoPlay loop muted className="background-video">
    <source src="/videos/Ford-Mustang-GT500.mp4" type="video/mp4" />
  </video>
  <div className="video-overlay"></div>
  <div className="hero-text">
    <h1>Willkommen!</h1>
    <p>Viel Spaß bei diesem kleinen Knobelprojekt!</p>
  </div>
</div>
      <Navbar />
      <div className="landing-content">
  <div className="typewriter">
      <span ref={el} />
    </div>
</div>
    </div>
  );
};

export default Landingpage;