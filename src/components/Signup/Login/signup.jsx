// src/Components/Signup/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Backend API URL
  const BASE_URL = "http://localhost:5004";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({
        message: "No JSON in response",
      }));

      console.log("Signup response:", res.status, data);

      if (!res.ok) {
        alert(data.message || "Signup failed!");
        setLoading(false);
        return;
      }

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Unable to connect to server. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-50">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Create Account
        </h2>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          className="w-full border p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          className="w-full border p-3 rounded mb-6"
          onChange={handleChange}
        />

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition disabled:bg-purple-300"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-purple-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
