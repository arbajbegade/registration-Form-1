import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import pic from "../components/assets/bg-1.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = async () => {
    // Validation
    if (!name || !dateOfBirth || !email || !password) {
      const errors = {};
      if (!name) errors.name = "Name is required";
      if (!dateOfBirth) errors.dateOfBirth = "Date of Birth is required";
      if (!email) errors.email = "Email is required";
      if (!password) errors.password = "Password is required";
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        dateOfBirth,
        email,
        password,
      });
      console.log(response.data);
      const userData = {
        name,
        dateOfBirth,
        email,
        password,
      };
      // Convert the object to a JSON string and store it in localStorage
      localStorage.setItem("userData", JSON.stringify(userData));
      setUserData(response.data.user);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col bg-white pb-12 space-y-6 w-full rounded-lg shadow-2xl">

        <div><img src={pic} className="h-48 w-[27rem] rounded-t-lg" alt="" /></div>
        <div className="ml-8"><label className="text-2xl">Sign Up</label></div>
        {registrationSuccess? (
          <div className="flex justify-center items-center flex-col">
            <label>Thank You For Registration</label>
            <Link to='/' className="text-[#01d28e]">Log In</Link>
          </div>
        ):(
        <div className="flex flex-col space-y-4 items-center justify-center text-gray-500">
          <div className="">
            <form className="flex flex-col space-y-4 w-80">
              <input type="text"className="border px-2 py-3 rounded-md w-80 focus:outline-[#01d28e] "placeholder="Username"value={name}onChange={(e) => setName(e.target.value)}required/>
              {validationErrors.name && (
                <span className="error">{validationErrors.name}</span>
              )}
              <input type="date"placeholder="Date of Birth"className="border px-2 py-3 rounded-md w-80 focus:outline-[#01d28e] "value={dateOfBirth}onChange={(e) => setDateOfBirth(e.target.value)}required/>
              {validationErrors.dateOfBirth && (
                <span className="error">{validationErrors.dateOfBirth}</span>
              )}
              <input type="email"placeholder="Email"className="border px-2 py-3 rounded-md w-80 focus:outline-[#01d28e] "value={email}onChange={(e) => setEmail(e.target.value)}required/>
              {validationErrors.email && (
                <span className="error">{validationErrors.email}</span>
              )}
              <input type="password"placeholder="Password"className="border px-2 py-3 rounded-md w-80 focus:outline-[#01d28e] "value={password}onChange={(e) => setPassword(e.target.value)}required/>
              {validationErrors.password && (
                <span className="error">{validationErrors.password}</span>
              )}
              <button onClick={handleRegistration}className="bg-[#01d28e] rounded text-white py-2">Register</button>
            </form>
          </div>
          <div>
            <label>Have account? <Link to='/'  className="text-[#01d28e]">Log In</Link></label>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Register;
