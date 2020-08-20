import React from 'react';
import './style.css'

const Input = (props) =>{
	return(
		<div className="style">
			<h2>Welcome to JSnaks application</h2>
			<p>This is a form for you to input and it will display in the table below</p>
			<form>
				<div class="row">
				    <div class="col-25">
				      <label for="fname">First Name</label>
				    </div>
				    <div class="col-75">
				      <input type="text" onChange={props.ChangeFirst}/>
				    </div>
			  	</div>
			  	<div class="row">
				    <div class="col-25">
				      <label for="fname">last Name</label>
				    </div>
				    <div class="col-75">
				      <input type="text" onChange={props.ChangeLast}/>
				    </div>
			  	</div>
			  	<div class="row">
				    <div class="col-25">
				      <label for="fname">Age</label>
				    </div>
				    <div class="col-75">
				      <input type="text" onChange={props.ChangeAge}/>
				    </div>
			  	</div>
			</form>
			<p></p>
			<p></p>
		</div>
	);
}


export default Input;