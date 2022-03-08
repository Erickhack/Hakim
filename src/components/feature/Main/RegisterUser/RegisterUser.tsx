import { FormEvent } from "react";
import "./RegisterUser.scss";

export default function AboutUnior() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="register-user">
      <form id="reg-user-gis" onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="fullName" className="col-sm-3 col-form-label">
            ФИО
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Саидов Хуршед Муродович"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Email" className="col-sm-3 col-form-label">
            Email
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="numberPhone" className="col-sm-3 col-form-label">
            Номер Телефона
          </label>
          <div className="col-sm-9">
            <input
              type="tel"
              className="form-control"
              id="numberPhone"
              placeholder="+992123456789"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="job" className="col-sm-3 col-form-label">
            Место работы
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="job"
              placeholder="Технологический университет"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="positon" className="col-sm-3 col-form-label">
            Должность
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="positon"
              placeholder="Предподователь"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="ranks" className="col-sm-3 col-form-label">
            Звания
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="ranks"
              placeholder="Профессор"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="report" className="col-sm-3 col-form-label">
            Названия доклада
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="report"
              placeholder="Беспрецедентные результаты опроса по проблеме"
            />
          </div>
        </div>
        <div className="justify-content-center align-items-center">
          <input className="form-control" type="submit" />
        </div>
      </form>
    </section>
  );
}
