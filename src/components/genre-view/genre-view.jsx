import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './genre-view.scss';


export class GenreView extends React.Component {

    render() {
      const { genre, onBackClick } = this.props;


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