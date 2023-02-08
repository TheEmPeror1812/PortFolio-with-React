import React from 'react'
import img1 from "../Assets/right_profile.png"

function Header() {
    return (
        <div className='nav'>
            <div className='navigation'>
                <i>Ro<a href='#home' id="co">han.</a></i>
            </div>
            <div id='nav-special'>
                <ul>
                    <li>
                        <a href="#home">
                            <span className="icon">
                                <i className="fa-solid fa-house"></i>
                            </span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <span className="icon">
                                <i className="fa-solid fa-lightbulb"></i>
                            </span>
                            <span className="text">Skills</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <span className="icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </span>
                            <span className="text">Education</span>
                        </a>
                    </li>
                    <li>
                        <a href="#pro">
                            <span className="icon">
                                <i className="fa-solid fa-computer"></i>
                            </span>
                            <span className="text">Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <span className="icon">
                                <i className="fa-solid fa-address-book"></i>
                            </span>
                            <span className="text">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='logo-right'>
                <img src={img1} alt="logo"></img>
            </div>
        </div>
    )
}

export default Header;