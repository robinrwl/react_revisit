import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
const Countnum = (num) =>{
  if(num === 'increase'){
    setCount(count + 1)
  }else if(num === 'decrease'){
    setCount(count - 1)
  }
}
function increseByFive(){
  setCount(count+5);
}
function resetCount(){
  if(count === 0){
    alert('Count is already 0')
  }else{
    setCount(0)
  }
}
  return (
    <div className='maindiv'>
      <h1> Count is {count} </h1>

      <div className='buttonbox'> 
        <button onClick={() => Countnum('increase')}>Increase Count</button>
        <button onClick={() => Countnum('decrease')}>Decrease Count </button>
        <button onClick = {increseByFive}>Increse 5 </button>
        <button onClick={resetCount}> Reset 0</button>
      </div>
    </div>

  )
}

export default App
