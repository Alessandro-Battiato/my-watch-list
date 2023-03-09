import React, { useState, useEffect } from "react";
import useWindowSize from "../../utils/windowSize";
import { Link } from "react-router-dom";
import { truncate } from "../../utils/text";

const MovieCard = ({ id, title, imgPath, overview }) => {
  const [maxChars, setMaxChars] = useState(100);
  const { width } = useWindowSize();
  const imgUrl = `https://image.tmdb.org/t/p/w500${imgPath}`;
  const description = truncate(overview, maxChars);

  useEffect(() => {
    if (width < 1440) {
      setMaxChars(50);
    } else {
      setMaxChars(100);
    }
  }, [width]);

  return (
    <div className="movie-card card w-full h-[30rem] bg-gray-300 shadow-xl">
      <figure className="h-40 ">
        <img src={imgUrl} alt={title} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/movies/${id}`} className="btn btn-accent">
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
