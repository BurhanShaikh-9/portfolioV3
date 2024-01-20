'use client'


import React, { useState } from "react"
// import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx"
import Link from 'next/link'

export const Header = ({ aboutRef, contactRef }) => {
    const [isNav, setIsNav] = useState(false);
    // const navigate = useNavigate();

    return (
        <React.Fragment>
            <header className="Header">
                <nav className="headerInner">
                    <div className="logo">
                        <Link href="#WelcomeMain">BURHAN</Link>
                    </div>
                    <div className="menu">
                        <p> <Link href="#AboutMain" >ABOUT</Link> </p>
                        <p><Link href="#SkillMain">SKILLS</Link></p>
                        <p> <Link href="#ProjectMain">PROJECT</Link> </p>
                        <p><Link href="#ContactMain" >CONTACT</Link></p>
                    </div>
                    
                    <button className="menuOuter" onClick={() => { setIsNav(!isNav) }}>
                        <div className="menuUp" />
                        <div className="menuMid" />
                        <div className="menuDown" />
                    </button>
                </nav>
                <nav className={`nav2 ${isNav  && "showNav" }`}>
                    <div className="nav2Inner">
                        <button onClick={() => { setIsNav(!isNav) }}><RxCross1 /></button>
                        <p> <Link href="#AboutMain" onClick={() => { setIsNav(!isNav) }}>ABOUT</Link> </p>
                        <p> <Link href="#SkillMain" onClick={() => { setIsNav(!isNav) }}>SKILLS</Link> </p>
                        <p><Link href="#ProjectMain" onClick={() => { setIsNav(!isNav) }}>PROJECTS</Link></p>
                        <p><Link href="#ContactMain" onClick={() => { setIsNav(!isNav) }}>CONTACT</Link></p>
                    </div>
                </nav>
            </header>


        </React.Fragment>
    )
}