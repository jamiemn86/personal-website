import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/Components/Header and footer/Header';
import Footer from '../src/Components/Header and footer/Footer';
import Homepage from '../src/Components/Pages/Homepage';
import About from '../src/Components/Pages/About';
import Projects from '../src/Components/Pages/Projects.jsx';
import NotFound from './Components/Error Handling/NotFound.jsx';

test('header appears correctly', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const getInTouch = screen.getByText('Get in touch', { exact: false });

  expect(getInTouch).toBeInTheDocument();
});

test('footer appears correctly', async () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  const builtWith = screen.getByText('Built with', { exact: false });

  expect(builtWith).toBeInTheDocument();
});

test('homepage appears correctly', async () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  const profileImage = screen.getByAltText('profilephoto', { exact: false });

  expect(profileImage).toBeInTheDocument();
});

test('about page JS image appears correctly', async () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  const JSImage = screen.getByAltText('Javascript logo', { exact: false });

  expect(JSImage).toBeInTheDocument();
});

test('about page text appears correctly', async () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  const aboutText = screen.getByText('had been interested in doing', {
    exact: false
  });

  expect(aboutText).toBeInTheDocument();
});

test('projects page appears correctly', async () => {
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>
  );

  const theProjectRequirements = screen.getByText(
    'project requirements were as follows',
    { exact: false }
  );

  expect(theProjectRequirements).toBeInTheDocument();
});

test('not found image appears correctly', async () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  const notFoundImage = screen.getByAltText('error404notfound', {
    exact: false
  });

  expect(notFoundImage).toBeInTheDocument();
});

test('not found page text appears correctly', async () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  const notFoundText = screen.getByText(
    `Sorry, the following path doesn't appear to exist`,
    {
      exact: false
    }
  );

  expect(notFoundText).toBeInTheDocument();
});
