import store from "./store";
import { setUser, removeUser } from "./user.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setLanguage } from "./language.actions";

store.subscribe(() => console.log(store.getState()));
store.dispatch(setLanguage("ua"));
store.dispatch(addProduct({ id: 1, name: "milk" }));
store.dispatch(setUser({ name: "Tom" }));
// store.dispatch(removeProduct(1));
