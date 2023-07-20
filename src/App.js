import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Quote from './components/Quote';
import RootLayout from './components/Root';
import Homepage from './components/Home';
import MathCalculator from './components/mathsCalculator';
import Errorpage from './components/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      { path: '/MathCalculator', element: <MathCalculator /> },
      { path: '/', element: <Homepage /> },
      { path: '/Quote', element: <Quote /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
