import {configureStore} from "@reduxjs/toolkit"
import {pawnReducer} from "./reducers/pawnReducer"
import {updateBoardReducer} from "./reducers/boardReducer"
import {fclickDone,sclickDone} from "./reducers/clickReducers"
import {changeTurn} from "./reducers/changeTurnReducer"
import {selectPieceReducer} from "./reducers/selectPieceReducer"
import {setPieceCoordsReducer} from "./reducers/setPieceCoordsReducer"
import {combineReducers} from "redux"
import {moveableBoxesReducer} from "./reducers/movableBoxesReducer"


const rootReducer=combineReducers({
pawnReducer,
selectPieceReducer,
setPieceCoordsReducer,
updateBoardReducer,
fclickDone,
sclickDone,
changeTurn,
moveableBoxesReducer
})
export const store=configureStore({
    reducer:rootReducer, devTools:true,
    
})
console.log("State in store",store.getState())
store.subscribe(()=>store.getState())

