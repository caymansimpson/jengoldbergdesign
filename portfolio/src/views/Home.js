import React from 'react';
// import logo from '../images/logo.svg'; how to import photos; code: src={logo}
import './Home.css';
import '../App';
import './Home';
//import { render } from "react-dom";
import { Link, Router } from "react-router-dom"


class PageSelector extends React.Component {
  // Passing down the changePage function so we can activate it when a click on a span happens
  render() {
    return (
      <div className="column">
        <span className={this.props.emphasis} onClick={(e) => this.props.changePage(this.props.text, e)}>
          {this.props.text}
        </span>
      </div>
    );
  }
}

class Project extends React.Component {
  render() {
    return (
      <Link to={"/projects/" + this.props.title.replace(/\s/g, '')}>
        <div className="projectcontainer">
          <div className="project" id={this.props.title.replace(/\s/g, '')}>
            <p>{this.props.title}</p>
            <h2>{this.props.description}</h2>
          </div>
        </div>
      </Link>
    )
  }
}

// Takes in the list of Projects defined in index.js, passed through App
// Outputs a list of Project Components based on the state of the app
class ProjectList extends React.Component {

  render() {
    return (
      <div className="projectlist">
        {this.props.projects.filter(function(u, i) { // filter to only projects we need to show based on selection
          if(this.props.selection === 'UXR') return u.uxr !== undefined
          else return u.design !== undefined
        }, this).map( // then iterate them through
          function(project, i) {
            return <Project title={project.title} description={project.description} key={i} selection={this.props.selection}/>
          }, this
        )}
      </div>
    );
  }
}


// Events: https://stackoverflow.com/questions/21285923/reactjs-two-components-communicating
class Home extends React.Component {
  constructor(props) {
    super(props);
  }  // boilerplate code

  render() {
    const selected = this.props.selected;

    let content;
    if(selected !== "Me") {
      content = (
        <div>
          <div className="sidenav">" "</div>
          <div className="projectcontent">
            <ProjectList projects={this.props.projects} selection={selected}/>
          </div>
        </div>
      )
    }
    else content = <p>Will develop soon!</p> // TODO: this is where we develop ME section

    // Added a link here
    return (
      <div className="home">
        <div className="mainheader">
          <h1>Jen Goldberg</h1>
          <div className="pageselections">
            { // the "this" at the end of the map function allows us to use changePage inside the map function
              this.props.headerOrder.map(function(u, i) {
                return <PageSelector text={u} key={i} changePage={this.props.changePage} emphasis={i===1? "emphasis": ""}/>
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

export default Home;