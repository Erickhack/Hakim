import { IreguserChange } from "./../../action/index";
import { RegUserAT } from "../../action/types";
import { IreguserSuccess, RegUserAction } from "../../action/index";
import { configState, fomrRegUser } from "./interface";

const Post: fomrRegUser = {
  email: "",
  fullName: "",
  job: "",
  numberPhone: "",
  position: "",
  ranks: "",
  report: "",
  rezume: null,
};

const initialState: configState<fomrRegUser> = {
  item: [],
  error: null,
  loading: false,
  otherDate: {
    editPost: null,
  },
};

type TyepReduce<T> = (
  state: configState<fomrRegUser>,
  action: T
) => configState<fomrRegUser>;

export const reduceRegUser = (
  state: configState<fomrRegUser> = initialState,
  action: RegUserAction
) => {
  switch (action.type) {
    case RegUserAT.HANLDE_SUCCESS:
      return reguserSuccess(state, action);
    case RegUserAT.HANDLE_CHANGE:
      return reguserChange(state, action);
    default:
      return state;
  }
};

const reguserChange: TyepReduce<IreguserChange> = (state, action) => {
  const { value, name, files } = action.payload;
  const { editPost } = { ...state.otherDate };

  return {
    ...state,
    otherDate: {
      editPost: {
        ...Post,
        ...editPost,
        [name]: !!files ? files[0] : value,
      },
    },
  };
};

const reguserSuccess: TyepReduce<IreguserSuccess> = (state, action) => {
  return {
    ...state,
    otherDate: {
      editPost: null,
    },
  };
};
