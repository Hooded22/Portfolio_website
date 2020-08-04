import React, {useState} from 'react'
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai"
import EmailIcon from "../images/icons/Email.svg";
import PhoneIcon from "../images/icons/Phone.svg";
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';


const ContactSection = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const backToTop = (event) => {
        event.preventDefault();
        scrollTo(`#welcomeSection`);
    }

    const handleChange = (event, type) => {
        if(type === "message")
            setMessage(event.target.value);
        else if(type === "email")
            setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className = "contactSection" id = "Contact">
            <h3>Kontakt</h3>
            <div className = "container">
                <div className = "contactDataWrapper">
                    <p className = "info">
                        Skontaktuj się za pomocą poniższych metod. Odpowiem jak najszybciej.
                    </p>
                    <ul>
                        <li>
                            <img src={EmailIcon} alt = "email icon"/>
                            <p>przemek.sipta@gmail.com</p>
                        </li>
                        <li>
                            <img src={PhoneIcon} alt = "phone number icon"/>
                            <p>+48 661 626 141</p>
                        </li>
                    </ul>
                </div>
                <div className = "formWrapper">
                    <form>
                        <label for = "email"> 
                            <input type = "email" placeholder = "Email" id="email" className = "email" value = {email} onChange = {(event) => handleChange(event, "email")}/>
                        </label>
                        <label for = "message"> 
                            <textarea 
                                placeholder="Your message" 
                                id = "message" 
                                className = "message" 
                                name = "message_html" 
                                value = {message} 
                                onChange = {(event) => handleChange(event, "message")}>
                            </textarea>
                        </label>
                        <button className = "sendButton" title = "Wyślij wiadomość" type = "submit" onClick = {(event) => handleSubmit(event)}>
                            Send
                        </button>
                    </form> 
                </div>
            </div>
            <Link className = "backToTop" to = "/" onClick = {(event) => backToTop(event)}>
                Powrót do górę
            </Link>
        </div>
    );
}

export default ContactSection;

