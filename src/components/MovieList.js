import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, nameSearch }) => {
    return (
        <div className="list">
            {movies
                .filter((el) =>
                    el.name.toLowerCase().includes(nameSearch.toLowerCase())
                )

                .map((el) => (
                    <MovieCard movie={el} key={el.id} />
                ))}
        </div>
    );
};

export default MovieList;