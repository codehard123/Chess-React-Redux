import { initialState } from "../state";

export const setPieceCoordsReducer=(state=initialState,action)=>{
switch(action.type)
{
    case "SET_PIECE_COORDS":
        {
            return {
                ...state,
               selectedPieceCoords:action.payload 
            }
        }
        default:return state
}
}