import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Cv from './Components/Cv';
import Projects from './Components/Projects';
import Homepage from './Components/Homepage';
import { Helmet } from 'react-helmet';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'JMN Personal Website'}</title>
      </Helmet>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/projects" element={<Projects />} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
