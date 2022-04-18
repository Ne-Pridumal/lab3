import { useContext } from "react";
import {GlobalContext} from '../App'

const ButtonArea = () => {
  const {setColumnNumber} = useContext(GlobalContext)
  return(
    <div className="button-area">
      {[...new Array(6)].map((_,index)=> (
        <button 
          className='button-area__item' 
          onClick={() => setColumnNumber(index)}
          key={index}>
          {index + 1}
        </button>
      ))}
      </div>
  )
}

export default ButtonArea;
