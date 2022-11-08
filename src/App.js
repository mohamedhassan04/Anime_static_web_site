import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Videos from './components/Videos';
import VideosPage from './components/VideosPage';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: 'Boruto: Naruto Next Generations (2017)',
      posterurl:
        'https://image.tmdb.org/t/p/original/pe9TMHu4rWbETYGWgR4jQNlSkkL.jpg',
      description:
        'Les affrontements dans le monde des ninjas appartiennent désormais au passé. Le village de Konoha est entré dans une ère de paix. Boruto, le fils du 7ème Hokage, vit très mal la popularité de son éminent paternel, Naruto, qui lui fait de lombre.',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/nQeIObeB--8?autoplay=1',
    },
    {
      id: 2,

      name: 'Death Note (2006)',
      posterurl:
        'https://cdn.europosters.eu/image/750/death-note-from-the-shadows-i58005.jpg',
      description:
        'Death Note (デスノート, Desu Nōto) is a manga series created by writer Tsugumi Ohba and illustrator Takeshi Obata. The series centers around a high school student who discovers a supernatural notebook that allows him to kill anyone by writing the victims name while picturing their face.',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/NlJZ-YgAt-c?autoplay=1',
    },
    {
      id: 3,

      name: 'The Circle (2017)',
      posterurl: 'https://m.media-amazon.com/images/I/810juzDPc1L.jpg',
      description:
        'Mae is ecstatic to be employed in the biggest tech company in the world. But after she gets involved in an experiment that could change the world, she realises its adverse consequences.',
      rating: 2,
      trailer: 'https://www.youtube.com/embed/zH0E69gtQtI?autoplay=1',
    },
    {
      id: 5,
      name: 'Shutter Island (2010)',
      posterurl: 'https://m.media-amazon.com/images/I/51CMioyl8mL._AC_.jpg',
      description:
        'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/5iaYLCiq5RM?autoplay=1',
    },
    {
      id: 6,

      name: 'Warcraft (2016)',
      posterurl: 'https://m.media-amazon.com/images/I/519li1ZUPxL._AC_.jpg',
      description:
        'A few human survivors must team up with a group of dissenting Orcs to stop an Orc horde from invading their planet through a magic portal.',
      rating: 1,
      trailer: 'https://www.youtube.com/embed/2Rxoz13Bthc?autoplay=1',
    },
    {
      id: 7,

      name: 'The Godfather (1972)',
      posterurl:
        'https://m.media-amazon.com/images/I/81s+jxE5KEL._AC_SL1500_.jpg',
      description:
        'The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/sY1S34973zA?autoplay=1',
    },
    {
      id: 8,

      name: 'Taxi Driver (1976)',
      posterurl: 'https://pbs.twimg.com/media/FSn0GtSXwAA0Uy8.jpg:large',
      description:
        'Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he is driven to save an underage prostitute from her pimp in an effort to clean the city of its corruption.',
      rating: 3,
      trailer: 'https://www.youtube.com/embed/UUxD4-dEzn0?autoplay=1',
    },
    {
      id: 9,

      name: 'Fight Club (1999)',
      posterurl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3dc09fec-d88c-4720-9165-a23eb7a4b095/dek4c2e-17030424-a01b-4f13-b64f-1396fe03f6d4.jpg/v1/fill/w_1280,h_1970,q_75,strp/my_rwby_volume_8_poster_by_tehshraid_dek4c2e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk3MCIsInBhdGgiOiJcL2ZcLzNkYzA5ZmVjLWQ4OGMtNDcyMC05MTY1LWEyM2ViN2E0YjA5NVwvZGVrNGMyZS0xNzAzMDQyNC1hMDFiLTRmMTMtYjY0Zi0xMzk2ZmUwM2Y2ZDQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hGZOY9hhd0RdIijPRUT3yJUKB7zZa7UuS5jTrSCmPks',
      description:
        'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/O1nDozs-LxI?autoplay=1',
    },
    {
      id: 10,

      name: 'The Lord of the Rings (2001)',
      posterurl:
        'https://cdn.europosters.eu/image/1300/posters/one-piece-big-mom-saga-i94377.jpg',
      description:
        'The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/r5X-hFf6Bwo?autoplay=1',
    },
    {
      id: 10,

      name: 'The Lord of the Rings (2001)',
      posterurl:
        'https://cdn.europosters.eu/image/1300/posters/one-piece-big-mom-saga-i94377.jpg',
      description:
        'The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/r5X-hFf6Bwo?autoplay=1',
    },
  ]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/videos" element={<VideosPage movies={movies} />} />
        <Route path="/videos/:id" element={<Videos movies={movies} />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
