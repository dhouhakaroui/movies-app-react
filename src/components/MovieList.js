import React, { useState } from "react";
import AddModal  from "./AddModal";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, addMovie }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row">
      {movies.map((el, i) => ( <MovieCard movie={el} key={i} />))}
      <div onClick={handleShow}
        className="col-6 movie_card my-2 d-flex justify-content-center align-items-center add_btn"
        style={{backgroundImage: `linear-gradient(45deg, white, rgba(255,255,255,.7)), 
          url(${"https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png"})`,}}>
        +
        </div>
      <AddModal addMovie={addMovie} show={show} handleClose={handleClose} />
    </div>
  );
};
export default MovieList 