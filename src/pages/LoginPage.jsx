import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMsg("");
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      console.log("Response:", {
        status: response.status,
        contentType: response.headers.get("Content-Type"),
      });

      if (!response.ok) {
        let errData;
        try {
          errData = await response.json();
          throw new Error(errData.message || "Invalid username or password");
        } catch (jsonError) {
          errData = await response.text();
          throw new Error(errData || "Login failed");
        }
      }

      const data = await response.json();
      if (!data.token || !data.username) {
        throw new Error("Missing token or username in response");
      }

      console.log("Login successful", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      navigate("/dashboard");
    } catch (error) {
      setErrorMsg(error.message || "An unexpected error occurred");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-black">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Welcome 🎯</h2>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-300 italic">
          “Set your goals high, and don’t stop till you get there.” — Bo Jackson
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={isLoading}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />

          {errorMsg && <p className="text-red-500 text-sm font-medium">{errorMsg}</p>}

          <button
            type="submit"
            className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {/* ✅ Add this below the button */}
         <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-300">
  New user?{" "}
  <Link
    to="/register"
    className="text-indigo-600 hover:underline cursor-pointer"
  >
    Register here
  </Link>
</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
