import React, { useState, createContext, useEffect  } from 'react';
import ListArea from './Components/ListArea';
import ButtonArea from './Components/ButtonArea';
import RadioArea from './Components/RadioArea'
import { FileNameList } from './lists/FileNameList';
import './styles/main.css';


interface IGlobalContext {
  columnNumber: number,
  rowNumber: number,
  imageName: string | undefined,
  setColumnNumber: (N:number) => void,
  setRowNumber: (N:number) => void,
  setImageName: (name:string) => void
}

export const GlobalContext = createContext<IGlobalContext>({
  columnNumber: 0,
  rowNumber: 0,
  imageName: '',
  setColumnNumber: (n) => {},
  setRowNumber: (n) => {},
  setImageName: (name) => {},
})


function App() {
  const [columnNumber, setColumnNumber] = useState<number>(0);
  const [rowNumber, setRowNumber] = useState<number>(0);
  const [imageName, setImageName] = useState<string | undefined>(FileNameList[0][0])
  const initContext: IGlobalContext = {
    columnNumber,
    rowNumber,
    imageName,
    setColumnNumber,
    setRowNumber,
    setImageName
  };

  useEffect(() => {
   const fileName = FileNameList[rowNumber][columnNumber]
    setImageName(fileName)
  },[columnNumber, rowNumber])

  return (
    <GlobalContext.Provider 
      value={initContext}
    >   
      <div className='main-container'>
          <div className='main-img-container'>
             <img 
              className='main-img-area' 
              src={require(`./Assets/${imageName}.jpeg`)}
              alt='#'
            />
          </div>  
          <div className='list-container'>
            <ListArea/>
            <RadioArea/>  
        </div>               
          <div className='button-container'> 
            <ButtonArea/>
         </div>  
      </div>
    </GlobalContext.Provider>
 );
}

export default App;
