import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/Components/Header';

test('header appears correctly', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const getInTouch = screen.getByText('Get in touch', { exact: false });

  expect(getInTouch).toBeInTheDocument();
});
