import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Details.css";

const Details = ({ movies }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const source = movies.find((el) => el.id === Number(id)).trailer;
  const description = movies.find((el) => el.id === Number(id)).desc;
  return (
      <div className="Details">
        <figure className="movie">
          <div className="movie__hero">
            <iframe
              width="560"
              height="315"
              src={source}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="movie__img"
            ></iframe>{" "}
           
          </div>
          <div className="movie__content">
            <div className="movie__title">
              <h1 className="heading__primary">
                قصة الفيلم <i className="fas fa-fire"></i>
              </h1>
            </div>
            <p className="movie__description">{description}</p>
            <button
              className="back"
              onClick={() => navigate("/")}
            >
              رجوع للقائمة
            </button>
          </div>
        </figure>
      </div>
  );
};

export default Details;
