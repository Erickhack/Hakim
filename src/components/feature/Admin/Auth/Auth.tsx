import { FC, ReactNode } from "react";
import { Redirect } from "react-router";
import { urls } from "../../../interfaces";
import { getToken, removeToken } from "../../../../hook/axios/localStorage";
import { getUnixTime } from "date-fns";
import { b64utoutf8, KJUR } from "jsrsasign";

export const Auth: FC<{ child: ReactNode }> = ({ children }) => {
  const { jws } = KJUR;

  const token: string = getToken();
  const currentDate = getUnixTime(Date.now());
  const expToken: any = jws.JWS.readSafeJSONString(
    b64utoutf8(token.split(".")[1])
  );

  if ((expToken?.exp || 0) > currentDate) {
    return <>{children}</>;
  }

  removeToken();

  return <Redirect to={`${urls.admin}${urls.loginAdmin}`} />;
};
