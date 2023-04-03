import React from 'react';
import {render} from '@testing-library/react'
import Favorites from "../../../src/components/favorites";

describe('Favorites', () => {
  test('renders correctly', () => {
    const { container } = render(<Favorites />);

    expect(container).toMatchSnapshot();
  });
});