import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PatientListAdminSide() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/admin/getAllPatients"
        );
        setPatients(res.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };
    fetchPatients();
  }, []);
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this patient?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/patients/del/${id}`);
        setPatients((prev) => prev.filter((p) => p.id !== id));
        alert("Patient deleted successfully ✅");
      } catch (error) {
        console.error("Error deleting patient:", error);
        alert("Failed to delete patient ❌");
      }
    }
  };
  const handleEdit = (id) => {
    navigate(`/edit_patient/${id}`);
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-teal-50 to-gray-100 flex flex-col items-center p-4 sm:p-6 overflow-auto">
      <h2 className="text-3xl font-extrabold text-center text-teal-900 mb-8">
        Patient List
      </h2>
      <div className="max-w-6xl mx-auto">
        {patients.length === 0 ? (
          <p className="text-center text-gray-600 text-lg font-medium">
            No patients found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className="bg-white rounded-xl shadow-lg border border-teal-100 p-6 hover:bg-teal-50 transition-all duration-200 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {patient.fullName}
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium text-teal-700">Age:</span>{" "}
                  {patient.age}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="text-teal-700">Gender:</span>{" "}
                  {patient.gender}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium text-teal-700">Doctor:</span>{" "}
                  {patient.doctor}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium text-teal-700">Nurse ID:</span>{" "}
                  {patient.nurseId}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium text-teal-700">Contact:</span>{" "}
                  {patient.contact}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium text-teal-700">Address:</span>{" "}
                  {patient.address}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium text-teal-700">Symptoms:</span>{" "}
                  {patient.symptoms}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium text-teal-700">Diagnosis:</span>{" "}
                  {patient.diagnosis}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium text-teal-700">
                    Admission Date:
                  </span>{" "}
                  {patient.admissionDate}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-medium text-teal-700">Ward:</span>{" "}
                  {patient.ward}
                </p>
                <p
                  className={`text-sm font-semibold mb-4 ${
                    patient.status === "Recovered"
                      ? "text-green-600"
                      : patient.status === "Critical"
                      ? "text-red-600"
                      : patient.status === "Under Observation"
                      ? "text-yellow-600"
                      : "text-gray-600"
                  }`}
                >
                  <span className="font-medium text-teal-700">Status:</span>{" "}
                  {patient.status}
                </p>
                <div className="flex gap-4">
                  <button
                    className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={() => handleDelete(patient.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-amber-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                    onClick={() => handleEdit(patient.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientListAdminSide;
