import React from 'react';
import ReactDOM from 'react-dom';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

// Import statement to indicate that you need to bundle `./index.scss`
import '../../../src/index';

    export class MainView extends React.Component{
      constructor() {
        super();
        this.state = {
          movies: [],
          selectedMovie: null
        };
      }

      setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }

    render() {
      const { movies, selectedMovie } = this.state;
    
      if (selectedMovie) return <MovieView movie={selectedMovie} />;
    
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
      return (
        <div className="main-view">
          {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setState({ selectedMovie: newSelectedMovie }); }} />)}
        </div>
      );
    }

   // export class MovieCard extends React.Component {
      render() {
        const { movie } = this.props;
        <MovieCard key={movie._id} onMovieClick={(newSelectedMovie) => { this.state.selectedMovie = newSelectedMovie; }} />
      }
    }

  