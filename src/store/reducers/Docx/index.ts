import { GetAllDocxAT } from "../../action/types";
import { DocxAction, IGetAllDocx } from "./../../action/index";
import { docxInitConfig, docxItemConfig } from "./interface";
const initialState: docxInitConfig<docxItemConfig> = {
  error: null,
  items: [],
  loading: false,
  otherDate: null,
};

type ReduceType<T> = (
  state: docxInitConfig<docxItemConfig>,
  action: T
) => docxInitConfig<docxItemConfig>;

export const reducerDocx = (state = initialState, action: DocxAction) => {
  switch (action.type) {
    case GetAllDocxAT.GETDOCX_SUCCESS:
      return success(state, action);
    default:
      return state;
  }
};

const success: ReduceType<IGetAllDocx> = (state, action) => {
  const { data } = action.payload;

  return { ...state, items: data };
};
