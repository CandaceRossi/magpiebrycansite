import React, { useState } from "react";
import Card from "react-bootstrap/Card";
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
    <div>
      <h1>Helllooo</h1>
      <h1>Helllooo</h1>
      <h1>Helllooo</h1>
      <h1>Helllooo</h1>

      <Card style={{ width: '18rem' }}>
        <img variant="top" width="100%" src="images/9565" alt="Card image cap" />
        {/* <Card.Img variant="top" src=".img-9565.jpg/100px180?text=Image cap" class="img-thumbnail" alt="top" /> */}
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
          <Card.Text> <Card.Link href="#">Forgot Username</Card.Link></Card.Text>
          <Card.Text> <Card.Link href="#">Forgot Password</Card.Link></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <input
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
          <button className="md-button shop-button" type="submit" onSubmit={submitForm}>
            Submit
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
//  add for disabilities   <label htmlFor="email">email</label>
