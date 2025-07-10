import { NavLink } from "react-router-dom";

function Admin_DashBoard() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-50 to-teal-50 flex items-center justify-center p-4 sm:p-6 relative">
      <NavLink to="/messages" className="absolute top-6 right-6">
        <button className="bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50">
          Messages
        </button>
      </NavLink>

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 space-y-8 transform transition-all duration-300">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-teal-900 tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 text-base mt-3 font-medium">
            Efficiently manage hospital staff and patients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <NavLink
            to="/nurse-list"
            className="transform transition-transform duration-200 hover:scale-105"
          >
            <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
              View Nurse List
            </button>
          </NavLink>

          <NavLink
            to="/patient-list"
            className="transform transition-transform duration-200 hover:scale-105"
          >
            <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
              View Patient List
            </button>
          </NavLink>

          <NavLink
            to="/register"
            className="transform transition-transform duration-200 hover:scale-105"
          >
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Register Nurse
            </button>
          </NavLink>

          <NavLink
            to="/admin_Register"
            className="transform transition-transform duration-200 hover:scale-105"
          >
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Register Admin
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Admin_DashBoard;
