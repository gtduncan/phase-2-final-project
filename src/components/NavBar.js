import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./login-button";
// import LogoutButton from "./logout-button";


const NavBar = () => {


// const AuthNav = () => {
//   const{isAuthenticated} = useAuth0()
//   return (
//     <Nav className= 'justify-content-end'>
//      {isAuthenticated ? <LogoutButton/> : <LoginButton/>} 
//      </Nav>
//   );
//}
    return(
        <Navbar className='NavBar-Container' bg="dark" variant="dark" sticky='top' >
        <Container>
          {/* {isAuthenticated ? <logoutButton/> : <loginButton/>} */}
          <Navbar.Brand href="/">Michael's Choice</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
    
}

export default NavBar