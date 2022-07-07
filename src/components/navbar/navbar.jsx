import React from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";

export default function Navbar() {
return (
    <>
  <Navbar className="main-nav" sticky="top" bg="dark" expand="lg" variant="dark">
      <Container>
      <Navbar.Brand href="/">MoviMe</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {isAuth() && (
            <Nav.Link href={`/users/${user}`}>{user}</Nav.Link>
          )}
          {isAuth() && (
            <Button variant="link" onClick={handleLogOut}>Logout</Button>
          )}
          {!isAuth() && (
            <Nav.Link href="/">Login</Nav.Link>
          )}
          {!isAuth() && (
            <Nav.Link href="/register">Register</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>
 </>
)
}