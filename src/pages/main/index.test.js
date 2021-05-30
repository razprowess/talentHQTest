import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from '../../redux';

const store = createStore(reducers);

it('renders a snapshot', () => {
    const tree = renderer.create(<Provider store={store}><MainPage/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });