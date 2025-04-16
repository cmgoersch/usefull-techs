import './Galerie.css';

const Galerie = () => {
  return (
    <div className="galerie-container">
      <h2>Frohe Ostern!</h2>
      <div className="oster-bilder">
        <img src="/images/osterWe.png" alt="Oster Info" />
        <img src="/images/osterhase.jpg" alt="Osterhase 1" />
        <img src="/images/osterhase2.jpg" alt="Osterhase 2" />
        <img src="/images/ostergrinch.jpg" alt="Ostergrinch" />
      </div>
    </div>
  );
};

export default Galerie;