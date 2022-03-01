import React, { FC } from "react";

export const LayoutDefault: FC = ({ children }) => {
  return (
    <>
      <header>
        <h1>test</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};
