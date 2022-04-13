import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Homepage() {
  return (
    <>
      <Header />
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
        <p className="leading-relaxed mt-32 my-32 text-[15px]">
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
