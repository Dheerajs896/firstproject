import React from 'react';
import { Route , Link } from 'react-router-dom';

import Login from './Login';
import Registration from './Registration';
import Mainpage from './Mainpage';
const Navigation = () =>{
	return(
		<div>
			<nav class="navbar navbar-inverse">
			  <div class="container-fluid">
			    <ul class="nav navbar-nav">
			      <li class="active"><Link to="/">Home</Link></li>
			      <li><Link to="/Login">Login</Link></li>
			      <li><Link to="/Registration">Registration</Link></li>
			    </ul>
			  </div>
			</nav>
			<Route path='/' exact component={Mainpage} />
			<Route path='/Login' exact component={Login} />
			<Route path='/Registration' component={Registration} />
		</div>
	);
}

export default Navigation;