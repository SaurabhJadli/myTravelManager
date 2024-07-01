// Frontend code 
// Filename - App.js
// Filename - App.js

import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {
	Link,
	Routes,
  } from "react-router-dom";
  import './App.css';

  

export default function Regi() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:5000/register', {
			method: "post",
			body: JSON.stringify({ name, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
			// setPassword("");

		}
	}

	
	return (
		<center className='from regi'>
		
			<h1 className='text-primary'>Sign-up here. </h1>
			<form action="">
			<div className='mb-3'>
				<input type="text" placeholder="Name" className='form-control'
				value={name} onChange={(e) => setName(e.target.value)} />
				  </div>
				  <div className="mb-3">
				<input type="email" placeholder="Email" className='form-control'
				value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>

				{/* <div className="mb-3">
				<input type="password" placeholder="Password" className='form-control'
				value={password} onChange={(e) => setPassword(e.target.value)} />
				</div> */}

				
				<button type="submit" className='btn btn-primary'
				onClick={handleOnSubmit}>submit</button>
			</form>
		
<p className='regiP'>Already have account? <Link to="/login" className='loginLink'>Login</Link>
</p>

		</center>
	);
}