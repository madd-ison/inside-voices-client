import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Login /></BrowserRouter>, div);
  });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Logout /></BrowserRouter>, div);
  });

it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><Register /></BrowserRouter>, div);
    });
