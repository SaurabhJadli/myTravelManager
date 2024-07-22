// Frontend code 
// Filename - App.js
// Filename - App.js

import React from 'react';
import Regi from './Regi.js';
import Login from './Login.js';
import Home from './Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Plan from './plan_trip/Plan.jsx';
import SearchResult from './components/SearchResult.jsx';
  

export default function App() {

	
	return (
		<div>

		<BrowserRouter>
			<Routes>
        	<Route path="/" element={<Regi />}/>
        	<Route path="/login" element={<Login />}/>
			<Route path="/home" element={<Home />}/>

        	<Route path="/regi" element={<Regi />}/>

        	<Route path="/plan" element={<Plan />}/>

			<Route path="/searchResult" element={<SearchResult />}/>
			
			</Routes>
		</BrowserRouter>
		</div>	
	);
}
