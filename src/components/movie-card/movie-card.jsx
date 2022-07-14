import React from 'react';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
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
            <Card.Text>Director:
            <Link to={`/directors/${movie.Director.Name}`}>
  <Button variant="link">{movie.Director.Name}</Button>
</Link> </Card.Text>
           
            <Card.Text>Genre: 
            <Link to={`/genres/${movie.Genre.Name}`}>
  <Button variant="link">{movie.Genre.Name}</Button>
</Link>
</Card.Text>
            
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