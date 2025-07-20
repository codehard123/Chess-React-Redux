export const pawnMOVE=(state)=>{
    return{
        type:"MOVE",
        payload:state
    }
}
export const pawnPROMOTE=(state)=>{
    return {
        type:"PROMOTE",
        payload:state
    }
}
export const pawnCAPTURE=(state)=>{
    return{
        type:"CAPTURE",
        payloads:state
    }
}
export const pawnENPESSANT=(state)=>{
    return {
        type:"ENPESSANT",
        payloads:state
    }
}