import React from "react";
import { Tool } from "../components";
import { student, teacher } from "../assets";

const roles = [
  {
    name: "Student",
    detail: "Login as a student.",
    link: "/student/signin",
    image: student,
  },
  {
    name: "Teacher",
    detail: "Login as a teacher.",
    link: "/teacher/signin",
    image: teacher,
  },
];

export const Roles = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-2xl">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center min-h-screen">
          {roles.map((role, index) => (
            <Tool key={`role-${index}`} tool={role} />
          ))}
        </div>
      </div>
    </div>
  );
};
