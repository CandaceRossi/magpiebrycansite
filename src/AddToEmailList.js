import React, { useState } from "react";

const AddToEmailList = props => {
  const [email, setEmail] = useState({
    email: ""
  });

  const handleChanges = e => {
    setEmail(e.target.value);
  };
  const submitForm = e => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <label htmlFor="email">Add To Email List</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          onChange={e => setEmail(handleChanges)}
          value={email}
        />
        <button onClick={submitForm} type="submit">
          Add Email
        </button>
      </form>
    </>
  );
};
export default AddToEmailList;
