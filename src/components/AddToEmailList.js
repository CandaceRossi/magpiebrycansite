import React, { useState } from "react";

const AddToEmailList = props => {
  const [email, setEmail] = useState({
    email: ""
  });

  const handleChanges = event => {
    setEmail({ [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newEmail = {
      ...email,
      id: Date.now()
    };
    props.addNewEmail(newEmail);
    setEmail({ email: "" });
  };
  return (
    <div className="email-style">
      <form onSubmit={submitForm}>
        <label htmlFor="email">Add To Email List</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChanges}
          value={email.email}
        />
        <button className="md-button shop-button" type="submit">
          Add Email
        </button>
      </form>
    </div>
  );
};
export default AddToEmailList;
