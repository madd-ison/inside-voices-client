import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Journal from './Journal';
import JournalHistory from './JournalHistory';
import NewPost from './NewPost';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Journal /></BrowserRouter>, div);
  });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><JournalHistory /></BrowserRouter>, div);
    });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><NewPost /></BrowserRouter>, div);
    });