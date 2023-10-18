// LoginForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import pic from '../components/assets/bg-1.jpg'


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
      setError("User not found. Please check your credentials.");
      console.error("Error"+ error);
      setName('');
      setPassword('')
    }
  };

  return (
    <div className='flex flex-col bg-white pb-12 space-y-6 w-full rounded-lg shadow-2xl'>

        <div><img src={pic} className='h-48 w-[27rem] rounded-t-lg' alt="" /></div>

        <div className='ml-8'><label className='text-2xl'>Log IN</label></div>

        <div className='flex flex-col space-y-8 items-center justify-center text-gray-500'>
          <div className=''>
            <div className='flex flex-col space-y-7 w-80'>
              <input type="text" className='border px-2 py-3 rounded-md w-80 focus:outline-[#01d28e] ' value={name}onChange={(e) => setName(e.target.value)} placeholder='Username' />
              <input type="password" className='border px-2 py-3 rounded-md w-80 focus:outline-[#01d28e] '  value={password}onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
              {error && <p className="text-red-600">{error}</p>}
              <button onClick={handleLogin} className='bg-[#01d28e] rounded text-white py-2'>Log In</button>
            </div>
            <div className='flex items-center space-x-3 mt-2'>
              <input type="checkbox" className='w-4 h-4 border-0'/>
              <label className='text-[#01d28e]'>Remember Me</label>
            </div>
          </div>
          <div>
            <label>Don't have account?<Link to="/register" className='text-[#01d28e]'>Sign Up</Link></label>
          </div>
        </div>

    </div>
    
  );
};

export default Login;
