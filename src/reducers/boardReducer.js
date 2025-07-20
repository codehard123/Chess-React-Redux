import {initialState} from "../state"
export const updateBoardReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "UPDATE_BOARD":{
            return{
                ...state,    
                board:action.payload,
                }
            
        }
        default:return state;
    }
}