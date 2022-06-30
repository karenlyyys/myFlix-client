import React from 'react';
import { MovieView } from '../movie-view/movie-view';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

//import { Card, Col, Container, Row } from "react-bootstrap";

import "../../index.scss"
import { Link } from 'react-router-dom';
 
  
  export class MovieCard extends React.Component {
    render() {
      const { movie, onMovieClick } = this.props;
  
      return (
          <Card>
          <Card.Img variant="top" src={movie.ImagePath} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Description}</Card.Text>
            <Card.Text>Director:  {movie.Director.Name}</Card.Text>
            <Card.Text>Genre: {movie.Genre.Name}</Card.Text>
            <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
          </Card.Body>
        </Card>
      );
    }
  }

  
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
