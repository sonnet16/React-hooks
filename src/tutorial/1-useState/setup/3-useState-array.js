import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [ people, setPeople] = useState(data)
  const removeItem =(id) =>{
    let newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  }
  
  return (
  <div>
    { people.map((person) =>{
      const {id, name} = person
      console.log('hello')
      return(
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button type='button' className='btn' onClick={() => removeItem(id)}>Remove</button>
        </div>
      )
    }) }
    <button type='button' className='btn' onClick={() =>{setPeople([])}}>Clear Items</button>
  </div>
  );
};

export default UseStateArray;
