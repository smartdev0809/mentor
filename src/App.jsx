import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  TeacherLogin,
  Roles,
  StudentLogin,
  StudentRegister,
  TeacherRegister,
  VerifyEmail,
  StudentDashboard,
  TeacherDashboard,
} from "./pages";
import { Toaster } from "react-hot-toast";
import { FactGenerator } from "./pages/Tools";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/roles" Component={Roles} />
          <Route path="/student/signin" Component={StudentLogin} />
          <Route path="/teacher/signin" Component={TeacherLogin} />
          <Route path="/student/signup" Component={StudentRegister} />
          <Route path="/teacher/signup" Component={TeacherRegister} />
          <Route path="/student/dashboard" Component={StudentDashboard} />
          <Route path="/teacher/dashboard" Component={TeacherDashboard} />
          <Route path="/verify-email" Component={VerifyEmail} />
          <Route path="/tool/fact-generator" Component={FactGenerator} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
