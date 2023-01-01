// import React from 'react'
// import { useState } from "react"
import React,{useState} from 'react'

function IncDec() {
    // const[number,setNumber] = React.useState(0)
    const[number,setNumber] = useState(0)

    const Inc = () => {
        setNumber(number + 10)
    }

    const Dec = () => {
        setNumber(number-10)
    }

  return (
    <div>
      <h1>Inc Dec Example</h1>
      <p>Number is: {number}</p>
      <button type='button' onClick={Inc}>Inc</button>
      <button type='button' onClick={Dec}>Dnc</button>
    </div>
  )
}
export default IncDec