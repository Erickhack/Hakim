import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { GetUserDataActionCreator, RootState } from "../../../../store";

export function Seminars() {
  const dispatch = useDispatch();
  const { getUserData } = bindActionCreators(
    GetUserDataActionCreator,
    dispatch
  );

  const { item } = useSelector((state: RootState) => ({
    ...state.GetUserData,
  }));

  return (
    <section className="seminar">
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ФИО</th>
              <th scope="col">E-mail</th>
              <th scope="col">Телефон</th>
              <th scope="col">Место работы</th>
              <th scope="col">Должность</th>
              <th scope="col">Звания</th>
              <th scope="col">Названия доклада</th>
            </tr>
          </thead>
          <tbody id="get-gist">
            {item.map((o, i) => (
              <tr key={i}>
                <th scope="row">{++i}</th>
                <th>{o.fullName}</th>
                <th>{o.email}</th>
                <th>{o.numberPhone}</th>
                <th>{o.job}</th>
                <th>{o.position}</th>
                <th>{o.ranks}</th>
                <th>{o.report}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
