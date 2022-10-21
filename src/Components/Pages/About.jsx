import React from 'react';
import Header from '../Header and Footer/Header';
import Footer from '../Header and Footer/Footer';
import JSlogo from '../../Assets/jslogo.png';
import ReactJSlogo from '../../Assets/reactjslogo.png';

function About() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center space-x-24 scale-75">
        <img
          src={JSlogo}
          className="border-gradient-br-blue-green-gray-900 border-transparent border-solid border-2 rounded-xl max-w-sm hidden md:block"
          alt="Javascript logo"
        />
        <img
          src={ReactJSlogo}
          className="border-gradient-br-blue-green-gray-900 border-transparent border-solid border-2 rounded-xl max-w-sm hidden md:block"
          alt="React logo"
        />
      </div>
      <div className="sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-sm mx-auto">
        <p className="font-serif leading-relaxed mt-8 my-10 text-left first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left">
          I had been interested in doing a web development course for a long
          time, as I had previously worked with developers and on web projects
          in a QA and Project Management capacity. However it was only in
          February 2021 that I became serious about learning more and decided to
          begin a remote Frontend Web Development course. This 10 week course
          made me curious to learn more, and in June of 2021 I enrolled in a 6
          month part-time Full Stack Web Development Bootcamp, graduating in
          November. The last module of this Bootcamp focused on React and
          building SPAs. React has since been a library that I have been trying
          to learn as much as possible about, mainly by completing Udemy
          Courses.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
