import { Routes, Route } from "react-router-dom";

import Register from "./pages/Nurse/Register";
import Login from "./pages/Nurse/login";
import NurseListAdminSide from "./pages/Nurse/NurseListAdminSide";

import PatientRegister from "./pages/Patient/PatientRegister";
import PatientList from "./pages/Patient/PatientList";
import EditPatient from "./pages/Patient/EditPatient";
import ViewPatient from "./pages/Patient/ViewPatient";
import PatientListAdminSide from "./pages/Patient/PatientListAdminSide";
import AllPatient from "./pages/Patient/Allpatient";

import AdminRegister from "./pages/Admin/AdminRegister";
import AdminLogin from "./pages/Admin/AdminLogin";
import Admin_DashBoard from "./pages/Admin/Admin_DashBoard";

import Home from "./pages/Boilplate/Home";
import About from "./pages/Boilplate/About";
import Services from "./pages/Boilplate/Services";
import Contact from "./pages/Boilplate/Contact";
import Messages from "./pages/Admin/Messages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/nurse-list" element={<NurseListAdminSide />} />

      <Route path="/patient_Register" element={<PatientRegister />} />
      <Route path="/patient_list" element={<PatientList />} />
      <Route path="/all_patient_list" element={<AllPatient />} />
      <Route path="/edit_patient/:id" element={<EditPatient />} />
      <Route path="/viewPatient/:id" element={<ViewPatient />} />
      <Route path="/patient-list" element={<PatientListAdminSide />} />

      <Route path="/admin_Login" element={<AdminLogin />} />
      <Route path="/admin_Register" element={<AdminRegister />} />
      <Route path="/admin_dashboard" element={<Admin_DashBoard />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
}

export default App;
