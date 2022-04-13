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
      <Footer />
    </>
  );
}

export default Projects;
