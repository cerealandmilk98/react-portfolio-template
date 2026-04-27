import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const sendEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const hasNameError = name.trim() === "";
    const hasEmailError = email.trim() === "";
    const hasMessageError = message.trim() === "";
    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (!hasNameError && !hasEmailError && !hasMessageError) {
      var templateParams = { name, email, message };
      emailjs
        .send(
          "service_pbqmema",
          "template_6hwlf2l",
          templateParams,
          "2e4XFeJK933gGHfyo",
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSent(true);
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error);
          },
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Have a project or opportunity in mind? Let's connect and bring it to
            life.
          </p>
          {sent && (
            <div className="success-banner">
              Message sent! I'll be in touch soon.
            </div>
          )}
          <form className="contact-form" noValidate>
            <div className="form-flex">
              <div className="field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(false);
                  }}
                  className={nameError ? "error" : ""}
                />
                {nameError && (
                  <span className="helper-text">Please enter your name</span>
                )}
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email / Phone</label>
                <input
                  id="contact-email"
                  type="text"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                  className={emailError ? "error" : ""}
                />
                {emailError && (
                  <span className="helper-text">
                    Please enter your email or phone number
                  </span>
                )}
              </div>
            </div>
            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Send me any inquiries or questions"
                rows={10}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setMessageError(false);
                }}
                className={messageError ? "error" : ""}
              />
              {messageError && (
                <span className="helper-text">Please enter the message</span>
              )}
            </div>
            <button type="submit" onClick={sendEmail}>
              Send &#8594;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
