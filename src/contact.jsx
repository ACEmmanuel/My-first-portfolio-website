import React from "react";
import './main.css'



const Contact = () =>{
    return(
        <>
        <section className="container" id="Contact">
            <br></br>
                <h1 className="head">CONTACT</h1>
                <hr className="hr"></hr>
            <br></br>
            <p className="more">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            <br></br>
            <div className="form-container">
                <div className="form-content">
                <form action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value="010493d8-a8a5-4340-8df3-cc813b83267d" />

                    {/* <div className="form">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name..." required></input>
                    </div> */}
                    <div className="form">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter Your Email..." required></input>
                    </div>
                    <div className="form">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter Your Message Here..."></textarea>
                    </div>
                    <input type="submit" value="SEND"></input>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact