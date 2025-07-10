import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditPatient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const role = sessionStorage.getItem("role");

  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/patients/${id}`
        );
        const data = response.data;

        const formattedDate = data.admissionDate?.substring(0, 10);

        setPatient({
          ...data,
          admissionDate: formattedDate,
        });
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };

    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:8080/api/patients/savePatient`,
        patient
      );
      alert("Patient updated successfully ✅");
      if (role == "nurse") {
        navigate("/patient_list");
      } else {
        navigate("/patient-list");
      }
    } catch (error) {
      console.error("Error updating patient:", error);
      alert("Failed to update patient ❌");
    }
  };

  if (!patient) {
    return (
      <div className="text-center p-10 text-gray-500">
        Loading patient data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">
          Edit Patient
        </h2>
        <form onSubmit={handleSave} className="space-y-4">
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
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPatient;
