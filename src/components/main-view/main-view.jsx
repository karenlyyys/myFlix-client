import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../../index.scss"
import { Button, Card, Container } from 'react-bootstrap';
import { Login } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import MoviesList from "../movies-view/movies-view";
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { Link } from 'react-router-dom'

const url = 'https://movie-api-karelyss.herokuapp.com/'
    export class MainView extends React.Component{
      constructor() {
        super();
        this.state = {
          movies: [],
          userFavs: [],
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
          console.log(result)
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('user', result.data.user.Username)
          this.setState({
            user: result.data.user.Username
          });
          this.getMovies();
          window.location.replace("/movies")
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
          user: authData.user.Username,
          userFavs: authData.user.FavoriteMovies
        });
      
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
      }

    componentDidMount(){
    
        this.getMovies()
    }

    onLoggedOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.replace("/")
    }
    

      setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }

      onBackClick = () => window.location.replace("/movies");
  
    render() {
      const { movies, selectedMovie, user, reg, users } = this.state;
      return (
        <div>
           <Router>
          <header>
          <Link to={`/movies`}>
            <h1 style={{color: 'red'}}>
           MovieFlix</h1> 
            </Link>
           
            <Link to={`/user/profile`}>
            <h1 style={{color: 'red', marginLeft:"40%"}}>
            {localStorage.getItem("user")}</h1> 
            </Link>
         

            <Button variant='danger' style={{float: 'right', marginTop: -45}} type="button" onClick={this.onLoggedOut}>Log out</Button>
          </header>
    
            <Routes>
              <Route path="/" extact={true} element={<Login login={this.login} />} />
              <Route path="/register" extact={true} element={<RegistrationView registration={this.registration} />} />
              <Route path="/movies" extact={true} element={<MoviesList movies={movies} selectedMovie={this.state.selectedMovie} setSelectedMovie={this.setSelectedMovie} />} />
              <Route path="/directors/:name" extact={true} element={<DirectorView selectedMovie={selectedMovie} movies={movies}onBackClick={this.onBackClick}  />} />
              <Route path="/genres/:name" extact={true} element={<GenreView movies={movies} onBackClick={this.onBackClick} />} />
              <Route path="/user/profile" extact={true} element={<ProfileView user={this.state.user} movies={movies} userFavs={this.state.userFavs} />} />
            </Routes>
          </Router>
  </div>
);
  }
    }