import React, { useState } from 'react'
import '../styles/HeroSection.css'
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import img from '../assets/profil_pic.jpeg'

function HeroSection() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div className='hero-container' id='hero'>
        <div className="hero-navbar">
            <h3>WIDYA WULAN</h3>

            <div className="navbar-center">
                <a href="#about">[ ABOUT ME  ]</a>
                <a href="#projects">[ PROJECTS ]</a>
                <a href="#work">[ HOW I WORK ]</a>
                {/* <a href="">[ SERVICES  ]</a> */}
                <a href="#contact">[ CONTACT ]</a>
            </div>

            <div className="navbar-right">
                <button onClick={()=> window.location.href = "mailto:widyawulan1906@gmail.com"}>
                    LET'S TALK <MdArrowOutward className='icon'/> 
                </button>
                <div className="burger-navbar">
                    <RxHamburgerMenu className='burger-icon' onClick={handleOpen}/>
                </div>
            </div>
            {isOpen && (
                <div className="burger-open">
                    <a href="#about">[ ABOUT ME  ]</a>
                    <a href="#projects">[ PROJECTS ]</a>
                    <a href="#work">[ HOW I WORK ]</a>
                    {/* <a href="">[ SERVICES  ]</a> */}
                    <a href="#contact">[ CONTACT ]</a>
                </div>
            )}
        </div>

        <div className="hero-content">
            <div className="text-span">
                <h2>WEBSITE DEVELOPER</h2>
                <p>BASED IN INDONESIA | <span>OPEN FOR FREELANCE</span></p>
            </div>
            <div className="content-photo">
                <div className="text">
                    <p>/ FRONTEND</p>
                    <p>/ BACKEND</p>
                    <p>/ WEB APP DEVELOPER</p>
                </div>
                <img src={img} alt="" />
            </div>

            <div className="content-footer">
                <div className="cf-text">
                    <h4>
                       I TURN REAL-WORLD IDEAS INTO CLEAN AND FUNCTIONAL WEB APPS.
                    </h4>
                    <p>[ Full-stack developer focused on building user-friendly and scalable digital products. ]</p>
                </div>
                <div className="cf-button">
                    <button onClick={()=> window.location.href = "mailto:widyawulan1906@gmail.com"}>
                        AVAILABLE FOR PROJECT <GoArrowDownRight className='icon'/>
                    </button>
                    <a href='#projects'>VIEW PROJECT <GoArrowDownRight className='icon'/> </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection

// NOTED 
// LINK NAVBAR BELUM BISA JALAN 