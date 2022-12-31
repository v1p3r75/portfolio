/**
 * WebSite : http://www.fortunatus-ek.com
 * Author: Fortunatus Elfried KIDJE -vp3r 75)
 * French File Configuration
 */


const fr = {
    
  "headers": {
    "logo": "F",
    "navs": [
      { "name" : "A propos", "tag": "#About"},
      { "name" : "Expériences", "tag": "#Experiences"},
      { "name" : "Mes Projets", "tag": "#Projects"},
      { "name" : "Contacts", "tag": "#Contacts"},
    ],
    "navsTag": ["#About","#Experiences", "#Projects", "#Contacts"],
    "cvLink": "/static/files/cv-elfried-fortunatus-kidje.pdf"
  },
  "banner": {
    "hello": "Salut, Je suis",
    "myName": "Fortunatus EK",
    "subtitle": "Développeur Web & Mobile",
    "desc": "Jeune diplômé, j’ai une expérience de 3 ans en tant que Développeur Web & Mobile ce qui m’a permit de particier à plusieurs projets. Je suis un vrai passionné et ai un bon sens relationnel que je sauraimettre au service de votre entreprise."
  },
  "about": {
    "desc": "<p>Hello! My name is Fortunatus EK. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque distinctio molestiae vel ipsam iusto dicta, et eum dolores minus quam qui aperiam totam fugiat exercitationem harum accusamus repellat explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing <span class='color-link'>Asperiores doloremque distinctio molestiae</span> vel ipsam iusto dicta, <span class='color-link'>et eum dolores minus quam qui aperiam</span> totam <span class='color-link'>fugiat exercitationem harum accusamus repellat explicabo</span>. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p>Lorem ipsum dolor sit amet consectetur <span class='color-link'>adipisicing elit</span>. Asperiores doloremque distinctio molestiae vel ipsam iusto dicta, et eum dolores minus quam qui aperiam totam fugiat exercitationem harum accusamus repellat explicabo!</p><p>La liste de quelques technologies que j'ai eu a utilisé : </p>",

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
      "src": "./static/img/me.jpg",
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
          "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>J'y travaille actu sur plusieurs projects ent tant que developpeur full Stack.</p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Nous travaillons la plutart du temps en Freelancer.</p>"
        },
      "Ellipse Software" : {
        "name": "ELlipse Software",
          "post": "Developpeur BackEnd",
          "startDate": "Jan 2021",
          "endDate": "Jan 2022",
          "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Réalisation du projet Immobilia (une plate forme de location de biens immobiliers) en tant que developpeur backend.</p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Apprentissage en programmation backend avec les technologies (framework) CodeIgniter4 et Laravel.</p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Utilisation du framework ReactJS / VueJS pour le developpement Frontend.</p>"
      },
      "Clic Almani Sarl" : {
        "name": "Clic Almani Sarl",
        "post": "Stagiaire",
        "startDate": "Juin 2020",
        "endDate": "Septembre 2020",
        "roles": "<p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Amélioration de mon niveau en HTML5, CSS3, Bootstrap 5.</p><p class='fw-normal'><i class='fa fa-arrow-right me-3 color-link'></i>Rendre les sites web dynamiques avec le JavaScript et jQuery.</p>"
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
    'title' : 'Me Contacter',
    'text' : 'Avez-vous un projet en tête où vous voulez-vous me contacter pour une raison ? Veillez remplir ce formulaire ci-dessous et cliquer sur Envoyer',
    'textButton' : 'Envoyer',
  },
  "socialsLinks": {
    'github' : 'https://www.github.com/v1p3r75',
    'twitter': 'https://www.twitter.com/Fried75',
    'instagram': 'https://www.instagram.com/Fried75',
    'linkedin': 'https://www.linkedin.com/',
    'whatsapp': 'https://wa.me/+22996457545'
  },
}

export default fr;