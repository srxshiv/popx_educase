import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen p-5 bg-[#f9f9f9] box-border">
      <div className="bg-[rgb(243,242,242)] px-5 py-[30px] rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.1)] w-full max-w-[400px] text-left h-full max-h-[92vh] overflow-y-auto flex flex-col justify-end">
        <div className="mb-[-100px]">
          <h2 className="text-[30px] mb-2.5 mt-5 max-[480px]:text-xl">Welcome to PopX</h2>
          <p className="text-[#7c7979] text-sm max-[480px]:text-[13px]">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        </div>

        <button 
          className="w-full py-3 mb-2.5 border-none rounded-md text-base cursor-pointer bg-[#3b26f5] text-white mt-auto max-[480px]:text-sm max-[480px]:py-2.5"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
        <button 
          className="w-full py-3 mb-2.5 border-none rounded-md text-base cursor-pointer bg-[#d6b4f8] text-[#05000d] font-bold max-[480px]:text-sm max-[480px]:py-2.5"
          onClick={() => navigate("/signin")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
