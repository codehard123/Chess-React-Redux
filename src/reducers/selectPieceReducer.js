import { selectedPiece } from "../actions/selectPiece";
import { initialState } from "../state";

export const selectPieceReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "SELECT_PIECE":{
            return{
                ...state,
                selectedPiece:action.payload
            }
        }
        default:return{...state}
    }
}