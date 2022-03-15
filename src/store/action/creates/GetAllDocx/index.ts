import { Axios } from "./../../../../hook/axios/axios";
import { DocxAction } from "./../../index";
import { Dispatch } from "redux";
import { docxItemConfig } from "./../../../reducers/Docx/interface";
import { GetAllDocxAT } from "../../types";
import { RootState } from "../../..";
import { Docx } from "../../../../hook/api";

const docxSuccess =
  (data: docxItemConfig[]) => (dispatch: Dispatch<DocxAction>) => {
    dispatch({
      type: GetAllDocxAT.GETDOCX_SUCCESS,
      payload: {
        data,
      },
    });
  };

export const getAll =
  () => async (dispatch: Dispatch<any>, getState: RootState) => {
    try {
      const res = await Axios.get(Docx.Get);

      if (res.status <= 299 && res.status >= 200) {
        dispatch(docxSuccess(res.data));
      }
    } catch (e) {
      console.error(e);
    }
  };
