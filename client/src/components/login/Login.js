import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex  justify-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <div className="flex flex-col items-center mt-10 space-y-32">
        <h1 className="text-3xl font-semibold bg-white text-black w-full text-center py-4 bg-opacity-90 rounded-2xl">
        DEV PATEL INSTITUTE OF TECHNOLOGY
        </h1>
        <div className="grid grid-cols-2 gap-28">
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-50 rounded-xl">
            <h1 className="text-4xl font-extrabold text-white">Faculty</h1>

            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-50 rounded-xl">
            <h1 className="text-4xl font-extrabold text-white">Student</h1>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
