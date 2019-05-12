import React from 'react';
// import logo from '../images/logo.svg'; how to import photos; code: src={logo}
import './App.css';

class PageSelector extends React.Component {
  constructor(props) {super(props)}  // boilerplate code

  render() {
    return (
      <div className="column">
        <span>{this.props.text}</span>
      </div>
    );
  }
}

class Project extends React.Component {
  constructor(props) {super(props)}  // boilerplate code
  render() {
    return (
      <div className="projectcontainer">
        <div className="project">
          <p>{this.props.title}</p>
          <h2>{this.props.description}</h2>
        </div>
      </div>
    )
  }
}

class ProjectList extends React.Component {
  constructor(props) {super(props)}  // boilerplate code

  render() {
    return (
      <div className="projectlist">
        {this.props.projects.map(
          function(project, i) {
            return <Project title={project.title} description={project.description} key={i}/>
          }
        )}
      </div>
        // {this.props.projects.map(function(u, i) {
        //   //console.log(u, i);
        //   <p>a</p>
        //   //<Project data={u}/>
        // })}
      //</div>
    );
  }
}


// Events: https://stackoverflow.com/questions/21285923/reactjs-two-components-communicating
class App extends React.Component {
  constructor(props) {super(props)}  // boilerplate code

  render() {
    return (
      <div className="App">
        <div className="mainheader">
          <h1>Jen Goldberg</h1>
          <div className="pageselections">
            <PageSelector text="UXR"/>
            <PageSelector text="Graphic Design"/>
            <PageSelector text="Me"/>
          </div>
        </div>

        <div className="main">
          <div className="sidenav">" "</div>
          <div className="content">
            <ProjectList projects={this.props.projects}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
