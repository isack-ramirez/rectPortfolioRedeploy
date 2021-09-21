import React from "react";
import poke from '../images/poke.png';
import imag from '../images/imag.png';
import blog from '../images/blog.png'

export default function Projects() {

    const style = {width: '200px', height: '250px'};
  return (
    <div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a
                  class="text-dark"
                  href="https://imagine-drive.herokuapp.com/login"
                >
                  IMAGine Drive
                </a>
              </h3>

              <p class="card-text mb-auto py-3">
                Based on a group member who recalled complaints from his boss
                about needing a more efficient way to track patient orders,
                IMAGine Drive seeks to provide that. Using express, sequelize,
                handlebars, Twillio, and more we created a site that you can
                sign up or log in to, create patient profiles and orders, and
                update them as needed. Twillio even sends a text to the patient
                when their order status changes in real time.
              </p>
            </div>
            <img
              class="card-img-right flex-auto d-none d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={style}
              src={imag}
              data-holder-rendered="true"
            ></img>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a
                  class="text-dark"
                  href="https://gmunoz94.github.io/pokeProj/"
                >
                  Bill's PC
                </a>
              </h3>

              <p class="card-text mb-auto py-3">
                A pokemon builder that takes advantage of local storage, and a
                fun pokemon API to give you the option to make pokemon and
                choose their movesets!
              </p>
            </div>
            <img
              class="card-img-right flex-auto d-none d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
             style={style}
              src={poke}
              data-holder-rendered="true"
            ></img>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a
                  class="text-dark"
                  href="https://tech-bible.herokuapp.com/login"
                >
                  Tech Bible
                </a>
              </h3>

              <p class="card-text mb-auto py-3">
                A small and extremely lightweight forum / blog created by yours
                truly as a proof of concept.
              </p>
            </div>
            <img
              class="card-img-right flex-auto d-none d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={style}
              src={blog}
              data-holder-rendered="true"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
