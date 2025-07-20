import {_y,_x,to_y,to_x} from "../coordMapper"
import {isVacant} from "../boardFunctions"
import { isOnBoard } from "../boardFunctions"
export const moveBishop=(board,color,selectedPieceCoords)=>{

const [x,y]=selectedPieceCoords
const _y=to_y(x)
const _x=to_x(y)
const movableBoxes=[]
const captureBoxes=[]
for(let i=1;i<8;i++)
{
if(isOnBoard([x+i,y+i]))
{
    console.log("Point",[x+i,y+i],"is on board")
    if(isVacant(board,[x+i,y+i]))
    {
        movableBoxes.push([x+i,y+i])
    }
    else {
        if(board[x+i][y+i].endsWith(color=="black"?"W":"B"))
       captureBoxes.push([x+i,y+i]) 
        break
    };
}
}
for(let i=1;i<8;i++)
{
if(isOnBoard([x-i,y-i]))
{console.log("Point",[x+i,y+i],"is on board")
    if(isVacant(board,[x-i,y-i]))
    {
        movableBoxes.push([x-i,y-i])
    }
    else 
    {
       if(board[x-i][y-i].endsWith(color=="black"?"W":"B"))
            captureBoxes.push([x-i,y-i]) 
        break  
    }
}
}
for(let i=1;i<8;i++)
{
if(isOnBoard([x+i,y-i]))
{console.log("Point",[x+i,y+i],"is on board")
    if(isVacant(board,[x+i,y-i]))
    {
        movableBoxes.push([x+i,y-i])
    }
    else {
        if(board[x+i][y-i].endsWith(color=="black"?"W":"B"))
            captureBoxes.push([x+i,y-i]) 
        break 
    }
}
}
for(let i=1;i<8;i++)
{
if(isOnBoard([x-i,y+i]))
{console.log("Point",[x+i,y+i],"is on board")
    if(isVacant(board,[x-i,y+i]))
    {
        movableBoxes.push([x-i,y+i])
    }
    else {
        if(board[x-i][y+i].endsWith(color=="black"?"W":"B"))
            captureBoxes.push([x-i,y+i]) 
        break 
    }
}
}
console.log("Movable Boxes for bishop",movableBoxes)
console.log("Capture Boxes for bishop",captureBoxes)
return [movableBoxes,captureBoxes]
    
}

