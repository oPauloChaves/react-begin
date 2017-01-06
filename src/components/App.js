import React from 'react'
import { Link, IndexLink } from 'react-router'

const App = ({ children }) => (
  <div>
    <IndexLink to="/">Home</IndexLink>
    {' | '}
    <Link to="/about">About</Link>
    <br/><br/>
    {children}
  </div>
)

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App
