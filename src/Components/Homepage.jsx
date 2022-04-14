import React from 'react';
import Header from './Header';
import Footer from './Footer';
import profilephoto from '../Assets/profilephoto.jpg';

function Homepage() {
  return (
    <>
      <Header />
      <div class="flex flex-wrap justify-center mt-10">
        <img
          src={profilephoto}
          class="p-1 bg-white border rounded max-w-sm"
          alt="profilephoto"
        />
      </div>
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
        <p className="leading-relaxed mt-10 my-40">
          Welcome! My name is Jamie Moller-Nielsen and this is a website I have
          built to showcase web projects I have worked on, as well as house my
          up-to-date CV. This site is a SPA built using Create React App,
          Tailwind CSS and Float UI. The latter provides React UI components
          which as of April 2022 are{' '}
          <a
            style={{ fontWeight: 'bolder' }}
            href="https://www.floatui.com/license/"
          >
            currently free.
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
