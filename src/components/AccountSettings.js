import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const stateUser = location.state;

    if (stateUser && stateUser.fullName && stateUser.email) {
      setUser(stateUser);
    } else if (storedUser && storedUser.fullName && storedUser.email) {
      setUser({
        fullName: storedUser.fullName,
        email: storedUser.email,
      });
    } else {
      navigate("/signup");
    }
  }, [location.state, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f6fa]">
      <div className="bg-[rgb(243,242,242)] p-0 rounded border border-[#e0e0e0] w-[400px] h-[99vh] overflow-hidden shadow-[0px_0px_10px_#ccc]">
        <h2 className="m-0 font-normal text-xl py-5 px-[25px] bg-white border-b border-white shadow-none">
          Account Settings
        </h2>

        <div className="p-[25px]">
          <div className="flex items-center gap-5">
            <div className="relative w-[100px] h-[100px]">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_1280.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#555] p-1.5 rounded-full">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/24/ffffff/camera.png"
                  alt="Camera Icon"
                />
              </div>
            </div>

            <div>
              <h3 className="m-0">{user.fullName}</h3>
              <p className="my-1 text-[#666]">{user.email}</p>
            </div>
          </div>

          <p className="mt-[15px] text-sm text-[#1e1d1d] text-left leading-[1.5] border-b border-dashed border-[#ccc] pb-[15px]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
