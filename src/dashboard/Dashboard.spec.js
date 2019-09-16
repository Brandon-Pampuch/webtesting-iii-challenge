import React from 'react'

import * as rtl from '@testing-library/react'
import renderer from 'react-test-renderer'
import Dashboard from './Dashboard'

//snapshot

it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />); // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });






