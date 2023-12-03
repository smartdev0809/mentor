import React from "react";
import { Navbar, Footer, Faqs, Pricing } from "../components";
import { Link } from "react-router-dom";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { logo, pricinglogo } from "../assets";

const pricingHeading = "Choose Your Plan";
const pricingSubheading =
  "Flexible pricing options for every user. Select the tier that best matches your needs and embark on an AI-STEAM learning experience tailored to you.";
const plans = [
  {
    name: "Tier 1: Basic Access",
    detail:
      "Suitable for individuals exploring the platform. Basic functionalities for casual users.",
    price: "$0",
    features: [
      "Access to fundamental AI tools for students and educators",
      "Limited storage and usage capacity",
      "Basic content library",
    ],
    button: "Get Started for Free",
    image: <img src={pricinglogo} width={28} height={28} alt="Starter Plan" />,
  },
  {
    name: "Tier 2: Standard Access",
    detail:
      "Suitable for students and educators seeking broader AI applications. Enhanced functionalities for regular users.",
    price: "$4.99",
    features: [
      "Expanded range of AI-powered tools",
      "Increased storage capacity",
      "Advanced content library",
    ],
    button: "Subscribe",
    image: <img src={pricinglogo} width={28} height={28} alt="Weekly Plan" />,
  },
  {
    name: "Tier 3: Premium Access",
    detail:
      "Suitable for serious learners, educational institutions, and professionals. Comprehensive access for advanced users and organizations.",
    price: "$19.99",
    features: [
      "Full access to all AI-STEAM tools and resources",
      "Unlimited storage and usage",
      "Exclusive premium content and support",
    ],
    button: "Subscribe",
    image: <img src={pricinglogo} width={28} height={28} alt="Monthly Plan" />,
  },
];

const footerTabs = [{ name: "Home", link: "/" }];

const faqs = [
  {
    question:
      "What are the key benefits of using Mentor Sphere for educators and students?",
    answer:
      "Mentor Sphere provides educators with AI-powered tools for creating lesson plans, presentations, and grading, streamlining their workflow and saving time. For students, the platform offers tools to summarize YouTube videos, create flashcards, resumes, and more, enhancing their learning experience and productivity.",
  },
  {
    question:
      "How does Mentor Sphere integrate artificial intelligence to enhance STEAM education?",
    answer:
      "Mentor Sphere integrates artificial intelligence by offering specialized tools tailored for STEAM education, such as simulations, data analysis, and problem-solving applications. These tools provide an interactive and immersive learning experience for students, enhancing their understanding of STEAM subjects through AI-powered applications.",
  },
  {
    question:
      "What features does Mentor Sphere offer to support personalized learning experiences for students?",
    answer:
      "Mentor Sphere offers personalized learning experiences for students through features like adaptive learning algorithms, personalized study plans, and customized content recommendations. By leveraging AI, the platform tailors learning materials to individual student needs, enhancing engagement and knowledge retention.",
  },
  {
    question:
      "How does Mentor Sphere assist teachers in creating interactive and engaging lesson plans",
    answer:
      "Mentor Sphere assists teachers in creating interactive and engaging lesson plans by providing AI-driven content generation tools, interactive multimedia resources, and adaptive learning modules. These features allow educators to develop dynamic and personalized lesson plans that cater to diverse learning styles and academic levels.",
  },
  {
    question:
      "Can Mentor Sphere adapt to the individual needs and learning styles of students across various subjects?",
    answer:
      "Mentor Sphere is designed to adapt to the individual needs of educators and students by offering customizable features, personalized recommendations, and adaptive learning pathways. The platform's AI-powered tools continuously analyze user interactions and learning patterns to tailor the educational experience to the specific needs and preferences of each user.",
  },
];

const perks = [
  {
    name: "AI-Powered Teaching Resources",
    Icon: ArrowDownToLine,
    description:
      "Empowering educators with AI tools for lesson planning, presentations, worksheet creation, grading assistance, and more.",
  },
  {
    name: "Student-Centric AI Tools",
    Icon: CheckCircle,
    description:
      "Equipping students with note creation, flashcards, summarization, resume building, and other AI-enhanced learning utilities.",
  },
  {
    name: "Efficiency and Productivity Boost",
    Icon: Leaf,
    description:
      "Streamlining teaching workflows and fostering effective studying through AI-driven tools for teachers and students alike.",
  },
];

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <div className="flex-grow flex-1">
          <div className="max-w-wrapper">
            <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
                Smart Learning, Bright Futures:
                <br />
                <span className="orange_gradient">AI-STEAM Solutions</span>.
              </h1>
              <p className="mt-6 text-lg max-w-prose text-gray-600">
                Empowering education through innovative AI-STEAM tools for
                engaged learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/" className="btn-default">
                  Browse Trending
                </Link>
                <button className="btn-ghost">
                  Our Quality Promise &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="max-w-wrapper py-20">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-[var(--primary)]">
                      {<perk.Icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>

                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--foreground)]">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Pricing
          heading={pricingHeading}
          subheading={pricingSubheading}
          plans={plans}
        />
        <Faqs faqs={faqs} />
      </main>
      <Footer
        logo={logo}
        name="Mentor Sphere"
        slogan="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, non."
        footerTabs={footerTabs}
      />
    </>
  );
};
