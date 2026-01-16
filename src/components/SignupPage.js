import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Navigate to account page with fullName and email
    navigate("/account", {
      state: {
        fullName: formData.fullName,
        email: formData.email,
      },
    });
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-container">
        <h2>Create your </h2>
        <h3>PopX account</h3>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>Full Name*</label>
          <input
            type="text"
            placeholder="Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Phone number*</label>
          <input
            type="text"
            placeholder="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Email address*</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password *</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Company name</label>
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <p>Are you an Agency?*</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                value="Yes"
                onChange={handleChange}
                required
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="No"
                onChange={handleChange}
                required
              />{" "}
              No
            </label>
          </div>

          <button className="primary-btn" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
