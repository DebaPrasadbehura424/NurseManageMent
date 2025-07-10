import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    department: "",
    shift: "",
    contact: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/nurses/register",
        formData
      );
      alert("Nurse registered successfully ✅");
      sessionStorage.setItem("nurseId", response.data.id);
      navigate("/nurse-list");
    } catch (error) {
      console.error("Error registering nurse:", error);
      alert("Failed to register nurse ❌");
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-teal-900 mb-6">
          Nurse Registration
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="relative">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              required
              autoComplete="on"
              id="name"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-3 text-teal-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-teal-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-teal-600"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              autoComplete="on"
              required
              id="age"
            />
            <label
              htmlFor="age"
              className="absolute left-3 top-3 text-teal-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-teal-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-teal-600"
            >
              Age
            </label>
          </div>
          <div className="relative">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-transparent text-teal-600 appearance-none peer"
              required
              id="gender"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
            <label
              htmlFor="gender"
              className="absolute left-3 top-3 text-teal-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-teal-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-teal-600"
            >
              Gender
            </label>
          </div>
          <div className="relative">
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              required
              id="department"
            />
            <label
              htmlFor="department"
              className="absolute left-3 top-3 text-teal-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-teal-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-teal-600"
            >
              Department
            </label>
          </div>
          <div className="relative">
            <input
              name="shift"
              value={formData.shift}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              required
              id="shift"
            />
            <label
              htmlFor="shift"
              className="absolute left-3 top-3 text-teal-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-teal-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-teal-600"
            >
              Shift
            </label>
          </div>
          <div className="relative">
            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              required
              id="contact"
            />
            <label
              htmlFor="contact"
              className="absolute left-3 top-3 text-teal-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-teal-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-teal-600"
            >
              Contact Number
            </label>
          </div>
          <div className="relative">
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              required
              id="email"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-teal-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-teal-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-teal-600"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-transparent peer"
              placeholder=" "
              required
              id="password"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-3 text-teal-400 transition-all duration-200 transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-teal-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-teal-600"
            >
              Password
            </label>
          </div>
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
            >
              Register Nurse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
