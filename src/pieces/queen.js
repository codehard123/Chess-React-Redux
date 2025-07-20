import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';


const Queen=({color})=>{
return(<FontAwesomeIcon icon={faChessQueen} style={{color,fontSize:"50px",textAlign:"center",padding:"5px"}}></FontAwesomeIcon>)
}


export default (Queen)
