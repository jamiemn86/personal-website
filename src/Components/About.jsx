import React from 'react';
import Header from './Header';
import Footer from './Footer';
import tervuren from '../Assets/bernardolorena-ponte-unsplash.jpg';

function About() {
  return (
    <>
      <Header />
      <div class="flex flex-wrap justify-center mt-10">
        <img
          src={tervuren}
          class="p-1 bg-white border rounded max-w-sm"
          alt="profilephoto"
        />
      </div>
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
        <p className="leading-relaxed mt-10 my-10 text-left">
          I was born in Belgium and grew up outside of Brussels, in a small town
          pictured above. However, I have British and Danish passports, as my
          family is not Belgian. I studied in the UK and then worked in both
          London and Berlin. At the end of 2021, I moved to Gdańsk, Poland,
          where I am currently working.
        </p>
        <p className="leading-relaxed mt-6 text-left">
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
