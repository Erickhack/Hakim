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
          link: urls.THESTUDENTSCOUNCIL,
        },
        {
          elem: "БУКЛЕТ",
          link: urls.booklet,
        },
        {
          elem: "ОБРАТНАЯ СВЯЗЬ",
          link: urls.REFERENCE,
        },
      ],
    },
    {
      elem: "ДИССЕРТАЦИОННЫЕ СОВЕТЫ (РТ)",
      subElem: [
        {
          elem: "ДЕЙСТВУЮЩИЕ СОВЕТЫ",
          link: urls.CURRENTTIPS,
        },
        {
          elem: "АРХИВ",
          link: urls.ARCHIVE,
        },
      ],
    },
    {
      elem: "ОТДЕЛЫ",
      subElem: [
        {
          elem: "ОТДЕЛ ТЕОРИИ ЧИСЕЛ,АЛГЕБРЫ И ТОПОЛОГИИ",
          link: urls.DEPARTMENTOFNUMBERTHEORYALGEBRAANDTOPOLOGY,
        },
        {
          elem: "ОТДЕЛ ДИФФЕРЕНЦИАЛЬНЫХ УРАВНЕНИЙ",
          link: urls.DIFFERENTIALEQUATIONSDEPARTMENT,
        },
        {
          elem: "ОТДЕЛ ТЕОРИЯ ФУНКЦИЙ И ФУНКЦИОНАЛЬНОГО АНАЛИЗА",
          link: urls.DEPARTMENTOFFUNCTIONTHEORYANDFUNCTIONALANALYSIS,
        },
        {
          elem: "ОТДЕЛ ПРИКЛАДНОЙ МАТЕМАТИКИ И МЕХАНИКИ",
          link: urls.DEPARTMENTOFAPPLIEDMATHEMATICSANDMECHANICS,
        },
        {
          elem: "ОТДЕЛ МАТЕМАТИЧЕСКОГО МОДЕЛИРОВАНИЯ",
          link: urls.DEPARTMENTOFMATHEMATICALMODELING,
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
          link: urls.SEMINARSOFTHERUSSIANACADEMYOFSCIENCES,
        },
      ],
    },
    {
      elem: "КОНФЕРЕНЦИИ",
      subElem: [
        {
          elem: "НОВОСТИ",
          link: urls.NEWS,
        },
        {
          elem: "МАТЕРИАЛЫ КОНФЕРЕНЦИЙ",
          link: urls.CONFERENCEPROCEEDINGS,
        },
      ],
    },
    {
      elem: "ПУБЛИКАЦИИ",
      subElem: [
        {
          elem: "ДОКЛАДЫ АН РТ",
          link: urls.REPORTSOFTHEACADEMYOFSCIENCESOFTHEREPUBLICOFTATARSTAN,
        },
        {
          elem: "ИЗВЕСТИЯ АН РТ",
          link: urls.IZVESTIAOFTHEACADEMYOFSCIENCESOFTHEREPUBLICOFTATARSTAN,
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
