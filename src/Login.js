import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function Login() {
	
	return (
		<center className='from login'>

			<h1 className='text-primary'>LogIn here </h1>
			<form action="">
			
				  <div className="mb-3">
				<input type="email" placeholder="Email" className='form-control'/>
				</div>

				<div className="mb-3">
				<input type="password" placeholder="Password" className='form-control' />
				</div>

				<button type="submit" className='btn btn-primary'
				>
				<Link to="/home" className='submitBtn'> submit</Link>
				</button>
			</form>

			<p className='regiP'>Don't have account? <Link to="/regi" className='loginLink'>SignUp</Link></p>

		</center>
	);
}

