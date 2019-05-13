// import logo from '../images/logo.svg'; how to import photos; code: src={logo}
import React, { Component } from 'react';
import './App.css';
import Home from './views/Home.js';
import Projects from './views/Projects.js';
import {BrowserRouter, Route} from 'react-router-dom';

// This basically just tells the App which javascript files to go to based on different URLs
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {'selected': 'UXR'};
    this.changePage = this.changePage.bind(this);
    this.headerOrder = ["Graphic Design", "UXR", "Me"] // This is default
  }

  // Function called when someone clicks on the text in a PageSelector; must change headerOrder
  // before we change state so that when component renders because of statechange, headerOrder is already set
  changePage(selection, e) {

    // Figure out which direction we should shift the array and shift it before we change the state
    console.log("this is the state:", this.state.selected)
    if(this.headerOrder.indexOf(selection) === 0) {
      this.headerOrder.unshift(this.headerOrder.pop())
      console.log("shift right")
    }
    else if(this.headerOrder.indexOf(selection) === 2) {
      this.headerOrder.push(this.headerOrder.shift())
      console.log("shift left")
    } else {
      console.log("rendering w/ no shift")
    }

    this.setState({
      'selected': selection
    }, function() {
      console.log("changed state to", this.state.selected)}
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <Home
              projects={this.props.projects}
              changePage={this.changePage}
              selected={this.state.selected}
              headerOrder={this.headerOrder}
            />
          )}/>
          <Route exact={true} path='/projects/:id' render={(props) => (
            <Projects
              project={this.props.projects[this.props.projects.map(function(u) {
                return u.title.replace(/\s/g, '')
              }).indexOf(props.match.params.id)]}
              id={props.match.params.id}
              selected={this.state.selected}
              changePage={this.changePage}
              headerOrder={this.headerOrder}
            />
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
