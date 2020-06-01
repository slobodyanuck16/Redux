import { createStore, applyMiddleware, compose } from "redux";
import { counterReducer } from "./counter.reducer";

const logger = (store) => (next) => (action) => {
    console.log(action.type);
    console.info(action);
    const result = next(action);
    console.log("new state", store.getState());

    console.groupEnd();
    return result;
};

const composeEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    counterReducer,
    composeEnchancers(applyMiddleware(logger))
);

export default store;
