import React from 'react';
// import logo from '../images/logo.svg'; how to import photos; code: src={logo}
import './Home.css';
import '../App';
//import { render } from "react-dom";
import { Link } from "react-router-dom"

// npm install --save react-css-transition-replace
import ReactCSSTransitionReplace from 'react-css-transition-replace';





// Link to project; we define which project to link to by using the same process in App.js
class Project extends React.Component {
  render() {
    return (
        <div className="projectcontainer">
          <Link to={"/projects/" + this.props.title.replace(/\s/g, '')}>
            <div className="project" id={this.props.title.replace(/\s/g, '')}>
              <p dangerouslySetInnerHTML={{ __html: this.props.title}}/>
              <h2 dangerouslySetInnerHTML={{ __html: this.props.description}}/>
            </div>
          </Link>
        </div>
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
          console.log(this.props.selection)
          if(this.props.selection === 'User Research') return u.uxr !== undefined
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

class MePage extends React.Component {

  render() {
    return ( // we must return one parent div; you cant return two childs for some rando reason
      <div className="mePage">
          <h2>I love you!</h2>
          <h3>Hows it hanging?</h3>
          <p>left or right... heh</p>
          <div className="extradiv">this is an extra div</div>
      </div>
    );
  }
}


// Events: https://stackoverflow.com/questions/21285923/reactjs-two-components-communicating
/* Receives the following props:
- projects: json data of all projects
- selected: the value that we should display
- headerOrder: the order of the headers
- shift: how we should shift upon entering
*/
class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }  // boilerplate code

  render() {
    const selected = this.props.selected;

    let content;
    if(selected !== "Me") {
      content = (
        <div>
          <div className="sidenav" style={{"opacity": 0}}> {/*TODO: implement */}
            <div className="sidenavTester">Project 1</div>
            <div className="sidenavTester">Project 2</div>
            <div className="sidenavTester">Project 3</div>
            <div className="sidenavTester">Project 4</div>
            <div className="sidenavTester">Project 5</div>
          </div>
          <div className="projectcontent">
            <ProjectList projects={this.props.projects} selection={selected}/>
          </div>
        </div>
      )
    }
    else content = <MePage/>

    const transitionTime = 400;

    return (
      <div className="home">
        <div className="mainheader">
          <h1>Jen Goldberg</h1>
            <div className="pageselections" key="trying">
              { // the "this" at the end of the map function allows us to use changePage inside the map function
                this.props.headerOrder.map(function(u, i) {
                  return (
                    <div className='columnholder'>
                      <ReactCSSTransitionReplace //TODO: fix key error to get transitions to work
                        transitionName={"shift-" + this.props.shift}
                        transitionEnterTimeout={transitionTime}
                        transitionLeaveTimeout={transitionTime}
                      >
                        <div className="column" key={u}>
                          <span
                            key={u}
                            className={i===1? "emphasis": ""}
                            onClick={(e) => this.props.changePage(u, e)}
                            dangerouslySetInnerHTML={{ __html: u}}
                          />
                        </div>

                      </ReactCSSTransitionReplace>
                    </div>
                  )
                }, this)
              }
            </div>
        </div>

        <ReactCSSTransitionReplace
          transitionName={"shift-" + this.props.shift}
          transitionEnterTimeout={transitionTime}
          transitionLeaveTimeout={transitionTime}
        >
          <div className="main" key={this.props.selected}>
              {content}
          </div>
        </ReactCSSTransitionReplace>

      </div>
    );
  }
}

export default Home;
