import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function PatientList() {
  const [patients, setPatients] = useState([]);
  const nurseId = sessionStorage.getItem("nurseId");

  const fetchMyPatients = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/nurses/referPatient`,
        {
          params: { nurseId },
        }
      );
      console.log(response.data);

      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
      alert("Failed to fetch patients ❌");
    }
  };

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

  useEffect(() => {
    if (nurseId) {
      fetchMyPatients();
    } else {
      alert("Nurse ID not found in session");
    }
  }, [nurseId]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          My Referred Patients
        </h2>

        <div className="mb-6 flex flex-wrap gap-4">
          <NavLink
            to="/all_patient_list"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            View All Patients
          </NavLink>
          <NavLink
            to="/patient_Register"
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
          >
            Register New Patient
          </NavLink>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border rounded">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  #
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Age
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Gender
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Address
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Admission Date
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Symptoms
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Diagnosis
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Doctor
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Ward
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {patients.length > 0 ? (
                patients.map((patient, index) => (
                  <tr
                    key={patient.id || index}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{patient.fullName}</td>
                    <td className="p-3">{patient.age}</td>
                    <td className="p-3">{patient.gender}</td>
                    <td className="p-3">{patient.address}</td>
                    <td className="p-3">{patient.admissionDate}</td>
                    <td className="p-3">{patient.symptoms}</td>
                    <td className="p-3">{patient.diagnosis}</td>
                    <td className="p-3">{patient.doctor}</td>
                    <td className="p-3">{patient.ward}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium 
                        ${
                          patient.status === "Recovered"
                            ? "bg-green-100 text-green-800"
                            : patient.status === "Critical"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {patient.status || "Pending"}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2">
                      <NavLink
                        to={`/edit_patient/${patient.id}`}
                        className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm transition"
                      >
                        Edit
                      </NavLink>
                      <button
                        onClick={() => handleDelete(patient.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="text-center text-gray-500 py-6">
                    No patients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientList;
