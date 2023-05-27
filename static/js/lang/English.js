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
      "cvLink": "/static/files/cv-elfried-fortunatus-kidje-update.pdf"
    },
    "banner": {
      "hello": "Hi, my name is",
      "myName": "Fortunatus KIDJE",
      "subtitle": "Web & Mobile Developper",
      "desc": "Young graduate, I have 3 years of experience as a Web & Mobile Developer which allowed me to participate in several projects. I am a real enthusiast and have a good relational sense that I will be able to put at the service of your company.",
      "projectAlias": "Watch my projects",
    },
    "about": {
      "desc": "<p>My name is Elfried Fortunatus KIDJE. As a <span class='color-link'>full stack web developer</span>, I have gained extensive experience using a variety of technologies to create innovative and efficient web applications, both in frontend and in backend.<p>In frontend, I use <span class='color-link'>HTML3, CSS3, JavaScript (ES5+), TypeScript, jQuery, ReactJS and VueJS</span> to create responsive and user-friendly user interfaces. I also use Bootstrap to improve user experience by creating responsive and engaging websites.</p><p>Backend I am proficient in <span class='color-link'>PHP ( Laravel ) and NodeJS </span> to develop robust RESTful APIs and scalable web applications. I also have a solid experience in CodeIgniter, which allows me to create fast and secure web applications and some knowledge of the <span class='color-link'>Python3 (Django)</span> language. Without forgetting the management of databases with <span class='color-link'>MySQL or PostgreSQL</span>.</p><p>In mobile programming, I use the technology <span class='color- link'>React Native</span> for designing mobile applications in a fast and efficient way.</p><p>In addition, I am proficient in the use of <span class='color-link'>distributions Linux</span>, as well as in version management tools such as <span class='color-link'>Git / Bitbucket</span>. I am also comfortable with <span class='color-link'>Docker</span> containers for web application deployment.</p><p>I am passionate about software development and I I have a strong history of working with cross-functional teams to deliver innovative, tailored solutions to my clients. I'm always learning and keeping up to date with the latest web development trends and technologies, and I enjoy sharing my knowledge with other team members.</p><p>If you are looking for an experienced and passionate full stack web developer who can work effectively in a team, I would be happy to discuss your needs and help you achieve your goals. Feel free to contact me to discuss your project and how I could contribute to it.</p><p>Summary of the technologies I used: </p>",
      "techs": [
        "<i class='fab fa-html5 me-2'></i><span>HTML5/CSS3</span>",
        "<i class='fab fa-js me-2'></i><span>JavaScript (ES5+)</span>",
        "<i class='fab fa-bootstrap me-2'></i><span>Bootstrap & jQuery</span>",
        "<i class='fab fa-react me-2'></i><span>ReactJS</span>",
        "<i class='fab fa-vuejs me-2'></i><span>VueJS</span>",
        "<i class='fab fa-python me-2'></i><span>Python 3</span>",
        "<i class='fab fa-php me-2'></i><span>PHP/MySQL</span>",
        "<i class='fab fa-laravel me-2'></i><span>Laravel</span>",
        "<i class='fab fa-php me-2'></i><span>CodeIgniter 4+</span>",
        "<i class='fab fa-node me-2'></i><span>NodeJs</span>",
        "<i class='fa fa-code me-2'></i><span>TypeScript</span>",
        "<i class='fa fa-mobile me-2'></i><span>React Native</span>",
        "<i class='fa fa-mobile me-2'></i><span>Docker</span>",
        '...'
      ],
      "myImage": {
        "src": "/static/img/fortunatus-kidje.png",
        "alt": "Elfried Fortunatus KIDJE"
      }
    },
    "enterprises": {
      "names" : ["Futura Vision", "Ellipse Software", "Clic Almani Sarl"],
      "desc" : {
          "Futura Vision" : {
            "name": "Futura Vision",
            "post": "Web & Mobile Developer",
            "startDate": "2022",
            "endDate": "Present",
            "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>I'm currently working on several projects as a full stack developer.</ p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>We mostly work as Freelancers.</p>"
          },
        "Ellipse Software" : {
          "name": "ELlipse Software",
            "post": "Backend Developer",
            "startDate": "Jan 2021",
            "endDate": "Jan 2022",
            "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Realization of the Immobilia project (a real estate rental platform) as a backend developer.</p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Learning in backend programming with technologies (framework) CodeIgniter4 and Laravel.</p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Using ReactJS / VueJS framework for development Frontend.</p>"
        },
        "Clic Almani Sarl" : {
          "name": "Clic Almani Sarl",
          "post": "Frontend Developer",
          "startDate": "Juin 2020",
          "endDate": "Septembre 2020",
          "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Improved my level in HTML5, CSS3, Bootstrap 5.</p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Make websites dynamic with JavaScript and jQuery.</p>"
        },
      }
    },
    "projects": [
      
      {
        'img': '/static/img/neptune.png',
        'type': 'Full Stack',
        'name' : 'Neptune',
        'classRow': '',
        'classDescText': 'text-end',
        'style': {right: '20%'},
        'description' : "Neptune is a stock management web application with automatic billing system, inventory management of various shops.",
        'techs': ['HTML5', 'CSS', 'JavaScript', 'Jquery', 'PHP', 'cI4'],
        'links': {
          'github' : 'http://github.com/v1p3r75/Neptune',
          'external' : 'http://fortunatus-ek.vercel.app',
        }
      },
      {
        'img': '/static/img/friedshop.png',
        'type': 'Full Stack',
        'name' : 'FriedShop',
        'classRow': 'flex-lg-row-reverse',
        'classDescText': 'text-start',
        'style': {right: '0'},
        'description' : "FriedShop is an e-commerce platform that allows the online sale of items of various types, with an integrated payment system.",
        'techs': ['ReactJS', 'Redux', 'Laravel', 'Rest API'],
        'links': {
          'github' : 'http://github.com/v1p3r75/friedshop-front-react',
          'external' : 'http://fortunatus-ek.vercel.app',
        }
      },
      {
        'img': '/static/img/futurajs.png',
        'type': 'Front End',
        'name' : 'FuturaJS',
        'classRow': '',
        'classDescText': 'text-end',
        'style': {right:'20%'},
        'description' : " A small JavaScript library for common tasks such as Carousel, Exception, Animation handler and more...",
        'techs': ['HTML5', 'CSS', 'JavaScript', 'ES6+'],
        'links': {
          'github' : 'http://github.com/v1p3r75/FuturaJS',
          'external' : 'http://fortunatus-ek.vercel.app',
        }
      },
      {
        'img': '/static/img/comfortable.png',
        'type': 'Back End',
        'name' : 'Comfortable PHP',
        'classRow': 'flex-lg-row-reverse',
        'classDescText': 'text-start',
        'style': {right: '0'},
        'description' : "comfortable is a simple php framework that allows developers to quickly integrate their sites or web applications in a secure and very simple way.",
        'techs': ['PHP', 'Apache 2', 'HTML5', 'CSS', 'JavaScript',],
        'links': {
          'github' : 'http://github.com/v1p3r75/Comfortable',
          'external' : 'http://fortunatus-ek.vercel.app',
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