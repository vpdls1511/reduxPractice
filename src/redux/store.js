import {createStore} from "redux";

import todoListReducer from './todos/reducer'

const store = createStore(todoListReducer)

export default store;
