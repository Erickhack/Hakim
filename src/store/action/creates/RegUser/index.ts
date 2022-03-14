import { RegUserApi } from "./../../../../hook/api/index";
import { Axios } from "./../../../../hook/axios/axios";
import { RegUserAction } from "./../../index";
import { RegUserAT } from "./../../types";
import { Dispatch } from "redux";
import { fomrRegUser } from "./../../../reducers/RegUser/interface";

const regSuccess = (data: fomrRegUser[]) => {
  return (dispatch: Dispatch<RegUserAction>) => {
    dispatch({
      type: RegUserAT.HANLDE_SUCCESS,
      payload: {
        data,
      },
    });
  };
};

export const handleChange = (
  value: string,
  name: string,
  files: FileList | null
) => {
  return (dispatch: Dispatch<RegUserAction>) => {
    dispatch({
      type: RegUserAT.HANDLE_CHANGE,
      payload: {
        value,
        name,
        files,
      },
    });
  };
};

export const hanldeSubmit =
  () => async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const fd = new FormData();
      const postData = getState().RegisterUser?.otherDate!.editPost;

      for (const key in postData) {
        fd.append(key, postData[key]);
      }

      const res = await Axios.post(RegUserApi.PostRegUser, fd);

      if (res.status >= 200 && res.status <= 299) {
        dispatch(regSuccess(res.data));
      }
    } catch (e) {
      console.log(e);
    }
  };
