import {_y,_x,to_y,to_x} from "../coordMapper"
import {isVacant} from "../boardFunctions"
import { isOnBoard } from "../boardFunctions"
export const moveRook=(board,color,selectedPieceCoords)=>{

const [x,y]=selectedPieceCoords
const _y=to_y(x)
const _x=to_x(y)
const movableBoxes=[]
const captureBoxes=[]
for(let i=y+1;i<8;i++)
{
if(isOnBoard([x,i]) && isVacant(board,[x,i]))
{
    movableBoxes.push([x,i])
}
else
{
    if(isOnBoard([x,i]) && board[x][i].endsWith(color=="black"?"W":"B"))
    {
        captureBoxes.push([x,i])
    }
    if(isOnBoard([x,i]) && !isVacant(board,[x,i]))break;
}
}
for(let i=y-1;i>=0;i--)
{
if(isOnBoard([x,i]) && isVacant(board,[x,i]))
{
    movableBoxes.push([x,i])
}
else
{
    if(isOnBoard([x,i]) && board[x][i].endsWith(color=="black"?"W":"B"))
    {
        captureBoxes.push([x,i])
    }
    if(isOnBoard([x,i]) && !isVacant(board,[x,i]))break;
}
}
for(let i=x+1;i<8;i++)
{
  if(isOnBoard([i,y]) && isVacant(board,[i,y]))
{
    movableBoxes.push([i,y])
}  
else
{
    if(board[i][y].endsWith(color=="black"?"W":"B"))
    {
        captureBoxes.push([i,y])
    }
    if(isOnBoard([i,y]) && !isVacant(board,[i,y]))break;
}
}
for(let i=x-1;i>=0;i--)
{
  if(isOnBoard([i,y]) && isVacant(board,[i,y]))
{
    movableBoxes.push([i,y])
}  
else
{
    if(isOnBoard([i,y]) && board[i][y].endsWith(color=="black"?"W":"B"))
    {
        captureBoxes.push([i,y])
    }
    if(isOnBoard([i,y]) && !isVacant(board,[i,y]))break;
}
}
return [movableBoxes,captureBoxes]
}
