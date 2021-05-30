import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './route';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './redux';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
    <Router>
      <MainRoute/>
    </Router>
    </Provider>
  );
}

export default App;
