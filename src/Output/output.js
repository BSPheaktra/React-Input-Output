import React from 'react';
import './style.css';


const Output = (props) => {
	return (
		<div className="style">
			<table>
			  <tr>
			    <th>Firstname</th>
			    <th>Lastname</th>
			    <th>Age</th>
			  </tr>
			  <tr>
			    <td>{props.firstName}</td>
		    	<td>{props.lastName}</td>
		    	<td>{props.age}</td>
			  </tr>
			</table>	
		</div>
	);
}


export default Output;