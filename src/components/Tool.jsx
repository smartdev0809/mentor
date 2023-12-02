import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

export const Tool = ({ tool }) => {
  return (
    <Reveal direction="bottom">
      <Link to={tool.link}>
        <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white cursor-pointer">
          <img
            src={tool.image}
            alt={tool.name}
            className="object-cover rounded-lg h-64 w-full"
          />
          <p className="relative mt-5 flex text-2xl tracking-tight text-[var(--primary)]">
            {tool.name}
          </p>
          <p className="mt-3 text-md text-gray-700">{tool.detail}</p>
        </section>
      </Link>
    </Reveal>
  );
};
