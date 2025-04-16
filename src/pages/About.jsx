import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [language, ] = useState(navigator.language);
  const [online, ] = useState(navigator.onLine);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [cores, ] = useState(navigator.hardwareConcurrency || 0);
  const [ram, ] = useState(navigator.deviceMemory || 'unbekannt');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setScreenWidth(window.screen.width);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  };

  return (
    <div className="about-page">
      <section className="screen-info">
        <p>The size of the Screen could be important...</p>
        <div className="screen-box">
          <h2>Width: {windowWidth}px</h2>
          <h2>ScreenWidth: {screenWidth}px</h2>
        </div>
      </section>

      <section className="geo-info">
        <div className="info-columns">
          <p><strong>Language:</strong></p><p>{language}</p>
          <p><strong>Online Status:</strong></p><p>{online.toString()}</p>
        </div>

        <p className="geo-title">GEODATALOCATION</p>

        <div className="info-columns">
          <p><strong>Latitude:</strong></p><p>{latitude ?? ''}</p>
          <p><strong>Longitude:</strong></p><p>{longitude ?? ''}</p>
        </div>

        <button onClick={getLocation}>Get Location</button>
      </section>

      <section className="sys-info">
        <p><strong>Anzahl logischer Prozessoren:</strong> {cores}</p>
        <p><strong>RAM:</strong> {ram} GB</p>
        <p>
          Browser nutzen oft nur einen fest zugeteilten Teil des Rams aus. 
          Desktop-PCs sind das oft max. {ram}GB
        </p>
      </section>
    </div>
  );
};

export default About;