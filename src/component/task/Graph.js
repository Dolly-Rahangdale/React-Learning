import React, { useState } from 'react';
import './Graph.css'; 

function Graph() {

  const [showResults, setShowResults] = useState()
  // const FirstBut = () => setShowResults(true)
  const handleSpan = (event) => {
    const id = setShowResults(event.target.id)
    console.log(id)
  }

  return (
    <>
      <div className='container m-4'>
        <h2>Graph Button Show</h2>
        <div className='container m-4'>
          <span className='border border-dark bg-info p-3 m-2  rounded-circle' id='circle2' >c2</span>
        </div>
        <div className='container m-4'>
          <span className='border border-dark bg-info p-3 m-2  rounded-circle' 
          onChange={handleSpan}
          id='circle1' >c1</span>
          <span className='border border-dark bg-info p-3 m-2  rounded-circle' id='circle3' >c3</span>
        </div>
        { <ChildButtonComp/>   }
        
      </div>
    </>
  )
}

function ChildButtonComp(FirstBut) {
    return(
        <div className='container m-3'>
            <h2>This id Child Component</h2>
            <div className='d-inline m-2'>
              <button type='button' className='btn'
              onClick={FirstBut}
              >But 1</button>
              <button type='button' className='btn'>But 2</button>
        
            </div>
        </div>
    )
}

export default Graph