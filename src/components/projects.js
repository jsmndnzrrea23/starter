import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props){
  	super(props);
  	this.state = { activeTab: 1 }
  }

  toggleCategories(){
  	if(this.state.activeTab === 0){
  	  return(
  	  	  <div className="projects-grid">
	  	  	  <Card shadow={3} style={{minWidth: '450', margin: 'auto'}}>
	  	  	    <CardTitle style={{color: '#fff', height: '176px', background:'url(http://spyrestudios.com/wp-content/uploads/React.js_logo.svg_.png) center / cover'}}>React Project 1</CardTitle>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.	
				</CardText>  	  	    
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Demo</Button>				
				</CardActions>
				<CardMenu style={{color: '#fff'}}>
				  <IconButton name="share" />
				</CardMenu>
	  	  	  </Card>
	  	  	  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
	  	  	    <CardTitle style={{color: '#fff', height: '176px', background:'url(http://spyrestudios.com/wp-content/uploads/React.js_logo.svg_.png) center / cover'}}>React Project 1</CardTitle>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.	
				</CardText>  	  	    
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Demo</Button>				
				</CardActions>
				<CardMenu style={{color: '#fff'}}>
				  <IconButton name="share" />
				</CardMenu>
	  	  	  </Card>	  	  	  
  	  	  </div>
  	  )
  	} else if(this.state.activeTab === 1){
  	  return(
  	  	<div><h1>This is Angular</h1></div>
  	  )
  	} else if(this.state.activeTab === 2){
  	  return(
  	  	<div><h1>This is Vue</h1></div>
  	  )
  	}
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
		  <Tab>React</Tab>
		  <Tab>Angular</Tab>        
		  <Tab>Vue</Tab>               
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>          

   	  </div>
    );
  }
}

export default Projects;























