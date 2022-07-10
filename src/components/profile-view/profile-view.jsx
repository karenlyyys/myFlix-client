import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './profile-view.scss';
import { Form, Button, Card, CardGroup, Container, Col, Row, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card';



export function ProfileView(props) {
  const u = localStorage.getItem("user");
  const [ username, setUsername ] = useState(u);
  const [ birthday, setBirthday ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ movies, setMovies ] = useState(props.movies);
  const [ favouriteMovies, setFavouriteMovies ] = useState(...props.userFavs);
  const currentUser = localStorage.getItem('user');
  const token = localStorage.getItem('token');
 
  const updateUser = () => {
    axios.put('https://movie-api-karelyss.herokuapp.com/users/'+u, {}, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      setUsername(response.data.Username)
      setBirthday(response.data.Birthday)
      setEmail(response.data.Email)
      setFavouriteMovies(response.data.FavouriteMovies)
      alert('Your profile has been updated');
    })
    .catch(error => console.error(error))
  }

  useEffect(() => {
    // getUser();
  }, [])

 

  const handleDelete = () => {
    axios.delete(`https://movime-api.herokuapp.com/users/${currentUser}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(() => {
      alert(`The account ${user.Username} was successfully deleted.`)
      localStorage.clear();
      window.open('/register', '_self');
    }).
    catch(error => console.error(error))
  }

const Moviesfavs = ({userFavs, movies}) => {
  return movies.length === 0 ? (<div>No favorite movies</div>) 
  : movies.filter(x=>userFavs.includes(x._id)).map(y=><MovieCard movie={y} /> )

}
  return (
    <>
      <Container>
        <h1>Profile Page</h1>
        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter new email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="birthday">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control onChange={(e) => setBirthday(e.target.value)} value={birthday} type="date" placeholder="birthday" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" value={password} placeholder="Password" />
          </Form.Group>

          <Button variant="warning" onClick={updateUser}>
            Update your profile
          </Button>

          {/* This button triggers a modal that's called bellow   */}
          <Button className='deleteButton' variant="link" onClick={handleDelete}>
            Delete your profile
          </Button>
        </Form>

<hr width="100%" />

<br />
<Moviesfavs movies={movies} userFavs={favouriteMovies} />

      </Container>
    </>
  )
}

  