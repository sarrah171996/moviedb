import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'



export default function MasterLayOut() {
  return (
    <div>

     <Nav/>
     <div className="container">

     <Outlet></Outlet>
     
     </div>
    </div>
  )
}
