import { useNavigate, Link } from "react-router-dom";
import { FaUserNurse, FaUserShield, FaHospital } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleNurseLogin = () => {
    sessionStorage.setItem("role", "nurse");
    navigate("/login");
  };

  const handleAdminLogin = () => {
    sessionStorage.setItem("role", "admin");
    navigate("/admin_Login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">NurseSync</h1>
          <nav className="space-x-4">
            <Link to="/about" className="hover:text-blue-200">
              About
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

      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Empowering Healthcare with NurseSync
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              NurseSync is your all-in-one platform for seamless nurse
              management, scheduling, and patient care coordination. Our
              cutting-edge technology ensures healthcare professionals can focus
              on what matters most—delivering exceptional patient care. Join our
              community to streamline operations and enhance healthcare
              delivery.
            </p>
            <div className="flex space-x-4">
              {/* Use buttons here to trigger sessionStorage and navigation */}
              <button
                onClick={handleNurseLogin}
                className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-200 text-lg"
              >
                <FaUserNurse className="mr-2" />
                Login as Nurse
              </button>
              <button
                onClick={handleAdminLogin}
                className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-200 text-lg"
              >
                <FaUserShield className="mr-2" />
                Login as Admin
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Healthcare professional"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose NurseSync?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-blue-700 text-4xl mb-4">
                <FaUserNurse />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Smart Nurse Scheduling
              </h4>
              <p className="text-gray-600">
                Optimize nurse schedules with our AI-driven tools, ensuring
                balanced workloads and timely shift assignments for maximum
                efficiency.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-blue-700 text-4xl mb-4">
                <FaUserShield />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Robust Admin Control
              </h4>
              <p className="text-gray-600">
                Secure admin dashboards provide real-time insights into staff
                performance, scheduling, and operational metrics.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-blue-700 text-4xl mb-4">
                <FaHospital />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Enhanced Patient Care
              </h4>
              <p className="text-gray-600">
                Streamline communication between nurses and patients, improving
                care coordination and patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "NurseSync has transformed how we manage our nursing staff.
                Scheduling is a breeze, and our team is more productive than
                ever!"
              </p>
              <p className="text-gray-800 font-semibold">
                Dr. Sarah Johnson, Hospital Administrator
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "As a nurse, I love how easy it is to check my schedule and
                communicate with my team. NurseSync makes my job easier."
              </p>
              <p className="text-gray-800 font-semibold">
                Emily Carter, Registered Nurse
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Healthcare?
          </h3>
          <p className="text-lg mb-6">
            Join NurseSync today and experience seamless nurse management and
            patient care.
          </p>
          <Link
            to="/login"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-200 text-lg font-semibold"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <footer className="bg-blue-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 NurseSync. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/about" className="hover:text-blue-200">
              About
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

export default Home;
