import React, { useState } from 'react';

import './Remainder.css'

function Remainder() {

    const [remainder,setRemainder]=useState([])
    const [newremainder,setNewRemainder]=useState([])




const handleInputChange=(event)=>{
setNewRemainder(event.target.value)
}

const handleAddRemainder=()=>{

if (newremainder.trim()){
  setRemainder([...remainder,newremainder])
  setNewRemainder('')
}

}



const handleDeleteRemainder=(index)=>{
setRemainder(remainder.filter((item, itemIndex) => itemIndex !== index));



}

  return (
    <div className='container'>
<h1>Remainder App</h1>
      

<div className='input-container'>
<input type="text" 
value={newremainder}
placeholder='Add a remainder...'
onChange={handleInputChange}

/>
<button className='add-btn' onClick={handleAddRemainder}>Add remainder</button>

</div>
  {
    remainder.length>0 ? (
    <ul className='remainder-list'></ul>):(<p>No remainders yet.</p>)
  }
  <ul className='remainder-list'>
{
    remainder.map((remainder,index)=>(
        <li key={index}>
          {remainder} 
           <button onClick={() => handleDeleteRemainder(index)} className='delete-btn'>Delete</button>
</li>
    ))
}


</ul>

    </div>
  )
}

export default Remainder
