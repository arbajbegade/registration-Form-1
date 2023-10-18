// LoginForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUser,FaLock } from "react-icons/fa6";
import pic1 from './bg.png'


const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()


  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        name,
        password,
      });

      if (response.status === 200) {
        // Login successful
        // You can navigate to a new page/component here
        navigate("/table");
        console.log("Login successful");
      } else {
        setError("User not found. Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center">
      <h2>Log In</h2>
      <div className="rounded-xl py-4 px-16 flex flex-col justify-center items-center w-96 bg-gray-100 shadow-2xl shadow-gray-600">
        <div className="flex flex-col space-y-2">
          <div className="text-white text-9xl"> <img src={pic1} className='opacity-40' alt="" /> </div>
          <div className="flex space-x-2 items-center border rounded-md px-3 py-2 text-black divide-x">
            <FaUser />
            <input type="text"placeholder="Name" className="bg-transparent focus:outline-none px-2" value={name}onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="flex space-x-2 items-center border rounded-md px-3 py-2 text-black divide-x">
            <FaLock/>
            <input type="password"placeholder="Password" className="bg-transparent focus:outline-none px-2" value={password}onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin} className='w-full bg-emerald-500 my-4 py-1 text-lg rounded-lg shadow-2xl shadow-black text-white'>Log In</button>
        <div>
          {" "}
          Dont have account <Link to="/register" className="underline text-blue-600">Signup</Link> here
        </div>
      </div>
    </div>
  );
};

export default Login;
