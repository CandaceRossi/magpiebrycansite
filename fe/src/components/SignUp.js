import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import babynatural from "../images/babynatural.jpg";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const SignUp = (props) => {
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: ""
  });

  const handleChanges = e => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewSignUp(signUp);
    setSignUp({ firstName: "", lastName: "", email: "", birthday: "" });
  };

  return (
    <div style={{marginTop:"3%", marginBottom: "3%"}}>
      <div className="balance-contact">
        <Card>
          <img src={babynatural} variant="top" width="100%" height="180px" alt="Card image cap" />
          {/* <Card.Img variant="top" src=".img-9565.jpg/100px180?text=Image cap" class="img-thumbnail" alt="top" /> */}
          <Card.Body>
            <Card.Title>Sign Up</Card.Title>
            <Card.Text> <Card.Link href="#">Forgot Username</Card.Link></Card.Text>
            <Card.Text> <Card.Link href="#">Forgot Password</Card.Link></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <input
               style={{ width: '18rem', height: '3rem', float: "left" }}
                // className="input"
                id="firstName"
                type="text"
                name="firstName"
                onChange={handleChanges}
                value={signUp.firstName}
                placeholder="First Name"
              />
            </ListGroupItem>
            <ListGroupItem> <input
             style={{ width: '18rem', height: '3rem', float: "left" }}
              //       className="input"
              id="lastName"
              type="text"
              name="lastName"
              onChange={handleChanges}
              value={signUp.lastName}
              placeholder="Last Name"
            />
            </ListGroupItem>
            <ListGroupItem> <input
             style={{ width: '18rem', height: '3rem', float: "left" }}
              // className="input"
              id="email"
              type="email"
              name="email"
              onChange={handleChanges}
              value={signUp.email}
              placeholder="Email"
            />
            </ListGroupItem>
            <ListGroupItem>
              <input
               style={{ width: '18rem', height: '3rem', float: "left" }}
                //       className="input"
                id="birthday"
                type="date"
                name="birthday"
                onChange={handleChanges}
                value={signUp.birthday}
                placeholder="Birthdate"
              />
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <button className="md-button shop-button contact-button" type="submit" onSubmit={submitForm}>
              Submit
          </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
//  add for disabilities   <label htmlFor="email">email</label>
