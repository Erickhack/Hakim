/* eslint-disable jsx-a11y/iframe-has-title */
import { useSelector } from "react-redux";
import { pwdDocx } from "../../../../hook/PositionDoxx";
import { RootState } from "../../../../store";

export function DEPARTMENTOFMATHEMATICALMODELING() {
  const { items } = useSelector((state: RootState) => state.Docx);

  return (
    <section className="about-unior in-main">
      {items
        .filter((o, i) => o.position === pwdDocx.DEPARTMENTOFMATHEMATICALMODELING)
        .map((k, j) => (
          <iframe key={j} src={k.fileName} frameBorder={0}></iframe>
        ))}
    </section>
  );
}
