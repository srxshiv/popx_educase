import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex justify-center items-center h-screen p-5 bg-[#f7f7f7fb] box-border">
      <div className="w-full max-w-[400px] bg-[rgba(243,242,242,0.964)] px-[25px] py-[30px] rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.1)] h-[97%] max-[480px]:px-5 max-[480px]:py-[25px] max-[480px]:rounded-none max-[480px]:shadow-none">
        <h2 className="text-[34px] mb-0 font-bold text-[#222] leading-none max-[480px]:text-xl">Create your </h2>
        <h3 className="text-[34px] mb-5 font-bold text-[#222] leading-[0.5] max-[480px]:text-xl">PopX account</h3>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-[13px] text-[#6e44ff] font-medium mt-[15px] mb-1">Full Name*</label>
          <input
            type="text"
            placeholder="Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="p-2.5 bg-transparent border border-[#dcdcdc] rounded-md text-sm outline-none text-black"
          />

          <label className="text-[13px] text-[#6e44ff] font-medium mt-[15px] mb-1">Phone number*</label>
          <input
            type="text"
            placeholder="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-2.5 bg-transparent border border-[#dcdcdc] rounded-md text-sm outline-none text-black"
          />

          <label className="text-[13px] text-[#6e44ff] font-medium mt-[15px] mb-1">Email address*</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2.5 bg-transparent border border-[#dcdcdc] rounded-md text-sm outline-none text-black"
          />

          <label className="text-[13px] text-[#6e44ff] font-medium mt-[15px] mb-1">Password *</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-2.5 bg-transparent border border-[#dcdcdc] rounded-md text-sm outline-none text-black"
          />

          <label className="text-[13px] text-[#6e44ff] font-medium mt-[15px] mb-1">Company name</label>
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="p-2.5 bg-transparent border border-[#dcdcdc] rounded-md text-sm outline-none text-black"
          />

          <p className="mt-5 text-sm font-medium">Are you an Agency?*</p>
          <div className="flex flex-wrap gap-3 mt-2 mb-5">
            <label className="text-sm flex items-center gap-1.5">
              <input
                type="radio"
                name="agency"
                value="Yes"
                onChange={handleChange}
                required
              />{" "}
              Yes
            </label>
            <label className="text-sm flex items-center gap-1.5">
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

          <button 
            className="bg-[#6e44ff] text-white font-semibold border-none rounded-md py-3 px-3 cursor-pointer text-sm mt-[135px] transition-colors duration-300 hover:bg-[#5a34d2] max-[480px]:text-[13px] max-[480px]:py-2.5 max-[480px]:px-2.5"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
