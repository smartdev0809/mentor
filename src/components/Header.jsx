import React from "react";
import { Reveal } from "./Reveal";

export const Header = ({ title, title_, subtitle, tool = false }) => {
  return (
    <Reveal direction="top">
      <div
        className={`${
          tool ? "py-24" : "py-4"
        } mx-auto text-center flex flex-col items-center max-w-3xl`}
      >
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
          {title}&nbsp;
          <span className="orange_gradient">{title_}</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-gray-600">{subtitle}</p>
      </div>
    </Reveal>
  );
};
