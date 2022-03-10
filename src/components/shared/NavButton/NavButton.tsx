import { useState, MouseEvent } from "react";
import { navElem } from "./interface";
import "./NavButton.scss";
import { NavLink } from "react-router-dom";
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
      subElem: [
        {
          elem: "ДЕЙСТВУЮЩИЕ СОВЕТЫ",
        },
        {
          elem: "АРХИВ",
        },
      ],
    },
    {
      elem: "ОТДЕЛЫ",
      subElem: [
        {
          elem: "ОТДЕЛ ТЕОРИИ ЧИСЕЛ,АЛГЕБРЫ И ТОПОЛОГИИ",
        },
        {
          elem: "ОТДЕЛ ДИФФЕРЕНЦИАЛЬНЫХ УРАВНЕНИЙ",
        },
        {
          elem: "ОТДЕЛ ТЕОРИЯ ФУНКЦИЙ И ФУНКЦИОНАЛЬНОГО АНАЛИЗА",
        },
        {
          elem: "ОТДЕЛ ПРИКЛАДНОЙ МАТЕМАТИКИ И МЕХАНИКИ",
        },
        {
          elem: "ОТДЕЛ МАТЕМАТИЧЕСКОГО МОДЕЛИРОВАНИЯ",
        },
      ],
    },
    {
      elem: "СОТРУДНИКИ",
      subElem: [
        {
          elem: "СПИСОК",
        },
      ],
    },
    {
      elem: "СЕМИНАРЫ",
      subElem: [
        {
          elem: "ОБЩЕИНСТИТУТСКИЙ СЕМИНАР",
          link: urls.seminar,
        },
        {
          elem: "СЕМИНАРЫ ИМ АН РТ",
        },
      ],
    },
    {
      elem: "КОНФЕРЕНЦИИ",
      subElem: [
        {
          elem: "НОВОСТИ",
        },
        {
          elem: "МАТЕРИАЛЫ КОНФЕРЕНЦИЙ",
        },
      ],
    },
    {
      elem: "ПУБЛИКАЦИИ",
      subElem: [
        {
          elem: "ДОКЛАДЫ АН РТ",
        },
        {
          elem: "ИЗВЕСТИЯ АН РТ",
        },
      ],
    },
    {
      elem: "РЕГИСТРАЦИЯ",
      subElem: [],
      link: urls.regUsers,
    },
  ]);

  const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.children[1].classList.add("opened");
  };

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.children[1].classList.remove("opened");
  };

  return (
    <ul className="navigation-list">
      {navELem.map((o, i) => (
        <li
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
          key={i}
        >
          {o.link ? (
            <NavLink
              to={o.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{o.elem}</span>
            </NavLink>
          ) : (
            <span>{o.elem}</span>
          )}
          <ul className="nav-sub-ELem">
            {o.subElem.map((j, k) => (
              <li key={k}>
                {j.link ? (
                  <NavLink
                    to={j.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {j.elem}
                  </NavLink>
                ) : (
                  <>{j.elem}</>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
