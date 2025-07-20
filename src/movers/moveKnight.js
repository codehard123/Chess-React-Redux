import {_y,_x,to_y,to_x} from "../coordMapper"
import {isVacant} from "../boardFunctions"
import { isOnBoard } from "../boardFunctions"
export const moveKnight=(board,color,selectedPieceCoords)=>{
    console.log("piece",selectedPieceCoords)
    console.log("board is",board)
const [x,y]=selectedPieceCoords
const _y=to_y(x)
const _x=to_x(y)
const movableBoxes=[]
const captureBoxes=[]
const moveX=[x+1,x+1,x-1,x-1,x+2,x+2,x-2,x-2]
const moveY=[y+2,y-2,y+2,y-2,y+1,y-1,y+1,y-1]
for(let i=0;i<8;i++)
{
    if(isOnBoard([moveX[i],moveY[i]]) && isVacant(board,[moveX[i],moveY[i]]))
    {
        movableBoxes.push([moveX[i],moveY[i]])
    }
}
for(let i=0;i<8;i++)
{
    if(isOnBoard([moveX[i],moveY[i]]) && board[moveX[i]][moveY[i]].endsWith(color=="white"?"B":"W"))
    {
        captureBoxes.push([moveX[i],moveY[i]])
    }
}
console.log("mbox",movableBoxes)
console.log("cbox",captureBoxes)
return [movableBoxes,captureBoxes]
}
