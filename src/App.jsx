import { useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './App.scss'

function App() {
  const [count, setCount] = useState(0)


  {/*ABOUT ME*/}
  const AboutMe = () => {
  const cards = [
    {
      title: "Clean & Maintainable UI",
      description:
        "I focus on writing clean, readable code and building interfaces that are easy to use and maintain.",
    },
    {
      title: "Responsive Design",
      description:
        "I ensure websites look and work great across all screen sizes and devices.",
    },
    {
      title: "Performance & Accessibility",
      description:
        "I care about performance and accessibility to deliver fast and inclusive user experiences.",
    },
  ];

  return (
    <section className="about-me">
      <div className="intro">
        <h2>About Me</h2>
        <p>
          I’m a frontend developer with a strong interest in building modern,
          responsive, and accessible web interfaces. I enjoy transforming
          designs into functional user experiences and paying close attention
          to details that improve usability and performance.
        </p>
        <p>
          Through hands-on projects and job simulations, I’ve developed solid
          foundations in HTML, CSS, JavaScript, and React. I’m autonomous,
          adaptable, and always eager to learn new tools and best practices to
          grow as a developer.
        </p>
      </div>

      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

  {/*RIGHT Side component*/}
  const CodeEditorMockup = () => {
  return (
    <div className="editor-wrapper">
      <div className="editor-window">
        {/* Top bar */}
        <div className="editor-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        {/* Code area */}
        <pre className="editor-code">
          <code>
            <span className="comment">// Hero Component</span>{"\n"}
            <span className="keyword">const</span>{" "}
            <span className="function">Hero</span>{" "}
            = () =&gt; {"{"}{"\n"}
            {"  "}
            <span className="keyword">return</span> ({"\n"}
            {"    "}
            <span className="tag">&lt;section</span>{" "}
            <span className="attr">className</span>=
            <span className="string">"hero"</span>
            <span className="tag">&gt;</span>{"\n"}
            {"      "}
            <span className="tag">&lt;h1&gt;</span>
            Hello, I&apos;m Salohiniaina
            <span className="tag">&lt;/h1&gt;</span>{"\n"}
            {"      "}
            <span className="tag">&lt;p&gt;</span>
            Frontend Developer
            <span className="tag">&lt;/p&gt;</span>{"\n"}
            {"    "}
            <span className="tag">&lt;/section&gt;</span>{"\n"}
            {"  "});
            {"\n"}{"}"};
          </code>
        </pre>
      </div>
    </div>
  );
};


{/*PROJECTS Componente*/}
const projectsData = [
  { title: "Multi-step Register", url: "https://worksalohy.github.io/multiStepRegister/", image: "images/multistep-register.png" },
  { title: "Simple Article Listing", url: "https://worksalohy.github.io/simple_article_listing/", image: "images/simple-article-listing.png " },
  { title: "Calculator", url: "https://react-calculator-adw.pages.dev/", image: "images/calculator.png" },
  { title: "Clock Session", url: "https://salohy-s-project-clock.pages.dev/", image: "images/clock-session.png" },
  { title: "Dashboard", url: "https://worksalohy.github.io/dashboard-project/", image: "images/dashboard.png" },
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // number of projects visible

  const next = () => {
    if (startIndex + visibleCount < projectsData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="projects-carousel">
      <button className="carousel-btn left" onClick={prev} disabled={startIndex === 0}>
        &#10094;
      </button>

      <div className="carousel-window">
        <div
          className="projects-container"
          style={{ transform: `translateX(-${startIndex * 320}px)` }}
        >
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-btn right"
        onClick={next}
        disabled={startIndex + visibleCount >= projectsData.length}
      >
        &#10095;
      </button>
    </div>
  );
};


{/*SKILLS*/}
const Skills = () => {
  const skills = [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3 / SCSS", level: "Advanced" },
    { name: "JavaScript / ES6+", level: "Advanced" },
    { name: "React.js", level: "Intermediate" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "Responsive Design", level: "Advanced" },
    { name: "UI/UX Basics", level: "Intermediate" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


{/*EXPERIENCES*/}
const Experiences = () => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Lloyd Banking Group",
      period: "Nov 2025 - Dec 2025",
      description:
        "Worked on improving UI/UX of internal applications, debugging frontend issues, and implementing responsive design features using React and SCSS.",
    },
    {
      role: "Founder / Entrepreneur",
      company: "Self-Employed",
      period: "Jan 2016 - Present",
      description:
        "Managed business operations providing printing, photocopying, and office IT services. Developed client management and problem-solving skills.",
    },
    {
      role: "Web Development Student",
      company: "Online Bootcamp",
      period: "Nov 2022 - Sep 2025",
      description:
        "Completed frontend web development courses covering HTML, CSS, JavaScript, React, and Git workflow.",
    },
  ];

  return (
    <section className="experiences" id="experiences">
      <h2>My Experiences</h2>
      <div className="experiences-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span className="period">{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

{/*FOOTER*/}
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 RAKOTOVAOARY Salohiniaina. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.github/worksalohy" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/salohiniaina-rakotovaoary-7a9b18265" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="salohiniainarak@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};


  return (
    <>
      <div>
        {/*Navbar*/}
        <div id='navbar'>
          <div id='name-and-logo'>
            <h2>R.V.S</h2>
          </div>
          <div id='navigation'>
            <div><a href="#hero">Home</a></div>
            <div>|</div>
            <div><a href="#about">About</a></div>
            <div>|</div>
            <div><a href="#projects">Projects</a></div>
            <div>|</div>
            <div><a href="#contact">Contact</a></div>
          </div>
        </div>

        {/*Hero*/}
        <div id='hero'>
          <div id='left'>
            <div id='left-heading'>
              <h1>Hello, I'm Salohiniaina</h1>
              <h3>Frontend Developer</h3>
            </div>
            <p id='hero-text'>
              I design and build responsive, user-friendly web interfaces with a strong focus on clarity, performance, and usability. I enjoy turning ideas and designs into clean, functional digital experiences using modern frontend technologies.
            </p>
            <div id='left-button-container'>
              <button className='left-button'>View Projects</button>
              <button className='left-button'>Contact Me</button>
            </div>
          </div>
          <div id='right'>
            <CodeEditorMockup />
          </div>
        </div>

        {/*About Me*/}
        <div id='about'>
          <AboutMe/>
        </div>

        {/*Skills*/}
        <div id='skills'>
          <Skills />
        </div>

        {/*Projects*/}
        <div id='projects'>
          <h2 id='projects-head'>My Projects</h2>
          <Projects/>
        </div>

        {/*Experiences*/}
        <div id='experiences'>
          <Experiences/>
        </div>

        {/*Contact*/}
        <div id='contact'></div>

        {/*Footer*/}
        <div id='footer'>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
