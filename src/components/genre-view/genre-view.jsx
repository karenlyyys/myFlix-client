import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './genre-view.scss';


export class GenreView extends React.Component {
  state = {
    genre: {}
  }
  componentDidMount() {
    const { movies, selectedMovie } = this.props;
    const genreName = window.location.href.split("/genres/")[1].replace("%20", " ");
    const genre = movies.find(m=>m.Genre.Name == genreName).Genre
    this.setState({
      genre
    })
  }

    render() {
      const { onBackClick } = this.props;
      const {genre} = this.state;

    return (
        <Card text='dark' className="genreCard">
          <Card.Header>{genre.Name}</Card.Header>
          <Card.Body>
            <Card.Text>{genre.Description}</Card.Text>
            <Button variant="warning" onClick={() => { onBackClick() }}>Back</Button>
          </Card.Body>
        </Card>
      )
    }
  
  }