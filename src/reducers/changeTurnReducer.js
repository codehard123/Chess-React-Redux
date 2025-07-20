import { initialState } from "../state";

export const changeTurn=(state=initialState,action)=>{
switch(action.type)
{
    case "CHANGE_TURN":return {
        ...state,
        turn:action.payload
    }
    default:return{...state}
}
}