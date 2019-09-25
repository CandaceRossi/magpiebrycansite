import React, { useState } from "react";

const SignIn = props => {
  console.log("props", props);
  const [signIn, setSignIn] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: ""
  });

  const handleChanges = e => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewSignUp(signIn);
    setSignIn({ firstName: "", lastName: "", email: "", birthday: "" });
  };

  return (
    <div className="component-style">
      <h2>Sign In</h2>
      <form className="sign-design" onSubmit={submitForm}>
        <label htmlFor="firstName">first name</label>
        <input
          className="input"
          id="firstName"
          type="text"
          name="firstName"
          onChange={handleChanges}
          value={signIn.firstName}
        />
        <label htmlFor="lastName">last name</label>
        <input
          className="input"
          id="lastName"
          type="text"
          name="lastName"
          onChange={handleChanges}
          value={signIn.lastName}
        />
        <label htmlFor="email">email</label>
        <input
          className="input"
          id="email"
          type="email"
          name="email"
          onChange={handleChanges}
          value={signIn.email}
        />
        <label htmlFor="birthday">birthday</label>
        <input
          className="input"
          id="birthday"
          type="date"
          name="birthday"
          onChange={handleChanges}
          value={signIn.birthday}
        />
        <button className="button-style" type="submit">
          sign up
        </button>
      </form>
    </div>
  );
};

export default SignIn;
