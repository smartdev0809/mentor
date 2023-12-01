import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, TeacherLogin, Roles, StudentLogin, StudentRegister, TeacherRegister } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/roles" Component={Roles} />
        <Route path='/student/signin' Component={StudentLogin} />
        <Route path='/teacher/signin' Component={TeacherLogin} />
        <Route path='/student/signup' Component={StudentRegister} />
        <Route path='/teacher/signup' Component={TeacherRegister} />
      </Routes>
    </Router>
  );
}

export default App;
