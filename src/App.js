import {useEffect,useRef} from "react"
import {connect} from "react-redux"
import { updateBoard } from "./actions/board"
import {selectedPiece} from "./actions/selectPiece"
import {setfclickdone} from "./actions/fclickdone"
import {setsclickdone} from "./actions/sclickdone"
import {setPieceCoords} from "./actions/setPieceCoords"
import { moveableBoxesA } from "./actions/movableBoxes";
import { changeTurn } from "./actions/changeTurn";
import {actionHandler} from "./actions/actionHandler"
import {setPieceCordsReducer} from "./reducers/setPieceCoordsReducer"
import {store} from "./store"
import Pawn from "./pieces/pawn"
import Bishop from "./pieces/bishop"
import King from "./pieces/king"
import Rook from "./pieces/rook"
import Knight from "./pieces/knight"
import Queen from "./pieces/queen"
import { unsetMoveBoxesA } from "./actions/movableBoxes"
import { fclickDone } from "./reducers/clickReducers"
function App({moveableBoxesMapper,boardMapper,firstClickDoneMapper,turnMapper,asynAction,setTurn,captureBoxesMapper,setCaptureBoxes,setBOARD,setFirstClickDone,setSelectedPiece,setSecondClickDone,setSelectedPieceCoords,setMovableBoxes,selectedPieceCoordsMapper}){
const {firstClickDone}=firstClickDoneMapper
const {moveableBoxes,captureBoxes}=moveableBoxesMapper
const {turn}=turnMapper
const {board}=boardMapper
const {selectedPieceCoords}=selectedPieceCoordsMapper
const renderPiece=(piece,count)=>{
switch(piece)
{
  
  case "PawnB":{
    return(<Pawn color="black" key={count}></Pawn>)
  }
  case "PawnW":{
     return(<Pawn color="white" key={count}></Pawn>)
  }
  case "RookW":{
     return(<Rook color="white" key={count}></Rook>)
  }
  case "RookB":{
     return(<Rook color="black" key={count}></Rook>)
  }
  case "KnightB":{
    return(<Knight color="black" key={count}></Knight>)
  }
   case "KnightW":{
    return(<Knight color="white" key={count}></Knight>)
  }
  case "QueenW":{
    return(<Queen color="white" key={count}></Queen>)
  }
  case "QueenB":{
    return(<Queen color="black" key={count}></Queen>)
  }
  case "KingW":{
    return(<King color="white" key={count}></King>)
  }
  case "KingB":{
    return(<King color="black" key={count}></King>)
  }
  case "BishopW":{
    return(<Bishop color="white" key={count}></Bishop>)
  }
  case "BishopB":{
    return(<Bishop color="black" key={count}></Bishop>)
  }
  case undefined:{
    return (<></>)
  }
  case "0":{
    return(<></>)
  }
  default:{
  return (<></>)
}
}
}
const flipTurn=(turnow)=>{
    turnow=turnow=="white"?"black":"white"
    return turnow
    
} 
const init=()=>{
  
  setTurn("white")
  setBOARD([["RookB","KnightB","BishopB","QueenB","KingB","BishopB","KnightB","RookB"],
            ["PawnB","PawnB","PawnB","PawnB","PawnB","PawnB","PawnB","PawnB"],
            ["0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0"],
            ["0","0","0","0","0","0","0","0"],
            ["PawnW","PawnW","PawnW","PawnW","PawnW","PawnW","PawnW","PawnW"],
            ["RookW","KnightW","BishopW","QueenW","KingW","BishopW","KnightW","RookW"],
            ])
}
useEffect(()=>{
  init()
},[])
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const p3=[]
let count=0
for(let rowIndex=0;rowIndex<8;rowIndex++)
{
   const rowNumber = 8 - rowIndex;
           
  const p1=<div id={`row-${rowNumber}`} className="row" key={count++}></div>
  const p2=[]
  
  for(let colIndex=0;colIndex<8;colIndex++)
  {
    const cellLetter = letters[colIndex];
           const isWhite = (rowNumber + colIndex) % 2 === 0 ? 'white' : 'black';
             const cellId = `cell-${isWhite}-${rowNumber}${cellLetter}`;
             let isAqua=false
             let isRed=false
        console.log("Updated",moveableBoxes)
      for(let i=0;i<moveableBoxes.length;i++)
 {
  console.log(rowIndex , moveableBoxes)
  console.log(colIndex,moveableBoxes)
    if(rowIndex==moveableBoxes[i][0] && colIndex==moveableBoxes[i][1])
   {
    
       isAqua=true 
    }
   
 }
 for(let i=0;i<captureBoxes.length;i++)
 {
  console.log("Length is" ,captureBoxes)
    if(rowIndex==captureBoxes[i][0] && colIndex==captureBoxes[i][1])
   {
    
       isRed=true 
    }
   
 }
   
   
    if(board!=undefined && board[rowIndex]!=undefined && board[rowIndex][colIndex]!=undefined)
    {
      console.log("h")
      p2.push(<div
                 onClick={(e)=>selectPiece(e,[rowIndex,colIndex],turn)}
                id={cellId}
               className={`col-md-1 cell`} key={`${count++}`} style={{backgroundColor:isAqua?"aqua":isRed?"red":""}}>
                 {renderPiece(board[rowIndex][colIndex])}            
                             </div>)
      }
  else if (board==undefined ||board[rowIndex]==undefined || board[rowIndex][colIndex]==undefined)
   { 
    p2.push(<div
                 onClick={(e)=>selectPiece(e,[rowIndex,colIndex],turn)}
                id={cellId}
               className={`col-md-1 cell `} style={{backgroundColor:isAqua?"aqua":isRed?"red":""}} key={`${count++}`}>
                {<></>}
                </div>)
     }
  
  
}
p3.push([p1,...p2])
}




const selectPiece=(e,[x,y],turn)=>{
  console.log(e.target)
  
  
  console.log("first click done is",firstClickDone)
  if(firstClickDone!=undefined && store.getState().fclickDone.firstClickDone)
  {
      console.log("Waiting for second click or reset first")
      if(board[x][y].endsWith(turn=="white"?"W":turn=="black"?"B":"W"))
      {
        asynAction(()=>setPieceCoords([x,y]),[[x,y]],"setPieceCoordsReducer","selectedPieceCoords")
        .then(()=>{
          return asynAction(()=>moveableBoxesA(board,board[selectedPieceCoords[0]][selectedPieceCoords[1]].endsWith("W")?"white":"black",selectedPieceCoords),[[board,board[selectedPieceCoords[0]][selectedPieceCoords[1]].endsWith("W")?"white":"black",selectedPieceCoords]],"moveableBoxesReducer","moveableBoxes")})
        .then(()=>{
          console.log("Actions Done")
        })
      }
     for(let i=0;i<moveableBoxes.length;i++)
     {
      if(moveableBoxes[i][0]==x && moveableBoxes[i][1]==y)
      {
        console.log("Updating Board")
        const currBoard = structuredClone(board);
        currBoard[selectedPieceCoords[0]][selectedPieceCoords[1]]="0"

        currBoard[x][y]=board[selectedPieceCoords[0]][selectedPieceCoords[1]]
        asynAction(()=>updateBoard(currBoard),[currBoard],"updateBoardReducer","board")
        .then(()=>{
          console.log("reached")
          return(asynAction(()=>unsetMoveBoxesA(),[undefined],"moveableBoxesReducer","moveableBoxes"))})
          .then(()=>{
            console.log("ChangingTurn")
         return asynAction(()=>changeTurn(flipTurn(turn)),[flipTurn(turn)],"changeTurn","turn")
        })
        .then(()=>{
          console.log("Unsetting First Click Done")
          return asynAction(()=>setfclickdone(false),[false],"fclickDone","firstClickDone")})
        
        
      }
     }
     for(let i=0;i<captureBoxes.length;i++)
     {
      if(captureBoxes[i][0]==x && captureBoxes[i][1]==y)
      {
        console.log("Updating Board")
        const currBoard = structuredClone(board);
        currBoard[selectedPieceCoords[0]][selectedPieceCoords[1]]="0"

        currBoard[x][y]=board[selectedPieceCoords[0]][selectedPieceCoords[1]]
        asynAction(()=>updateBoard(currBoard),[currBoard],"updateBoardReducer","board")
        .then(()=>{
          console.log("reached")
          return(asynAction(()=>unsetMoveBoxesA(),[undefined],"moveableBoxesReducer","moveableBoxes"))})
          .then(()=>{
            console.log("ChangingTurn")
         return asynAction(()=>changeTurn(flipTurn(turn)),[flipTurn(turn)],"changeTurn","turn")
        })
        .then(()=>{
          console.log("Unsetting First Click Done")
          return asynAction(()=>setfclickdone(false),[false],"fclickDone","firstClickDone")})
        
        
      }
     }
    
      
          
    
  }
  else if(firstClickDone!==undefined && !firstClickDone) {
    console.log("inside")
    
      
      if(board?.[x]?.[y].endsWith(turn=="white"?"W":"B"))
      {
        console.log("Hi")
        console.log("is the text")
        console.log("H",[x,y])
        asynAction(()=>setfclickdone(true),[true],"fclickDone","firstClickDone")
        .then(()=>{
          
          return asynAction(()=>setPieceCoords([x,y]),[[x,y]],"setPieceCoordsReducer","selectedPieceCoords")
        
        })
        .then(
          ()=>{console.log("CoordUpdated")
          let selectedPieceCoords=store.getState().setPieceCoordsReducer.selectedPieceCoords;
          console.log("coords are", selectedPieceCoords)
          
        return asynAction(()=>moveableBoxesA(board,board[selectedPieceCoords[0]][selectedPieceCoords[1]].endsWith("W")?"white":"black",selectedPieceCoords),[[board,board[selectedPieceCoords[0]][selectedPieceCoords[1]].endsWith("W")?"white":"black",selectedPieceCoords]],"moveableBoxesReducer","moveableBoxes")})
        .then(()=>{
          console.log("Does run")
          return asynAction(()=>setfclickdone(true),[true],"fclickDone","firstClickDone")})
        .then(()=>console.log("Done"))
        
        .catch((e)=>console.log(e))
        //    setFirstClickDone(true)
        // console.log("pawn",board[x][y])
        // setMovableBoxes(board,"black",selectedPieceCoords)
          }
        
       
      }
    }
  
  return (<>{[...p3]}</>)
}



const mapStateToProps = (state) => {
  return {
    moveableBoxesMapper:state?.moveableBoxesReducer||[],
    turnMapper:state?.changeTurn || "",
    firstClickDoneMapper:state?.fclickDone || false,
    secondClickDoneMapper:state?.sclickDone || false,
    captureBoxesMapper:state?.captureBoxesReducer||[],
    selectedPieceCoordsMapper:state?.setPieceCoordsReducer|| [],
    boardMapper: state?.updateBoardReducer || [["0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0"]]
  }
}; 

    
const mapDispatchToProps=(dispatch)=>{
  return{
    setBOARD:(board)=>dispatch(updateBoard(board)),
    setFirstClickDone:(val)=>dispatch(setfclickdone(val)),
    setSecondClickDone:(val)=>dispatch(setsclickdone(val)),
    setSelectedPiece:(val)=>dispatch(selectedPiece(val)),
    setSelectedPieceCoords:(val)=>dispatch(setPieceCoords(val)),
    setMovableBoxes:(board,color,selectedPieceCoords)=>dispatch(moveableBoxesA(board,color,selectedPieceCoords)),
    setTurn:(turn)=>dispatch(changeTurn(turn)),
    asynAction:(actionFunc,val,reducerName,key)=>dispatch(actionHandler(actionFunc,val,reducerName,key))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
