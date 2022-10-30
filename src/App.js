import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoadingSpinner from './Components/LoadingSpinner';
import ErrorBoundary from './Components/Error Handling/ErrorBoundary';

const About = React.lazy(() => import('./Components/Pages/About'));
const Cv = React.lazy(() => import('./Components/Pages/Cv'));
const Projects = React.lazy(() => import('./Components/Pages/Projects'));
const NotFound = React.lazy(() =>
  import('./Components/Error Handling/NotFound')
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{'JMN Personal Website'}</title>
        </Helmet>
        <ErrorBoundary>
          <Suspense fallback={<div>{<LoadingSpinner />}</div>}>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/cv" element={<Cv />} />
              <Route path="/projects" element={<Projects />} />
              <Route component={NotFound} />
            </Routes>{' '}
          </Suspense>{' '}
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
