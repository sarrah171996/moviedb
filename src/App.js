import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle'
import {createBrowserRouter,  RouterProvider } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import About from './components/About/About';
import Movies from './components/Movies/Movies';
import TvShows from './components/TvShows/TvShows';
import Register from './components/Register/Register';
import People from './components/People/People';
import ErrorPage from './components/404/ErrorPage';
import Login from './components/Login/Login';

import MasterLayOut from './components/MasterLayOut/MasterLayOut';


function App() {

  let routs = createBrowserRouter([
    {path:'' , element : <MasterLayOut/> ,children: [

          {path:'home' , element :<Home/>},
          {path:'about' , element :<About/>},
          {path:'details/:id/:media_type' , element :<Details/>},
          {path:'movies' , element : <Movies/>},
          {path:'tvshows' , element :<TvShows/>},
          {path:'register' , element :<Register/>},
          {path:'login' , element :<Login/>},
          {path:'people' , element :<People/>},




    ] , 
  errorElement : <ErrorPage/> }
  
  
  
  ])
  return <>
  
<RouterProvider router={routs}/> 
  
  </>

    
  ;
}

export default App;
