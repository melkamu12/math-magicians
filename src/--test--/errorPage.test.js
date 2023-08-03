import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Errorpage from '../components/error';

describe('Error Page component', () => {
  it('should match DOM Snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Errorpage />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the ErrorPage component correctly', () => {
    render(
      <MemoryRouter>
        <Errorpage />
      </MemoryRouter>,
    );
    const welcome = screen.queryByText('An error occured!');
    expect(welcome).toBeInTheDocument();
  });
});
