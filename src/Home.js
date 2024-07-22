import React from 'react';
import Header from './components/Header.js'
import Cards from './components/Cards.js'
import { data } from './data.js'
import Footer from './components/Footer.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

export default function Home() {

    const mappedData = data.map((item) => {
        return(
            <Cards key={item.id} item={item} />
        )
    })

	
	return (
		
		<div>
            <Header />
            <br /><br /> <br /> 
            <div className='homeCards'>
            {mappedData}

            </div>
            <Footer />
            </div>
    )
};