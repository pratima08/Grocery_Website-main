// App.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";

function LoginRegister() {
  //Code for registration
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };
  //handlechange for login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };
  // Form validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!formData.password.trim()) {
      setError("Password is required");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      );
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:2024/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Important for handling cookies
        }
      );

      if (response.data.success) {
        // Clear form
        setFormData({
          name: "",
          email: "",
          password: "",
        });

        // Show success message or redirect
        navigate("/login");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during registration"
      );
    } finally {
      setLoading(false);
    }
  };
  // Handle login submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      setError("Please fill out both fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:2024/api/users/login",
        loginData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setLoginData({ email: "", password: "" });
        navigate("/dashboard"); // redirect to a dashboard or homepage
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:2024/api/users/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        alert("You have logged out successfully."); // Display success alert
        setLoginData({ email: "", password: "" });
        navigate("/main"); // Redirect to login page or homepage
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during logout"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="myaccountcontent">
        <h1>MY ACCOUNT</h1>
        <div className="inoneline">
          <p>HOME</p>
          <p>MY ACCOUNT</p>
        </div>
      </div>

      <div className="login-register-container">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <label>Username or email address *</label>
            <input
              type="text"
              required
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
            />

            <label>Password *</label>
            <input
              type="password"
              required
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
            />

            <div className="remember-me">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>

            <button type="submit" className="login-btn">
              Log in
            </button>

            <a href="/" className="forgot-password">
              Lost your password?
            </a>

            <div className="social-login">
              <button className="facebook-login">Login With Facebook</button>
              <button className="google-login">Login With Google +</button>
            </div>
          </form>
          <form onSubmit={handleLogout}>
            <button type="submit" className="login-btn">
              Log Out
            </button>
          </form>
        </div>

        <div className="register-container">
          <h2>Register</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <label>Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
            <label> Email *</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Password *</label>
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <p>
              A link to set a new password will be sent to your email address.
            </p>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>

            <button type="submit" className="register-btn" disabled={loading}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
