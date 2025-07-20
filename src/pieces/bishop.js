import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessBishop } from '@fortawesome/free-solid-svg-icons';


const Bishop=({color})=>{
return(<FontAwesomeIcon icon={faChessBishop} style={{color,fontSize:"50px",textAlign:"center",padding:"5px",paddingLeft:"15px"}}></FontAwesomeIcon>)
}


export default (Bishop)
