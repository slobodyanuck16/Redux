import { createStore } from "redux";

const increment = "COUNTER/INCREMENT";
const decrement = "COUNTER/DECREMENT";

export const incrementActionCreator = () => {
    return {
        type: increment,
    };
};
export const decrementActionCreator = () => {
    return {
        type: decrement,
    };
};

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case increment:
            return state + 1;
        case decrement:
            return state - 1;
        default:
            return state;
    }
};

export const store = createStore(counterReducer);

store.dispatch(incrementActionCreator());
store.dispatch(decrementActionCreator());