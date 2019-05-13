import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const exampleBothProject = {
  'title': 'Both Project',
  'description': 'Providing middle skills training and connections to employers',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context','description': 'uxr description. Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives. The catering business allows the cafe to reian profitable but had a confusing and inefficient process for requests. Identify user and staff painpoints when processing their requests, simplify, and develop a solution.'},
      {'name': 'Process','description': 'uxr description. Curabitur fermentum finibus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rho'},
      {'name': 'Summary', 'description': 'uxr description. Curabitur fermentum finibus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rh'}
  ],
  'design': [ // List of sections for Graphic Design
      {'name': 'Context','description': 'design description. Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives. The catering business allows the cafe to reian profitable but had a confusing and inefficient process for requests. Identify user and staff painpoints when processing their requests, simplify, and develop a solution.'},
      {'name': 'Process','description': 'design description. nibus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in ef'},
      {'name': 'Summary', 'description': 'design description. finibus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in eff'}
  ]
}

const exampleUXRProject = {
  'title': 'UXR Project',
  'description': 'Providing middle skills training and connections to employers',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'description': 'Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives. The catering business allows the cafe to reian profitable but had a confusing and inefficient process for requests. Identify user and staff painpoints when processing their requests, simplify, and develop a solution.'},
      {'name': 'Process', 'description': 'Curabitur fermentum finibus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in effic.'},
      {'name': 'Summary', 'description': 'Curabitur fermentum finibus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in effic'}
  ]
}

const exampleDesignProject = {
  'title': 'Design Project',
  'description': 'Providing middle skills training and connections to employers',
  'design': [ // List of sections for Graphic Design
    {'name': 'Context','description': 'Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives. The catering business allows the cafe to reian profitable but had a confusing and inefficient process for requests. Identify user and staff painpoints when processing their requests, simplify, and develop a solution.'},
    {'name': 'Process','description': 'Curabitur fermentum finibus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in ef'},
    {'name': 'Summary', 'description': 'Curabitur fermentum finibus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in eff'}
]
}

let projects = Array(3).fill(exampleBothProject).concat(Array(3).fill(exampleUXRProject)).concat(Array(3).fill(exampleDesignProject)).map(function(u, i) {
  var item = JSON.parse(JSON.stringify(u)); // deep copy of object
  item.title = u.title + " " + i // giving them a distinct title
  return item;
})

ReactDOM.render(<App projects={projects}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
