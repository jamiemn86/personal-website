import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Homepage from '../src/Components/Homepage';
import About from '../src/Components/About';

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

  const belgiumImage = screen.getByAltText('belgiumphoto', { exact: false });

  expect(belgiumImage).toBeInTheDocument();
});
