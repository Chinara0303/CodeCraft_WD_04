import "./topbar.scss";
import React from 'react'

const Topbar = ({menuOpen, setmenuOpen}) => {
    return (
        <div className={
            `topbar ${
                menuOpen && 'active'
            }`
        }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">chinara</a>
                    <div className="itemContainer">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <span>+994 51 689 84 76</span>
                    </div>
                    <div className="itemContainer">
                        <i className="fa-solid fa-envelope"></i>
                        <span>chibadova@gmail.com</span>
                    </div>
                </div>
                <div className="rigth">
                    <div className="hamburger"
                        onClick={
                            () => setmenuOpen(!menuOpen)
                    }>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
