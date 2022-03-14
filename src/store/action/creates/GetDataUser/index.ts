import { GetUserApi } from "./../../../../hook/api/index";
import { Axios } from "./../../../../hook/axios/axios";
import { RootState } from "./../../../index";
import { IgetUserData } from "./../../index";
import { GetUserData } from "../../../reducers/GetUserData/interface";
import { Dispatch } from "redux";
import { GetUserAT } from "../../types";

const success = (data: GetUserData[]) => {
  return (dispatch: Dispatch<IgetUserData>) => {
    dispatch({
      type: GetUserAT.GETUSER_SUCCESS,
      payload: {
        data,
      },
    });
  };
};

export const getUserData =
  () => async (dispatch: Dispatch<any>, getState: () => RootState) => {
    try {
      const res = await Axios({
        url: GetUserApi.GetDateUser,
      });

      const data = await res.data;
      dispatch(success(data));
    } catch (e) {
      console.error(e);
    }
  };
