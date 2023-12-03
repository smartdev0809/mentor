import React from "react";
import { Navbar, Footer, Faqs, Pricing } from "../components";
import { Link } from "react-router-dom";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { logo, pricinglogo } from "../assets";

const pricingHeading = "Choose Your Plan";
const pricingSubheading = "Flexible Pricing Options for Every User";
const plans = [
  {
    name: "Starter",
    detail:
      "Enjoy the basic features with ads included. You want to try it out as a hobby.",
    price: "$0",
    features: [
      "Ads Included",
      "5 Free Art Generations Every Day",
      "No Watermark",
      "Access to Unlocked Models",
    ],
    button: "Get Started for Free",
    image: <img src={pricinglogo} width={28} height={28} alt="Starter Plan" />,
  },
  {
    name: "Weekly",
    detail: "Upgrade to our weekly plan for an ad-free experience for 1 week.",
    price: "$4.99",
    features: [
      "No Ads",
      "Unlimited Art Generations for 1 Week",
      "No Watermark",
      "Access to All Models",
    ],
    button: "Subscribe",
    image: <img src={pricinglogo} width={28} height={28} alt="Weekly Plan" />,
  },
  {
    name: "Monthly",
    detail:
      "Upgrade to our monthly plan for an ad-free experience for 1 month.",
    price: "$19.99",
    features: [
      "No Ads",
      "Unlimited Art Generations for 1 Month",
      "No Watermark",
      "Access to All Models",
    ],
    button: "Subscribe",
    image: <img src={pricinglogo} width={28} height={28} alt="Monthly Plan" />,
  },
];

const footerTabs = [{ name: "Home", link: "/" }];

const faqs = [
  {
    question: "What is your name?",
    answer:
      "fdkhfjkhdsjkfhjksd djkkhfkhsjkf jfhdjksfh jkhfjksdhjf jkhfjsdf jkfhjksd.",
  },
];

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
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
                Your marketplace for high-quality&nbsp;
                <span className="orange_gradient">digital assets</span>.
              </h1>
              <p className="mt-6 text-lg max-w-prose text-gray-600">
                Welcome to DigitalHippo. Every asset on our platform is verified
                by our team to ensure our highest quality standards.
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
