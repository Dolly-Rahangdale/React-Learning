import React, {useState, createContext, useContext} from 'react'

const MyContext = createContext()

export default function UseContextDemo() {

    const [message, setMessage] = useState("Hello React!!") 

    const handleChange = () => {
        setMessage("Hiiiiiiiii")
    }
  return (
    <MyContext.Provider value = {{message, setMessage}}>
        <div className='m-2'>
            <h1 className='fw-bold'> Use Context Demo</h1>
            <p> Meassage : {message} </p>
            <button type='button' className='border shadow bg-light p-1' 
            onClick={handleChange}
            >Change</button>

            <CheckContextOne/>
            <CheckContextTwo/>
        </div>
    </MyContext.Provider>
  )
}

function CheckContextOne() {

    const {message, setMessage} = useContext(MyContext)

    const handleChange = () => {
        setMessage("Hello by context no. 1")
    }

    return(
        <div className='m-2'>
            <h2 className='fw-bold'> Check Context One</h2>
            <p> Message 1 : {message}</p>

            <button type='button' className='border bg-light p-1 shadow'
            onClick={handleChange}
            >Click 1 comp</button>
        </div>
    )
}

function CheckContextTwo() {

    const {message, setMessage} = useContext(MyContext)

    const handleChange = () => {
        setMessage("HEllo by context no. 2")
    }

    return(
        <div className='m-2'>
            <h2 className='fw-bold'> Check Context Two </h2>
            <p> Message 2 : {message} </p>

            <button type='button' className='border bg-light p-1 shadow'
            onClick={handleChange}
            > Click 2 comp</button>
        </div>
    )
}