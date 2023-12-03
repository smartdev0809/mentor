import { NavItems } from "./NavItems";
import { logo } from "../assets";
import { MobileNav } from "./MobileNav";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
    });
  }, [user]);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-50/80 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-transparent">
        <div className="max-w-wrapper">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <MobileNav />
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <img src={logo} className="h-32 w-32" alt="Logo" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link to="/roles" className="btn-ghost">
                      Sign In
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <button className="btn-ghost" onClick={logoutHandler}>
                      Sign Out
                    </button>
                  ) : (
                    <Link to="/roles" className="btn-ghost">
                      Create Account
                    </Link>
                  )}

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
