import React, {Component} from 'react';
import LoginPage from '../src/Pages/login';
import renderer from 'react-test-renderer';

test('Checks Login Reroute', () => {
  const component = renderer.create(
    <LoginPage />,);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger callback
  tree.props.onMouseEnter();
  // re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
