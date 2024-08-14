// src/routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';

// Define routes for your application
const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/profile/:id",
    element: (
      <Layout>
        <UserProfile />
      </Layout>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <ErrorPage /> // Catch-all route for 404 errors
  }
];

// Create a browser router instance
const router = createBrowserRouter(routes);

export default router;
