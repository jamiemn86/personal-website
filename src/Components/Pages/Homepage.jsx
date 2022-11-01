import React, { useState } from 'react';
import Header from '../Header and Footer/Header';
import Footer from '../Header and Footer/Footer';
import profilePhoto from '../../Assets/Page Images/profilephoto.jpg';
import profilePhotowithText from '../../Assets/Page Images/profilephotowithtext.jpg';

function Homepage() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center mt-10">
        <img
          src={isShown ? profilePhotowithText : profilePhoto}
          className="border-gradient-br-blue-green-gray-900 border-transparent border-solid border-2 rounded-xl rounded max-w-sm hover:opacity-70 ease-in-out duration-500"
          alt="profilephoto"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
      </div>
      <div className="font-serif sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 max-w-screen-sm mx-auto">
        <div
          className="leading-relaxed mt-10 my-30 text-left first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
        >
          <blockquote>
            Welcome! My name is Jamie Moller-Nielsen and this is a website I
            have built to showcase web projects I have worked on, as well as
            house my up-to-date CV. This site is a SPA built using Create React
            App, Tailwind CSS and Float UI. The latter provides React UI
            components which as of April 2022 are&nbsp;
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
              <span className="relative text-white">
                {' '}
                <a href="https://www.floatui.com/license/">currently free.</a>
              </span>
            </span>
          </blockquote>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
