import React from "react";
import { Link } from "react-router-dom";
import { FaUserNurse, FaUserShield, FaHospital } from "react-icons/fa";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">NurseSync</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-200">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="text-blue-700 text-4xl mb-4">
                <FaUserNurse />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nurse Scheduling</h3>
              <p className="text-gray-600">
                Our AI-driven scheduling system optimizes nurse shifts, reduces
                conflicts, and ensures balanced workloads for maximum
                efficiency.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="text-blue-700 text-4xl mb-4">
                <FaUserShield />
              </div>
              <h3 className="text-xl font-semibold mb-2">Admin Management</h3>
              <p className="text-gray-600">
                Secure, user-friendly admin dashboards provide real-time
                insights into staff performance, scheduling, and operational
                metrics.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="text-blue-700 text-4xl mb-4">
                <FaHospital />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Patient Care Coordination
              </h3>
              <p className="text-gray-600">
                Enhance patient outcomes with streamlined communication tools
                that connect nurses, doctors, and patients seamlessly.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-200 text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-blue-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 NurseSync. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-200">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
