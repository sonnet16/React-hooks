import React from 'react';

const ErrorExample = () => {
  let title = 'random Title'
  const handleClick = () => {
    title = 'Hello This title is change'
    console.log(title)
  }
  return <div>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>
      Change Title
    </button>
  </div>
};

export default ErrorExample;
