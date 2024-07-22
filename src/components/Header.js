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
  <Link to="/home" className="navbar-brand " ><h2 className="logoTitle">My travel management</h2></Link>

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

		<li className="nav-item">
		<Link to="/plan" className="nav-link active" aria-current="page" >
		<img src="/img/category_search.svg" alt="planLogo" className="headLogo" />
		Category</Link>
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
