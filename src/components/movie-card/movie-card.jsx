import React from 'react';
import { MovieView } from '../movie-view/movie-view';

export class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return <div className="movie-card" >{

      movies.map(movie => <MovieView key={movie._id} movie={movie}/>)

    }</div>;
  }
}

{}