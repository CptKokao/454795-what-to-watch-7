import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <>
      <h2>404. Page not found</h2>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export default NotFound;
