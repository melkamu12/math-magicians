import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Quote from './components/Quote';
import RootLayout from './components/Root';
import Homepage from './components/Home';
import MathCalculator from './components/mathsCalculator';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
