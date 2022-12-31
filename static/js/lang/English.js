/**
 * WebSite : http://www.fortunatus-ek.com
 * Author: Fortunatus Elfried KIDJE -vp3r 75)
 * English File Configuration
 */

const en = {
    
    "headers": {
      "logo": "F",
      "navs": [
        { "name" : "About", "tag": "#About"},
        { "name" : "Experience", "tag": "#Experiences"},
        { "name" : "Works", "tag": "#Projects"},
        { "name" : "Contact", "tag": "#Contacts"},
      ],
      "navsTag": ["#About","#Experiences", "#Projects", "#Contacts"],
      "cvText": "Resume",
      "cvLink": "#cvLink"
    },
    "banner": {
      "hello": "Hi, my name is",
      "myName": "Fortunatus EK",
      "subtitle": "Web & Mobile Developper",
      "desc": "Young graduate, I have 3 years of experience as a Web & Mobile Developer which allowed me to participate in several projects. I am a real enthusiast and have a good relational sense that I will be able to put at the service of your company."
    },
    "about": {
      "desc": "<p>After graduating as a Computer Installation and Maintenance Technician in 2021, I completed various professional internships and worked under fixed-term contracts in various companies operating in the fields of <span class='color-link'>mobile & web programming.</span> I sold my first software when I was in high school. For the development of applications and websites, I mainly use <span class='color-link'>laravel and symfony </span>for the creation, redesign and maintenance of websites and web applications without forgetting the essential tools of front-end development such as html, css and javascript. I also master <span class='color-link'> Node.js, AngularJS, VueJS, ReactJs, Python (Django) technologies.</span> I know how to design management applications (stocks, human resources, invoicing, ERP, CRM) for companies whatever their size. I can also develop applications that can allow you to interact with maps or plans. I developed a human resources management application and an invoicing application on behalf of BHT SARL, which has around ten shops. I was a <span class='color-link'> backend developer</span> within the company Ellipse Software which allowed me to work in a team on several interesting projects. Currently I am a fullstack developer within the startup FuturaVision which specializes in <span class='color-link'>the design of Web & mobile applications.</span></p><p>Here is a list of technologies I had to use during the projects: </p>",
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
        "<i class='fa fa-mobile me-2'></i><span>Flutter</span>",
        '...'
      ],
      "myImage": {
        "src": "",
        "alt": "Elfried Fortunatus KIDJE"
      }
    },
    "enterprises": {
      "names" : ["Futura Vision", "Ellipse Software", "Clic Almani Sarl"],
      "desc" : {
          "Futura Vision" : {
            "name": "Futura Vision",
            "post": "Developpeur Web & Mobile",
            "startDate": "2022",
            "endDate": "Present",
            "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>I'm currently working on several projects as a full stack developer.</ p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>We mostly work as Freelancers.</p>"
          },
        "Ellipse Software" : {
          "name": "ELlipse Software",
            "post": "Developpeur BackEnd",
            "startDate": "Jan 2021",
            "endDate": "Jan 2022",
            "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Realization of the Immobilia project (a real estate rental platform) as a backend developer.</p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Learning in backend programming with technologies (framework) CodeIgniter4 and Laravel.</p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Using ReactJS / VueJS framework for development Frontend.</p>"
        },
        "Clic Almani Sarl" : {
          "name": "Clic Almani Sarl",
          "post": "Stagiaire",
          "startDate": "Juin 2020",
          "endDate": "Septembre 2020",
          "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Improved my level in HTML5, CSS3, Bootstrap 5.</p>< p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Make websites dynamic with JavaScript and jQuery.</p>"
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
        'techs': ['HTML5', 'CSS', 'JavaScript', 'Jquery', 'PHP', 'CodeIgniter4'],
        'links': {
          'github' : 'http://github.com/v1p3r75/Neptune',
          'external' : 'http://fortunatus-ek.vercel.app',
        }
      },
      {
        'img': '/static/img/futurajs.png',
        'type': 'Front End',
        'name' : 'FuturaJS',
        'classRow': 'flex-lg-row-reverse',
        'classDescText': 'text-start',
        'style': {right:'0'},
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
        'classRow': '',
        'classDescText': 'text-end',
        'style': {right: '20%'},
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