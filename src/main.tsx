import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { About, Contact, Home, Profile } from './pages/index.ts';
import Header from './components/Header/Header.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Home />
      </div>
    ),
  },

  {
    path: "/about",
    element: (
      <div>
        <Header />
        <About />
      </div>
    ),
  },

  {
    path: "/contact",
    element: (
      <div>
        <Header />
        <Contact />
      </div>
    ),
  },

  {
    path: "/profile",
    element: (
      <div>
        <Header />
        <Profile />
      </div>
    ),
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
