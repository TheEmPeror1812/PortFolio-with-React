import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

function Contact() {

    const [name,setName] = useState("");
    const [Email,setEmail] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        toast.success("Messege Successfully sent");
    }

    function nameHandler(e){
        setName(e.target.value)
    }

    function mailHandler(e){
        setEmail(e.target.value)
    }

  return (
    <div id="contact">
        <div className="contact-left">
            <h1>Contact Me</h1>
            <p><i className="fa-brands fa-telegram"></i> Email : <a href="mailto:rohankundara1812@gmail.com">rohankundara1812@gmail.com</a></p>
            <p> <i className="fa-solid fa-phone"></i>  Phone No. : <a href="tel:+91-9911412554">+91-9911412554</a></p>
            <div className="icons">
                <a href="https://www.linkedin.com/in/rohan-kundara-74149817a/"><i id="linke" className="fa-brands fa-linkedin fa-xl"></i></a>
                <a href="https://www.facebook.com/rohan.kundara.5"><i id="face" className="fa-brands fa-facebook fa-xl"></i></a>
                <a href="https://www.instagram.com/rohankundara1812/"><i id="insta" className="fa-brands fa-instagram fa-xl"></i></a>
            </div>
            <a href="./Rohan's Resume.pdf" download className="btn1">Download Resume</a>
        </div>

        <div className="contact-right">
            <form className='mess-form' onSubmit={submitHandler}>
                <input type="text" name='name' id='form_name' onChange={nameHandler} className='mess_form' placeholder='Enter Your Name' required />
                <input type="email" name='Email' id='form_mail' onChange={mailHandler} className='mess_form' placeholder='Enter Your Email' required />
                <textarea name="Message" id="messege" cols="30" rows="10" placeholder="Your Message"></textarea>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;