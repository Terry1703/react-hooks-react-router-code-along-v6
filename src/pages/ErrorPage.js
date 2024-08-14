// src/pages/ErrorPage.js
import React from 'react';
import { useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Something went wrong!</h1>
        <p>{error?.message || 'An unknown error occurred'}</p>
      </main>
    </div>
  );
};

export default ErrorPage;
