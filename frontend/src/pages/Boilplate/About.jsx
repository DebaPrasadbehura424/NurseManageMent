import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">NurseSync</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link to="/services" className="hover:text-blue-200">
              Services
            </Link>
            <Link to="/contact" className="hover:text-blue-200">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About NurseSync
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p className="text-lg">
              NurseSync is a leading nurse management platform designed to
              streamline healthcare operations and enhance patient care. Our
              mission is to empower healthcare facilities and professionals with
              innovative tools to manage schedules, communication, and patient
              care efficiently.
            </p>
            <p className="text-lg">
              Founded in 2023, NurseSync was created by a team of healthcare and
              technology experts dedicated to solving the challenges of nurse
              staffing and coordination. Our platform combines cutting-edge
              technology with user-friendly design to support nurses,
              administrators, and healthcare organizations.
            </p>
            <p className="text-lg">
              Our vision is to revolutionize healthcare management by providing
              a seamless, secure, and scalable solution that improves staff
              satisfaction and patient outcomes. Join us in transforming the
              future of healthcare.
            </p>
            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-200 text-lg"
              >
                Contact Us
              </Link>
            </div>
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
            <Link to="/services" className="hover:text-blue-200">
              Services
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

export default About;
