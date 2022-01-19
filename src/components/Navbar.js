import react from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import {LinkContainer} from 'react-router-bootstrap'
import newResume from '../images/resume2.pdf';
function MyNavbar() {
  return (
    <div>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossorigin="anonymous"
      />
      <div className="row justify-content-center">
        <div className="col-md-12 justify-content-center ">
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
            aaa
            <LinkContainer to="/">
            <Navbar.Brand >My Portfolio:</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/">
                <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/technologies'>
                <Nav.Link href="/technologies">Technologies</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/projects'>
                <Nav.Link href="/projects">Projects</Nav.Link>
                </LinkContainer>
                <Nav.Link href="https://github.com/isack-ramirez">Github</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/isack-ramirez-519848205/">Linkedin</Nav.Link>
                <Nav.Link href={newResume}>Resume</Nav.Link>
                <Nav.Link href='mailto:isack.ramirez1@gmail.com'>Email</Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Navbar>
         
          <br />
        
        </div>
      </div>

    </div>
  );
}

export default MyNavbar;
