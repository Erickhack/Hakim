import React, { useState } from "react";
import "./style.scss";

export const ListsLocation = () => {
  const [listsL, setListsL] = useState<Array<string>>([
    "Таджикистан, 734063, г.Душанбе, улица Айни 299/4.",
    "(992) 372 - 25-80-89",
    "(992) 372 - 21-49-11",
    "Mitas@mail.tj",
  ]);

  return (
    <ul className="header-location">
      {listsL.map((o, i) => (
        <li key={i}>{o}</li>
      ))}
    </ul>
  );
};
