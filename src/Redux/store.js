import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/rootReducer";
import logaMiddleware from "./Middlewares/logaMiddleware";
import logbMiddleware from "./Middlewares/logbMiddleWare";
let middlewares = [logaMiddleware, logbMiddleware];
let store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
