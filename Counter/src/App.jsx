import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

   const addValue = ()=>{
          if (count<20){
            count = count+1
          }else{
            count=count
          }
          setCount(count);
   }

   const removeValue = ()=>{
    if (count==0){
      count = count
    }else{
      count=count-1
    }
    setCount(count);
}

  return (
    <>
    <div>
      <h2>Counter - {count}</h2>
      <button 
      onClick={addValue}
      >Increase</button>
      <br/>
      <button onClick={removeValue}>Decrease</button>
    </div>
    </>
  )
}

export default App
