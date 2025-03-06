import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const dotenv = require('dotenv');
dotenv.config();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        console.log("Login successful:", response.data);
  
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
          console.log("Token stored successfully");
        }
  
        navigate('/admin'); // ✅ Fixed case
      }
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-[#1a1a1a] rounded-lg shadow-lg border border-[#FFD700]">
        <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="text-[#FFD700] block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-[#FFD700] focus:ring-2 focus:ring-[#FFD700] focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="text-[#FFD700] block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-[#FFD700] focus:ring-2 focus:ring-[#FFD700] focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#FFD700] text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-[#FFD700] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
