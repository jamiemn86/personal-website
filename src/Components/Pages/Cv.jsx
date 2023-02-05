import React from 'react';
import Header from '../Header and Footer/Header';
import Footer from '../Header and Footer/Footer';

function Cv() {
  return (
    <>
      <Header />
      <div className="font-serif">
        <div className="sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 max-w-screen-sm mx-auto">
          <p className="leading-relaxed mt-4 text-center">Most recent roles:</p>
        </div>
        <div className="sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-sm mx-auto">
          <div className="leading-relaxed mt-4 my-4 text-center">
            <div className="italic">February 2023 - Present</div>
            <div>
              <blockquote>
                <span className="before:block before:absolute before:-inset-1 before:skew-x-3 before:bg-indigo-500 relative inline-block">
                  <span className="relative text-white">Upgrade Manager</span>
                </span>{' '}
                at Banqsoft, Gdansk (Poland)
              </blockquote>
            </div>
            <p>
              Project Management of SaaS upgrades in the Asset Finance Team of a
              Nordic financial software company
            </p>
          </div>
        </div>
        <div className="sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-sm mx-auto">
          <div className="leading-relaxed mt-4 my-4 text-center">
            <div className="italic">November 2021 - January 2023</div>
            <div>
              <blockquote>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
                  <span className="relative text-white">Test Lead</span>
                </span>{' '}
                at Banqsoft, Gdansk (Poland)
              </blockquote>
            </div>
            <p>
              Leading testing of SaaS upgrades in the Asset Finance Team of a
              Nordic financial software company
            </p>
          </div>
        </div>
        <div className="sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-sm mx-auto">
          <div className="leading-relaxed mt-4 my-4 text-center">
            <p className="italic">October 2019 - October 2021</p>
            <blockquote>
              <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-indigo-500 relative inline-block">
                <span className="relative text-white">Program Manager</span>
              </span>{' '}
              at Audible, Berlin (Germany)
            </blockquote>
            <p>
              Particular focus on Compliance projects. A major project was
              implementing the company's EU Cookie Consent website experience
            </p>
          </div>
        </div>
        <div className="sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-sm mx-auto">
          <div className="leading-relaxed mt-4 my-4 text-center">
            <p className="italic">March 2016 - September 2019</p>
            <blockquote>
              <span className="before:block before:absolute before:-inset-1 before:skew-x-3 before:bg-indigo-500 relative inline-block">
                <span className="relative text-white">QA Manager</span>
              </span>{' '}
              at Audible, Berlin (Germany)
            </blockquote>
            <p>
              Worked alongside three Program Managers to test feature releases
              for three EU markets
            </p>
          </div>
        </div>
        <div className="sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-sm mx-auto">
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
      </div>
      <Footer />
    </>
  );
}

export default Cv;
