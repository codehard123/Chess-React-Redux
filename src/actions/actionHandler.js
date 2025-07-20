import { store } from "../store";
export const actionHandler = (actionFunction,val=undefined,reducerName,key) => (dispatch, getState) => {
    return new Promise(async (resolve) => {
    
        console.log("State",getState())
        let actionData=actionFunction()
        console.log("Data is ",actionData)
        switch(reducerName)
            {
                case "fclickDone":{
                    dispatch(actionFunction(val[0]))
                    break;
                }

                case "setPieceCoordsReducer":{
                    dispatch(actionFunction(val[0]))
                    break
                }
                case "moveableBoxesReducer":{
                   if(val==undefined)
                   {
                    dispatch(actionFunction())
                   }
                   else dispatch(actionFunction(val[0],val[1],val[2]))
                   break }
        
            case "updateBoardReducer":{
                
                dispatch(actionFunction(val[0]))
       }
         break;   
        
        case "changeTurn":{
            
                    dispatch(actionFunction(val[0]))
        
        break;
        }
    }
        // Poll until state is updated (optional, usually resolve immediately)
        const check = () => {
            const state = getState();
            console.log("state",state)
            console.log("RNAME",reducerName)
            console.log("KName",key)
            console.log("val is",val)
            switch(reducerName)
            {
                case "fclickDone":{
                    if (val[0]==store.getState()[reducerName][key]) 
                    {
                console.log("PromiseResolvedandTurnChanged")
                resolve();
                return
                }   break;}
                case "setPieceCoordsReducer":{
                    let valA=val[0]
                    if (state[reducerName][key][0] === valA[0] && state[reducerName][key][1]==valA[1]) 
                    {
                console.log("PromiseResolved")
                resolve();
                return
                    }
                    break
                }
                case "moveableBoxesReducer":{
                    let {movableBoxes,captureBoxes}=actionData
                    
                    if(val==undefined)
                    {
                        console.log("Tried")
                        
                    }
                    
                    movableBoxes=store.getState()[reducerName][key]
                    captureBoxes=store.getState()[reducerName]["captureBoxes"]
                    
                    if(state[reducerName][key].length == movableBoxes.length)
                    {
                        let ans=true
                        for(let i=0;i<movableBoxes.length;i++)
                        {
                            if(state[reducerName][key][i][0]!=movableBoxes[i][0] ||
                              state[reducerName][key][i][1]!=movableBoxes[i][1]  
                            )
                            {
                                console.log("Why false")
                                ans=false
                            }

                        }
                        if(ans) {
                            console.log("PromiseResolvedSoChangeTurn")
                            resolve()
                            return
                        }
                    }
                    break
                    }
                    case "updateBoardReducer":{
                         if (state[reducerName][key].length === val[0].length) 
        {
            let same=true
            for(let i=0;i<8;i++)
            {
                for(let j=0;j<8;j++)
                {
                    if(state[reducerName][key][i][j]!=val[0][i][j])
                    {
                        same=false
                    }
                }
            }
            if(same){
                console.log("PromiseResolved")
                resolve();
                return
                    }
            }
                break;}
                case "changeTurn":{

                    if (store.getState()[reducerName][key] === val[0]) 
                    {
                console.log("TurnPromiseResolved")
                resolve();
                return
                    } 
                    break;
                }
            
    }
    setTimeout(check,50)
    }
    check()
    }
    )   
}