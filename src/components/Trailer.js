import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { moviesData } from "../moviesData";

function Trailer ({movieList}) {
    console.log('movie',movieList)
    const {id}=useParams()
    const filmID = moviesData.find((e)=>e.id === id)
    console.log('ids',filmID)
    return (
        <div className="trailerContainer">
            <video href="https://www.youtube.com/watch?v=3ncFpP8GP4g"/>
        </div>
    )
}

export default Trailer;