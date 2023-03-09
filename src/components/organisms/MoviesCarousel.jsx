import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import MovieCard from "../molecules/MovieCard";

const options = {
  rewind: true,
  perPage: 3,
  gap: "2rem",
  mediaQuery: "max",
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
};

const MoviesCarousel = ({ items }) => {
  return (
    <div className="movies-carousel w-full">
      <Splide options={options}>
        {items.map((movie) => (
          <SplideSlide key={movie.id}>
            <div className="w-full">
              <MovieCard
                id={movie.id}
                title={movie.original_title}
                imgPath={movie.poster_path}
                overview={movie.overview}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MoviesCarousel;
