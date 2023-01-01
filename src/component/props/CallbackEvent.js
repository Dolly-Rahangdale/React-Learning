import React, { useState } from 'react'

function CallbackEvent() {
    const [yourName,setYourName] = useState('');

    const handleInput = (event) => {
        const name = setYourName(event.target.name);
        const value = setYourName(event.target.value);
        console.log(name,value);
    }
  return (
    <>
        <div>
            <h1> Hello </h1>
            <p> Your Name : {yourName}</p>
            <ChildEvent handleInput = {handleInput}/>
        </div>
    </>
  )
}

function ChildEvent({handleInput}) {
    return(
        <>
            <input type='text' onChange={handleInput}
                className='border' name='yourName'
            />
        </>
    )
}

export default CallbackEvent
