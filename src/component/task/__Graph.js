import React from 'react'


function Graph() {
  const [showResults, setShowResults] = React.useState(false)

  const FirstBlock = () => setShowResults(true)
  return (
    <div>
      {/* <input type="submit" value="Search" onClick={onClick} /> */}
      <button type='button' value="Search" className='btn btn-success text-dark rounded p-2 m-3'
      onClick={FirstBlock}> But 1 </button>
      {/* <Results/> */}
      { showResults ? <Results /> : null }
    </div>
  )
}

function Results() {
  return(
    <div id="results" className="">
      <span className='border border-dark bg-info p-3 m-5  rounded-circle' id='circle1' >c1</span>
  </div>
)
}

export default Graph

