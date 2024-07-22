import React from 'react'

import logo from './img/logo.png'
import webdevservice from './img/service-webdev.png'
import apiservice from './img/service-api.png'
import cabsz from './img/cabsz.png'
import HomeIcon from '@mui/icons-material/Home';
import PreviewIcon from '@mui/icons-material/Preview';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './App.css'

const App = () => {
  return (
    <>
      <header>
        <nav className='section-padding'>
          <a href="#"><h3 className='text-clr-secondary ff-mono'>Kenneth</h3></a>

          <ul className='nav-links'>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </header>


      <main>
        <section className="about section-padding">
          <div className='about-info'>
            <h1 className='line-height-small'>Hi, I am <span className='text-clr-accent'>Kenneth</span></h1>
            <h3 className='line-height-small'>Aspiring Fullstack Developer</h3>
            <p className='vertical-padding'>I am a versatile web developer with expertise 
              in both frontend and backend technologies, capable 
              of building robust full stack applications. 
            </p>
            <button>Download CV</button>
            <div className='about-icons'>
              <a href="https://www.linkedin.com/in/kenneth-cabobos-a687ab121/"><LinkedInIcon style={{fontSize: '35px'}} /></a>
              <a href="https://www.facebook.com/cabsknows/"><FacebookIcon style={{fontSize: '35px'}}/></a>
              <a href="https://github.com/cabsknowss"><GitHubIcon style={{fontSize: '35px'}} /></a>
            </div>
          </div>
          <img src={cabsz} className='about-pic' />
        </section>

        <section className="service section-padding">
          <h2>Services</h2>
          <div className="service-details">
            <article>
              <img src={webdevservice} className='service-img' />
              <div className='service-info'>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, accusamus!</p>
              </div>
            </article>
            <article>
              <img src={apiservice} className='service-img' />
              <div className='service-info'>
                <h3>API Integration</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, dicta!</p>
              </div>
            </article>
          </div>
        </section>

        <section className="project section-padding">
          <h2>Projects</h2>
        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
