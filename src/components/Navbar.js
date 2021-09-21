import react from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
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
          
          <Navbar bg="light" variant="light" expand="lg" sticky="top" >
            <Navbar.Brand href="#home">My Portfolio:</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/technologies">Contact Us</Nav.Link>
                <Nav.Link href="/projects">About Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
         
          <br />
        
        </div>
      </div>

      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossorigin="anonymous"
      />

      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="/" class="nav-link " aria-current="page">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="./projects" class="nav-link">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a href="./technologies" class="nav-link">
              Technologies
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://www.linkedin.com/in/isack-ramirez-519848205/"
              class="nav-link"
            >
              Linkdin
            </a>
          </li>
          <li class="nav-item">
            <a href="https://github.com/isack-ramirez" class="nav-link">
              Github
            </a>
          </li>
          <li class="nav-item">
            <a href="mailto:isack.ramirez1@gmail.com" class="nav-link">
              Email
            </a>
          </li>
        </ul>
      </header>
      <hr>
      </hr> */}
    </div>
  );
}

export default MyNavbar;
