import React from 'react';

const Navigation = () =>{
	return(
		<div>
			<nav class="navbar navbar-inverse">
			  <div class="container-fluid">
			    <div class="navbar-header">
			      <a class="navbar-brand" href="#">First Project</a>
			    </div>
			    <ul class="nav navbar-nav">
			      <li class="active"><a href="#">Home</a></li>
			      <li><a href="#">Login</a></li>
			      <li><a href="#">Registration</a></li>
			    </ul>
			  </div>
			</nav> 

			<div class="bodyContaint">
				<h1>Welcome to React JS Home Page</h1>
			</div>
		</div>
	);
}

export default Navigation;