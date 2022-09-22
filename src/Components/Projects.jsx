import React from 'react';
import Header from './Header';
import Footer from './Footer';
import projectimage1 from '../Assets/projectimage1.png';
import projectimage2 from '../Assets/projectimage2.png';
import projectimage3 from '../Assets/projectimage3.png';
import projectimage4 from '../Assets/projectimage4.png';
import projectimage5 from '../Assets/projectimage5.png';
import imageFailedtoLoad from '../Assets/404.jpg';
import ImageGallery from 'react-image-gallery';
import '../styles.css';
import 'react-image-gallery/styles/css/image-gallery.css';

function Projects() {
  const images = [
    {
      original: projectimage1,
      thumbnail: projectimage1
    },
    {
      original: projectimage2,
      thumbnail: projectimage2
    },
    {
      original: projectimage3,
      thumbnail: projectimage3
    },
    {
      original: projectimage4,
      thumbnail: projectimage4
    },
    {
      original: projectimage5,
      thumbnail: projectimage5
    }
  ];

  return (
    <>
      <Header />
      <div className="max-w-lg sm:mx-auto text-gray-500 bg-white px-4 py-5 max-w-screen-lg mx-auto">
        <p className="font-serif leading-relaxed mt-4 my-8 font-bold">
          Ironhack Web Development Bootcamp: Final Project
        </p>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item mx-auto max-w-screen-lg">
          <ImageGallery
            items={images}
            lazyload
            showBullets
            onErrorImageURL={imageFailedtoLoad}
          />
        </div>
      </div>
      <div className="font-serif max-w-md sm:mx-auto text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
        <p
          className="leading-relaxed mt-10 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
        >
          For the final module of the Ironhack Web Development Bootcamp I did in
          2021, I had to build a SPA using React. The project requirements were
          as follows:
        </p>
        <br />
        <ul>
          <li>1. Build both a client and a server app</li>
          <li>
            2. The project needed to use the MERN stack, i.e. MongoDB,
            ExpressJS, React, and NodeJS. Typescript was not allowed
          </li>
          <li>
            3. Regarding the server app, it needed to have authentication
            features including sign up, sign in and log out. It needed at least
            2 modules, including the User module. A final requirement was that
            the server app needed to perform all CRUD operations on a model that
            was not the User one
          </li>
          <li>
            4. The app needed to be linked to a GitHub repo and an MVP had to be
            deployed on Heroku and Netlify within 1 week. In total, we had 2
            weeks to complete the project
          </li>
        </ul>
        <br />
        <p className="leading-relaxed mt-2">
          I teamed up with two course participants,{' '}
          <a
            style={{ fontWeight: 'bolder' }}
            href="https://github.com/HungryOctopus"
          >
            Amélie Monnoyer
          </a>{' '}
          and{' '}
          <a
            style={{ fontWeight: 'bolder' }}
            href="https://github.com/Senimtra"
          >
            Gregor Seegers
          </a>
          . The idea came from Amélie, and was based on her voluntary experience
          helping frogs cross a village road every year in Baden-Württemberg. We
          called the site "Real Frogger". At its core, it was a CRUD app where
          users could log in, update the number of frogs they had caught, and
          then see a summary of the combined user data.{' '}
        </p>
        <p className="leading-relaxed mt-6">
          My responsibility for the project was the authentication as well as
          the Admin messaging system, where a super user had the ability to send
          messages to all the volunteers which were then displayed on a
          notifications board. I ran into plenty of issues with the
          authentication, in particular one tricky CORS issue. With regards to
          the messaging system, I learned the hard way that if you make changes
          to the back end, always restart your local server 😂 All in all, it
          was a fun project and I learned a lot from both Amélie and Gregor. Our
          project was voted the most interesting by our graduating class, and we
          were picked to present it to Ironhack's other graduating classes a few
          weeks later.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
