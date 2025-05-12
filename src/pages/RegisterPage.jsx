import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Basic validation
    if (username.trim().length < 3 || password.trim().length < 6) {
      alert("Username must be at least 3 characters and password at least 6 characters.");
      return;
    }

    setIsLoading(true); // Start loading state
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        username,
        password,
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Username might already exist.");
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="border w-full p-2 focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-label="Username"
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Password"
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white w-full py-2 rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
