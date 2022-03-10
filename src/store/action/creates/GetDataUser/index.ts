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
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_API_GETLIST_USER_URL}`
      );
      const data = await res.data;
      success(data);
    } catch (e) {
      console.error(e);
    }
  };
