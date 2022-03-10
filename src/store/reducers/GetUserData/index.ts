import { GetUserAT } from "./../../action/types";
import { GetUserAction, IgetUserData } from "./../../action/index";
import { configState, GetUserData } from "./interface";

const initSTate: configState<GetUserData> = {
  item: [],
  error: null,
  loading: false,
  otherData: {},
};

type TypeReduce<T> = (
  state: configState<GetUserData>,
  action: T
) => configState<GetUserData>;

export const reduceGetUserData = (state = initSTate, action: GetUserAction) => {
  switch (action.type) {
    case GetUserAT.GETUSER_SUCCESS:
      return getUserSuccess(state, action);
    default:
      return state;
  }
};

const getUserSuccess: TypeReduce<IgetUserData> = (state, action) => {
  const { data } = action.payload;

  return { ...state, item: data };
};
