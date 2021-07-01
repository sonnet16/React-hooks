import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    messege: "Random People",
  })
  const changeMessege = () => {
    setPerson({...person, messege : "Hello"})
  }
  return <div>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.messege}</h3>
    <button type='button' className='btn' onClick={changeMessege}>Change Messege</button>
  </div>
};

export default UseStateObject;
