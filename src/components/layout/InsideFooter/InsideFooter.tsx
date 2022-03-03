import "./styleFooter.scss";
import { ListsLocation } from "../../shared/ListsLocation/ListsLocation";

export const InsideFooter = () => {
  return (
    <div className="footer-contain">
      <div className="first-div">
        <h2>Сдано в печать 28.09.2018. Подписано к печати 3.10.2018.</h2>
        <h3>Формат 60x84 1/16. Бумага офсетная. Печать офсетная.</h3>
        <h4>2,1. Тираж экз.</h4>
        <h4>Технический редактор Компьютерная вёрстка</h4>
      </div>
      <div>
        <ListsLocation />
      </div>
    </div>
  );
};
