import React , { Component } from 'react';

class Registration extends Component {
	render(){
		return(
			<div>
				<div class="container">
				  <h2>Registration Form</h2>
				  <form action="/action_page.php">
				    <div class="form-group">
				      <label for="email">Name</label>
				      <input type="type" class="form-control" id="name" placeholder="Enter Name" name="name" />
				    </div>
				    <div class="form-group">
				      <label for="email">number</label>
				      <input type="type" class="form-control" id="number" placeholder="Enter Number" name="number" />
				    </div>
				    <div class="form-group">
				      <label for="email">Email</label>
				      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
				    </div>
				    <div class="form-group">
				      <label for="pwd">Password</label>
				      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
				    </div>
				    <button type="submit" class="btn btn-default">Submit</button>
				  </form>
				</div>
			</div>
		);
	}
}


export default Registration;