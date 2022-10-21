import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/Components/Header and footer/Header';
import Footer from '../src/Components/Header and footer/Footer';
import Homepage from '../src/Components/Pages/Homepage';
import About from '../src/Components/Pages/About';

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

test('about page appears correctly', async () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  const JSImage = screen.getByAltText('Javascript logo', { exact: false });

  expect(JSImage).toBeInTheDocument();
});
