import React from 'react'

function MyComp1() {
    // let firstName = ""

    const[firstName,setFirstName] = React.useState('')
        const handleChange = (event) => {
            // console.log(event.target.value)
            // firsName = event.target.value
            setFirstName(event.target.value)
            // console.log(firstName)
        }

  return (
    <div>
        <h4>Hello Js</h4>
        Enter Name : <input type='text' onChange={handleChange} />
        <p> firstName: {firstName} </p>
    
    </div>
  )
}
export default MyComp1

