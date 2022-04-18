import { FC, useContext } from 'react';
import { GlobalContext } from '../App';
import {FileNameList} from '../lists/FileNameList'

const ListArea:FC = () => {
  const {imageName} = useContext(GlobalContext)
  return(
    <div className='list-area'>
      {FileNameList.map(row => (
        <div className='list-area__row'>
          {row.map((item,index) => (
            <input 
              key={index} 
              disabled 
              placeholder={item} 
              className={`list-area__item
              ${imageName === item ? 
                'list-area__current' : null}
              `}/> 
          ))}
        </div>
      ))}
    </div>
  )
}


export default ListArea;
