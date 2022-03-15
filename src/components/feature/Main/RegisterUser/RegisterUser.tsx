import "./RegisterUser.scss";
import { configRegElem } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserActionCreator, RootState } from "../../../../store";
import { bindActionCreators } from "redux";

export function RegisterUser() {
  const dispatch = useDispatch();
  const { handleChange, hanldeSubmit } = bindActionCreators(
    RegisterUserActionCreator,
    dispatch
  );

  const { email, fullName, job, numberPhone, position, ranks, report } =
    useSelector((state: RootState) => ({
      ...state.RegisterUser.otherDate?.editPost,
    }));

  const configElements: configRegElem[] = [
    {
      name: "fullName",
      forId: "fullName",
      placeholder: "Саидов Хуршед Муродович",
      text: "ФИО",
      type: "text",
      value: fullName,
    },
    {
      forId: "Email",
      placeholder: "example@gmail.com",
      text: "Email",
      type: "email",
      name: "email",
      value: email,
    },
    {
      forId: "numberPhone",
      placeholder: "+992123456789",
      text: "Номер Телефона",
      type: "tel",
      name: "numberPhone",
      value: numberPhone,
    },
    {
      forId: "job",
      placeholder: "Технологический университет",
      text: "Место работы",
      type: "text",
      name: "job",
      value: job,
    },
    {
      forId: "positon",
      placeholder: "Предподователь",
      text: "Должность",
      type: "text",
      name: "position",
      value: position,
    },
    {
      forId: "ranks",
      placeholder: "Профессор",
      text: "Звания",
      type: "text",
      name: "ranks",
      value: ranks,
    },
    {
      forId: "report",
      placeholder: "Беспрецедентные результаты опроса по проблеме",
      text: "Названия доклада",
      type: "text",
      name: "report",
      value: report,
    },
    {
      forId: "DocxFile",
      placeholder: "Файли document world",
      text: "Резюме",
      type: "file",
      name: "file",
    },
  ];

  return (
    <section className="register-user in-main">
      <form
        id="reg-user-gis"
        onSubmit={(evt) => {
          evt.preventDefault();
          hanldeSubmit();
        }}
      >
        {configElements.map((o, i) => {
          return (
            <div className="mb-3 row" key={i}>
              <label htmlFor={o.forId} className="col-sm-3 col-form-label">
                {o.text}
              </label>
              <div className="col-sm-9">
                <input
                  required
                  name={o.name}
                  type={o.type}
                  className="form-control"
                  id={o.forId}
                  value={o.type === "file" ? undefined : o?.value || ""}
                  placeholder={o.placeholder}
                  onChange={(evt) => {
                    const { value, name, files } = evt.target;
                    handleChange(value, name, files);
                  }}
                />
              </div>
            </div>
          );
        })}
        <div className="justify-content-center align-items-center">
          <input className="form-control" type="submit" />
        </div>
      </form>
    </section>
  );
}
