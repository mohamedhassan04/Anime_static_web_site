import React from 'react';
import Carousel from 'react-grid-carousel';
import CardFilm from './CardFilm';

const CarouselGallery = ({ movies }) => {
  return (
    <Carousel cols={5} rows={1} gap={10} loop>
      {movies?.map((movie, i) => (
        <Carousel.Item key={i}>
          <CardFilm movie={movie} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselGallery;
