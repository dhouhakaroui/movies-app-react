import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import MovieList from "./components/MovieList";
import Search  from "./components/Search";
import MovieDescription from './components/MovieDescription';
import MovieTrailerLink from './components/MovieTrailerLink';

function App() {
  const [movies, setMovies] = useState([
    {title: "Miracle In Cell No7",
    date: "2019",
    duration: "2:12 h",
    rate: 4,
    genre: "Drama",
    description:"The story unfolds in a flashback to a village in 1983. A mentally challenged man, Mehmet Koyuncu (Memo), lives with his young daughter, Ova, and his grandmother on a hillside. But his world is turned upside down when he is falsely charged with murdering a girl who had died due to an accident.",
    main_img:"https://upload.wikimedia.org/wikipedia/en/0/0d/7._Ko%C4%9Fu%C5%9Ftaki_Mucize.jpg",
    second_img:"https://i.dawn.com/large/2020/03/5e689f3d9af13.jpg",      
    link:"https://www.youtube.com/embed/MHdBW0gSsjo"
    },
    {title: "Tomb Raider",
    date: "2018",
    duration: "1:23 h",
    rate: 5,
    genre: "Action, Fantasy",
    description:"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    main_img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    second_img:"https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png",      
    link:"https://www.youtube.com/embed/atxT8h5WfTU"
    },
    {title: "Avengers:Endgame",
    date: "2019",
    duration: "3:02 h",
    rate: 3,
    genre: "Action",
    description:"This film is the direct sequel to Avengers: Infinity War at the end of which half of all living things in the universe including characters from the Marvel Universe disappeared with a snap of Thanos' fingers, after he came into possession of all the Infinity Stones.",
    main_img:"https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SY445_.jpg",
    second_img:"https://www.thedad.com/wp-content/uploads/2020/04/tony-stark-death-avengers-endgame-e1586618986872.jpg",      
    link:"https://www.youtube.com/embed/wV-Q0o2OQjQ"
    }
    ]);
  const [movieTitle, setmovieTitle] = useState("");
  const [movieRating, setmovieRating] = useState(0);
  const search = (text) => {setmovieTitle(text);};
  const setRate = (rate) => {setmovieRating(rate);};
  const addMovie = (movie) => { setMovies([...movies,movie]);};
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Search search={search} setRate={setRate} newRate={movieRating} />
            <MovieList addMovie={addMovie} movies={movies.filter((el)=>el.rate >= movieRating && el.title.toLowerCase().includes(movieTitle.toLowerCase().trim()))}/>
          </Route>
          <Route exact path="/:title" render={(props) => <MovieDescription movies={movies} {...props} /> }  />
          <Route path="/:title/:link" render={(props) => <MovieTrailerLink movies={movies} {...props} /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
