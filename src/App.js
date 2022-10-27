import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.css';
import ListingOST from './pages/ListingOST'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListingOST />,
  },
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
