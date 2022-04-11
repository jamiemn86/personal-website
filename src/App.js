import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Cv from './Components/Cv';
import Projects from './Components/Projects';
import Homepage from './Components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
