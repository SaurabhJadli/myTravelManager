//Cards.js

import React from 'react';
import '../App.css';


export default function Cards(props) {
	return (
		<div className='card'>
			<section className='column-left'>
				<img className="card-img" src={props.item.coverImg} alt={props.item.title} />
			</section>
			<section className='column-right'>
				<span className='material-symbols-outlined'>location_on</span>
				<span className="card-country">{props.item.country} </span>
				<a href={props.item.googleMapLink} target='_blank'>View on Google Maps</a>
				<h3 className="card-country-title">{props.item.title}</h3>
				<p className='desc'>{props.item.description}</p>
				<a href={props.item.details} target='_blank'><span className='ReadMore'>Read more..</span></a>
			</section>

		</div>
	)
}
