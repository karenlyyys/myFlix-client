import React from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios";
import Col from 'react-bootstrap/Col';
import "./movie-view.scss";
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';

export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
}

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
}
componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
}


  render() {
    const { movie } = this.props;
    function onBackClick() {
      window.location.reload()
    }
    return (
      <div className="movie-view">
         {/* <Button className="backButton" onClick={() => { onBackClick(null); }}>
         &#8592; Back</Button> */}
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <button className="backButton" onClick={() => { onBackClick(null); }}>Back</button>
        </div>
    );
  }
}
