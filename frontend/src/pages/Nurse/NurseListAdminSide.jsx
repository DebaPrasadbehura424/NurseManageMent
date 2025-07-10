import React, { useEffect, useState } from "react";
import axios from "axios";

function NurseListAdminSide() {
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    const fetchNurses = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/admin/getAllNurses"
        );
        console.log(res.data);

        setNurses(res.data);
      } catch (error) {
        console.error("Error fetching nurses:", error);
      }
    };

    fetchNurses();
  }, []);
  console.log(nurses);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">
        Nurse List
      </h2>
      <div className="max-w-5xl mx-auto">
        {nurses.length === 0 ? (
          <p className="text-center text-gray-500">No nurses found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nurses.map((nurse) => (
              <div
                key={nurse.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:bg-teal-50 cursor-pointer transition-colors duration-150"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {nurse.name}
                </h3>

                <p className="text-xs text-gray-500 italic mb-3">
                  <span className="font-medium text-gray-700">Nurse ID:</span>{" "}
                  {nurse.id}
                </p>

                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-teal-600">Email:</span>{" "}
                  {nurse.email}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-teal-600">Contact:</span>{" "}
                  {nurse.contact}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-teal-600">Age:</span>{" "}
                  {nurse.age}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-teal-600">Gender:</span>{" "}
                  {nurse.gender}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-teal-600">Department:</span>{" "}
                  {nurse.department}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-teal-600">Shift:</span>{" "}
                  {nurse.shift}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NurseListAdminSide;
