import store from './store';
import {addUser, deleteUser} from './users.actions';

store.dispatch(addUser({name:'aaa', id: 777}));
store.dispatch(addUser({name:'sss', id: 321}));
store.dispatch(addUser({name:'ddd', id: 12}));
store.dispatch(addUser({name:'fff', id: 213}));
store.dispatch(addUser({name:'ggg', id: 111}));
store.dispatch(addUser({name:'hhh', id: 1213}));
store.dispatch(deleteUser(111));

console.log(store.getState());