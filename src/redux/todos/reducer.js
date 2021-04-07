import { ADD_TODOLIST, DEL_TODOLIST} from './types'
import {act} from "@testing-library/react";

const intialState = {
    count : 1,
    content : [
        {id: 0 , desc : "todoList Test"}
    ]
}

const todoListReducer = ( state = intialState , action ) => {

    switch (action.type) {
        case ADD_TODOLIST:
            return{
                ...state,
                content : [
                    ...state.content,
                    {
                        id: action.id,
                        desc: action.desc
                    }
                ]
            }

        case DEL_TODOLIST:
            const nextState = state.content.filter(doc => doc.id !== action.id)
            return nextState

        default: return state
    }

}


export default todoListReducer
