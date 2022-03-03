import React, { FC } from "react";
import { InsideFooter } from "./InsideFooter/InsideFooter";
import { InsideHeader } from "./InsideHeader/InsideHeader";
import { NavButton } from "../shared/NavButton/NavButton";

export const LayoutDefault: FC = ({ children }) => {
  return (
    <>
      <div className="opacity-img"></div>
      <header className="container">
        <InsideHeader />
      </header>
      <nav className="container">
        <NavButton />
      </nav>
      <main className="container">{children}</main>
      <footer className="container">
        <InsideFooter />
      </footer>
    </>
  );
};
