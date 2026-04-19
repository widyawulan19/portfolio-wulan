import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <div className='about-container' id='about'>
        <div className="about-left">
            <h2>ABOUT ME</h2>
        </div>

        <div className="about-right">
            <h4>Turning ideas into meaningful digital experiences.</h4>
            <p>
                I’m a full-stack web developer with 2 years of experience building modern web applications. I focus on creating clean, functional, and user-friendly products—from frontend interfaces to backend systems.
                I enjoy learning new technologies and continuously improving my skills to deliver reliable and scalable digital solutions.
            </p>
        </div>
    </div>
  )
}

export default About