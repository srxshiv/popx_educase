import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      navigate("/account", {
        state: {
          fullName: storedUser.fullName,
          email: storedUser.email,
        },
      });
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-5 box-border bg-[#f7f7f7fb]">
      <div className="w-full max-w-[400px] bg-[#f3f2f2] px-[25px] py-[30px] rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.1)] h-[97%] max-[480px]:px-5 max-[480px]:py-[25px]">
        <h2 className="text-[34px] mb-0 font-bold text-[#222] leading-none max-[480px]:text-xl">Signin to your </h2>
        <h3 className="text-[28px] mb-5 font-bold text-[#222] leading-[1]">PopX account</h3>
        <p className="text-[#7c7979] text-sm mb-0.5 mt-[1%]">Lorem ipsum dolor sit amet,</p>
        <p className="text-[#7c7979] text-sm mb-0.5 mt-[1%]">consectetur adipiscing elit,</p>

        <form className="flex flex-col" onSubmit={handleLogin}>
          <label className="text-[13px] text-[#6e44ff] font-medium mt-[15px] mb-1">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2.5 bg-transparent border border-[#dcdcdc] rounded-md text-sm outline-none text-black"
          />

          <label className="text-[13px] text-[#6e44ff] font-medium mt-[15px] mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2.5 bg-transparent border border-[#dcdcdc] rounded-md text-sm outline-none text-black"
          />

          <button 
            className="bg-[#b1b0b0] text-white font-semibold border-none rounded-md py-3 px-3 cursor-pointer text-sm mt-10 transition-colors duration-300 hover:bg-[#8d8d8e] max-[480px]:text-[13px] max-[480px]:py-2.5 max-[480px]:px-2.5"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
