import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const exampleBothProject = {
  'title': 'Both Project',
  'description': 'Providing middle skills training and connections to employers',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': 'uxr description. Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives. The catering business allows the cafe to reian profitable but had a confusing and inefficient process for requests. Identify user and staff painpoints when processing their requests, simplify, and develop a solution.'},
      {'name': 'Process', 'type': 'text', 'description': 'uxr description. Curus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rho'},
      {'name': 'Summary', 'type': 'text', 'description': 'uxr description. Curfinibus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rh'}
  ],
  'design': [ // List of sections for Graphic Design
      {'name': 'Context', 'type': 'text', 'description': 'design description. Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives. The catering business allows the cafe to reian profitable but had a confusing and inefficient process for requests. Identify user and staff painpoints when processing their requests, simplify, and develop a solution.'},
      {'name': 'Process', 'type': 'text', 'description': 'design description. nibus tellus, et effissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in ef'},
      {'name': 'Summary', 'type': 'text', 'description': 'design description. finiissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in eff'}
  ]
}

const exampleUXRProject = {
  'title': 'UXR Project',
  'description': 'Providing middle skills training and connections to employers',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': 'Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives. The catering business allows the cafe to reian profitable but had a confusing and inefficient process for requests. Identify user and staff painpoints when processing their requests, simplify, and develop a solution.'},
      {'name': 'Process', 'type': 'text', 'description': 'Curabitur fermentum finibus telur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in effic.'},
      {'name': 'Summary', 'type': 'text', 'description': 'Curabitur ferficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in effic'},
      {'name': 'Methodology', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'My goal was to love jeg with all my heart! She loved me back after a while, but it took some time because of all the mozerella sticks I snatched from right under her nose.'},
          {'name': 'Findings', 'description': 'That even if you snatch mozerella sticks, the love of your life will forgive you because youre so cute and handsome and great at making websites for the love of their life!!'}
      ]},
      {'type': 'quote', 'description': 'Heyooooooooooo'}
  ]
}

const rendezvousCafe = {
  'title': 'Rendezvous Cafe and Catering',
  'description': 'Improving the catering request process for staff and customers',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': 'Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives. The catering business allows the cafe to reian profitable but had a confusing and inefficient process for requests. Identify user and staff painpoints when processing their requests, simplify, and develop a solution.'},
      {'name': 'Process', 'type': 'text', 'description': ''},
      {'name': 'Competitor Analysis', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'What are the offerings and the process at other catering companies nearby? Build empathy for what the catering process is like for customersUnderstand offerings and pricing'},
          {'name': 'Findings', 'description': 'Customers aren’t sure what the process will beRestaurant/ catering side is very opaque- what’s possible/ pricing, but a lot of information is requested from the customerCustomers put off by this imbalance'}
      ]},
      {'name': 'Stakeholder Interviews', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'Understand backend requirements for catering processUnderstand total cafe demands '},
          {'name': 'Findings', 'description': 'The restaurant manager and head chef are both very busy, so they share the catering responsibilities, resulting in a scattered process- not always knowing whose responsibility is what.  Catering is important to the business model and allows them to provide trainings and overall program. '}
      ]},
      {'name': 'Personas', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'Who is currently ordering?'},
          {'name': 'Findings', 'description': 'Two main order types: coffee and lunch/ dinner service'}
      ]},
      {'name': 'Journey Mapping', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'Visualize and tell the story of the experience of ordering catering, from both the café’s perspective and the user’s.'},
          {'name': 'Findings', 'description': 'Two main order types: coffee and lunch/ dinner service'}
      ]},
      {'name': 'Recommendations', 'type': 'text', 'description': 'Simplify ordering process and consolidate who has ownership, without requiring more time investment. Provide transparency throughout for the customer. Include follow up after event for ratings and reviews to increase social media presence'},
      {'name': 'Deliverables', 'type': 'text', 'description': 'Stakeholder presentationNew process developed, including Request Form added to website, automatic emails to customers, and BEO form developed'},
      {'name': 'Next Steps and Reflections', 'type': 'text', 'description': 'Usability testing with the new form to continue improvements to the process.'},
  ]
}

const atlasGuild = {
  'title': 'Atlas Guild',
  'description': 'Providing middle skills job training and connections to employers',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': 'Atlas Guild was a very early stage (pre-seed) start up looking to connect people without college degrees to high paying middle skills jobs- those jobs that require additional training but not a college education. I was hired as an intern during the summer to help shape the direction of the company and its offerings, create a value proposition, and understand its potential users’ motivations based on needs and wants of middle skills employers and people without college degrees. '},
      {'name': 'Process', 'type': 'text', 'description': ''},
      {'name': 'Interviews with our Target Demographic', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '⁃ Understand attitudes about and relationship with traditional schooling⁃ Understand what/ how education has worked best for them⁃ What is current situation, and how did they get there? ⁃ What are future goals, aspirations, and plans? ⁃ Evaluate and identify how these could be leveraged in potential programming'},
          {'name': 'Findings', 'description': '⁃  Motivated by seeing the why behind learnings- experiential, hands on education has been most successful ⁃ Currently have jobs with response-based tasks, including in future plans⁃ relationship with traditional school not great, but differing reasons⁃ Money is a big motivator'}
      ]},
      {'type': 'quote', 'description': 'It was a lot easier to learn that way. You put things together a lot more, based on what you saw, how it works.'},
      {'name': 'Surveys', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '⁃ What is important to work satisfaction? ⁃ What are attitudes around middle skills jobs? -What interest is there in a program like this?'},
          {'name': 'Findings', 'description': '⁃  There is an overall negative association with middle skills jobs, but not a lot is known about them. ⁃ Many are currently employed, so scheduling of the program needs to be mindful of this. ⁃ Money was considered the most important aspect to work satisfaction.⁃ Middle sklls jobs were not associated with high paying positions, but after being told example starting salaries, it was the most given reason for wanting to participate in a program like this.'}
      ]},
      {'name': 'Creating Proxies', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'Find organizations known for their combinations of strong social bonds and aspirations of money. Study these techniques for creating a sense of belonging and pride; evaluate how these could be leveraged to minimize attrition rates. Learn about how these organizations talk about, brand, and leverage financial security. ⁃ Military⁃ Gangs⁃ Cults'},
          {'name': 'Findings', 'description': '⁃  Both organizations capitalize on giving power and acceptance. ⁃ The bonds formed within these groups also benefit from separating individuals from their previous lives. ⁃ Gang members refer to one another as sister and brother. ⁃ Working harder to be in a group has a psychological effect of creating more affinity for the group, also similar to hazing in fraternities. ⁃ Gangs offer identity, value, security, entertainment, and community. ⁃ “Learn something. Be somebody.” ⁃ Atlas Guild should offer the sense of identity and community, and can create language for other students in the group that reflects this community. ⁃ Atlas Guild can and should offer respect for each student- a value typically missing in traditional teacher-centered learning environments.'}
      ]},
      {'name': 'Recommendations', 'type': 'text', 'description': '⁃ Socially Oriented: The program should focus not only on content but on the other participants, creating these bonds will make the program more enjoyable, increase graduate’s networks, and ensure accountability to graduation. ⁃ Learning for a purpose: The pedagogy should be very hands-on and experiential learning oriented. Modeling after an apprenticeship may help to show the “why” of learning and create respect for individuals to keep drop out rates low. ⁃ Money: Money is a big factor, so construction could be a good industry to start with'},
      {'name': 'Next Steps', 'type': 'text', 'description': 'After the summer ended, the founder abandoned Atlas Guild for another job. Next steps would have been....'},
  ]
}

const museumClasses = {
  'title': 'Classes for BADM',
  'description': 'Creating digital fabrication classes for early childhood',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': 'A Fab Lab is a maker space with an emphasis on digital fabrication tools and techniques. The Bay Area Discovery Museum has the world’s first early childhood Fab Lab. The Bay Area Discovery Museum’s Fab Lab was introducing a new type of session- classes- to  teach the digital fabrication tools to young children. The museum need to create content and structure frameworks for these classes. '},
      {'name': 'Process', 'type': 'text', 'description': 'The Approach: Because of the scope and tight timeline, we focused on priorities: -Understand the needs of the Fab Lab staff-Understand the visitor’s wants'},
      {'name': 'Stakeholder Interviews', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'Understand all museum stakeholders want from the classesUnderstand constraints'},
          {'name': 'Findings', 'description': 'Fab Lab is understaffed and have limited time and resourcesFab Lab staff has hesitations about benefits of digital fabrication over low tech tools and makingLarge disconnect between teaching staff and administration staffAdministaion staff want classes to make money Teaching digital fabrication requires more facilitation upfront'}
      ]},
      {'name': 'Guerilla User Interviews', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'understand what adult caretakers want from classesUnderstand what adult caretakers look for from experience'},
          {'name': 'Findings', 'description': 'Novelty is importantWant kids to be on the cutting edge'}
      ]},
      {'name': 'Prototyping: User Questionnaires and Observations', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'understand logistics constraints and preferences from visitorsAssess satisfaction from pilot prototyping'},
          {'name': 'Findings', 'description': 'weekends are best timesduring the mornings1-1.5 lengthPunctuality is not the norm with small children'}
      ]},
      {'name': 'Recommendations', 'type': 'text', 'description': 'Offer same class multiple times during day on weekend- maximizing availability for customers but reducing resources from Fab Lab Staff. Classes should have built in buffer time at start for any late parties; this should be an activity for the children. Initial “circle time” instructions should be no longer than ten minutes, complete enough to cover the entirety of the activity but to avoid children getting the wiggles.Focus learning goals on the abstract qualities inherent in the design process'},
      {'name': 'Deliverables', 'type': 'text', 'description': 'Pilot test class. Stakeholder presentations. Content recommendations and class creations.'},
  ]
}

const exampleDesignProject = {
  'title': 'Design Project',
  'description': 'Providing middle skills training and connections to employers',
  'design': [ // List of sections for Graphic Design
    {'name': 'Context', 'type': 'text', 'description': 'Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives. The catering business allows the cafe to reian profitable but had a confusing and inefficient process for requests. Identify user and staff painpoints when processing their requests, simplify, and develop a solution.'},
    {'name': 'Process', 'type': 'text', 'description': 'Curabitur fermenus tellus, et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in ef'},
    {'name': 'Summary', 'type': 'text', 'description': 'Curabitur , et efficitur augue dignissim sit amet. Cras a posuere lectus. Nulla posuere consectetur sapien, et accumsan urna condimentum a. Morbi viverra mi lorem, id bibendum neque mattis mollis. Aenean sit amet consequat nibh. Integer turpis felis, euismod in nisi nec, imperdiet faucibus magna. Morbi quam eros, accumsan quis rhoncus eget, mattis vel metus. Duis eu sapien libero. Vestibulum imperdiet rhoncus augue, in eff'}
  ]
}

let projects = Array(3).fill(exampleBothProject).concat(Array(3).fill(exampleUXRProject)).concat(Array(3).fill(exampleDesignProject)).map(function(u, i) {
  var item = JSON.parse(JSON.stringify(u)); // deep copy of object
  item.title = u.title + " " + i // giving them a distinct title
  return item;
})

// fOR JEn: projects.push(variable_name)
projects.push(rendezvousCafe)
projects.push(atlasGuild)
projects.push(museumClasses)

ReactDOM.render(<App projects={projects}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
