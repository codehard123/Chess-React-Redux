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