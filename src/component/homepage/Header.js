import React from 'react'

const data = [
    {
        id : 1,
        name : "Codekul",
        city : "Pune"
    },
    {
        id : 2,
        name : "Codekul",
        city : "Pune"
    },
    {
        id : 3,
        name : "Codekul",
        city : "Pune"
    },
    {
        id : 4,
        name : "Codekul",
        city : "Pune"
    },
    {
      id : 5,
      name : "Codekul",
      city : "Pune"
  }
    
]
// let firsName;
// function myComp(){
//   console
// const[firstName,setFirstName] = React.useState('')
// const handsChange = (event)=>{
//   setFirstName(event.target.value)
// }
// }

function Header() {
  return (
    <div className='grid grid-cols-5 gap-3 mt-10 px-5'>
      {data.map((item) => (
        <div className='border p-2 shadow rounded'> 
            <h3>{item.name} </h3>
        </div>
      ))}

    </div>
  );
}

export default Header
