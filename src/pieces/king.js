import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing } from '@fortawesome/free-solid-svg-icons';


const King=({color})=>{
return(<FontAwesomeIcon icon={faChessKing} style={{color,fontSize:"50px",textAlign:"center",padding:"5px",paddingLeft:"11px"}}></FontAwesomeIcon>)
}


export default (King)
