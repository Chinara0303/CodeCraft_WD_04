import React from 'react';
import './about-me.scss'

const AboutMe = () => {
    return (
        <div className='about-me' id='about-me'>
            <div className="headerTitle">
                <h2>About Me</h2>
            </div>
            <div className="detailed">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="detail-box">
                                <h3>Education</h3>
                                <ul>
                                    <li>
                                        <p>
                                            <i className="fa-solid fa-calendar-days fa-lg"></i>
                                            <span>Nov 2022 – July 2023</span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-book-open fa-lg"></i>
                                            <span>Software Development</span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-location-dot fa-lg"></i>
                                            <span>Code Academy</span>
                                        </p>
                                        <div className="line"></div>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa-solid fa-calendar-days fa-lg"></i>
                                            <span>Sep 2017– June 2022</span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-book-open fa-lg"></i>
                                            <span>
                                                Mathematics and Informatics teacher</span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-location-dot fa-lg"></i>
                                            <span>Azerbaijan State Pedagogical University SABAH Groups, Bachelor’s Degree</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="detail-box">
                                <h3>Experience</h3>
                                <ul>
                                    <li>
                                        <p>
                                            <i className="fa-solid fa-calendar-days fa-lg"></i>
                                            <span>Nov 2024 – Present</span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-book-open fa-lg"></i>
                                            <span>Web Developer as Intern</span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-location-dot fa-lg"></i>
                                            <span>CodeCraft InfoTech</span>
                                        </p>
                                        <div className="line"></div>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa-solid fa-calendar-days fa-lg"></i>
                                            <span>Feb 2024 – Oct 2024</span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-book-open fa-lg"></i>
                                            <span>Frontend Developer</span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-location-dot fa-lg"></i>
                                            <span>Aseto Group</span>
                                        </p>
                                        <div className="line"></div>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa-solid fa-calendar-days fa-lg"></i>
                                            <span>Aug 2023 – Oct 2023
                                            </span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-book-open fa-lg"></i>
                                            <span>Frontend Developer as Intern</span>
                                        </p>
                                        <p>
                                            <i className="fa-solid fa-location-dot fa-lg"></i>
                                            <span>QSS Analytics</span>
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
