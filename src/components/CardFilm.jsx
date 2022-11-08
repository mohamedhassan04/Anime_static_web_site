import '../styles/card.css';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CardFilm = ({ movie, id }) => {
  return (
    <div className="card">
      <img src={movie?.posterurl} alt="posterimage" />
      <div className="card-content">
        <h2>{movie?.name}</h2>
        <h5>
          <AiFillStar />
          {movie?.rating}
        </h5>
        <p>{movie?.description}</p>
        <Link to={`/videos/${movie.id}`} className="btn">
          watch now
        </Link>
      </div>
    </div>
  );
};

export default CardFilm;
