import React from 'react';
import Header from '../Header and Footer/Header';
import Footer from '../Header and Footer/Footer';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../Assets/404.jpg';
import * as locationPathname from './UseGetURL';

function NotFound() {
  const pathNotFound = locationPathname.useGetPath();
  return (
    <>
      <Header />
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
        <p className="font-serif leading-relaxed mt-4 text-center">
          Page not found.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={NotFoundImage}
          className="p-1 bg-white border rounded max-w-sm"
          alt="error404notfound"
        />
      </div>

      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-xl mx-auto">
        <div className="font-serif leading-relaxed mt-4 my-4 text-center">
          <p>
            Sorry, the following path doesn't appear to exist: {pathNotFound}
          </p>
          <p>
            Take me back to the{' '}
            <Link to="/" className="text-gray-600 hover:text-indigo-600">
              <b>homepage</b>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
