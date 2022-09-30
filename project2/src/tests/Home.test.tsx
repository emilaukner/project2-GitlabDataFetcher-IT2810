import * as React from 'react'
import Home from '../pages/Home'

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<Home />).toJSON()
  expect(tree).toMatchSnapshot()
})