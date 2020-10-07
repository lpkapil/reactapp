import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'; 
import Home from '../components/Home';

test('renders home page content', () => {
  // const { getByText } = render(<Home />);
  // const linkElement = getByText(/This is home page/i);
  // expect(linkElement).toBeInTheDocument();
});

describe('Homepage snapshot', () => {
  test('Homepage snapshot test', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

