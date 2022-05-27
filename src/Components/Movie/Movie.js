import React from "react";
import MovieRating from "../MovieRating/MovieRating";
import "./Movie.css";
const Movie = ({ el }) => {
  return (
    <div className="cardd">
      <div className="cardd-p1">
        <img src={el.image} alt="movie img" />
      </div>

      <div className="cardd-p2">
        <h4>{el.title}</h4>
        <p className="desc">{el.desc}</p>
        <MovieRating rate={el.rating} />
      </div>
    </div>
  );
};

export default Movie;
