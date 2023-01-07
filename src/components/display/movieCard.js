import React from "react";
import Rate from "../search/Rate";
import { Card } from "react-bootstrap";
import "./movieDisplay.css";

function MovieCard ({movie}) {
        console.log(movie)
    return (
        <div className="card-container">
            <Card className="bg-dark text-white">
                <Card.Img src={movie.image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title> {movie.name} </Card.Title>
                    <Card.Text> {movie.type} </Card.Text>
                    <Card.Text> {movie.date} </Card.Text>
                    <Card.Text> {movie.description} </Card.Text>
                    <Rate rate={movie.rating} />
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default MovieCard;