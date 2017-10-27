//First step 
import React from 'react'; 

import './card.css';

export default function Card () {

	//Always return in parentheses//
	
	const text = 'Blastoids';

	return (

		//  //
		//Anything within curly brackets is javascript//
		<div className='card'>
		{text}
		</div>

		)
}