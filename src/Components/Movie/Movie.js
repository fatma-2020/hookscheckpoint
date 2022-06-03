import React from "react";
import { Link } from "react-router-dom";
import MovieRating from "../MovieRating/MovieRating";
import "./Movie.css";
const Movie = ({ el }) => {
  return (
    <div className="cardd">
      <div className="cardd-p1">
        <img src={el.image} alt="movie img" />
        <MovieRating rate={el.rating} />
      </div>

      <div className="cardd-p2">
        <h4>{el.title}</h4>
        <p className="desc">{el.desc}</p>
        <Link to={`/Details/${el.id}`}>
          <button className="trailer-btn">المقطع الترويجي</button>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
