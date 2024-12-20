import React from 'react'
import "./skill.scss"
import {dataSkills} from "../../data.js";

const Skills = () => {
    return (
        <div className='skills' id='skill'>
            <div className='title'>
                <h2>Skills</h2>
            </div>
            <div className='skillWrapper'>
                <div className='skillcard'>
                    <ul className="leftside">
                        {
                        dataSkills.map((s, index) => {
                            if (index % 2 === 0) {
                                return <li data-aos='fade-down-left' data-aos-duration="500"
                                    key={index}>
                                    {
                                    s.icon
                                }
                                    {
                                    s.name
                                }</li>
                        }
                        return null;
                    })
                    } </ul>
                    <ul className="rigthside">
                        {
                        dataSkills.map((s, index) => {
                            if (index % 2 === 1) {
                                return <li data-aos='fade-down-right' data-aos-duration="500"
                                    key={index}>
                                    {
                                    s.icon
                                }
                                    {
                                    s.name
                                }</li>
                        }
                        return null;
                    })
                    } </ul>
                </div>

            </div>
        </div>
    )
}


export default Skills
