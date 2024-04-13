import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  " >
  <div class="container-fluid">
    <Link class="navbar-brand" to="home">Noxe</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="tvshows">tvshows</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="movies">movies</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="people">people</Link>
        </li>


        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="about">about</Link>
        </li>
      </ul>




      <ul class="navbar-nav  mb-2 mb-lg-0">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <i class="fa-brands p-2 fa-facebook"></i>
      <i class="fa-brands p-2 fa-spotify"></i>
      <i class="fa-brands p-2 fa-instagram"></i>
      <i class="fa-brands p-2 fa-youtube"></i>

      <li class="nav-item ">
          <Link class="ms-md-4 nav-link active" aria-current="page" to="register">register</Link>
        </li>
        <li class="nav-item">
          <Link class="ms-md-4 nav-link active" aria-current="page" to="Login">Login</Link>
        </li>

        <li class="nav-item ">
          <Link class="ms-md-4 nav-link active log" aria-current="page" to="Log Out">Log Out</Link>
        </li>



      </ul>
    </div>

    
  </div>
</nav>
    </div>
  )
}
