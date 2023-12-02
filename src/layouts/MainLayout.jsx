import React from "react";
import { Navbar, Footer } from "../components";

export const MainLayout = ({ bg, children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
        //   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${bg})`,
        //   backgroundSize: "auto 100px",
        }}
      >
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
