import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Homepage from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home page component', () => {
  it('should match DOM Snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Homepage />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Homepage component correctly', () => {
    render(<Homepage />);
    const welcome = screen.queryByText('Welcome to our page!');
    expect(welcome).toBeInTheDocument();
  });
});
