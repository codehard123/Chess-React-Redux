import {initialState} from "../state"
import {movePawn} from "../movers/movePawn"
export const pawnReducer=(state=initialState,action)=>{
    return{
        ...state
    }
}
