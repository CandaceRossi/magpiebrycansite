import React, { useState } from "react";
import IMG9592 from "../images/IMG-9592.jpg";

const Contact = props => {
  console.log("props", props);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: ""
  });

  const handleChanges = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewContact(contact);
    setContact({ firstName: "", lastName: "", email: "", text: "" });
  };

  return (
    <div className="component-style-contact">
      <div className="balance-contact">
        <h6 className="header-style">For More Info</h6>
        <h5 className="header-style-second">Contact Us</h5>
        <form className="sign-design" onSubmit={submitForm}>
          <label className="hidden-labels" htmlFor="firstName">
            first name
          </label>
          <input
            className="input"
            placeholder="Your Name*"
            id="Name"
            type="text"
            name="Name"
            onChange={handleChanges}
            value={contact.firstName}
          />
          <label className="hidden-labels" htmlFor="email">
            email
          </label>
          <input
            className="input"
            placeholder="Your Email*"
            id="email"
            type="email"
            name="email"
            onChange={handleChanges}
            value={contact.email}
          />
          <label className="hidden-labels" htmlFor="email">
            phone
          </label>
          <input
            className="input"
            placeholder="Your Phone*"
            id="phone"
            type="text"
            name="phone"
            onChange={handleChanges}
            value={contact.email}
          />
          <label className="hidden-labels" htmlFor="text">
            text
          </label>
          <textarea
            className="input"
            placeholder="Text*"
            id="textarea"
            type="text"
            name="text"
            onChange={handleChanges}
            value={contact.text}
          />
          <button className="md-button contact-button" type="submit">
            Send
          </button>
        </form>
      </div>

      <div>
        <img className="contact-side-photo" src={IMG9592} alt="" />
      </div>
    </div>
  );
};

export default Contact;
