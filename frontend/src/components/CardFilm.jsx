import '../styles/card.css';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Badge, Box, Flex } from '@chakra-ui/react';

const CardFilm = ({ movie, id }) => {
  return (
    <div className="card">
      <img src={movie?.posterurl} alt="posterimage" />
      <div className="card-content">
        <Flex>
          <h2>{movie?.name}</h2>
          <Box ml="3">
            {movie.year >= 2022 ? (
              <Badge
                ml="1"
                colorScheme="white"
                bgColor={'green'}
                borderRadius={'7'}
              >
                New
              </Badge>
            ) : null}
          </Box>
        </Flex>

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
