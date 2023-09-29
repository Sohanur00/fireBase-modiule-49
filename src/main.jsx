/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlyout from './components/Mainlyout/Mainlyout';
import Home from './components/home/Home';
import Login from './components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlyout></Mainlyout>,
    children:[

{
  path:'/',
  element: <Home></Home>,
},
{
path:'/login',
element: <Login></Login>,
},

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
