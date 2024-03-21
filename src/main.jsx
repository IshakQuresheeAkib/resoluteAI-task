import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authprovider from './provider/Authprovider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Components/Signup/Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/signup',
    element:<Signup></Signup>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
