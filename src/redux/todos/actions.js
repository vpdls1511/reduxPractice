//types
import { ADD_TODOLIST, DEL_TODOLIST } from './types'

export const addTodoList = (id, description) => {
    return {
        type : ADD_TODOLIST,
        id : id,
        desc : description
    }
}

export const delTodoList = (id) => {
    return {
        type : DEL_TODOLIST,
        id : id
    }
}
