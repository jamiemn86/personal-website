import React from 'react';
import Header from '../Header and Footer/Header';
import Footer from '../Header and Footer/Footer';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // Improvement To Do: log the error and info to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 mx-auto">
            <p className="font-serif leading-relaxed mt-4 text-center text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-200">
              Oops!
            </p>
          </div>

          <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-4 max-w-screen-xl mx-auto">
            <div className="font-serif leading-relaxed mt-4 my-4 text-center">
              <p>
                Sorry, it looks like something went wrong. We encountered an
                error and are working as fast possible to fix it.
              </p>
              <p className="mt-8">
                Take me back to the{' '}
                <Link to="/" className="text-gray-600 hover:text-indigo-600">
                  <b>homepage</b>.
                </Link>
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
    return this.props.children;
  }
}
