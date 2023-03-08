import React from "react";

function Home() {
  return (
    <div className="movies-page">
      <div className="movies-page__movies">
        <h2 className="movies-page__movies-title text-2xl text-accent">
          Movies
        </h2>
        <div className="movies-page__movies-carousel mt-8">MoviesCarousel</div>
      </div>
      <div className="movies-page__watch-list mt-16">
        <h2 className="movies-page__movies-title text-2xl text-accent">
          My watch list
        </h2>
        <div className="movies-page__movies-list mt-8">WatchList</div>
      </div>
    </div>
  );
}

export default Home;
