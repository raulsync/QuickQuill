import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Quill from './pages/Quill';
import NavBar from './components/NavBar';
import ViewQuill from './pages/ViewQuill';

// Define a layout component to include the NavBar and an Outlet
const Layout = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
        element: <ViewQuill />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
