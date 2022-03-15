import { reducerDocx } from "./Docx/index";
import { reduceGetUserData } from "./GetUserData/index";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { reduceRegUser } from "./RegUser";

export const rootReducer = (history: History) => {
  return combineReducers({
    router: connectRouter(history),
    RegisterUser: reduceRegUser,
    GetUserData: reduceGetUserData,
    Docx: reducerDocx,
  });
};
