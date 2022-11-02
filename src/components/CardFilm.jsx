import React from 'react';
import img6 from '../assets/img006.jpg';
import '../styles/card.css';
import { FaRegStar } from 'react-icons/fa';
import { Image } from '@chakra-ui/react';
const CardFilm = () => {
  return (
    <div className="card">
      <div className="poster">
        <Image src={img6} />
      </div>
      <div className="details">
        <h2>
          Boruto Shippunden (2019) <br /> <span>Directed By Uzumaki</span>
        </h2>
        <div className="rating">
          <FaRegStar className="fa" /> <span>4.5</span>
        </div>
        <div className="tags">
          <span className="mangas">Mangas</span>
          <span className="adventure">Adventure</span>
        </div>
        <div className="info">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            enim quod nobis facilis, quos ex ratione delectus! Id assumenda quam
            omnis harum voluptas...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFilm;
