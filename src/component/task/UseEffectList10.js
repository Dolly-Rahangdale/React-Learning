import React, { useState, useEffect } from 'react'

export default function UseEffectList10() {

const obj = {
    username : ''
};
  const [item,setItem] = useState(obj);
  const [itemList, setItemList] = useState([]);

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')    
    .then((response)=>response.json())
    .then((res)=> {
        console.log(res)
        setItemList(res)
    })
},[])

const handleInput = (event) => {
    setItem({...item, [event.target.name] : event.target.value})
}
const addData = () => {
    setItemList([...itemList,item])
}

  return (
    <div>
        <form className='m-2' >
            <p> ** Form ** </p> 
                <label>username :</label>
                <input type='text' name='username' 
                className='border' placeholder='Enter name'
                    onChange={handleInput}
                />
            <button type='button' className='border bg-light p-1'
            onClick={addData}
            >Submit</button>
        </form>
        
            <ul>
                {
                    itemList.map((user,index) =>(
                        <li key={index}>{user.username}</li>
                    ))
                }

            </ul>
    </div>
  )
}

