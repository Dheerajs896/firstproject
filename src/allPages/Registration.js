import React , { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
	state = {
		name : '',
		number: '',
		email: '',
		pwd: ''
	}

	handleChange = event =>{
		this.setState({
			name: event.target.value,
			number: event.target.value,
			email: event.target.value,
			pwd: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();

		const RegDetails = {
			name: this.state.name,
			number: this.state.number,
			email: this.state.email,
			pwd: this.state.pwd
		}

		console.log(RegDetails);
	}
	
	render(){
		return(
			<div>
				<div class="container">
				  <h2>Registration Form</h2>
				  <form onSubmit = {this.handleSubmit}>
				    <div class="form-group">
				      <label for="email">Name</label>
				      <input type="type" class="form-control" id="name" placeholder="Enter Name" name="name" onChange={this.handleChange} />
				    </div>
				    <div class="form-group">
				      <label for="email">number</label>
				      <input type="type" class="form-control" id="number" placeholder="Enter Number" name="number" onChange={this.handleChange} />
				    </div>
				    <div class="form-group">
				      <label for="email">Email</label>
				      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
				    </div>
				    <div class="form-group">
				      <label for="pwd">Password</label>
				      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={this.handleChange} />
				    </div>
				    <button type="submit" class="btn btn-default">Submit</button>
				  </form>
				</div>
			</div>
		);
	}
}


export default Registration;