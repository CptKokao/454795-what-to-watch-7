import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <>
      <h1>404.<br /><small>Page not found</small></h1>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export default NotFound;
