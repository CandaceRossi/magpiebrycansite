import React, { useState } from "react";

const Contact = props => {
  console.log("props", props);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: ""
  });

  const handleChanges = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewContact(contact);
    setContact({ firstName: "", lastName: "", email: "", birthday: "" });
  };

  return (
    <div className="component-style">
      <h2>Contact Us</h2>
      <form className="contact-design" onSubmit={submitForm}>
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
        <label htmlFor="birthday">birthday</label>
        <input
          className="input"
          id="birthday"
          type="text"
          name="birthday"
          onChange={handleChanges}
          value={contact.birthday}
        />
        <button className="button-style" type="submit">
          sign up
        </button>
      </form>
    </div>
  );
};

export default Contact;
