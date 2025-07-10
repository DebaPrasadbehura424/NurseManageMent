import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [admin, setAdmin] = useState({ email: "", adminPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/admin/login",
        admin
      );
      sessionStorage.setItem("adminId", res.data.id);
      navigate("/admin_dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-green-900 mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              value={admin.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border-2 border-green-200 focus:border-green-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              id="email"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-green-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-green-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-green-600"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              name="adminPassword"
              value={admin.adminPassword}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border-2 border-green-200 focus:border-green-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              id="adminPassword"
            />
            <label
              htmlFor="adminPassword"
              className="absolute left-3 top-3 text-green-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-green-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-green-600"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
