import {_y,_x,to_y,to_x} from "../coordMapper"
import {isVacant} from "../boardFunctions"
import { isOnBoard } from "../boardFunctions"
export const moveQueen=(board,color,selectedPieceCoords)=>{
console.log("Selected piece color is",color)
const [x,y]=selectedPieceCoords
const _y=to_y(x)
const _x=to_x(y)
const movableBoxes=[]
const captureBoxes=[]
for(let i=y+1;i<8;i++)
{
if(isOnBoard([x,i]))
{
    if(isVacant(board,[x,i]))
    {
        movableBoxes.push([x,i])
    }
    else {
        if(board[x][i].endsWith(color=="black"?"W":"B"))
        {
            captureBoxes.push([x,i])
        }
        break;
    }  
}
}
for(let i=y-1;i>=0;i--)
{
if(isOnBoard([x,i]))
{
    if(isVacant(board,[x,i]))
    {
        movableBoxes.push([x,i])
    }
    else {
        if(board[x][i].endsWith(color=="black"?"W":"B"))
        {
            captureBoxes.push([x,i])
        }
        break;
    }
    
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
   if(board[i][y].endsWith(color=="black"?"W":"B"))
        {
            captureBoxes.push([i,y])
        } 
        break
}
}
for(let i=x+1;i<8;i++)
{
  if(isOnBoard([i,y])&& isVacant(board,[i,y]))
{
    movableBoxes.push([i,y])
}  
else
{
    if(isOnBoard([i,y]) && board[i][y].endsWith(color=="black"?"W":"B"))
    {
        captureBoxes.push([i,y])
    }
    break;
}
}
for(let i=1;i<=8;i++)
{
  if(isOnBoard([x+i,y+i]) && isVacant(board,[x+i,y+i]))
{
    movableBoxes.push([x+i,y+i])
}  
else
{
    if(isOnBoard([x+i,y+i]) && board[x+i][y+i].endsWith(color=="black"?"W":"B"))
    {
        captureBoxes.push([x+i,y+i])
    }
    break;
}
}
for(let i=1;i<=8;i++)
{
if(isOnBoard([x-i,y-i]) && isVacant(board,[x-i,y-i]))
{
    movableBoxes.push([x-i,y-i])
}
else 
{
    if(isOnBoard([x-i,y-i]) && board[x-i][y-i].endsWith(color=="black"?"W":"B"))
        captureBoxes.push([x-i,y-i])
    break;
}

}
for(let i=1;i<=8;i++)
{
if(isOnBoard([x+i,y-i]) && isVacant(board,[x+i,y-i]))
{
    movableBoxes.push([x+i,y-i])
}
else 
{
    if(isOnBoard([x+i,y-i]) && board[x+i][y-i].endsWith(color=="black"?"W":"B"))
        captureBoxes.push([x+i,y-i])
    break;
}
}
for(let i=1;i<=8;i++)
{
if(isOnBoard([x-i,y+i]) && isVacant(board,[x-i,y+i]))
{
    movableBoxes.push([x-i,y+i])
}
else 
{
    if(isOnBoard([x-i,y+i]) && board[x-i][y+i].endsWith(color=="black"?"W":"B"))
        captureBoxes.push([x-i,y+i])
    break;
}
}
return [movableBoxes,captureBoxes]
}
