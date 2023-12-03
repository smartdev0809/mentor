import React, { useState, useEffect } from "react";
import { Tool, Header } from "../../components";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
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
      "Explore art effortlessly! Input a theme, discover captivating artworks, and indulge your creativity with our Art Generator.",
    link: "/tool/art-generator",
    image: art,
  },
  {
    name: "Article Summarizer",
    detail:
      "Enter an article URL and transform lengthy articles into clear and concise summaries using our AI based summarizer.",
    link: "/tool/article-summarizer",
    image: articles,
  },
  {
    name: "Creative Writing Reviewer",
    detail:
      "Input your essay or text, and receive constructive feedback to enhance clarity, coherence, and overall impact.",
    link: "/tool/creative-writing-reviewer",
    image: writing,
  },
  {
    name: "Puzzles Generator",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: puzzle,
  },
  {
    name: "Debate Partner",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: debate,
  },
  {
    name: "Pair Programmer",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: programmer,
  },
  {
    name: "Design Thinking Partner",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: thinking,
  },
  {
    name: "News Feed",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: news,
  },
  {
    name: "Time Traveler",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: history,
  },
  {
    name: "YouTube Video Summarizer",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: video,
  },
  {
    name: "Citation Generator",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante arcu. Morbi aliquet vel nibh vel convallis.",
    link: "",
    image: citation,
  },
];

export const StudentDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
      !user_ && navigate("/student/signin");
    });
  }, [user]);

  return (
    <MainLayout>
      <section
        id="student-dashboard"
        aria-labelledby="student-dashboard-title"
        className="py-20 sm:py-32 max-w-full"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header title="Student" title_="Dashboard" subtitle="Equipping students with facts creation, writing reviewer, summarization, image generation, and other AI-enhanced learning utilities." />
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
