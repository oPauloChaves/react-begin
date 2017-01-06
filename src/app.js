import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import TodoPage from './components/TodoPage'
import NotFoundPage from './components/NotFoundPage'

render(
  <Router history={ browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="todos" component={TodoPage} />
      <Route path="about" component={AboutPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>,
  document.getElementById('app')
)
