import React , { Component } from 'react';

class Login extends Component {
	render(){
		return(
			<div>
				<div class="container">
				  <h2>Login Form</h2>
				  <form action="/action_page.php">
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


export default Login;