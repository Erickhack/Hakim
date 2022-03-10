import { routerMiddleware } from "connected-react-router";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
export * as RegisterUserActionCreator from "./action/creates/RegUser";
export * as GetUserDataActionCreator from "./action/creates/GetDataUser";

export const history = createBrowserHistory();

export const store = createStore(
  rootReducer(history),
  compose(
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
  )
);

export type RootState = ReturnType<typeof store.getState>;
export default store;
