import { useContext } from "react";
import { GlobalContext } from "../App";

const RadioArea = () => {
  const {setRowNumber} = useContext(GlobalContext)
  return( 
    <div className="radio-area">
      {[...new Array(3)].map((_,index) => (
        <input
          className="radio-area__item"
          type={'radio'}
          name='radio-area-choose'
          key={index}
          value={index}
          onClick={() => setRowNumber(index)}
          />
      ))}  
    </div>
  )
}

export default RadioArea;
