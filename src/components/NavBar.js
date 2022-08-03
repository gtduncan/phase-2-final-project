import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const NavBar = () => {
    return(<div>
        <Navbar classname='NavBar-Container' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Property Hunter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <hr />
    </div>)
}

export default NavBar