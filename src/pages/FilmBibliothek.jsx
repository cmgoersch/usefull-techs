import React, { useState } from 'react';
import './FilmBibliothek.css';

const filme = [
    { titel: "1917", jahr: 2019, verkauf: 384.9 },
    { titel: "A Beautiful Mind", jahr: 2001, verkauf: 313.5 },
    { titel: "American Beauty", jahr: 1999, verkauf: 356.3 },
    { titel: "Arrival", jahr: 2016, verkauf: 203.4 },
    { titel: "Avatar", jahr: 2009, verkauf: 2847 },
    { titel: "Avengers: Endgame", jahr: 2019, verkauf: 2798 },
    { titel: "Banana Joe", jahr: 1982, verkauf: 5.3 },
    { titel: "Banana Split", jahr: 2018, verkauf: 0.9 },
    { titel: "Bananas", jahr: 1971, verkauf: 11.2 },
    { titel: "Band of Outsiders", jahr: 1964, verkauf: 0.5 },
    { titel: "Bandido", jahr: 1956, verkauf: 3.5 },
    { titel: "Bandits vs. Samurai Squadron", jahr: 1978, verkauf: 1.4 },
    { titel: "BanG Dream! FILM LIVE", jahr: 2019, verkauf: 1.9 },
    { titel: "Barbie", jahr: 2023, verkauf: 1445 },
    { titel: "Black Panther", jahr: 2018, verkauf: 1346 },
    { titel: "Blade Runner 2049", jahr: 2017, verkauf: 260.5 },
    { titel: "Bohemian Rhapsody", jahr: 2018, verkauf: 910.8 },
    { titel: "Cast Away", jahr: 2000, verkauf: 429.6 },
    { titel: "Catch Me If You Can", jahr: 2002, verkauf: 352.1 },
    { titel: "Coco", jahr: 2017, verkauf: 807.1 },
    { titel: "Collateral", jahr: 2004, verkauf: 220.9 },
    { titel: "Dallas Buyers Club", jahr: 2013, verkauf: 55.2 },
    { titel: "Deadpool", jahr: 2016, verkauf: 783.1 },
    { titel: "Dune", jahr: 2021, verkauf: 402 },
    { titel: "Dunkirk", jahr: 2017, verkauf: 526.9 },
    { titel: "Edge of Tomorrow", jahr: 2014, verkauf: 370.5 },
    { titel: "Everything Everywhere All at Once", jahr: 2022, verkauf: 141.5 },
    { titel: "Fight Club", jahr: 1999, verkauf: 101.2 },
    { titel: "Finding Nemo", jahr: 2003, verkauf: 940.3 },
    { titel: "Forrest Gump", jahr: 1994, verkauf: 678.2 },
    { titel: "From a Whisper", jahr: 2008, verkauf: 0.4 },
    { titel: "From Beyond", jahr: 1986, verkauf: 1.2 },
    { titel: "From Prada to Nada", jahr: 2011, verkauf: 4.5 },
    { titel: "From the Ashes", jahr: 2011, verkauf: 0.3 },
    { titel: "From the Earth to the Moon", jahr: 1998, verkauf: 0 },
    { titel: "From the Terrace", jahr: 1960, verkauf: 8.1 },
    { titel: "From Up on Poppy Hill", jahr: 2011, verkauf: 61.7 },
    { titel: "Froning: The Fittest Man in History", jahr: 2015, verkauf: 0.7 },
    { titel: "Frozen", jahr: 2013, verkauf: 1280 },
    { titel: "Frozen Fever", jahr: 2015, verkauf: 23.4 },
    { titel: "Frozen II", jahr: 2019, verkauf: 1450 },
    { titel: "Frozen Planet", jahr: 2011, verkauf: 0 },
    { titel: "Gladiator", jahr: 2000, verkauf: 460.5 },
    { titel: "Gone Girl", jahr: 2014, verkauf: 369.3 },
    { titel: "Harry Potter and the Philosopher's Stone", jahr: 2001, verkauf: 974.8 },
    { titel: "Her", jahr: 2013, verkauf: 47.4 },
    { titel: "Inception", jahr: 2010, verkauf: 829.9 },
    { titel: "Inside Out", jahr: 2015, verkauf: 857.6 },
    { titel: "Interstellar", jahr: 2014, verkauf: 677.5 },
    { titel: "Iron Man", jahr: 2008, verkauf: 585.2 },
    { titel: "Joker", jahr: 2019, verkauf: 1074 },
    { titel: "Jurassic Park", jahr: 1993, verkauf: 1045 },
    { titel: "Knives Out", jahr: 2019, verkauf: 312.9 },
    { titel: "La La Land", jahr: 2016, verkauf: 448.9 },
    { titel: "Logan", jahr: 2017, verkauf: 619.2 },
    { titel: "Mad Max: Fury Road", jahr: 2015, verkauf: 379.4 },
    { titel: "Minions", jahr: 2015, verkauf: 1159 },
    { titel: "Minority Report", jahr: 2002, verkauf: 358.4 },
    { titel: "Oblivion", jahr: 2013, verkauf: 286.2 },
    { titel: "Oppenheimer", jahr: 2023, verkauf: 976.1 },
    { titel: "Pacific Rim", jahr: 2013, verkauf: 411.8 },
    { titel: "Prisoners", jahr: 2013, verkauf: 122.1 },
    { titel: "Pulp Fiction", jahr: 1994, verkauf: 213.9 },
    { titel: "Se7en", jahr: 1995, verkauf: 327.3 },
    { titel: "Shrek 2", jahr: 2004, verkauf: 935.3 },
    { titel: "Spider-Man: No Way Home", jahr: 2021, verkauf: 1921 },
    { titel: "Spotlight", jahr: 2015, verkauf: 98.3 },
    { titel: "Star Wars: The Force Awakens", jahr: 2015, verkauf: 2068 },
    { titel: "Tenet", jahr: 2020, verkauf: 365.3 },
    { titel: "The Avengers", jahr: 2012, verkauf: 1518 },
    { titel: "The Banishment", jahr: 2007, verkauf: 2.8 },
    { titel: "The Batman", jahr: 2022, verkauf: 772.2 },
    { titel: "The Big Short", jahr: 2015, verkauf: 133.4 },
    { titel: "The Curious Case of Benjamin Button", jahr: 2008, verkauf: 335.8 },
    { titel: "The Dark Knight", jahr: 2008, verkauf: 1005 },
    { titel: "The Departed", jahr: 2006, verkauf: 291.5 },
    { titel: "The Forbidden Kingdom", jahr: 2008, verkauf: 128 },
    { titel: "The Forbidden Room", jahr: 2015, verkauf: 1.1 },
    { titel: "The Grand Budapest Hotel", jahr: 2014, verkauf: 173.1 },
    { titel: "The Green Mile", jahr: 1999, verkauf: 286.8 },
    { titel: "The Hateful Eight", jahr: 2015, verkauf: 155.8 },
    { titel: "The Hunger Games", jahr: 2012, verkauf: 694.4 },
    { titel: "The Imitation Game", jahr: 2014, verkauf: 233.6 },
    { titel: "The Incredibles", jahr: 2004, verkauf: 633 },
    { titel: "The Lion King", jahr: 1994, verkauf: 968.5 },
    { titel: "The Lord of the Rings: The Return of the King", jahr: 2003, verkauf: 1146 },
    { titel: "The Matrix", jahr: 1999, verkauf: 466.6 },
    { titel: "The Prestige", jahr: 2006, verkauf: 109.7 },
    { titel: "The Revenant", jahr: 2015, verkauf: 533 },
    { titel: "The Shape of Water", jahr: 2017, verkauf: 195.2 },
    { titel: "The Shawshank Redemption", jahr: 1994, verkauf: 58.3 },
    { titel: "The Social Network", jahr: 2010, verkauf: 224.9 },
    { titel: "The Terminal", jahr: 2004, verkauf: 219.4 },
    { titel: "The Wolf of Wall Street", jahr: 2013, verkauf: 392 },
    { titel: "Titanic", jahr: 1997, verkauf: 2187 },
    { titel: "Top Gun: Maverick", jahr: 2022, verkauf: 1485 },
    { titel: "Toy Story 3", jahr: 2010, verkauf: 1067 },
    { titel: "Tron: Legacy", jahr: 2010, verkauf: 400.1 },
    { titel: "Up", jahr: 2009, verkauf: 735.1 },
    { titel: "Whiplash", jahr: 2014, verkauf: 49.4 }
  ];

const FilmBibliothek = () => {
  const [suchbegriff, setSuchbegriff] = useState('');

  const gefilterteFilme = filme.filter(film =>
    film.titel.toLowerCase().includes(suchbegriff.toLowerCase())
  );

  return (
    <div className="film-container">
      <input
        className="searchbar"
        type="text"
        placeholder="Searchbar"
        value={suchbegriff}
        onChange={(e) => setSuchbegriff(e.target.value)}
      />

      <table className="film-table">
        <thead>
          <tr>
            <th>Filmtitel</th>
            <th>Erscheinungsjahr</th>
            <th>Verkäufe</th>
          </tr>
        </thead>
        <tbody>
          {gefilterteFilme.map((film, index) => (
            <tr key={index}>
              <td>{film.titel}</td>
              <td>{film.jahr}</td>
              <td>{film.verkauf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilmBibliothek;