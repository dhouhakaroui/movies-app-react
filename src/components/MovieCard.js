import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-6 movie_card my-2" style={{backgroundImage: `linear-gradient(45deg, white, rgba(255,255,255,.7)), url(${movie.second_img})`}}>
      <div className="left_side">
        <div className="left_side_inner">
          <img src={movie.main_img} alt="movie image" />
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.date}</p>
            <div className="d-flex">
              <p className="duration mr-2">{movie.duration}</p>
              <p>{movie.genre}</p>
            </div>
            <StarRatingComponent name="rate1" starCount={5} value={movie.rate}/>
            <Link to={`/${movie.title}`}><Button variant="secondary">video link</Button></Link>
          </div>
        </div>
        <div>
          <p className="description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
