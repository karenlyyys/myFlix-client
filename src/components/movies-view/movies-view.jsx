import React from "react";
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container } from 'react-bootstrap';

const MoviesList = ({movies, selectedMovie, setSelectedMovie}) => {
  return <div className="main-view">
  {selectedMovie
    ? (
      <Row className="justify-content-md-center">
        <Col md={8}>
        <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { setSelectedMovie(newSelectedMovie); }}/>
      </Col>
      </Row>
    )
    : (
      <Row className="justify-content-md-center">
        <Col md={8}>
  {movies.map(movie => (
    <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { setSelectedMovie(newSelectedMovie); }}/>
  ))}
  </Col>
</Row>  
)
}
</div> 
}

export default MoviesList