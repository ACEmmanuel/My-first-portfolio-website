import React from "react";
import './main.css'

const Footer = () =>{
    return (
        <>
            <section className="container1">
                <div className="foot">
                    <div className="contain">
                        <h3>SOCIAL</h3>
                        <ul className="social">
                            <a target="_blank" href="https://github.com/ACEmmanuel"><li class="fa-brands fa-github"></li></a>
                            <a target="_blank" href="https://www.linkedin.com/in/emmanuel-chidera-b08479245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app"><i class="fa-brands fa-linkedin"></i></a>
                            <a target="_blank" href="https://twitter.com/Only_1_ACE"><i class="fa-brands fa-x-twitter"></i></a>
                        </ul>
                    </div>
                    <div className="contain">
                        <h3>ACEmmanuel</h3>
                        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                </div>
                <hr className="hr-footer"></hr>
                <h5><i>Made By ACEmmanuel 2024</i></h5>
                {/* Shoutout to RAM MAHESHWARI for inspiration */}
            </section>
        </>
    )
}

export default Footer