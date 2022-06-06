import React from 'react';
import ReactDOM from 'react-dom';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import "../../index.scss"

    export class MainView extends React.Component{
      constructor() {
        super();
        this.state = {
          movies: [
            {
              _id: 1,
              Title: 'Inception',
              Director: 'Christopher Nolan',
              Genre: 'Sci-Fi',
              Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada neque non ornare tincidunt. Quisque fermentum dignissim felis et tincidunt. Praesent sagittis nibh et tempus gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In blandit nec lectus in pretium. In dictum mollis turpis non condimentum. Cras ac mauris eu quam convallis vestibulum id a velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mauris ante, semper vitae placerat ut, congue sed mi. Integer nec est sed mauris aliquam ornare. Quisque lobortis posuere dui, non interdum justo molestie vitae.',
              ImagePath: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1wNJi3WBo8wjZ-lxg4xPbg6-X7tQ1w6ZFI5L-RH1rUiOOGxLO'
            },
            {
              _id: 2,
              Title: 'Lord of the Rings',
              Director: 'Peter Jackson',
              Genre: 'Super-Heroes',
              Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada neque non ornare tincidunt. Quisque fermentum dignissim felis et tincidunt. Praesent sagittis nibh et tempus gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In blandit nec lectus in pretium. In dictum mollis turpis non condimentum. Cras ac mauris eu quam convallis vestibulum id a velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mauris ante, semper vitae placerat ut, congue sed mi. Integer nec est sed mauris aliquam ornare. Quisque lobortis posuere dui, non interdum justo molestie vitae.',
              ImagePath: 'https://images-na.ssl-images-amazon.com/images/I/71jLBXtWJWL.jpg'
            },
            {
              _id: 3,
              Title: 'The Matrix',
              Director: 'Lana Wachowski',
              genre: 'Sci-fi',
              Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada neque non ornare tincidunt. Quisque fermentum dignissim felis et tincidunt. Praesent sagittis nibh et tempus gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In blandit nec lectus in pretium. In dictum mollis turpis non condimentum. Cras ac mauris eu quam convallis vestibulum id a velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mauris ante, semper vitae placerat ut, congue sed mi. Integer nec est sed mauris aliquam ornare. Quisque lobortis posuere dui, non interdum justo molestie vitae.',
              ImagePath: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg'
            },
          ],
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
      console.log(movies)
      if (selectedMovie) return <MovieView movie={selectedMovie} />;
    
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
      return (
        <div className="main-view">
        {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setState({ selectedMovie: newSelectedMovie }); }} />)}
        </div>
      );
    }


    }

  