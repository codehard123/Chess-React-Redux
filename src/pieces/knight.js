import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';


const Knight=({color})=>{
return(<FontAwesomeIcon icon={faChessKnight} style={{color,fontSize:"50px",textAlign:"center",padding:"5px"}}></FontAwesomeIcon>)
}


export default (Knight)
