
import {movePawn} from "../movers/movePawn"
import { moveBishop } from "../movers/moveBishop"
import { moveKing } from "../movers/moveKing"
import { moveKnight } from "../movers/moveKnight"
import { moveQueen } from "../movers/moveQueen"
import { moveRook } from "../movers/moveRook"
export const moveableBoxesA=(board,color,selectedPieceCoords)=>{

    console.log("PieceSelected",board[selectedPieceCoords[0]][selectedPieceCoords[1]].slice(0,-1))
   switch(board[selectedPieceCoords[0]][selectedPieceCoords[1]].slice(0,-1))
   {
    
    case "Pawn":{
         const [a,b]=movePawn(board,color,selectedPieceCoords)
         return {
        type:"SET_MOVE_BOXES",
        movableBoxes:a,
        captureBoxes:b
    }
        break
    }
    case "Bishop":{
         const [a,b]=moveBishop(board,color,selectedPieceCoords)
         return {
        type:"SET_MOVE_BOXES",
        movableBoxes:a,
        captureBoxes:b
    }
        break
   }
   case "Queen":{
     const [a,b]=moveQueen(board,color,selectedPieceCoords)
     return {
        type:"SET_MOVE_BOXES",
        movableBoxes:a,
        captureBoxes:b
    }
        break
   }
   case "Knight":{
      const [a,b]=moveKnight(board,color,selectedPieceCoords)
      console.log("RetunedMovable",a)
      console.log("ReturnedMovable",b)
      return {
        type:"SET_MOVE_BOXES",
        movableBoxes:a,
        captureBoxes:b
    }
        break
   }
   case "Rook":{
      const [a,b]=moveRook(board,color,selectedPieceCoords)
      return {
        type:"SET_MOVE_BOXES",
        movableBoxes:a,
        captureBoxes:b
    }
        break
   }
   case "King":{
      const [a,b]=moveKing(board,color,selectedPieceCoords)
      return {
        type:"SET_MOVE_BOXES",
        movableBoxes:a,
        captureBoxes:b
    }
        break
   }
   default:{
    return {
         type:"SET_MOVE_BOXES",
        movableBoxes:[],
        captureBoxes:[]
    }
   }
   }
   
    
}
export const unsetMoveBoxesA=()=>{
    return {
        type:"UNSET_MOVE_BOXES"
    }
}