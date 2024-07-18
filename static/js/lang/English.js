/**
 * WebSite : http://www.fortunatus-ek.com
 * Author: Fortunatus Elfried KIDJE -v1p3r 75)
 * English File Configuration
 */

const en = {
    
    "headers": {
      "logo": "F",
      "navs": [
        { "name" : "About", "tag": "About"},
        { "name" : "Experience", "tag": "Experiences"},
        { "name" : "Works", "tag": "Projects"},
        { "name" : "Contact", "tag": "Contacts"},
      ],
      "navsTag": ["#About","#Experiences", "#Projects", "#Contacts"],
      "cvText": "Resume",
      "cvLink": "/static/files/kidje-elfried-fortunatus-resume-fr.pdf"
    },
    "banner": {
      "hello": "Hi, my name is",
      "myName": "Fortunatus KIDJE",
      "subtitle": "Web Developer",
      "desc": "A young graduate, I have 4 years of experience as a Web Developer which allowed me to participate in several projects. I am truly passionate and have good interpersonal skills that I will be able to put to good use of your company.",
      "projectAlias": "View my projects"
    },
    "about": {
      "desc": "<p>My name is Elfried Fortunatus KIDJE. As a <span class='color-link'>full stack web developer</span>, I have gained extensive experience using a variety of technologies to create innovative and efficient web applications, both in frontend and backend.<p>In frontend, I use <span class='color-link'>HTML3, CSS3, JavaScript (ES5+), TypeScript, jQuery (if needed), ReactJS and VueJS</span> to create responsive and friendly user interfaces I also use Tailwind CSS or Bootstrap to improve user experience by creating responsive and attractive websites.</p><p>En. backend, I love coding with <span class='color-link'>PHP (Laravel) and NodeJS</span> to develop robust RESTful APIs and scalable web applications. I also have some knowledge of <span class language. ='color-link'>Python (Django)</span> Without forgetting database management with <span class='color-link'>MySQL or PostgreSQL</span>.</p><p>. Additionally, I am proficient in using <span class='color-link'>Linux distributions</span>, as well as version management tools such as <span class='color-link'>Git / Bitbucket</span>. I am also comfortable with <span class='color-link'>Docker</span> containers for deploying web applications.</p><p>I am passionate about software development and I I have a strong track record of collaborating with cross-functional teams to deliver innovative, tailored solutions to my clients. I'm always learning and keeping up to date with the latest trends and technologies in web development, and I love sharing my knowledge with other team members.</p><p>If you looking for an experienced and passionate full stack web developer who can work effectively in a team, I would be happy to discuss your needs and help you achieve your goals. Do not hesitate to contact me to discuss your project and how I could contribute to it.</p><p>Summary of the technologies I used: </p>",

      "techs": [
      "<i class='fab fa-html5 me-2'></i><span>HTML5/CSS3</span>",
      "<i class='fab fa-css3 me-2'></i><span>Tailwind CSS & Bootstrap</span>",
      "<i class='fab fa-js me-2'></i><span>JavaScript (ES5+) & jQuery</span>",
      "<i class='fa fa-code me-2'></i><span>TypeScript</span>",
      "<i class='fab fa-react me-2'></i><span>ReactJS</span>",
      "<i class='fab fa-vuejs me-2'></i><span>VueJS</span>",
      "<i class='fab fa-php me-2'></i><span>PHP (Laravel)</span>",
      "<i class='fab fa-node me-2'></i><span>NodeJs (Express, Adonis)</span>",
      "<i class='fa fa-database me-2'></i><span>MySQL & Postgres</span>",
      "<i class='fab fa-python me-2'></i><span>Python (Django)</span>",
      "<i class='fab fa-docker me-2'></i><span>Docker</span>",
      '...'
    ],
      "myImage": {
        "src": "/static/img/me-nobg.png",
        "alt": "Elfried Fortunatus KIDJE"
      }
    },
    "enterprises": {
      "names": ["Freelancer", "Futura Vision", "Ellipse Software", "Clic Almani Sarl"],
      "desc": {
        "Freelancer": {
          "name": "Freelancer",
          "post": "Full stack web developer",
          "startDate": "Jan 2023",
          "endDate": "Present",
          "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Complete Web Application Development.</p>\
          <p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Project Management and Customer Communication.</p>\
          <p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Ongoing Maintenance and Support.</p>"
        },
        "Futura Vision": {
          "name": "Futura Vision",
          "post": "Full Stack Web Developer",
          "startDate": "2022",
          "endDate": "Jan 2023",
          "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Development of the Neptune application (Shop management system online)</p>\
            <p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Development of showcase websites, secure APIs and language libraries (FuturaJS ,...)</p>\
            <p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Skills in deploying web applications.</p>"
          },
        "Ellipse Software": {
          "name": "Ellipse Software",
            "post": "Backend Developer",
            "startDate": "Jan 2021",
            "endDate": "Jan 2022",
            "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Realization of the Immobilia project (a real estate rental platform ) as a backend developer.</p>\
            <p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Use of Backend frameworks for the development of web application APIs.</p> \
            <p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Using JavaScript frameworks for frontend development.</p>"
        },
        "Clic Almani Sarl": {
          "name": "Clic Almani Sarl",
          "post": "Frontend Developer",
          "startDate": "June 2020",
          "endDate": "September 2020",
          "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>User interface (UI) development</p> \
          <p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Integration with Backend APIs</p>\
          <p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Testing and Debugging</p>"
        },
      }
    },
    "projects": [
      {
        'img': '/static/img/friedshop.png',
        'type': 'Full Stack',
        'name': 'FriedShop',
        'classRow': 'flex-lg-row-reverse',
        'classDescText': 'text-start',
        'style': {right: '0'},
        'description': "FriedShop is an e-commerce platform that allows the online sale of items of various types, with an integrated payment system.",
        'techs': ['ReactJS', 'Redux', 'Laravel', 'Rest API'],
        'links': {
          'github': 'https://github.com/v1p3r75/friedshop-front-react',
          'external': 'https://fortunatus-ek.vercel.app',
        }
      },
      {
        'img': '/static/img/neptune.png',
        'type': 'Full Stack',
        'name': 'Neptune',
        'classRow': '',
        'classDescText': 'text-end',
        'style': {right: '20%'},
        'description': "Neptune is a web application for inventory management with automatic invoicing system, inventory management for different stores.",
        'techs': ['HTML5', 'CSS', 'JavaScript', 'Jquery', 'PHP', 'cI4'],
        'links': {
          'github': 'https://github.com/v1p3r75/Neptune',
          'external': 'https://neptune.kabirou-alassane.com/',
        }
      },{
        'img': '/static/img/floky.png',
        'type': 'Backend',
        'name': 'Floky',
        'classRow': 'flex-lg-row-reverse',
        'classDescText': 'text-start',
        'style': {right: '0'},
        'description': "Floky is an MVC (Model-View-Controller) framework for developing web applications in PHP. It offers an organized structure for your code, powerful features and flexibility to create robust and scalable web applications .",
        'techs': ['PHP', 'Framework'],
        'links': {
          'github': 'https://github.com/v1p3r75/floky',
          'external': 'https://floky-docs.vercel.app',
        }
      },
      {
        'img': '/static/img/timetable.png',
        'type': 'Full Stack',
        'name': 'TimeTable',
        'classRow': '',
        'classDescText': 'text-end',
        'style': {right: '20%'},
        'description': "TimeTable is an application that allows you to manage timetables in a school.",
        'techs': ['Python', 'Django'],
        'links': {
          'github': 'https://github.com/v1p3r75/TimeTable',
          'external': 'https://timetableapp.pythonanywhere.com/',
        }
      },
      {
        'img': '/static/img/nexa.png',
        'type': 'Backend',
        'name': 'NexaORM',
        'classRow': 'flex-lg-row-reverse',
        'classDescText': 'text-start',
        'style': {right: '0'},
        'description': "NexaORM is a modern PHP object-relational mapping (ORM) library designed to simplify database interactions and streamline PHP application development.",
        'techs': ['PHP', 'Library', 'ORM', 'Database'],
        'links': {
          'github': 'https://github.com/v1p3r75/NexaORM',
          'external': 'https://nexa-orm.vercel.app',
        }
      },
 
      {
        'img': '/static/img/futurajs.png',
        'type': 'Front End',
        'name': 'FuturaJS',
        'classRow': '',
        'classDescText': 'text-end',
        'style': {right:'20%'},
        'description': "A small JavaScript library for common tasks like carousel, exception, animation handler and more...",
        'techs': ['HTML5', 'CSS', 'JavaScript', 'ES6+'],
        'links': {
          'github': 'https://github.com/v1p3r75/FuturaJS',
          'external': 'https://fortunatus-ek.vercel.app',
        }
      },
     
    ],
    "contacts": {
      'title' : 'Contact Me',
      'text' : 'Do you have a project in mind where you want to contact me for a reason? Please complete this form below and click Submit',
      'textButton' : 'Submit',
      'positionImg': '/static/img/position.png',

    },
    "socialsLinks": {
      'github' : 'https://www.github.com/v1p3r75',
      'twitter': 'https://www.twitter.com/Fried75',
      'instagram': 'https://www.instagram.com/Fried75',
      'linkedin': 'https://www.linkedin.com/in/fortunatus-ek/',
      'whatsapp': 'https://wa.me/+22996457545'
    },
  }
  
export default en;