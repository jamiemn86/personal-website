import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import projectimage1 from '../Assets/projectimage1.png';
import projectimage2 from '../Assets/projectimage2.png';
import projectimage3 from '../Assets/projectimage3.png';

function Projects() {
  const galleryImages = [projectimage1, projectimage2, projectimage3];

  const [n, setN] = useState(0);
  const [galleryImage, setGalleryImage] = useState(galleryImages[n]);

  const nextImage = () => {
    if (n === 2) {
      return;
    } else setGalleryImage(galleryImages[n + 1]);
    setN(n + 1);
  };

  const prevImage = () => {
    if (n === 0) {
      return;
    } else setGalleryImage(galleryImages[n - 1]);
    setN(n - 1);
  };

  return (
    <>
      <Header />
      <div
        id="carouselExampleIndicators"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item float-left w-full">
            <img src={galleryImage} className="block w-full" alt="Camera" />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span
            className="visually-hidden text-gray-500 mx-10 backdrop-blur-md bg-black/10"
            onClick={prevImage}
          >
            Previous
          </span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span
            className="visually-hidden text-gray-500 mx-10 backdrop-blur-md bg-black/10"
            onClick={nextImage}
          >
            Next
          </span>
        </button>
      </div>
      <div className="max-w-lg sm:mx-auto text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
        <p className="leading-relaxed mt-16">
          For the final module of the Ironhack web development course I did in
          2021, I had to build a SPA using React. The project requirements were
          as follows:
        </p>
        <br />
        <ul>
          <li>1. Build both a client and a server app</li>
          <li>
            2. The project needed to use React, Typescript was not allowed
          </li>
          <li>
            3. Regarding the server app, it needed to have authentication
            features including sign up, sign in and log out at. It needed at
            least 2 modules, including the User module. A final requirement was
            that the server app needed to perform all CRUD operations on a model
            that was not the User one
          </li>
          <li>
            4. The app needed to be linked to a GitHub repo and deployed on
            Heroku and Netlify within 1 week. In total, we had 2 weeks to
            complete the project
          </li>
        </ul>
        <br />I teamed up with two course participants,{' '}
        <a
          style={{ fontWeight: 'bolder' }}
          href="https://github.com/HungryOctopus"
        >
          Amélie Monnoyer
        </a>{' '}
        and{' '}
        <a style={{ fontWeight: 'bolder' }} href="https://github.com/Senimtra">
          Gregor Seegers
        </a>
        . The idea came from Amélie, and was based on her voluntary experience
        helping frogs cross a village road every year in Baden-Württemberg.
      </div>
      <Footer />
    </>
  );
}

export default Projects;
