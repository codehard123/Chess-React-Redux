import { initialState } from "../state"
export const checkCoordinateReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "SET_CHECK_COORDINATE":return{...state,checkCoordinate:action.payload}
        default:return state
    }
}