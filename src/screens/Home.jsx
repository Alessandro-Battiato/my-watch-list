import React, { useState, useEffect } from "react";
import { getAllMovies } from "../utils/apis";
import MoviesCarousel from "../components/organisms/MoviesCarousel";
import MoviesList from "../components/organisms/MoviesList";

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchAllMovies = async () => {
      const movies = await getAllMovies();
      if (movies.results) {
        setMovies(movies.results);
      }
    };

    fetchAllMovies();
  }, []);

  return (
    <div className="movies-page">
      <div className="movies-page__movies">
        <h2 className="movies-page__movies-title text-2xl text-accent">
          Movies
        </h2>
        <div className="movies-page__movies-carousel mt-8">
          {movies && <MoviesCarousel items={movies} />}
        </div>
      </div>
      <div className="movies-page__watch-list mt-16">
        <h2 className="movies-page__movies-title text-2xl text-accent">
          My watch list
        </h2>
        <div className="movies-page__movies-list mt-8">
          <MoviesList />
        </div>
      </div>
    </div>
  );
};

export default Home;
