import Reveal from "./Reveal";
import { Link } from "react-router-dom";

export const Footer = ({ logo }) => {
  return (
    <Reveal direction="bottom">
      <footer className="bg-white flex-grow-0 border-t border-gray-200">
        <div className="max-w-wrapper">
          <div className="py-10 md:py-0 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>

            <div className="mt-4 md:mb-4 ">
              <div className="flex justify-center">
                <img src={logo} className="h-12 w-12" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center md:mt-0">
              <div className="flex space-x-8">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Reveal>
  );
};
