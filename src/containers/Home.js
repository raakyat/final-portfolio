import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
        return (
                <>
                    <img className="home-logo" src="https://i.ibb.co/HNTGzd1/DWLOGO.jpg" alt="Dylan Williamson" /><br/>
                    <h2>I'm a Software Engineer based out of Upstate New York</h2>
                    <h2>My background includes Audio Engineering & Music Production</h2><br/><br/><br/><br/>
                    <div className="container">
                        <div className="center">
                            <Link to='/projects'>
                                <button id="projects">
                                    Projects
                                </button>
                            </Link>
                            <Link to='/audio'>
                                <button id="audio">
                                    Audio
                                </button>
                            </Link>
                            <Link to='/beats'>
                                <button id="beats">
                                    Beats
                                </button>
                            </Link>
                            <button id="resume" onClick={() => { window.open('https://drive.google.com/file/d/19laZUJRzKUEO74vyIJRFtyfgT88OLbeJ/view?usp=sharing', "_blank") }}>
                                Resume
                            </button>
                            <Link to='#'>
                                <img className="github" onClick={() => { window.open('https://github.com/Dylan-Williamson/', "_blank") }} src='https://i.ibb.co/zZY96TH/Git-Hub-Logo-White.png' alt="github"></img>
                            </Link>
                            <Link to='#'>
                                <img className="linkedin" onClick={() => { window.open('https://linkedin.com/in/dylwilliamson/', "_blank") }} src='https://i.ibb.co/hYh60gC/LI-Logo.png' alt="linkedIn"></img>
                            </Link>
                        </div>
                    </div>
                </>
        )
}

export default Home