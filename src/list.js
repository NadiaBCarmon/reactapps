import React from 'react';

//One . equals in the same directory//
import './list.css';

import Card from './card';

//Anytime you try to do JSX - HTML + JS//
//List is automatically exported by default// 
export default function List() {
	return (
		//JSX won't recognize code unless there is a div or some other element//
		//Using "Classname" because "Class" is already used in HTML // 
		<div className='list'>
			<h3>Example List</h3>

			<Card />
			<Card />
			<Card />
			<Card />
			
		</div>
	)

}