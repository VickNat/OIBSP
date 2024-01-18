import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Splash from './routes/Splash';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Header from './routes/Layout';
import UserDashboard from './routes/UserDashboard';
import CreateCustomePizza from './routes/CreateCustomePizza';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "userHeader",
    element: <Header />,
    children: [
      {
        path: "userDashboard",
        element: <UserDashboard />
      },
      {
        path: "customPizza",
        element: <CreateCustomePizza />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);