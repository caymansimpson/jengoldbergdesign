import React from 'react';
// import logo from '../images/logo.svg'; how to import photos; code: src={logo}
import './Home';
import '../App';
import './Projects.css';
//import { render } from "react-dom";
import { Link } from "react-router-dom"

// Passing down the changePage function so we can activate it when a click on a span happens
class NavSelector extends React.Component {
  render() {
    return (
      <div className="smallHeaderColumn">
        <Link to="/">
          <span className={this.props.emphasis} onClick={(e) => this.props.changePage(this.props.text, e)}>
            {this.props.text}
          </span>
        </Link>
      </div>
    );
  }
}

//
class Navbar extends React.Component {
  render() {
    return (
      <div className='smallHeader'>
        { // the "this" at the end of the map function allows us to use changePage inside the map function
          this.props.headerOrder.map(function(u, i) {
            return <NavSelector text={u} key={i} changePage={this.props.changePage} emphasis={i===1? "emphasis": ""}/>
          }, this)
        }
      </div>
    );
  }
}

class ProjectHeader extends React.Component {
  // this.props.clicked will be null if nothing has been chosen and two things can be chosen
  // itll either be uxr or design if we either chose something or if we have one option
  render() {
    return (
      <div className='projectHeader'>
        <div className='projectDescription'>
          <p dangerouslySetInnerHTML={{ __html: this.props.project.description}}/>
        </div>
        <div className="projectTitle">
          <p dangerouslySetInnerHTML={{ __html: this.props.project.title}}/>
        </div>
        <div class="blah"> {/*temporary*/}
          {this.props.project.uxr !== undefined && this.props.project.design !== undefined && // only show choice if there is any
            <div className={"projectSelections " + (this.props.clicked !== null? 'clicked': '')} val="uxr" onClick={(e) => this.props.handleClick(e, "uxr")}>
              {this.props.project.uxr !== undefined && <div className="projectOption">User Research</div>}
            </div>
          }
          {this.props.project.uxr !== undefined && this.props.project.design !== undefined && // only show choice if there is any
            <div className={"projectSelections " + (this.props.clicked !== null? 'clicked': '')} val="design" onClick={(e) => this.props.handleClick(e, "design")}>
              {this.props.project.design !== undefined && <div className="projectOption">Design</div>}
            </div>
          }
        </div>
      </div>
    );
  }
}

class TextSection extends React.Component {
  render() {
    return (
      <div>
        <div className='sectionTitle'>
          <h2 dangerouslySetInnerHTML={{ __html: this.props.project.name}}/>
        </div>
        <div className='sectionDescription'>
          <p dangerouslySetInnerHTML={{ __html: this.props.project.description}}/>
        </div>
      </div>
    );
  }
}

class ColumnSection extends React.Component {
  render() {
    return (
      <div>
        <div className='columnSectionTitle'>
          <h2 dangerouslySetInnerHTML={{ __html: this.props.project.name}}/>
        </div>
        <div className='columnHolder'>
          {
            this.props.project.columns.map(function(u, i) {
              return (
                <div>
                  <div className='columnTitle' dangerouslySetInnerHTML={{ __html: u.name}}/>
                  <div className='columnText' dangerouslySetInnerHTML={{ __html: u.description}}/>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

class QuoteSection extends React.Component {
  render() {
    return (
      <div>
        <div className='quoteSection'>
          <h2 className='quoteText' dangerouslySetInnerHTML={{ __html: this.props.project.description}}/>
        </div>
      </div>
    );
  }
}

// Main class of this Page that handles NavBar, ProjectHeader and ProjectContent
// Receives from props: ID of project, state of App (UXR, Graphic Design) and project to display
// Along with HeaderOrder to display on top
class Projects extends React.Component {
  constructor(props) {
    super(props);

    // Define what state we should be beginning the Project in
    let clicked; // TODO: clean up state because no longer need state for one-off projects
    if(props.project.uxr !== undefined && props.project.design !== undefined) clicked = null; // if we have both
    else clicked = (props.project.uxr !== undefined)? 'uxr': 'design' // if we only have one

    this.state = {'clicked': clicked}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, val) {
    this.setState({'clicked': val})
  }

  // Scroll to top after component rendered
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Navbar changePage={this.props.changePage} headerOrder={this.props.headerOrder}/>
        <ProjectHeader
          clicked={this.state.clicked} project={this.props.project} handleClick={this.handleClick}
        />
        {/* <h1>Projects baby!</h1>
        <p>ID of project: {this.props.id}</p>
        <p>State of App: {this.props.selected}</p>
        <p>Clicked: {this.state.clicked !== null? "clicked" : "not clicked"}</p> */}
        <div className='projectdescriptionholder'>
          {this.state.clicked !== null && // only display something if something was clicked, and choose which to display
            (this.state.clicked === 'uxr'? this.props.project.uxr : this.props.project.design).map(function(u, i) {
              if(u.type === "text") return <TextSection project={u} key={i}/>
              else if (u.type === "column") return <ColumnSection project={u} key={i}/>
              else if (u.type === "quote") return <QuoteSection project={u} key={i}/>
              return null;
            }, this)
          }
        </div>
      </div>
    );
  }
}

export default Projects;
