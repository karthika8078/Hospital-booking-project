import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async () => {
    console.log("Email input value:", email); // Log the email value
    console.log("Password input value:", password); // Log the password value
  
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
  
      if (response.status === 200) {
        alert("Login successful");
        navigate("/bookappointment"); // Redirect to appointment page
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Error during login");
    } finally {
      setLoading(false);
    }
  };
  




  return (
    



    <div className="login-page">
      <h2>Login</h2>
      




      <form>
      <input
  type="email"
  value={email}
  onChange={(e) => {
    console.log("Email changed to:", e.target.value); // Debug email input
    setEmail(e.target.value);
  }}
  placeholder="Email"
  required
/>
<input
  type="password"
  value={password}
  onChange={(e) => {
    console.log("Password changed to:", e.target.value); // Debug password input
    setPassword(e.target.value);
  }}
  placeholder="Password"
  required
/>



        <button type="button" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
   
    
  );
};

export default LoginPage;
