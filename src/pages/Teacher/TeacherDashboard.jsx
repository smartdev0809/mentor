import React, { useState, useEffect } from "react";
import { Tool, Header } from "../../components";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { MainLayout } from "../../layouts";
import { plan, ppt, quiz, prep, worksheet, examples } from "../../assets";

const tools = [
  {
    name: "Lesson Plan Generator",
    detail:
      "Create customizable plans and simplify lesson planning for your classes using our Lesson Plan Generator!",
    link: "/tool/lesson-plan-generator",
    image: plan,
  },
  {
    name: "Quiz Generator",
    detail:
      "Tell us about your audience and topic to generate engaging questions and quizzes for students.",
    link: "/tool/quiz-generator",
    image: quiz,
  },
  {
    name: "Examples & Analogies Generator",
    detail:
      "Enter a concept or topic, and watch as we provide illuminating examples and vivid analogies!",
    link: "/tool/examples-generator",
    image: examples,
  },
  {
    name: "Presentation Creator",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: ppt,
  },
  {
    name: "Worksheets Generator",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: worksheet,
  },
  {
    name: "Lecture Prep Partner",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: prep,
  },
];

export const TeacherDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
      !user_ && navigate("/teacher/signin");
    });
  }, [user]);

  return (
    <MainLayout>
      <section
        id="teacher-dashboard"
        aria-labelledby="teacher-dashboard-title"
        className="py-20 sm:py-32 max-w-full"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header title="Teacher" title_="Dashboard" subtitle="Streamlining teaching workflows and fostering effective studying through AI-driven tools such as quiz, examples, and lesson plans generator for teachers." />
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {tools?.map((tool, index) => (
              <Tool key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
