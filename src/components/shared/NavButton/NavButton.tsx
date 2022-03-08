import { useState } from "react";
import { navElem } from "./interface";
import "./NavButton.scss";
import { Link } from "react-router-dom";
import { urls } from "../../interfaces";

export const NavButton = () => {
  const [navELem, setNavELem] = useState<Array<navElem>>([
    {
      elem: "ОБЩАЯ ИНФОРМАЦИЯ",
      subElem: [
        {
          elem: "ОБ ИНСТИТУТЕ",
          link: urls.main,
        },
        {
          elem: "УЧЕНЫЙ СОВЕТ",
        },
        {
          elem: "БУКЛЕТ",
        },
        {
          elem: "ОБРАТНАЯ СВЯЗЬ",
        },
      ],
    },
    {
      elem: "ДИССЕРТАЦИОННЫЕ СОВЕТЫ (РТ)",
      subElem: [],
    },
    {
      elem: "ОТДЕЛЫ",
      subElem: [],
    },
    {
      elem: "СОТРУДНИКИ",
      subElem: [],
    },
    {
      elem: "СЕМИНАРЫ",
      subElem: [],
    },
    {
      elem: "КОНФЕРЕНЦИИ",
      subElem: [],
    },
    {
      elem: "ПУБЛИКАЦИИ",
      subElem: [],
    },
    {
      elem: "РЕГИСТРАЦИЯ",
      subElem: [],
      link: urls.regUsers,
    },
  ]);
  return (
    <ul className="navigation-list">
      {navELem.map((o, i) => (
        <li key={i}>
          {o.link ? <Link to={o.link}>{o.elem}</Link> : <>{o.elem}</>}
          <ul className="nav-sub-ELem">
            {o.subElem.map((j, k) => (
              <li key={k}>
                {j.link ? <Link to={j.link}>{j.elem}</Link> : <>{j.elem}</>}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
