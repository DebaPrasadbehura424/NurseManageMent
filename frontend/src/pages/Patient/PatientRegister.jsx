import React, { useState } from "react";
import axios from "axios";

function RegisterPatient() {
  const [patient, setPatient] = useState({
    fullName: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    admissionDate: "",
    symptoms: "",
    diagnosis: "",
    doctor: "",
    ward: "",
    status: "",
  });

  const nurseId = sessionStorage.getItem("nurseId");

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nurseId) {
      alert("Nurse ID not found in session.");
      return;
    }

    try {
      await axios.post(
        `http://localhost:8080/api/patients/patientRegister`,
        patient,
        {
          params: { Id: nurseId },
        }
      );

      alert("Patient registered successfully ✅");
      setPatient({
        fullName: "",
        age: "",
        gender: "",
        contact: "",
        address: "",
        admissionDate: "",
        symptoms: "",
        diagnosis: "",
        doctor: "",
        ward: "",
      });
    } catch (error) {
      console.error("Error registering patient:", error);
      alert("Failed to register patient ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-6">Register Patient</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={patient.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={patient.age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <select
            name="gender"
            value={patient.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={patient.contact}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={patient.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="admissionDate"
            placeholder="Admission Date"
            value={patient.admissionDate}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="symptoms"
            placeholder="Symptoms"
            value={patient.symptoms}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="diagnosis"
            placeholder="Diagnosis"
            value={patient.diagnosis}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="doctor"
            placeholder="Doctor Name"
            value={patient.doctor}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="ward"
            placeholder="Ward"
            value={patient.ward}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <select
            name="status"
            value={patient.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Status</option>
            <option>Recovered</option>
            <option>Critical</option>
            <option>Under Observation</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register Patient
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPatient;
