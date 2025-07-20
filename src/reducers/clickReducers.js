import { initialState } from "../state"
export const fclickDone=(state=initialState,action)=>{
    switch(action.type)
    {
        case "SET_FIRST_CLICK":return {
            ...state,
            firstClickDone:action.payload
        }
        default:return{...state}
    }
}
export const sclickDone=(state=initialState,action)=>{
    switch(action.type)
    {
        case "SET_SECOND_CLICK":return {
            ...state,
            secondClickDone:action.payload
        }
        default:return state
    }
}