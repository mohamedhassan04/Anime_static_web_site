import React from 'react';
import CardFilm from './CardFilm';
import '../styles/home.css';

const VideosPage = ({ movies }) => {
  return (
    <div className="card-animes">
      {movies?.map((movie, i) => (
        <CardFilm movie={movie} />
      ))}
    </div>
  );
};

export default VideosPage;
