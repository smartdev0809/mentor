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

function App() {
  return (
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
      </Routes>
    </Router>
  );
}

export default App;
