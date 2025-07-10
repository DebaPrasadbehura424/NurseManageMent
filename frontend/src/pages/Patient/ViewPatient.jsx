import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewPatient() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/patients/${id}`
        );
        const data = response.data;
        const formattedDate = data.admissionDate?.substring(0, 10);
        setPatient({ ...data, admissionDate: formattedDate });
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };

    fetchPatient();
  }, [id]);

  if (!patient) {
    return (
      <div className="text-center text-gray-500 p-6">
        Loading patient data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Patient Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Detail label="Full Name" value={patient.fullName} />
          <Detail label="Age" value={patient.age} />
          <Detail label="Gender" value={patient.gender} />
          <Detail label="Contact" value={patient.contact} />
          <Detail label="Address" value={patient.address} />
          <Detail label="Admission Date" value={patient.admissionDate} />
          <Detail label="Symptoms" value={patient.symptoms} />
          <Detail label="Diagnosis" value={patient.diagnosis} />
          <Detail label="Doctor" value={patient.doctor} />
          <Detail label="Ward" value={patient.ward} />
          <Detail label="Status" value={patient.status || "N/A"} />
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="bg-gray-50 border rounded p-4">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-medium text-gray-800 mt-1">{value}</div>
    </div>
  );
}

export default ViewPatient;
