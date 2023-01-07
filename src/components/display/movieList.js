import React from "react";
import MovieCard from "./movieCard";
import "./movieDisplay.css";

function MovieList ({movieList,search,rate}) {
    return (
        <div>
            <div className="mlist-container">
{
    movieList.filter((el) => el.name.includes(search.toLowerCase().trim()))
    .map((el,key) => <MovieCard key={el.id} movie={el}/>)
}
            </div>
        </div>
    )
}

export default MovieList;