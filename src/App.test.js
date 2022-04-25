import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';

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
