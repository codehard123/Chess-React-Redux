import {moveBishop} from "./movers/moveBishop"
import {movePawn} from "./movers/movePawn"
import {moveKnight} from "./movers/moveKnight"
import {moveRook} from "./movers/moveRook"
import {moveQueen} from "./movers/moveQueen"
import {moveKing} from "./movers/moveKing"
import {checkCoordinate} from "./actions/checkCoordinate"
export const isVacant=(board,[x,y])=>{
    
    if(board!=undefined)
    {
        console.log("vacancy possible")
        return board[x][y]=="0"
    }
}
export const isOnBoard=([x,y])=>{
    return (x>=0 && x<=7 && y>=0 && y<=7)
}
const moveAndCaptureBoxes=(piece,coords,board,color)=>{
    const x=coords[0]
    const y=coords[1]
    switch(piece)
    {
        case "Pawn":return movePawn(board,color,[x,y])
        case "Rook":return moveRook(board.color,[x,y])
        case "Knight":return moveKnight(board.color,[x,y])
        case "Bishop":return moveBishop(board.color,[x,y])
        case "Queen":return moveQueen(board.color,[x,y])
        case "King":return moveKing(board.color,[x,y])
    }
}
export const isKingInCheck=(board,color,kingCoords)=>{
   console.log( "king coords",kingCoords)
    
for(let i=0;i<8;i++)
{
    for(let j=0;j<8;j++)
    {
        if(board[i][j].endsWith(color=="black"?"W":"B"))
        {
           const[m,c]=moveAndCaptureBoxes(board[i][j],[i,j],board,color=="black"?"white":"black")
            const attackBoxes=[...m,...c]
            for(let k=0;k<attackBoxes.length;k++)
            {
                if(attackBoxes[k][0]==kingCoords[0] && attackBoxes[k][1]==kingCoords[1])
                    {
                        checkCoordinate()
                        console.log("king is in check")
                        return true
                    }
                    
            }
        }
    }
}
//console.log("piece array",pieceArray)

return false
}