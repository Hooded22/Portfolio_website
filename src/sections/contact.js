import React, { useState, useContext } from 'react'
import EmailIcon from "src/images/icons/Email.svg";
import PhoneIcon from "src/images/icons/Phone.svg";
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import emailjs from 'emailjs-com';
import { errorNotifications, successNotifications } from "../data/notifications";
import { MyContext } from "components/contexts"


const ContactSection = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const Context = useContext(MyContext);
    const setNotifiConfig = Context.notificationBox[1];
    const language = Context.language[0];

    const title = language === "PL" ? "Kontakt" : "Contact";
    const welcomeMess = language === "PL" ? "Skontaktuj się za pomocą poniższych metod. Odpowiem jak najszybciej." : "Contact by one of below method. I will write back as soon as possible.";
    const formContent = language === "PL"
    ? {
        emailInput: "Twój email",
        messageInput: "Wiadomość",
        button: "Wyślij"
    }
    :
    {
        emailInput: "Your email",
        messageInput: "Message",
        button: "Send"
    }
    const backToTopButtonText = language === "PL" ? "Powrót na górę" : "Back to top";

    const backToTop = (event) => {
        event.preventDefault();
        scrollTo(`#Header`);
    }

    const handleChange = (event, type) => {
        if (type === "message")
            setMessage(event.target.value);
        else if (type === "email")
            setEmail(event.target.value);
    }

    const validateEmailMessage = (message, email) => {
        if (message.length === 0 || message.length > 10000)
            return { result: false, message: errorNotifications.messageFormat }

        const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        if (email.length === 0 || !regex.test(email))
            return { result: false, message: errorNotifications.emailFormat }

        return { result: true, message: successNotifications.emailSended }
    }

    const showNotificationBox = (success, notification) => {
        setNotifiConfig({ success, notification, visible: true });
        setTimeout(() => {
            setNotifiConfig({ success, notification, visible: false });
        }, 3000);
    }

    const sendEmail = (event) => {
        event.preventDefault();
        const EMAIL = event.target.children[0].children[0].value;
        const MESSAGE = event.target.children[1].children[0].value;

        const validationResult = validateEmailMessage(MESSAGE, EMAIL);

        if (!validationResult.result) {
            showNotificationBox(validationResult.result, validationResult.message);
            return false;
        }
        else {
            emailjs.sendForm('gmail', 'portfolio_website', event.target, 'user_bcEBfS0Bds18cXA5tkfVk')
                .then((result) => {
                    showNotificationBox(true, successNotifications.emailSended);
                }, (error) => {
                    showNotificationBox(false, error.text);
                    console.log(process.env.GATSBY_EMAIL_USER_KEY);
                });
        }

        setEmail("");
        setMessage("");
    }



    return (
        <div className="contactSection" id="Contact">
            <h3>{title}</h3>
            <div className="container">
                <div className="contactDataWrapper">
                    <p className="info">
                        {welcomeMess}
                    </p>
                    <ul>
                        <li>
                            <img src={EmailIcon} alt="email icon" />
                            <p>przemek.sipta@gmail.com</p>
                        </li>
                        <li>
                            <img src={PhoneIcon} alt="phone number icon" />
                            <p>+48 661 626 141</p>
                        </li>
                    </ul>
                </div>
                <div className="formWrapper">
                    <form onSubmit={(event) => sendEmail(event)}>
                        <label htmlFor="Email" for="Email">
                            <input
                                type="email"
                                placeholder={formContent.emailInput}
                                id="Email"
                                name="email"
                                className="email"
                                value={email}
                                onChange={(event) => handleChange(event, "email")}
                                aria-label="Email"
                            />
                        </label>
                        <label htmlFor="Message" for="Message">
                            <textarea
                                placeholder={formContent.messageInput}
                                id="Message"
                                className="message"
                                name="message"
                                value={message}
                                onChange={(event) => handleChange(event, "message")}
                                aria-label="Message"
                            >
                            </textarea>
                        </label>
                        <button className="sendButton" title="Wyślij wiadomość" type="submit">
                           {formContent.button}
                        </button>
                    </form>
                </div>
            </div>
            <Link className="backToTop" to="#Header" onClick={(event) => backToTop(event)}>
               {backToTopButtonText}
            </Link>
        </div>
    );
}

export default ContactSection;

