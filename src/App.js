import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "" && email !== "") {
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("lastName", lastName);
      sessionStorage.setItem("email", email);
      alert("Form submitted successfully");
      resetForm();
    } else {
      setError(!error);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container">
        <h1 className="heading">Registration form</h1>

        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            data-testid="firstName"
            id="firstName"
            placeholder="First name"
            value={firstName}
            className="input-field"
            onFocus={() => setError(!error)}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            data-testid="lastName"
            id="lastName"
            placeholder="Last name"
            value={lastName}
            className="input-field"
            onFocus={() => setError(!error)}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            data-testid="email"
            id="email"
            placeholder="Email"
            value={email}
            className="input-field"
            onFocus={() => setError(!error)}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={onSubmit}
          className="submit-button"
          data-testid="submit"
        >
          Submit
        </button>
        {error && <span className="error">Please fill all the fields</span>}
      </form>
    </div>
  );
}

export default App;
