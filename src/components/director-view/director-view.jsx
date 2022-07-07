import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './director-view.scss';


export class DirectorView extends React.Component {
    state = {
      director: {}
    }
    componentDidMount() {
      const { movies, selectedMovie } = this.props;
      const directorName = window.location.href.split("/directors/")[1].replace("%20", " ");
      const director = movies.find(m=>m.Director.Name == directorName).Director
      this.setState({
        director
      })
    }
    render() {
            const { onBackClick } = this.props;
            const { director } = this.state;
            return (
              <Card text='black' className="directorCard">
                <Card.Header className="directorName">{director.Name}</Card.Header>
                <Card.Body>
                  <Card.Text> Birthdate: {director.Birth}</Card.Text>
                  <Card.Text> Biography: {director.Bio}</Card.Text>
                  <Button variant="warning" onClick={() => { onBackClick() }}>Back</Button>
                </Card.Body>
              </Card>
            )
          }
        }
