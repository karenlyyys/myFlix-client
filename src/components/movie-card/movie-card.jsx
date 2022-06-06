import React from 'react';
import { MovieView } from '../movie-view/movie-view';
import Button from 'react-bootstrap/Button';

import "./movie-view.scss"

import { Card, Col, Container, Row, Button } from "react-bootstrap";

export class MovieCard extends React.Component {
 
  render() {
    const { movie, onMovieClick } = this.props;

    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }

}
