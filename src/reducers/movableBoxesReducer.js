import { initialState } from "../state";
import { movePawn } from "../movers/movePawn";
export const moveableBoxesReducer=(state=initialState,action)=>{
switch(action.type)
{
    
  case "SET_MOVE_BOXES":{
    
            
         return {
            ...state,
            moveableBoxes:action.movableBoxes,
            captureBoxes:action.captureBoxes
         }

        }
        
    
    case "UNSET_MOVE_BOXES":{
    
            
         return {
            ...state,
            moveableBoxes:[],
            captureBoxes:[]
         }

        }
        
        default:{
            return {...state}
        }
    }
}
