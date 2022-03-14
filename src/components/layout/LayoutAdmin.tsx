import { FC } from "react";
import { InsideFooter } from "./InsideFooter/InsideFooter";
import { InsideHeader } from "./InsideHeader/InsideHeader";

export const LayoutAdmin: FC = ({ children }) => {
  return (
    <>
      <div className="opacity-img"></div>
      <header className="container">
        <InsideHeader />
      </header>
      <nav className="container">
        <div>test</div>
      </nav>
      <main className="container">{children}</main>
      <footer className="container">
        <InsideFooter />
      </footer>
    </>
  );
};
