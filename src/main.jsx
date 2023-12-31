import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreateRoute from './route/Route.jsx'
import AuthProvider from './firebase/AuthProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={myCreateRoute} />
   </AuthProvider>
 
   
  </React.StrictMode>,
)
