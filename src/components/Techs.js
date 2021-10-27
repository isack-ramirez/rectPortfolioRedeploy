import react from "react";
import { Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function Techs() {
  return (
    <div>
      <div class="row justify-content-center">
        <div class="container col-8  py-5">
          <h1 class="display-5 fw-bold lh-1 mb-3 ">My skills</h1>
          <p class="lead">
            <b>
              From front to back end development , these are some of the more notable technologies I
              know.
            </b>
          </p>
        </div>
      </div>
      <p class="lead">Front End tech:</p>

      <div class="row justify-content-center" >
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>React JS</Card.Title>
            <Card.Subtitle className="mb-2 text-muted justify-content-center">
              Front end
            </Card.Subtitle>
            <Card.Text>
              An extremely popular front end library, highly useful for creating
              dynamic webpages. It has the nice effect of making development
              much more modularized.
            </Card.Text>
            <Card.Link href="https://reactjs.org/">React JS</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>Bootstrap / React-Bootstrap</Card.Title>
            <Card.Subtitle className="mb-2 text-muted justify-content-center">
              Front end
            </Card.Subtitle>
            <Card.Text>
              A utility for building html components on websites.
            </Card.Text>
            <Card.Link href="https://getbootstrap.com/">Bootstrap</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>AJAX</Card.Title>
            <Card.Subtitle className="mb-2 text-muted justify-content-center">
              Front end
            </Card.Subtitle>
            <Card.Text>
              A utility for making html elements easily accessible. It can also
              make API calls.
            </Card.Text>
            <Card.Link href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started">
              Ajax
            </Card.Link>
          </Card.Body>
        </Card>


      </div>
      <div class="row justify-content-center">
      <p class="lead"style={{ width: "18rem", margin: "40px" }} >Back End tech:</p>
      </div>
      <div class="row justify-content-center" style={{marginBottom:"40px"}}>

      
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>Express</Card.Title>
            <Card.Subtitle className="mb-2 text-muted justify-content-center">
              Back end
            </Card.Subtitle>
            <Card.Text>
              A server framework described as the de facto industry standard.
            </Card.Text>
            <Card.Link href="https://expressjs.com/">Express</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>Mongo DB</Card.Title>
            <Card.Subtitle className="mb-2 text-muted justify-content-center">
              Back end
            </Card.Subtitle>
            <Card.Text>
              A highly flexible NoSQL database management program. Highly useful for larger data sets.
            </Card.Text>
            <Card.Link href="https://www.mongodb.com/">MongoDB</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>SQL</Card.Title>
            <Card.Subtitle className="mb-2 text-muted justify-content-center">
              Back end
            </Card.Subtitle>
            <Card.Text>
             A templated database language currently in place in a huge variety of apps.
            </Card.Text>
            <Card.Link href="https://en.wikipedia.org/wiki/SQL">SQL</Card.Link>
          </Card.Body>
        </Card>

        
      </div>
    </div>
  );
}

export default Techs;
