import { useState } from "react";
import { navElem } from "./interface";

export const NavButton = () => {
  const [navELem, setNavELem] = useState<Array<navElem>>([
    {
      elem: "ОБЩАЯ ИНФОРМАЦИЯ",
      subElem: [],
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
      link: "",
    },
  ]);
  return <ul>NavButton</ul>;
};
