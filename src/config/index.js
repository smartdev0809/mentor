import {
  facts,
  art,
  articles,
  writing,
  plan,
  examples,
  quiz
} from "../assets";
export const PRODUCT_CATEGORIES = [
    {
      label: 'Student Tools',
      value: 'student_tools',
      featured: [
        {
          name: "Interesting Facts Generator",
          href: "/tool/fact-generator",
          imageSrc: facts,
        },
        {
          name: "Art Generator",
          href: "/tool/art-generator",
          imageSrc: art,
        },
        {
          name: "Creative Writing Reviewer",
          href: "/tool/creative-writing-reviewer",
          imageSrc: writing,
        },
        {
          name: "Article Summarizer",
          href: "/tool/article-summarizer",
          imageSrc: articles,
        },
      ],
    },
    {
      label: 'Teacher Tools',
      value: 'teacher_tools',
      featured: [
        {
          name: "Lesson Plan Generator",
          href: "/tool/lesson-plan-generator",
          imageSrc: plan,
        },
        {
          name: "Examples & Analogies Generator",
          href: "/tool/examples-generator",
          imageSrc: examples,
        },
        {
          name: "Quiz Generator",
          href: "/tool/quiz-generator",
          imageSrc: quiz,
        },
      ],
    },
  ]