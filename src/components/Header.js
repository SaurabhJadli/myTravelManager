//Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function Header() {

  const [searchTerm, setSearchTerm] = useState("");

  const data = {st:searchTerm};

	return (
		
			<div className="container">
			<nav className="navbar navbar-expand-lg nav-color  fixed-top" >
  <div className="container-fluid nav-color">
  <Link to="/home" className="navbar-brand " ><h2 className="logoTitle">WanderWave</h2></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
		<Link to="/plan" className="nav-link active" aria-current="page" >
		<img src="/img/plan.jpg" alt="planLogo" className="headLogo" />
			Plan trip</Link>
        </li>

		<li className="nav-item dropdown">
		<a href="#" className="nav-link active dropdown-toggle" aria-current="page"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
		<img src="/img/category_search.svg" alt="planLogo" className="headLogo" />
		Category</a>

    <ul className="dropdown-menu">
   
            <li><a className="dropdown-item fw-bold" href="#">
            <img src="/img/national-park.png" class="rounded-circle img-fluid category-img" alt="national_park" />
            National Parks</a></li>
            <li><a className="dropdown-item fw-bold" href="#">
            <img src="/img/beach.png" class="rounded-circle img-fluid category-img" alt="Beaches" />
            Beaches</a></li>
            <li><a className="dropdown-item fw-bold" href="#">
            <img src="/img/mountains.png" class="rounded-circle img-fluid category-img" alt="Hill Station" /> 
            Hill Station</a></li>
            <li><a className="dropdown-item fw-bold" href="#">
            <img src="/img/island.png" class="rounded-circle img-fluid category-img" alt="Island" />
            Island</a></li>
            <li><a className="dropdown-item fw-bold" href="#">
            <img src="/img/city.png" class="rounded-circle img-fluid category-img" alt="Mega cities" /> 
            Mega cities</a></li>
            <li><a className="dropdown-item fw-bold" href="#">
            <img src="/img/ancient.png" class="rounded-circle img-fluid category-img" alt="Ancient and Historical" /> 
            Ancient and Historical</a></li>
            <li><a className="dropdown-item fw-bold" href="#">
            <img src="/img/religious.png" class="rounded-circle img-fluid category-img" alt="Religious Sites" />  
            Religious Sites</a></li>
            <li><a className="dropdown-item fw-bold" href="#">
            <img src="/img/desert.png" class="rounded-circle img-fluid category-img" alt="Deserts" />
            Deserts</a></li>
            <li><a className="dropdown-item fw-bold" href="#">
            <img src="/img/snowman.png" class="rounded-circle img-fluid category-img" alt="Snow and Ice" />
            Snow and Ice</a></li>
           
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">
            <button type="button" class="btn btn-success me-2">Asia</button>
            <button type="button" class="btn btn-light me-2" >Antartica</button>
            <button type="button" class="btn btn-warning me-2">Africa</button>
            <button type="button" class="btn btn-secondary me-2">Austalia</button>
            <button type="button" class="btn btn-primary me-2">Europe</button>
            <button type="button" class="btn btn-info me-2">N.America</button>
            <button type="button" class="btn btn-danger me-2">S.America</button>
                  </a></li>
          </ul>
        </li>


        <li className="nav-item">
		<Link to="/login" className="nav-link" href="#">
		<img src="/img/log-out.png" alt="Logout" className="headLogo" />
		log out</Link>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) =>{
          setSearchTerm(e.target.value);
        }} aria-label="Search" />
     <Link to="/searchResult" state={data}> <button className="btn btn-outline-success bg-success text-white">Search</button></Link>
      </form>
    </div>
  </div>
</nav>
</div>
	);
}
