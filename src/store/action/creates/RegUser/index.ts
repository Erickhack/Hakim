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

export const hanldeSubmit = () => async (dispatch: Dispatch, getState: any) => {
  try {
    const fd = new FormData();
    const postData = getState().RegisterUser?.otherDate!.editPost;

    for (const key in postData) {
      fd.append(key, postData[key]);
    }

    await Axios.post(`${process.env.REACT_APP_API_REGISTER_USER_URL}`, fd);
  } catch (e) {
    console.log(e);
  }
};
