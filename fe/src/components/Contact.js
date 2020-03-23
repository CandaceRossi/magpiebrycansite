import React, { useState } from "react";
import IMG9592 from "../images/IMG-9592.jpg";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Contact = props => {
  console.log("props", props);
  const [contact, setContact] = useState({
    Name: "",
    email: "",
    phone: "",
    text: ""
  });

  const handleChanges = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewContact(contact);
    setContact(contact);
  };

  return (
    <div className="balance-contact">
      <Card style={{ width: '70rem' }}>
        <img variant="top" width="100%" src="images/9565" alt="Card image cap" />
        {/* <Card.Img variant="top" src=".img-9565.jpg/100px180?text=Image cap" class="img-thumbnail" alt="top" /> */}
        <Card.Body>
          <Card.Title>Have Questions?</Card.Title>
          <Card.Text> For More Info</Card.Text>
          <Card.Text> Contact Us</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <input
              style={{ width: '20rem', float: "left" }}
              placeholder="Your Name*"
              id="Name"
              type="text"
              name="Name"
              onChange={handleChanges}
              value={contact.firstName}
            />
          </ListGroupItem>
          <ListGroupItem>
            <input
              style={{ width: '20rem', float: "left" }}
              placeholder="Your Email*"
              type="email"
              name="email"
              onChange={handleChanges}
              value={contact.email}
            />
          </ListGroupItem>
          <ListGroupItem>
            <input
              style={{ width: '20rem', float: "left" }}
              placeholder="Your Phone*"
              type="text"
              name="phone"
              onChange={handleChanges}
              value={contact.phone}
            />
          </ListGroupItem>
          <ListGroupItem>
            <textarea
              style={{ width: '60rem', float: "left" }}
            placeholder="Text*"
            type="text"
            name="text"
              onChange={handleChanges}
              value={contact.text}
            />
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <button className="md-button shop-button" type="submit" onSubmit={submitForm}>
            Send
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;



{/* 
<h6 className = "header-style"> For More Info</h6 >
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
      type="text"
      name="phone"
      onChange={handleChanges}
      value={contact.phone}
    />
    <label className="hidden-labels" htmlFor="text">
      text
          </label>
    <textarea
      className="input"
      placeholder="Text*"
      type="text"
      name="text"
      onChange={handleChanges}
      value={contact.text}
    />
    <button className="md-button" type="submit">
      Send
          </button>
  </form>
      </div > */}
