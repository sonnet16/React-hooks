import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState(0)
  const [click , setClick] = useState('Button Not Clicked')
  const handleClick = () =>{
    setTitle(title+1)
    if (setTitle != 0){
      setClick (`You Value Increase`)
    }
    
  }
  
  const resetClick = () => {
    setTitle(0)
    setClick('Reset Button Clicked')
  }
const decreseClick = () => {
  if (title != 0){
    setTitle(title - 1)
    setClick('YouR Value Decrese')
  }

}

  return <div>
  <h2>{title}</h2>
  <h3>{click}</h3>
  <button type='button' className='btn' onClick={handleClick}>
    +
  </button>
  <button type='button' className='btn' onClick = {resetClick}>Reset</button>
  <button type='button' className='btn' onClick = {decreseClick}> - </button>
</div>
};

export default UseStateBasics;
