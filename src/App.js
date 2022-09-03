import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import { Helmet } from 'react-helmet';
import LoadingSpinner from './Components/LoadingSpinner';
import internetImage from '../src/Assets/internet.png';

const About = React.lazy(() => import('./Components/About'));
const Cv = React.lazy(() => import('./Components/Cv'));
const Projects = React.lazy(() => import('./Components/Projects'));
const NotFound = React.lazy(() => import('./Components/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="JMN Personal Website"
          content="My personal website showcasing courses I have taken and projects I have worked on"
        />
        <meta property="og:image" content={internetImage} />
        <title>{'JMN Personal Website'}</title>
      </Helmet>
      <Suspense fallback={<div>{<LoadingSpinner />}</div>}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Projects />} />
          <Route component={NotFound} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
