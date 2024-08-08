import React from 'react'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Footer from './components/Footer'
import { Routes,Route, Outlet } from 'react-router-dom';
import About from './page/About';
import Package from './page/Package';
import Login from './page/Login';

function App() {
 const withnavfotter=()=>{
  return(
 <>
  <Navbar/>
  <Outlet/>
  <Footer/>
 </>
  )
 }
  return (
    <div>
      <Routes>
         <Route exact path='/' Component={withnavfotter}>
         <Route exact path='/' Component={Home}/>
         </Route>
         <Route exact path='/about' Component={withnavfotter}>
         <Route exact path='/about' Component={About}/>
         </Route>
         <Route exact path='/Package' Component={withnavfotter}>
         <Route exact path='/Package' Component={Package}/>
         </Route> 
         <Route exact path='/login' Component={Login}/>
     </Routes>
    </div>
  )
}

export default App
