import React from "react";
import { Card } from "react-bootstrap";
const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={movie.posterUrl}
                width="250px"
                height="250px"
            />
            <Card.Body>
                <Card.Title> {movie.name} </Card.Title>
                <Card.Text>
                    date : {movie.date}
                    movie duration :{movie.duration}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;