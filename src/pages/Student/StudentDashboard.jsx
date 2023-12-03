import React from "react";
import { Reveal, Tool, Header } from "../../components";
import {
  facts,
  art,
  puzzle,
  programmer,
  history,
  articles,
  debate,
  writing,
  citation,
  video,
  thinking,
  news,
} from "../../assets";
import { MainLayout } from "../../layouts";

const tools = [
  {
    name: "Interesting Facts Generator",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: facts,
  },
  {
    name: "Art Generator",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/art-generator",
    image: art,
  },
  {
    name: "Puzzles Generator",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: puzzle,
  },
  {
    name: "Debate Partner",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: debate,
  },
  {
    name: "Creative Writing Reviewer",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/creative-writing-reviewer",
    image: writing,
  },
  {
    name: "Pair Programmer",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/pair-programmer",
    image: programmer,
  },
  {
    name: "Design Thinking Partner",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: thinking,
  },
  {
    name: "Latest News",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: news,
  },
  {
    name: "Historical Data",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: history,
  },
  {
    name: "Article Summarizer",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: articles,
  },
  {
    name: "YouTube Video Summarizer",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: video,
  },
  {
    name: "Citation Generator",
    detail:
      "Enter a topic or keyword that piques your curiosity, and we'll uncover fascinating facts and a captivating image.",
    link: "/tool/fact-generator",
    image: citation,
  },
];

export const StudentDashboard = () => {
  return (
    <MainLayout>
      <section
        id="student-dashboard"
        aria-labelledby="student-dashboard-title"
        className="py-20 sm:py-32 max-w-full"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header title="Student" title_="Dashboard" subtitle="Tools" />
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
