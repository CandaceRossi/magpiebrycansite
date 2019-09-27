import React, { useState } from "react";

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
    <div className="component-style">
      <h3 className="header-style">Contact Us</h3>
      <form className="sign-design" onSubmit={submitForm}>
        <label htmlFor="firstName">first name</label>
        <input
          className="input"
          id="firstName"
          type="text"
          name="firstName"
          onChange={handleChanges}
          value={contact.firstName}
        />
        <label htmlFor="lastName">last name</label>
        <input
          className="input"
          id="lastName"
          type="text"
          name="lastName"
          onChange={handleChanges}
          value={contact.lastName}
        />
        <label htmlFor="email">email</label>
        <input
          className="input"
          id="email"
          type="email"
          name="email"
          onChange={handleChanges}
          value={contact.email}
        />
        <label htmlFor="text">text</label>
        <textarea
          className="input"
          id="textarea"
          type="text"
          name="text"
          onChange={handleChanges}
          value={contact.text}
        />
        <button className="md-button shop-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
