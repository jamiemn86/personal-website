import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Cv() {
  return (
    <>
      <Header />
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
        <p className="leading-relaxed mt-4 text-center">Most recent roles:</p>
      </div>
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-xl mx-auto">
        <div className="leading-relaxed mt-4 my-4 text-center">
          <p className="italic">November 2021 - Present</p>
          <p>Test Lead at Banqsoft, Gdansk (Poland)</p>
          <p>
            Working on SaaS upgrades in the Asset Finance Team of a Nordic
            financial software company
          </p>
        </div>
      </div>
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-xl mx-auto">
        <div className="leading-relaxed mt-4 my-4 text-center">
          <p className="italic">October 2019 - October 2021</p>
          <p>Program Manager at Audible, Berlin (Germany)</p>
          <p>
            Particular focus on Compliance projects. A major project was
            implementing the company's EU Cookie Consent website experience
          </p>
        </div>
      </div>
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-xl mx-auto">
        <div className="leading-relaxed mt-4 my-4 text-center">
          <p className="italic">March 2016 - September 2019</p>
          <p>QA Manager at Audible, Berlin (Germany)</p>
          <p>
            Worked alongside three Program Managers to test feature releases for
            three EU markets
          </p>
        </div>
      </div>
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-xl mx-auto">
        <div className="leading-relaxed mt-4 my-4 text-center">
          <p>
            Please visit my{' '}
            <a href="https://www.linkedin.com/in/jmollernielsen/">
              <b>LinkedIn profile</b>
            </a>{' '}
            for my full CV.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cv;
