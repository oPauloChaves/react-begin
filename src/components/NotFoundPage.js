import React from 'react'
import Link from 'react-router'

const NotFoundPage = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <br/>
    <Link to="/">Go back to home page!</Link>
  </div>
)

export default NotFoundPage
