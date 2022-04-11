import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Projects() {
  return (
    <>
      <Header />
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
        <p className="leading-relaxed mt-2 text-[15px]">
          This is the Projects page
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
