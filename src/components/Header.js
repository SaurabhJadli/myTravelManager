//Header.js
import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


export default function Header() {
	return (
		<div>
			<header className="journal-header">
			<ol className="head-li">
				<li>
				<Link to="/home" className="logoTitle"><h1 className="title">My travel management</h1></Link>
				</li>

				<Link to="/plan"><li className="options" >
				<img src="/img/plan.jpg" alt="planLogo" className="headLogo" /><br />
				Plan trip </li></Link>

				<Link to="/login"><li className="options"> 
				<img src="/img/log-out.png" alt="Logout" className="headLogo" /><br />
				log out</li></Link>
			</ol>

			</header>
		</div>
	);
}
