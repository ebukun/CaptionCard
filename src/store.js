import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducers/index";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
