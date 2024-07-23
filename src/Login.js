import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function Login() {
	
	return (
		<center className='from login'>

			<h1 className='text-primary'>LogIn here </h1>
			<form action="">

			 <div className="form-floating mb-3">
			  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
			  <label for="floatingInput">Email address</label>
			  </div>

			  <div className="form-floating">
			  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
			  <label for="floatingPassword">Password</label>
			  </div>
			
<br />
				<button type="submit" className='btn btn-primary'>
				<Link to="/home" className='submitBtn'> submit</Link>
				</button>
			</form>

			<p className='regiP'>Don't have account? <Link to="/regi" className='loginLink'>SignUp</Link></p>

		</center>
	);
}

