import React, { useState } from "react";
import axios from "axios";

function AdminRegister() {
  const [admin, setAdmin] = useState({ email: "", adminPassword: "" });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/admin/register", admin);
      alert("Admin registered successfully");
      setAdmin({ email: "", adminPassword: "" });
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-indigo-800 mb-6">
          Admin Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              value={admin.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border-2 border-indigo-200 focus:border-blue-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              id="email"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-indigo-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-blue-600"
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
              className="w-full p-3 rounded-lg border-2 border-indigo-200 focus:border-blue-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              id="adminPassword"
            />
            <label
              htmlFor="adminPassword"
              className="absolute left-3 top-3 text-indigo-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-blue-600"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminRegister;
