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

const jobtrain = {
  'title': 'Jobtrain',
  'description': 'Creating a scalable soft skills curriculum',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': '<p>Jobtrain is a non profit organization providing vocational training to underserved individuals. Jobtrain teaches both technical and soft skills through in-person classes.</p><p>In middle skills jobs, far more new hires are fired for a lack of soft skills than technical competence. Employers cite a lack of soft skills as the biggest barrier to attainment and retention of middle skills jobs.. After offering the classes in-person only, Jobtrain was ready to scale their impact and make the program available to a wider audience.</p>'},
      {'name': 'Process', 'type': 'text', 'description': '<p>The approach:<ul><li><b>Content:</b> Understand the soft skills necessary for attaining and retaining middle skills jobs, including assessing which are already being taught and where there’s room for improvement.</li><li><b>Experiential learning:</b> Through the research from Atlas Guild experiential learning is a key factor for those outside of traditional learning environments</li><li><b>Community: </b>How can we create and foster the community to encourage retention through the program? </li></ul></p>'},
      {'name': 'User and Stakeholder Interviews', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Understand students’ attitudes about existing classes</li><li>Hear from teachers what teaching the class is like, and how they evaluate needs of their students</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Students are hesitant to take classes, believing they have these skills already. Teachers respond to this by reframing the classes as “everyone needs this so everyone’s getting it.” Some even reframe that these classes put [students] in the top percentage of job seekers.</li><li>Classes rely largely on self-awareness, so modeling and setting standards early is key.</li><li>Teachers sometimes have a disconnect between engagement and habits. While readily acknowledging that engagement is just the first step, little push is made for practice needed to turn skills into habits.</li><li>Teachers feel a tension between students’ immediate needs and what’s important long term; some teachers worry about burdening students with too much work- between their vocational coursework, soft skills coursework, and outside lives.</li></ul>'}
      ]},
      {'name': 'User Observations', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>How do classes create need for soft skills in students?</li><li>What pedagogy creates engagement and community? </li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>The teacher used empathy to convey the need for the classes, asking students to “pretend [they] are the boss.”</li><li>It’s a largely traditional learning environment- talking between students is discouraged, the teacher lectures most of the time, and class participation is mostly answering the teacher’s questions.</li><li>There’s little talking/ community creation within the class, but friendships and bonds exist. These are formed and continued outside of these classes, potentially in technical trainings or during breaks and lunches.</li><li>Teacher/ teacher role is respected- students seek out individual conversations with her, and students are paying attention even when energy was low.</li></ul>'}
      ]},
      {'name': 'Market Research', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Who else is in this space?</li> <li>What has made other people in this space successful?</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Many organizations teach or offer soft skills curriculum, but the majority of these organizations are in the B2C domain.</li><li>The B2B space is dominated by programs for for-profit organizations, with irrelevant content and unrealistic prices for non-profit needs. </li><li>While there are non-profit organizations that offer soft skill training, almost all limit their trainings to in-person sessions only within their own organization. </li><li>Jobtrain is among the first non-profits to create a scalable soft skills program targeted to other non-profits.</li></ul>'}
      ]},
      {'name': 'Surveys of In-Person Class Students', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Evaluate user experience in in-person classes- for content, pedagogy, and community</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Students are happy with what’s being taught in the classes, and believe it will help them change. Students do not believe their soft skills are holding them back, though.</li><li>Students believe the teachers are prepared and the classes are valuable, but the classes are not engaging.</li></ul>'}
      ]},
      {'name': 'Recommendations', 'type': 'text', 'description': '<ul><li><b>Content:</b> With adjustments in course order, the content will remain as it was for the in-person classes. With feedback from teachers, employers, and administration, the content has gone through many iterations already to come to these topics.</li><li><b>Experiential learning:</b> Use experiential learning to help turn lessons into habits. Have three practice-able skills at the end of each lesson, and encourage students to use them outside of the classes. For example, in the Anger Management module, <ol><li>Notice when you are getting angry, and identify its source.</li><li>Inhale for five seconds, and exhale for five seconds.</li><li>Focus on solutions, not what made you angry.</li></ol>Use these practice exercises as homework, and check in with students about progress.</li><li><b>Community: </b>The community will be led by the teacher, but the students will have many opportunities to interact with each other. These should be built in to the modules and also help to develop skills. For example, in the Workplace Success module, students will add to a forum about an experience with a really good or a really bad boss.</li></ul>'},
      {'name': 'Usability Testing on an Alpha Prototype', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Can users navigate through the site to the correct module?</li> <li>Do the lessons keep users engaged?</li> <li>Do users watch and listen through the video?</li> <li>Do users notice and use interactive features?</li> <li>What are pain points for users?</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Host site is easy enough to use- users can sign up and find correct lesson on their own</li><li>Users are unclear about what they should be doing during the video- instructions should be explicit<li>To reduce ambiguity and help students focus through the video, create a roadmap for them- what things are needed, what the lesson consists of, and what to do during video</li><li>Users check their progress about 3/4 of the way through the video</li><li>Users watch the entire video, but appear most engaged when interacting with content</li><li>Videos have inconsistent volume that students found distracting</li></ul>'}
      ]},
      {'name': 'Deliverables', 'type': 'text', 'description': '<p>I was able to see this project from initial conception through to completion. Along the way, I kept stakeholders up to date with my findings through meetings and presentations. When the project was ready, I helped hire an Instructional Designer and worked closely with her to ensure her curriculum creation aligned with my recommendations. We created a pilot module to be tested, then adjusting for feedback created nine more modules. This beta version was then tested, and received more than a four out of five star rating. </p>'},
      {'name': 'Next Steps and Reflections', 'type': 'text', 'description': '<p>This project was really big and very close to my heart. I felt so lucky to get to work on this during my leave of absence. It was really hard to pass the project off and be unable to continue working on it to help with branding and finding non-profits to partner with. I know that’s a big part of user research, and it’s something I’m still learning to be comfortable with. </p>'},
  ]
}

const rendezvousCafe = {
  'title': 'Rendezvous Cafe and Catering',
  'description': 'Improving the catering request process for staff and customers',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': '<p>Rendezvous Cafe is a restaurant offering job training for people who are rebuilding their lives.</p><p>The catering business allows the cafe to remain profitable, but had a confusing and inefficient process for requests. Identify customer and staff pain points when processing these requests and develop a solution.</p>'},
      {'name': 'Process', 'type': 'text', 'description': ''},
      {'name': 'Competitor Analysis', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Build empathy for what the catering process is like for customers</li><li>Understand offerings and pricing of other catering companies</li><li>Learn about the request process of other catering companies</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>The request process leaves customers unsure of what to expect about what’s possible and pricing.</li><li>Despite how opaque the process is for customers, a lot of information is requested from them.</li><li>New customers are put off by this imbalance.</li></ul>'}
      ]},
      {'name': 'Stakeholder Interviews', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Understand kitchen and back-end requirements for the request process</li><li>Understand total café and staff demands through the entire catering process</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>The restaurant manager and head chef are both very busy, so they share the catering responsibilities. This results in a scattered process, where responsibilities aren’t clearly delineated or communicated.</li><li>Catering is important to the business model and allows them to provide trainings and overall program.</li></ul>'}
      ]},
      {'name': 'Personas', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'Who is currently ordering?'},
          {'name': 'Findings', 'description': '<ul><li>Two main order types: morning coffee/ breakfast and lunch/ dinner service</li><li>The preparation required varies vastly between these two</li><li>Morning coffee/ breakfast requires little preparation and operates from a mostly standardized menu. Lunch/ dinner services are developed in coordination with the customers’ needs, and require much more preparation because of this.</li><li>Businesses within the Sobrato Center (surrounding office park) are mainly the current customer, but Rendezvous would like to expand more within it, too, both in awareness and frequency of orders.</li></ul>'}
      ]},
      {'name': 'Journey Mapping', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': 'Visualize and tell the story of the experience of ordering catering, from both the café’s perspective and the user’s.'},
          {'name': 'Findings', 'description': '<ul><li>Decrease tasks needed from the contact person at the café.</li><li>Increase interactions between contact person and the customer, to create transparency for the customer during the process.</li><li>Generate future business by increasing awareness through improved social media reviews.</li><li>Cut out inefficiencies in communication by automating parts of the process and centralizing data collection to be easily reproduced and shared. </li></ul><img src="./journeyMapCurrent.png"/><img src="./journeyMapProposed.png"/>'}
      ]},
      {'name': 'Recommendations', 'type': 'text', 'description': '<ul><li>Simplify ordering process and consolidate who has ownership, without requiring more time investment.</li> <li>Provide transparency throughout for the customer.</li><li>Include follow up after event for ratings and reviews to increase social media presence.</li></ul>'},
      {'name': 'Deliverables', 'type': 'text', 'description': '<p>New process developed, including Request Form added to website, automatic emails to customers, and BEO form developed</p><p>Stakeholder presentation of findings, recommendations, and new process</p>'},
      {'name': 'Next Steps and Reflections', 'type': 'text', 'description': 'Usability testing with the new form to continue improvements to the process.'},
  ]
}

const atlasGuild = {
  'title': 'Atlas Guild',
  'description': 'Providing middle skills job training and connections to employers',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': '<p>Atlas Guild was a very early stage (pre-seed) start up looking to connect people without college degrees to high paying middle skills jobs- those jobs that require additional training but not a college education. </p><p>I was hired as an intern during the summer to help shape the direction of the company and its offerings, create a value proposition, and understand its potential users’ motivations based on needs and wants of middle skills employers and people without college degrees. </p>'},
      {'name': 'Process', 'type': 'text', 'description': ''},
      {'name': 'Interviews with People Currently in Middle Skills Jobs', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Understand attitudes about and relationships with traditional schooling</li><li>Understand what/ how education has worked best for them</li><li>What is their current vocational situation, and how did they get there?</li><li>What are their future goals, aspirations, and plans?</li><li>Evaluate and identify how these goals and values could be leveraged in potential programming</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Their relationship with traditional school hasn’t been great, but underlying reasons differ vastly.</li><li>They’re much more engaged by seeing the “why” behind learnings- experiential, hands on education has been most successful.</li><li>Currently their jobs have response-based tasks, and their future plans include these tasks as well.</li><li>Money is and has been a big motivator.</li>'}
      ]},
      {'type': 'quote', 'description': 'It was a lot easier to learn [with hands-on curriculum]. You put things together a lot more, based on what you saw, how it works.'},
      {'name': 'Surveys of Target Demographic', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>What is identified as important to work satisfaction? </li><li>How much is known about middle skills jobs, and what are attitudes about them? </li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Money was considered the most important aspect of work satisfaction.</li><li>Survey respondents did not initially associate middle skills jobs with high paying positions, but after being told example starting salaries, it was the most given reason for wanting to participate in a program like this.</li><li>There is an overall negative association with middle skills jobs, but not a lot is known about them.</li><li>Many respondents are currently employed, so scheduling of the program needs to take this into consideration.</li></ul>'}
      ]},
      {'name': 'Concept Testing with Target Demographic', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Assess overall interest in the program</li><li>Evaluate the pricing structure and business model</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>About 75% of respondents are interested in participating in the program.</li><li>Earning potential and future opportuniites were the most popular reasons for interest.</li><li>Participants largely prefer a payment schedule after being placed in a position.</li></ul>'}
      ]},
      {'name': 'Creating Proxies', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Find organizations known for their combinations of strong social bonds and aspirations of money.</li><li>Study these techniques for creating a sense of belonging and pride; evaluate how these could be leveraged to minimize attrition rates.</li><li>Learn about how these organizations talk about, brand, and leverage financial security.</li><li>Military</li><li>Gangs</li><li>Cults</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li> Working harder to be in a group has a psychological effect of creating more affinity for the group, which is also similar to hazing in fraternities.</li><li>These organizations offer power, acceptance, identity, security, and community.</li><li>Bonds formed within these groups can benefit from separating individuals from their previous lives.</li><li>Gang, cults, and military members often refer to one another as sisters and brothers.</li> <li>Atlas Guild should offer the sense of identity and community of the proxies.</li><li>Atlas Guild can create language for other students in the group that reflects community.</li><li>Atlas Guild can and should offer respect for each student- a value mentioned as missing in traditional teacher-centered learning environments.</li></ul>'}
      ]},
      {'type': 'quote', 'description': 'Learn something. Be somebody.'},
      {'name': 'Recommendations', 'type': 'text', 'description': '<ul><li><b>Socially Oriented:</b> The program should focus not only on content but on the other participants, creating these bonds will make the program more enjoyable, ensure accountability to graduation, and increase graduate’s networks.</li><li><b>Learning for a purpose:</b> The pedagogy should be very hands-on and experiential learning oriented. Modeling after an apprenticeship may help to show the “why” of learning and create respect for individuals to keep drop-out rates low.</li><li><b>Money:</b> Money is a big factor, so construction could be a good industry to start with.</li></ul>'},
      {'name': 'Next Steps and Reflections', 'type': 'text', 'description': 'After the summer ended, the founder abandoned Atlas Guild for another job. Next steps would have been creating an alpha phase program and conducting usability testing along the way.'},
  ],
'design': [ // List of sections for Graphic Design
      {'name': 'Objective', 'type': 'text', 'description': '<p>In addition to conducting user research, I was responsible for creating brand materials, pitch decks, and presentations on my findings.</p>'},
      {'name': '', 'type': 'text', 'description': '<img src="./atlasGuild/survey1.png"/><img src="./atlasGuild/survey2.png"/><img src="./atlasGuild/pitchDeck.png"/><img src="./atlasGuild/logo.jpg"/><img src="./atlasGuild/marketMap.png"/>'}
  ]
}

const museumClasses = {
  'title': 'Classes for BADM',
  'description': 'Creating digital fabrication classes for early childhood',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': '<p>A Fab Lab is a maker space with an emphasis on digital fabrication tools and techniques. The Bay Area Discovery Museum has the world’s first early childhood Fab Lab.</p><p>The Bay Area Discovery Museum’s Fab Lab was introducing a new type of session- classes- to  teach digital fabrication tools to young children. The museum need to create content and structure frameworks for these classes.</p>'},
      {'name': 'Process', 'type': 'text', 'description': '<p><b>The Approach:</b><br>Because of the scope and tight timeline, we prioritized: <ul><li>Understanding the needs of the Fab Lab staff</li><li>Understanding the visitor’s wants</li><li>Identifying areas of alignment between these</li></ul></p>'},
      {'name': 'Stakeholder Interviews', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Understand museum stakeholders’ wants from the classes</li><li>Understand constraints</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Fab Lab is understaffed and has limited time and resources to dedicate to classes.</li><li>Teaching digital fabrication requires more facilitation from staff than regular programming.</li><li>Fab Lab staff have hesitations about benefits of digital fabrication over low tech tools and making.</li><li>Administration staff want classes to make money</li><li>There’s a disconnect between teaching staff’s resources and administration staff’s wants</li></ul>'}
      ]},
      {'name': 'Guerilla User Interviews', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Understand what adult caretakers want from classes</li><li>Understand what adult caretakers look for from the experience</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Many caretakers are largely unfamiliar with digital fabrication technology</li><li>Caretakers want the content of the classes to be novel to both them and their children</li><li>Caretakers are excited to share what they view as the future with their children</li><li>Caretakers are looking to give their child the best education and experiences possible</li></ul>'}
      ]},
      {'name': 'Prototyping: User Questionnaires and Observations', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>Understand logistics constraints and preferences from visitors</li><li>Assess satisfaction from pilot prototypes</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Weekend mornings are the times most available for children and caretakers.</li><li>Caretakers are excited to be in the class, and children are more comfortable when they stay.</li><li>1-1.5 hour length is ideal.</li><li>Adults with young children struggle with punctuality.</li></ul>'}
      ]},
      {'name': 'Recommendations', 'type': 'text', 'description': '<ul><li>Classes will include digital fabrication skills but will focus on the process of making.</li><li>Offer same class multiple times during the day on weekends- maximizing availability for customers but reducing demand on Fab Lab Staff.</li><li>Caretakers stay during the duration of the class.</li><li>Classes should have built-in buffer time at start for any late groups; this should be an activity for the children.</li><li>Initial “circle time” instructions should be no longer than ten minutes to avoid children getting the wiggles. However, the instructions should cover the entirety of the activity, to help caretakers understand the technology, as well. </li></ul>'},
      {'name': 'Deliverables', 'type': 'text', 'description': '<ul><li>Pilot test class</li><li>Stakeholder presentations</li><li>Content recommendations and class creations</li></ul>'},
      {'name': 'Next Steps and Reflections', 'type': 'text', 'description': '<p>I would have loved to have been able to do a more robust dive into what our visitors wanted from the class experience. At the museum, my job was focused on bringing ideas into practice in the Fab Lab. As much as possible, I’d work to bring the wants and needs of our visitors into practice, but due to time and resource constraints, I’d only be able to talk quickly with caretakers who were already there with their children. From many, many of these quick discussions, I got a sense of what caretakers were looking for, but in the case of classes especially, I think we could have really benefited from longer, distraction-free, more in-depth interviews.</p>'},
  ],
  'design': [
    {'name': 'Objective', 'type': 'text', 'description': 'After creating the framework and content for the new class sessions, I made the supporting visual materials. These materials are intended to:<ul> <li>help caregivers help their children through the design process</li><li>emphasize the design process underlying the digital fabrication tools</li><li>inspire and support children in their creative problem solving</li><ul>'},
    {'name': '', 'type': 'text', 'description': '<img src="./lightboxClass/directionAll.png"/><img src="./lightboxClass/direction1.png"/><img src="./lightboxClass/direction2.png"/><img src="./lightboxClass/direction3.png"/><img src="./lightboxClass/testStation.png"/><img src="./lightboxClass/premadeSlides.png"/>'}
  ]
}

const sharksGrid = {
  'title': 'San Jose Sharks',
  'description': 'Enhancing the game-watching experience for Sharks fans watching from home',
  'uxr': [ // List of sections for UXR; don't include uxr if it's not a uxr project!
      {'name': 'Context', 'type': 'text', 'description': '<p>The San Jose Sharks are a hockey team based in San Jose, California. While the Bay Area sports teams tend to have a lot of “hometown fans and pride”, the San Jose Sharks were looking to expand theirs. The CMO asked our class to find a way to enhance the game-watching experience, increasing their fan base and team loyalty.</p>'},
      {'name': 'Process', 'type': 'text', 'description': ''},
      {'name': 'Observations of Shark Tank Game', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>What is the experience of watching a game in person?</li><li>Who comes to in person games?</li><li>What is experience of watching as a newcomer to the sport/team?</li> </ul>'},
          {'name': 'Findings', 'description': '<ul><li>The stadium is designed to be an experience- through lighting, sound, and traditions. The stadium becomes dark, bass pumps, and white pom poms flash. Goals have big celebrations, players enter through a shark head, and the Jaws theme song blares during power plays and for penalized players. <li>Coming without knowledge of the sport makes it very hard to catch on- jerseys are hard to read and the game’s not as high scoring- denoting obviously good or bad moments- as other sports.</li><li>Almost everyone in the stadium is wearing a jersey, making it feel like a huge community. Jerseys are expensive, though, signifying that fans are committed.</li><li>Mostly male fans and not many people are alone</li><li>Large jumbotron helps fans in high seats watch the game and fan entertainment during breaks.</li></ul>'}
      ]},
      {'name': 'Guerilla Interviews', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>How do loyal fans develop?</li><li>What was their introduction, and what got them hooked?</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Many families are loyal fans, despite the fights that hockey is known for. Hockey fans view the fights as “just part of the sport” not violence</li><li>Many fans have gained interest in the sport and team through traditions with their own families</li><li>The Sharks are the “main community in San Jose.” Some fans say that San Jose is boring and that Sharks games are the best thing to do there.</li></ul>'}
      ]},
      {'type': 'quote', 'description': 'This was my father-son activity growing up.'},
      {'name': 'Stakeholder Interview', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>What initiatives currently exist?</li><li>What do stakeholders view as goals for improvement? Areas they excel at? </li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>There are currently many Sharks initiatives- ranging from events to giveaways to PR pushes</li><li>Home games sell tickets well</li><li>There’s an 8% no show rate, and an 82% renewal rate for season tickets</li><li>Santa Clara County centric fan base</li></ul'}
      ]},
      {'name': 'Fan Interviews', 'type': 'column', 'columns': [
          {'name': 'Goals', 'description': '<ul><li>How do Sharks fans find community outside of the Tank?</li><li>What is the experience of watching games on TV compared to at the Tank?</li></ul>'},
          {'name': 'Findings', 'description': '<ul><li>Watching on TV is a totally different experience, can be isolating without other fans with you</li><li>Hard to find same Sharks community outside of in-person games</li><li>Fans are long time fans- remember tradition of going with their family as a child, and are passing the tradition on to their own families now. They go to a game in person, then watch on TV, and don’t recommend the other way around.</li></ul>'}
      ]},
      {'name': 'Recommendations', 'type': 'text', 'description': '<ul><li>Focus on experience of watching at home to bring the experience and community to home-viewers. The community is an initial touchpoint for many fans, and continues to draw many others. It can also be a source of nostalgia, as fans remember family memories and traditions fondly.</li><li>Bring the experience and community of in-person games to at-home viewers can improve ratings and help bring new viewers into the sport.</li></ul>'},
      {'name': 'Deliverables', 'type': 'text', 'description': '<ul><li>Conceptual wireframe of a new app experience, connecting fans with other fans, creating similar experiences between at home viewers and stadium viewers, and celebrating diehard fans</li><li>Stakeholder presentation to CMO and Sharks Marketing team</li>'},
      {'name': 'Next Steps and Reflections', 'type': 'text', 'description': '<p>This was the first project where I needed to interview users at an event, and I was terrified. It took me a full half of the game before I got the courage to ask a fan about their experience, but I learned a lot about creating shared experiences, being brave, and just introducing yourself.</p>'},
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

const ladies = {
  'title': 'Power Pos(t)ers',
  'description': 'Exploration of power and feminism',
  'design': [ // List of sections for Graphic Design
    {'name': 'Objective', 'type': 'text', 'description': 'I started making these as a reaction to cultural and political events regarding women. They are representations of my wrestling with and expressions of strength and feminism.'},
    {'name': '', 'type': 'text', 'description': '<img src="./ladies/flowerWoman.png"/><img src="./ladies/flowerWoman2.png"/><img src="./ladies/flowerWoman3.png"/><img src="./ladies/nastyWoman1.jpg"/><img src="./ladies/nastyWoman2.jpg"/><img src="./ladies/nastyWoman3.jpg"/><img src="./ladies/nastyWoman4.jpg"/><img src="./ladies/fightWoman.png"/>'}
  ]
}

const nature = {
  'title': 'Nature Posters',
  'description': 'Simplifying nature in layers',
  'design': [ // List of sections for Graphic Design
    {'name': 'Context', 'type': 'text', 'description': 'For this poster series, I wanted to parse the colors of nature without texture. I aimed to appreciate the shape, depth, and gradients through layers of colors.'},
    {'name': '', 'type': 'text', 'description': '<img src="./nature/sunset.png"/><img src="./nature/beach2.png"/><img src="./nature/junglev3.png"/><img src="./nature/Bridge.png"/><img src="./nature/beachv2.png"/><img src="./nature/flower.png"/>'}
  ]
}

let projects = []

// fOR JEn: projects.push(variable_name)
projects.push(jobtrain)
projects.push(rendezvousCafe)
projects.push(atlasGuild)
projects.push(museumClasses)
projects.push(sharksGrid)
projects.push(ladies)
projects.push(nature)

ReactDOM.render(<App projects={projects}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
