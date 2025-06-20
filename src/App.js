import { useEffect, useState } from "react";
import "./App.css";
import jennyImage from './images/jenny.png';
import aboutImage from './images/about.png';
import designImage from './images/design.png';
import mobileImage from './images/mobile.png';
import webImage from './images/web.png';
import astrominds from './images/astromind.mp4';
import businesss from './images/business.mp4';
import diarealapp from './images/diarealApp.mp4';
import color from './images/colorgame.mp4';
import coast from './images/coast.mp4';
import scs from "./images/scs.mp4";
import cct from "./images/cct.mp4";
import crud from "./images/crud.mp4";
import snap from "./images/snap.mp4";
import brochure from "./images/brochure.mp4";
import bizshop from "./images/bizshop.png";
import sommo from "./images/sommo.png";
import explorer from "./images/explorer.png";
import snapp from "./images/snapp.png";
import crudd from "./images/crudd.png";
import hotel from "./images/hotel.png";
import info from "./images/info.png";
import cctt from "./images/cctt.png";
import som from "./images/som.png";





function App() {
  const [activeSection, setActiveSection] = useState('');

  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Mobile');

// Move projects array here so it's accessible in JSX
const projects = [
  {
    id: 1,
    category: 'Mobile',
    image: bizshop,
    tech: 'FLUTTER | MYSQL | PHP',
    title: 'Business Listing Shop Application',
    description: 'An app where local shops and entrepreneurs can create business pages, share their services, and get discovered by nearby users.',
  link: 'https://github.com/ImJennyLyn/Finding'
  },
  {
    id: 2,
    category: 'Mobile',
    image: sommo,
    tech: 'FLUTTER | FIREBASE',
    title: 'Soil Moisture Monitoring Application',
    description: 'SOMO Application Served as the user interface for farmers, allowing them to monitor and receive notification of  real-time soil moisture and surrounding conditions including the temperature and humidity.',
      link: 'https://github.com/dheljohn/soil_monitoring_git'

  },
  {
    id: 3,
    category: 'Mobile',
    image: explorer,
    tech: 'FLUTTER | FIREBASE',
    title: 'Astromind Explore Mini Games',
    description: 'Astromind Explorer is a one-of-a-kind game that combines challenges and luck-based fun in a seamless way. It provides a variety of activities and personalized brain exercises for an engaging experience',
    link: 'https://github.com/ImJennyLyn/Astromind-Explorer'
  },
  {
    id: 4,
    category: 'Website',
    image: hotel,
    tech: 'REACT JS| PHP | MYSQL',
    title: 'The Coast Hotel Booking Website',
    description: 'The Coast is a hotel room booking website built with React.js. It allows users to browse, view, and book hotel rooms easily with a clean and modern interface',
    link:'https://github.com/ImJennyLyn/Hotel-Booking-System---The-Coast'
  },
  {
     id: 5,
    category: 'Website',
    image: snapp,
    tech: 'REACT JS| PHP | MYSQL',
    title: 'Snap Photobooth Website',
    description: 'Snap PhotoBooth is a web-based photo booth application that allows users to capture photos using their webcam, edit them by adding stickers and text, and then save or download the final images.',
    link: 'https://github.com/ImJennyLyn/snap-photobooth'
  },
  {
     id: 6,
    category: 'Website',
    image: crudd,
    tech: 'HTML | TAILWIND | PHP | MYSQL',
    title: 'CRUD Operation Task',
    description: 'CRUD is a basic yet beautifully organized website where you can create, read, update, and delete information — like a mini admin system.It reflects how web apps work behind the scenes in real time.',
 link:'https://github.com/ImJennyLyn/CRUD_PHP'
  },
  {
    id: 7,
    category: 'Design',
    image: som,
    tech: 'CANVA',
    title: 'Soil Moisture App Brochure',
    description: 'A collection of my creative design projects.',
  },
   {
    id: 8,
    category: 'Design',
    image: cctt,
    tech: 'CANVA',
    title: 'Program Cover Brochure',
    description: 'A collection of my creative design projects.',
  },
   {
    id: 9,
    category: 'Design',
    image: info,
    tech: 'CANVA ',
    title: 'Soil Moisture System Infographics',
    description: 'A collection of my creative design projects.',
  },
  // Add more as needed
];

useEffect(() => {
// PROJECTS PAGINATION (unchanged)
const container = document.querySelector('.projects-container');
const boxes = container ? Array.from(container.querySelectorAll('.project-box')) : [];
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentPage = 0;
const boxesPerPage = 9;
let pages = [];

function groupIntoPages() {
  if (!container) return;
  container.innerHTML = '';
  pages = [];

  for (let i = 0; i < boxes.length; i += boxesPerPage) {
    const page = document.createElement('div');
    page.classList.add('projects-page');
    if (i === 0) page.classList.add('active');
    boxes.slice(i, i + boxesPerPage).forEach(box => page.appendChild(box));
    container.appendChild(page);
    pages.push(page);
  }
}

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });

  if (leftBtn && rightBtn) {
    leftBtn.style.display = index === 0 ? 'none' : 'inline-block';
    rightBtn.style.display = index === pages.length - 1 ? 'none' : 'inline-block';
  }
}

if (leftBtn && rightBtn) {
  leftBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  rightBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });
}

groupIntoPages();
showPage(currentPage);



// ✅ SCROLL HEADER LOGIC — fixed
const handleScroll = () => {
  setScrolled(window.scrollY > 10);
};

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', handleActiveLinks);

  // ROLE TYPING EFFECT (unchanged)
  const roleElement = document.querySelector('.role');
  const texts = ["A Computer Science Student"];
  let currentTextIndex = 0;
  let currentCharIndex = 0;
  let isErasing = false;

  function type() {
    if (!roleElement) return;
    if (!isErasing && currentCharIndex < texts[currentTextIndex].length) {
      roleElement.textContent = texts[currentTextIndex].substring(0, currentCharIndex + 1);
      currentCharIndex++;
      setTimeout(type, 150);
    } else if (isErasing && currentCharIndex > 0) {
      roleElement.textContent = texts[currentTextIndex].substring(0, currentCharIndex + 1);
      currentCharIndex--;
      setTimeout(type, 100);
    } else if (currentCharIndex === texts[currentTextIndex].length) {
      isErasing = true;
      setTimeout(type, 1000);
    } else if (isErasing && currentCharIndex === 0) {
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      isErasing = false;
      setTimeout(type, 500);
    }
  }

  type();

  // NAVBAR ACTIVE LINK ON SCROLL (unchanged)
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
const handleActiveLinks = () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  setActiveSection(current); // ✅ update the active section state

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
};


  // BURGER MENU TOGGLE (unchanged)
  window.toggleMenu = function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    const burger = document.querySelector('.burger');
    burger.classList.toggle('active');
  };

  // PROJECT FILTER BUTTONS (unchanged)
  const buttons = document.querySelectorAll('.tab-button');
  const project = document.querySelectorAll('.project-box');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        project.style.display = category === 'all' || projectCategory === category ? 'block' : 'none';
      });
    });
  });

  // ✅ Clean up all scroll listeners properly
   return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('scroll', handleActiveLinks);
  };

}, []);

  return (
    <>
<header className={scrolled ? 'scrolled' : ''}>
        <h1 className="logo">JENNY</h1>
        <div class="burger" onclick="toggleMenu()">
      <div></div>
      <div></div>
      <div></div>
    </div>
       <nav id="navbar">
  <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
  <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
  <a href="#Myexperience" className={activeSection === 'Myexperience' ? 'active' : ''}>Experience</a>
  <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
  <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
  <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
  <a href="#contact-section" className={`contact-nav ${activeSection === 'contact-section' ? 'active' : ''}`}>Contact</a>
</nav>


      </header>

<section id="home" className="home">
  <div className="home-content">
    <h2 className="home-h2">Jenny Lyn Vallador</h2>

    <div className="home-buttons">
      <a href="#projects" className="btn btn-works">View My Works</a>
      <a href="#contact-section" className="btn btn-contact">Contact Me</a>
    </div>
  </div>
</section>




      <section id="about" className="about">
        <h2 className="about-title">Something About Me


</h2>
        <div className="about-container">
          <div className="about-text">
       <p style={{ whiteSpace: 'pre-line' }}>
  {`Hello! I'm Jenny, an aspiring Front-End Developer, Flutter Developer, 
  and Designer with hands-on experience in developing  a mobile business 
  application as a freelance project using Flutter. I'm passionate about 
  creating engaging user experiences and intuitive interfaces across web 
  and mobile platforms. I'm eager to further develop my skills in web 
  and mobile design, front-end technologies, and modern frameworks. 
  I'm looking for an opportunity to contribute to dynamic projects and 
  grow as a professional in the field.`}
</p>


          </div>
          <div className="about-boximage">
             <div className="about-images">
<img src={aboutImage} alt="About Jenny" />
          </div>
           
          </div>
         
        </div>
      </section>

 
{/* Services */}
      <section id="services" className="services">
        <h2 className="service-header">What can I offer?</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="design">
<img src={designImage} alt="Design" />
            </div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              
      I design clean and thoughtful interfaces using <strong>Figma</strong>, <strong>Framer</strong>, and <strong>Canva</strong>. Every layout I create is focused on smooth flow, visual harmony, and user-centered design.
            </p>
          </div>

          <div className="service-card">
            <div className="design">
<img src={mobileImage} alt="Mobile" />
            </div>
            <h3 className="service-title">Mobile Dev</h3>
           <p className="service-description">
             I create modern cross-platform apps using <strong>Flutter</strong> and <strong>Dart</strong>. Whether it’s a simple idea or a full app, I focus on performance and aesthetic experience for Android
            </p>
          </div>

          <div className="service-card">
            <div className="design">
<img src={webImage} alt="Web" />
            </div>
            <h3 className="service-title">Web Dev</h3>
             <p className="service-description">
             I build responsive and elegant websites using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>. From static pages to dynamic web apps, I make sure your site looks beautiful on every screen.
            </p>
            
          </div>
        </div>
      </section>

      
     
   <section id="Myexperience" className="experience-section">
  <div className="experience-wrapper">
    {/* Right Side Experience List */}
    <div className="experience-card-container">
      <div className="experience-header">
     
        <h2>My Work Experience</h2>
      </div>

      <div className="experience-item fade-in">
        <div className="experience-box">
          <span className="experience-date">Nov. 2024 – Apr. 2025</span>
          <h3>Freelance Mobile App Developer</h3>
          <p className="experience-company">Neuralcore</p>
          <p className="experience-desc">Developed cross-platform mobile applications using Flutter, PHP and MYSQL for startup clients.</p>
        </div>
      </div>

      <div className="experience-item fade-in">
        <div className="experience-box">
          <span className="experience-date">Jul. 2024 – Sept. 2024</span>
          <h3>Junior Web Developer</h3>
          <p className="experience-company">HR Primo Services</p>
          <p className="experience-desc">Assisted in building and maintaining web applications using HTML, CSS, JavaScript, and Tailwind.</p>
        </div>
      </div>

      <div className="experience-item fade-in">
        <div className="experience-box">
          <span className="experience-date">2022 – 2023</span>
          <h3>Graphic Designer</h3>
          <p className="experience-company">School of Computer Studies</p>
          <p className="experience-desc">Created marketing visuals and social media graphics using Canva.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="skills" className="skills-section">
  <div className="skills-wrapper">
    {/* Left side: Heading */}
    <div className="skills-heading">
      <h2 className="skills-h2">
        My Stack: Tools That Help <br /> Bring Ideas to Life
      </h2>
    </div>

    {/* Right side: Skill Categories */}
    <div className="skills-content">
      {[
        {
          title: 'Front-End',
          skills: [
            { icon: 'fa-html5', name: 'HTML' },
            { icon: 'fa-css3-alt', name: 'CSS' },
            { icon: 'fa-js', name: 'JavaScript' },
            { icon: 'fa-bootstrap', name: 'Bootstrap' },
            { icon: 'fa-flutter', name: 'Flutter' },
            { icon: 'fa-tailwind', name: 'Tailwind' },
            { icon: 'fa-react', name: 'React js' },
          ]
        },
        {
          title: 'Back-End',
          skills: [
            { icon: 'fa-database', name: 'MySQL' },
            { icon: 'fa-php', name: 'PHP' },
            { icon: 'fa-fire', name: 'Firebase' },
          ]
        },
        {
          title: 'Designing',
          skills: [
            { icon: 'fa-figma', name: 'Figma' },
            { icon: 'fa-palette', name: 'Canva' },
            { icon: 'fa-vector-square', name: 'Framer' },
          ]
        },
        {
          title: 'Version Control',
          skills: [
            { icon: 'fa-github', name: 'GitHub' },
            { icon: '', name: 'Git' },
          ]
        },
      ].map((category, index) => (
       <div
    className={`skill-category-box fade-in ${category.title === 'Front-End' ? 'frontend-skill-box' : ''}`}
    key={index}
  >
    <div className="skill-right">
      <h3 className="skill-head">{category.title}</h3>
      <div className="skills-grid">
        {category.skills.map((skill, i) => (
          <div className="skill-box" key={i}>
            <i className={`fa-brands ${skill.icon}`}></i> {skill.name}
          </div>
        ))}
      </div>
    </div>
  </div>
))}
    </div>
  </div>
</section>

{/* Project Section */}
<section id= "projects" className="project-section">
  <div className="project-wrapper">
    {/* Left Column */}
    <div className="project-left">
      <h2 className="project-h2">A Glimpse of My Works</h2>
 <div className="project-buttons"> 
  <button
    className={`filter-button ${selectedCategory === 'Mobile' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Mobile')}
  >
    Mobile
  </button>
  
  <button
    className={`filter-button ${selectedCategory === 'Website' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Website')}
  >
    Website
  </button>
  
  <button
    className={`filter-button ${selectedCategory === 'Design' ? 'active' : ''}`}
    onClick={() => setSelectedCategory('Design')}
  >
    Design
  </button>
</div>
<div className="project-description-left">
  <p>
Here are some of my recent works that showcase my skills in mobile app development, web development, and design.
   You can explore more details by clicking on each project.  < br />
   <br/>
    To view additional projects, feel free to visit my Git repository.
    <a 
      href="https://github.com/ImJennyLyn?tab=repositories" 
      className="view-more-link" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      View More Projects
    </a>
  </p>
</div>



    </div>

    {/* Right Column */}
    <div className="project-right">
  {projects
    .filter((project) => project.category === selectedCategory)
    .map((project) => (
      <div className="project-card" key={project.id}>
        {project.category === 'Design' ? (
         <a href={project.image} target="_blank" rel="noopener noreferrer" className="project-image-wrapper">
  <img src={project.image} alt={project.title} className="project-image" />
  <div className="overlay-text">Preview</div>
</a>

        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-image-wrapper"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="overlay-text">View More</div>
          </a>
        )}

        <div className="project-content">
          <p className="project-category">{project.tech}</p>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
        </div>
      </div>
    ))}
</div>

</div>


</section>

<section id="contact-section" className="contact-section">

  {/* Left Column */}
 <section className="contact-info">
  <h2>Get in Touch with Me</h2>
  <p>Let’s work together or simply connect. <br/>Send me a message or email anytime.</p>


  <div className="contact-links">
    <a href="mailto:vallador.jennlyn10@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-envelope"></i> vallador.jennylyn10@gmail.com
    </a>
    
    <a href="https://github.com/ImJennyLyn" className="contact-link" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i> github.com/ImJennyLyn
    </a>

    <a href="https://www.linkedin.com/in/jenny-lyn-vallador-bb0502368/" className="contact-link" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i> linkedin.com/in/jenny-lyn-vallador
    </a>

    <a href="https://www.facebook.com/jennylyn.vallador" className="contact-link" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i> facebook.com/jennylyn.vallador
    </a>
  </div>
</section>


  {/* Right Column */}
  <section className="contact-form">
    <form action="mailto:vallador.jennylyn10@gmail.com" method="POST" encType="text/plain">

      <input type="text" name="name" placeholder="Your Name" required className="input-field" />

      <input type="email" name="email" placeholder="Your Email" required className="input-field" />

      <textarea name="message" placeholder="Your Message" required className="message-input"></textarea>

      <button type="submit" className="submit-button">Send Message</button>
      
    </form>
  </section>

</section>


      
         <div class="footer">
       
              <p class="footer-text">✦✧✦ Crafted in a cozy corner of the universe — by Jenny ✦✧✦</p>
<p class="footer-text">&copy; 2025 All rights reserved.</p>

        
    </div>
               
    </>
  );
}

export default App;
