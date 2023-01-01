import React, { useState, useEffect } from 'react'

export default function UseEffect() {

  const [userList, setUserList] = useState([]);

  const [num,setNum] = useState(1);

  // case 1
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(res => {
  //     console.log(res);
  //     // setUserList(res)
  //   })
  // })
  
  // case 2
//  useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response=>response.json())
//         .then(res=>{
//          console.log(res);
//              setUserList(res)
//         })
//     },[])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json())
  .then(res => {
    console.log(res)
    setUserList(res)
  })
}, [num])

  return (
    <div>
      <h1>UseEffect Hooks</h1>
      <ul>
        {
          userList.map((user) => (
            <li> {user.username + ' ' + user.address.city} </li>
          ))
        }
      </ul>

      <p>The Number : {num}</p>
      <button type='button' onClick={() => {setNum(num + 1)}}> click here </button>
    </div>
  )
}
