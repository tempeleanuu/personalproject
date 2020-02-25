import React, { Component } from 'react'
import Home from './componentss/Home';
import Hobbies from './componentss/Hobbies';
import Contact from './componentss/Contact';
import Aboutme from './componentss/Aboutme';
import AudioPlayer from 'react-modular-audio-player';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';


export default class App extends Component {
	
	render() {
		return (
			<div className="container text-capitalize text-center">
				
				
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  					<a class="navbar-brand" href="#">Curicculum Vitae</a>
  						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    						<span class="navbar-toggler-icon"></span>
  						</button>
 			    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   				    <ul class="navbar-nav mr-auto">
      					<li class="nav-item active">
        					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      					</li>
     					<li class="nav-item active">
       					    <a class="nav-link" href="#">Hobbies</a>
      					</li>
						<li class="nav-item active">
       					    <a class="nav-link" href="#">Contact</a>
      					</li>
      					<li class="nav-item dropdown active">
        					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         					 Dropdown
       						 </a>
        				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
          					<a class="dropdown-item" href="#">Action</a>
         				    <a class="dropdown-item" href="#">Another action</a>
							 < a class="dropdown-item" href="#">Anotha one</a>
          				<div class="dropdown-divider"></div>
         					<a class="dropdown-item" href="#">Something else here</a>
        				</div>
							</li>	
							</ul>
						</div>
					</nav>
					
			</div>
			
		)

		
	}

		
}

