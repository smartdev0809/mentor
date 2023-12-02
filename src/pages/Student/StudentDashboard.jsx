import React from "react";
import { Reveal, Tool } from "../../components";
import { facts } from "../../assets";

const tools = [
  {
    name: "Interesting Facts Generator",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Examples & Analogies Generator",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Art Generator",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Puzzles Generator",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Debate Partner",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Creative Writing Reviewer",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Pair Programmer",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Design Thinking Partner",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Latest News",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Historical Data",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Article Summarizer",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "YouTube Video Summarizer",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Citation Generator",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
];

export const StudentDashboard = () => {
  return (
    <section
      id="student-dashboard"
      aria-labelledby="student-dashboard-title"
      className="container border-t border-gray-200 bg-gray-100 py-20 sm:py-32 max-w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="bottom">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="student-dashboard-title"
              className="text-3xl font-medium tracking-tight text-gray-900"
            >
              Student Dashboard
            </h2>
            <p className="mt-2 text-lg text-gray-600">Tools</p>
          </div>
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {tools?.map((tool, index) => (
            <Tool key={index} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};
