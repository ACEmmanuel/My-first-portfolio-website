import React from "react";
import './main.css'


const About = () => {
    return(
        <>
        <section className="container" id="#about">
            <h1 className="head">ABOUT</h1>
            <hr className="hr"></hr>
            <p className="more">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
           
            <div className="content">
                <div className="c1">
                    <h3 className="sub-head">Get to know me!</h3>
                    <div className="more-about">
                    <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <br></br>
                    <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
                        <br></br>
    
                    <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>

                    </div>
                    </div>
                    <div className="c2">
                        <h3 className="sub-head">My Skills</h3>
                        <ul className="skill">
                            <li>Css</li>
                            <li>Git</li>
                            <li>HTML</li>
                            <li>React</li>
                            <li>Github</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Terminal</li>
                            <li>Javascript</li>
                            <li>Graphic Design</li>
                        </ul>

                        <br></br>
                        <br></br>

                            <h3 className="sub-head">Codes I love</h3>
                        <ul className="skill">
                            <li>Tailwind</li>
                            <li>NextJs</li>
                            <li>Astro</li>
                            <li>Typescript</li>
                            {/* <li>Github</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Terminal</li>
                            <li>Javascript</li>
                            <li>Graphic Design</li> */}
                            {/* <li>Responsive Design</li> */}
                        </ul>
                    </div>
            </div>
            </section>
        </>
    )


}



export default About;


