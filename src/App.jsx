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
import {
  FactGenerator,
  ArtGenerator,
  CreativeWritingReviewer,
  PairProgrammer,
  LessonPlanGenerator,
  ExamplesAnalogiesGenerator,
  QuizGenerator,
} from "./pages/Tools";

function App() {
  return (
    <>
      <div className="main">
        <div className="gradient" />
        <div className="app">
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
              <Route path="/tool/art-generator" Component={ArtGenerator} />
              <Route path="/tool/pair-programmer" Component={PairProgrammer} />
              <Route
                path="/tool/creative-writing-reviewer"
                Component={CreativeWritingReviewer}
              />
              <Route
                path="/tool/lesson-plan-generator"
                Component={LessonPlanGenerator}
              />
              <Route
                path="/tool/examples-generator"
                Component={ExamplesAnalogiesGenerator}
              />
              <Route path="/tool/quiz-generator" Component={QuizGenerator} />
              <Route
                path="/tool/lesson-plan-generator"
                Component={LessonPlanGenerator}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
