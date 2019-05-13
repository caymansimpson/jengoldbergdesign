import React from 'react';
// import logo from '../images/logo.svg'; how to import photos; code: src={logo}
import './App.css';

class PageSelector extends React.Component {
  constructor(props) {super(props)}  // boilerplate code

  // Passing down the changePage function so we can activate it when a click on a span happens
  render() {
    return (
      <div className="column">
        <span onClick={(e) => this.props.changePage(this.props.text, e)}>{this.props.text}</span>
      </div>
    );
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
  }  // boilerplate code

  render() { // TODO: remove _blank when done testing
    return (
      <a target="_blank" href={"projects/" + this.props.title.replace(/\s/g, '')}>
        <div className="projectcontainer">
          <div className="project" id={this.props.title.replace(/\s/g, '')}>
            <p>{this.props.title}</p>
            <h2>{this.props.description}</h2>
          </div>
        </div>
      </a>
    )
  }
}

// Takes in the list of Projects defined in index.js, passed through App
// Outputs a list of Project Components based on the state of the app
class ProjectList extends React.Component {
  constructor(props) {super(props)}  // boilerplate code

  render() {
    return (
      <div className="projectlist">
        {this.props.projects.filter(function(u, i) { // filter to only projects we need to show based on selection
          if(this.props.selection == 'UXR') return u.uxr !== undefined
          else return u.design !== undefined
        }, this).map( // then iterate them through
          function(project, i) {
            return <Project title={project.title + " " + i} description={project.description} key={i}/>
          }
        )}
      </div>
    );
  }
}


// Events: https://stackoverflow.com/questions/21285923/reactjs-two-components-communicating
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'selected': 'UXR'};
    this.headerOrder = ["Graphic Design", "UXR", "Me"] // This is default
    this.changePage = this.changePage.bind(this);
  }  // boilerplate code

  // Function called when someone clicks on the text in a PageSelector
  changePage(selection, e) {
    console.log("changed state to", selection)
    this.setState({
      'selected': selection
    })
  }

  render() {
    const selected = this.state.selected;

    // Figure out which direction we should shift the array and shift it
    if(this.headerOrder.indexOf(selected) == 0) {
      this.headerOrder.unshift(this.headerOrder.pop())
      console.log("shift right")
    }
    else if(this.headerOrder.indexOf(selected) == 2) {
      this.headerOrder.push(this.headerOrder.shift())
      console.log("shift left")
    } else {
      console.log("rendering w/ no shift")
    }

    let content;
    console.log(selected)
    if(selected != "Me") {
      content = (
        <div>
          <div className="sidenav">" "</div>
          <div className="projectcontent">
            <ProjectList projects={this.props.projects} selection={selected}/>
          </div>
        </div>
      )
    }
    else content = <p>Will develop soon!</p>

    return (
      <div className="App">
        <div className="mainheader">
          <h1>Jen Goldberg</h1>
          <div className="pageselections">
            { // the "this" at the end of the map function allows us to use changePage inside the map function
              this.headerOrder.map(function(u, i) {
                return <PageSelector text={u} key={i} changePage={this.changePage}/>
              }, this)
            }
          </div>
        </div>

        <div className="main">
          {content}
        </div>
      </div>
    );
  }
}

export default App;
