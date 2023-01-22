///  styles
import './style.scss'

///importing pages for the home

import Register from './pages/Register';
import Login from './pages/Login'; 
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';

import Footer from './components/Footer';
import Navbar from './components/Navbar'


/// importing react router
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const  Layout=()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

///this using react-router for moving to different pages
const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/post/:id',
        element:<Single/>,
      },
      {
        path:'/write',
        element:<Write/>,
      },
    ]
  },
  {
    path:'/register',
    element:<Register/>,
  },
  {
    path:'/login',
    element:<Login/>,
  },
]);

///main App Render here
function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
