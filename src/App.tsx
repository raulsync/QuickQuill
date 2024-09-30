// import { useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Quill from './pages/Quill';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quill',
    element: <Quill />,
  },
  {
    path: '/quill/:id',
    element: <div className="text-center font-bold">Hello test</div>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
