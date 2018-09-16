import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
    	<div style={{width: '100%', margin: 'auto'}}>
    		<Grid className="landing-grid">
    			<Cell col={12}>
    				<img
    					src="https://www.sunriseprowebsites.com/backstage/app/views/client/lutfi-cloud/lutfi-file/images/avatar.png"
    					alt="avatar"
						className="avatar-img"
    				/>	
    				<div className="banner-text">
    					<h1>Full Stack Web Developer</h1>
    					<hr/>

    					<p>HTML/CSS | Bootstrap | ReactJS | NodeJS/Express | Material Design | Semantic UI</p>

    					<div className="social-links">
	    					{/* Github */}    
    						<a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
    							<i className="fa fa-github" aria-hidden="true"/>
    						</a>
	    					{/* Linkedin */}
    						<a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
    							<i className="fa fa-linkedin" aria-hidden="true"/>
    						</a>
    					</div>			
    				</div>
    			</Cell>
    		</Grid>
    	</div>
    );
  }
}

export default Landing;