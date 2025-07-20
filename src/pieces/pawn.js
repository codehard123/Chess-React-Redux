import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessPawn } from '@fortawesome/free-solid-svg-icons';


const Pawn=({color})=>{
return(<FontAwesomeIcon icon={faChessPawn} style={{color,fontSize:"50px",textAlign:"center",padding:"5px",paddingLeft:"14px"}}></FontAwesomeIcon>)
}


export default (Pawn)
