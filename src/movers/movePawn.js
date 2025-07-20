import {_y,_x,to_y,to_x} from "../coordMapper"
import {isVacant} from "../boardFunctions"
import { isOnBoard } from "../boardFunctions"
export const movePawn=(board,color,selectedPieceCoords)=>{
    console.log("piece",selectedPieceCoords)
    console.log("board is",board)
const [x,y]=selectedPieceCoords
const _y=to_y(x)
const _x=to_x(y)
const movableBoxes=[]
const captureBoxes=[]
if(_y==2 && color=="white")
{
if( isOnBoard([x-1,y]) && isVacant(board,[x-1,y]))
movableBoxes.push([x-1,y])
if(isVacant(board,[x-2,y]))
movableBoxes.push([x-2,y])
}
else
{
    if(color=="white")
    {
        if(isOnBoard([x-1,y]) && isVacant(board,[x-1,y]))
        movableBoxes.push([x-1,y])
    }
}
if(_y==7 && color=="black")
{
if(isOnBoard([x+1,y]) && isVacant(board,[x+1,y]))
movableBoxes.push([x+1,y])
if(isVacant(board,[x+2,y]))
movableBoxes.push([x+2,y])

}
else
{
    if(color=="black")
    {
        if(isOnBoard([x+1,y]) && isVacant(board,[x+1,y]))
        movableBoxes.push([x+1,y])
    }
}
if(color=="black")
{
    if((isOnBoard([x+1,y+1]) && board[x+1][y+1].endsWith("W")))
    {
        captureBoxes.push([x+1,y+1])
    }
    else if(isOnBoard([x+1,y-1]) && board[x+1][y-1].endsWith("W"))
    {
        captureBoxes.push([x+1,y-1])
        
    }
    
}
else
{
    if(color=="white")
    {
        if(isOnBoard([x-1,y+1]) && board[x-1][y+1].endsWith("B"))
    {
        captureBoxes.push([x-1,y+1])
    }
    else if(isOnBoard([x-1,y-1]) && board[x-1][y-1].endsWith("B"))
    {
        captureBoxes.push([x-1,y-1])
        
    }
    }
}
return [movableBoxes,captureBoxes]
}
const promotePawn=([x,y],color)=>{

}
const enPessantPawn=([x,y],color)=>{

}
