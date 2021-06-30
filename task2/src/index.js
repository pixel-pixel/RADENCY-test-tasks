import React from 'react'
import ReactDOM from 'react-dom'

import store from "./redux/store.js";
import {createNote} from "./redux/actionCreators.js";

import App from './App'

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

store.dispatch(createNote(
  'Shopping list',
  'April 20, 2021',
  'Task',
  'Tomatoes, bread',
  '', false
))

store.dispatch(createNote(
  'The theory...',
  'April 27, 2021',
  'Random Thought',
  'The evolution...',
  '', false
))

store.dispatch(createNote(
  'New feature',
  'May 05, 2021',
  'Idea',
  'Implement new...',
  '3/5/2021 5/5/2021', false
))

store.dispatch(createNote(
  'Books',
  'May 15, 2021',
  'Task',
  'The lean startup',
  '', false
))

store.dispatch(createNote(
  'Shopping list2',
  'April 20, 2022',
  'Task',
  'Tomatoes, bread and milk!',
  '', false
))

store.dispatch(createNote(
  'The theory... 2',
  'April 27, 2022',
  'Random Thought',
  'The evolution of number 2',
  '', false
))

store.dispatch(createNote(
  'Super-New feature',
  'May 05, 2022',
  'Idea',
  'Implement super-new...',
  '3/5/2022 5/5/2022', false
))

