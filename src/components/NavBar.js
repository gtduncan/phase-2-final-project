import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return(<div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Apartment Hunter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
        <hr />
    </div>)
}

export default NavBar