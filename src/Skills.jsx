import React from "react";
import './main.css';

const Skills = () => {
    return(
        <>
            <section className="container">
                <div>
                    <h1 className="head">SKILLS</h1>
                    <hr className="hr"></hr>
                    <br></br>
                    <p className="more">I'm proficient in the following languages</p>
                    <div className="skill-container">
                        <ul className="skill">
                            <li> Css</li>
                            <li>Git</li>
                            <li>HTML</li>
                            <li>React</li>
                            <li>NodeJs</li>
                            <li>Github</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Tailwind</li>
                            <li>Terminal</li>
                            <li>Moongose</li>
                            <li>Javascript</li>
                            <li>Graphic Design</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <p className="more">Code I love</p>

                        <ul className="skill">
                            <li>Python</li>
                            <li>NextJs</li>
                            <li>Redux</li>
                            <li>Astro</li>
                            <li>Firebase</li>
                        </ul>
                    
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills