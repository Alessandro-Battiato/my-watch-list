import React from "react";
import { useLoaderData } from "react-router-dom";

const Movie = () => {
  const { movie } = useLoaderData();
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-page">
      <div className="movie-page__cover h-[30rem] w-full">
        <figure className="h-full">
          <img
            src={imgUrl}
            alt="Poster"
            className="h-full w-full object-contain"
          />
        </figure>
      </div>
      <div className="movie-page__details card w-full mt-12 bg-base-300 shadow-xl">
        <div className="movie-page__details-title card-body">
          <h1 className="text-2xl card-title">
            {movie.title} <p>({movie.release_date})</p>
          </h1>
        </div>
        <div className="movie-page__details-rating card-title p-3">
          Overview: <p>{movie.overview}</p>
        </div>
        <div className="movie-page__details-writers card-title p-3">
          Genres: <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>

        <div className="movie-page__details-rating card-title p-3">
          Rating: <p>{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
