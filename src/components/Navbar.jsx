import { NavItems } from "./NavItems";
import { logo } from "../assets";
import { UserAccountNav } from "./UserAccountNav";
import { MobileNav } from "./MobileNav";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const user = null;

  return (
    <div className="bg-gray-50/80 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-transparent">
        <div className="max-w-wrapper">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <MobileNav />
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <img src={logo} className="h-10 w-10" alt="Logo" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link href="/sign-in" className="btn-ghost">
                      Sign in
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <UserAccountNav user={user} />
                  ) : (
                    <Link href="/sign-up" className="btn-ghost">
                      Create account
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
