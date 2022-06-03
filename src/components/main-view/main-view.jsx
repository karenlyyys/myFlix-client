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
    

    render() {
      const { movies } = this.state;
    
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
      return (
        <div className="main-view">
         {movies.map(movie => <MovieCard key={movie._id}/>)}
        </div>
      );
      }

      render() {
        const { movies, selectedMovie } = this.state;
      
        if (selectedMovie) return <MovieView movie={selectedMovie} />;
      
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
      
        return (
          <div className="main-view">
            <button onClick={() => {alert('Nice!')}}>Click me!</button>
            {movies.map(movie => <MovieCard key={movie._id} movie={movie}/>)}
          </div>
        );
      }

    }  