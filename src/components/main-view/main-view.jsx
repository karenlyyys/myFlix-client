import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../../index.scss"
import { Button, Container } from 'react-bootstrap';
import { Login } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';

const url = 'https://movie-api-karelyss.herokuapp.com/'
    export class MainView extends React.Component{
      constructor() {
        super();
        this.state = {
          movies: [],
          selectedMovie: null,
          user: '',
          reg: false
        }
        this.login = this.login.bind(this);
        this.getMovies = this.getMovies.bind(this);
        this.setSelectedMovie = this.setSelectedMovie.bind(this)
        this.onRegister = this.onRegister.bind(this)
        this.registration = this.registration.bind(this)
      }

      login(username, password){
        axios.post(`${url}login?Username=${username}&Password=${password}`)
        .then(result=>{
          localStorage.setItem('token', result.data.token)
          this.setState({
            user: result.data.user.Username
          });
          this.getMovies();
        })
      }

      registration(username, password, email, birthday){
        //axios post request here
        axios.post(`${url}users/register`, {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday
        })
        .then(result=>{
          alert("Registration successful!");
          window.location.reload()
        })
      }

      onRegister(){
        this.setState({
          reg: true
        })
      }
       
      getMovies() {
        axios.get('https://movie-api-karelyss.herokuapp.com/movies', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        .then(response => {
          // Assign the result to the state
          this.setState({
            movies: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      onLoggedIn(authData) {
        console.log(authData);
        this.setState({
          user: authData.user.Username
        });
      
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
      }

    componentDidMount(){
      // axios.get('https://movie-api-karelyss.herokuapp.com/movies')
      //   .then(response => {
      //     this.setState({
      //       movies: response.data
      //     });
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });

        // this.login('jondoe2', 'passcode1')
        // this.getMovies()
    }

    onLoggedOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.reload()
    }
    

      setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }

    render() {
      const { movies, selectedMovie, user, reg } = this.state;
      console.log(movies)
      if(reg) return <RegistrationView registration={this.registration} />
      if(!user) return <Login login={this.login} onRegister={this.onRegister} />
      if (selectedMovie) return <MovieView movie={selectedMovie} />;
    
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
      return (
        <div>
          <header>
            <h1 style={{color: 'red'}}>MyFlix</h1> 
            <Button variant='danger' style={{float: 'right', marginTop: -45}} type="button" onClick={this.onLoggedOut}>Log out</Button>
          </header>
        <div className="main-view">
          {selectedMovie
            ? (
              <Row className="justify-content-md-center">
                <Col md={8}>
                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              </Col>
              </Row>
            )
            : (
              <Row className="justify-content-md-center">
                <Col md={8}>
          {movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          ))}
          </Col>
        </Row>  
      )
    }
    </div>
  </div>
);
  }
    }