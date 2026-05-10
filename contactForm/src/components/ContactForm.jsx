import React from 'react';
import './ContactForm.css';
import { useState } from 'react';
import ParagraphText from './paragraphText';
// import handleSubmit...
// import changeData
// import useState

const ContactForm = () => {
  const [formsData, setFormsData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    username: "",
    password: ""
  });

  const changeData = (e) => {
    setFormsData({ ...formsData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const databaseSource = await fetch("http://localhost:5231/api/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formsData),
    });
    const data = await databaseSource.json();
    alert(data.message);

    console.log("Submitting:", formsData);
  }

  return (
    <form action="" className="forms" onSubmit={handleSubmit}>
      <div className="form-container">
        <div>
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formsData.firstName}
            onChange={changeData}
          />
        </div>

        <div>
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formsData.lastName}
            onChange={changeData}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formsData.email}
            onChange={changeData}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formsData.address}
            onChange={changeData}
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formsData.country}
            onChange={changeData}
          />
        </div>

        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formsData.state}
            onChange={changeData}
          />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formsData.username}
            onChange={changeData}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={formsData.password}
            onChange={changeData}
          />
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
      <ParagraphText text="Your Information is Safe With us!" style={{ color: "black" }} />
    </form>
  )
}

export default ContactForm
