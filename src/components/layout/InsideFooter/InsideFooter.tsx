import "./styleFooter.scss";
import { ListsLocation } from "../../shared/ListsLocation/ListsLocation";

export const InsideFooter = () => {
  return (
    <div className="footer-contain">
      <div className="first-div">
        <p>
          Сдано в печать 28.09.2018. Подписано к печати 3.10.2018.
          <br />
          Формат 60x84 1/16. Бумага офсетная. Печать офсетная.
          <br />
          2,1. Тираж экз.
          <br />
          Технический редактор Компьютерная вёрстка
        </p>
      </div>
      <div>
        <ListsLocation />
      </div>
    </div>
  );
};
