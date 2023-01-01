import React from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {

    const message = "React Routing!!!"
    const message1 = " React Routing123!!!"

    const person = {
        name : "Dolly Rahangdale",
        city : "Nagpur"
    }
    
    const status = true;

    const navigate = useNavigate()

    const gotoAbout = () => {
        navigate('/about/${message}/${message1}')
    }

    const sendObjServices = () => {

        if(status) {
            navigate('/services', {state : person})
        }
    }
    
    return(
        <>
            <h1> Home component </h1>
            <p> This is Home Component </p>

            <button type='button' className='border bg-secondary p-1 m-2' 
            onClick={gotoAbout}> About </button> 
            <button type='button' className='border bg-secondary p-1 m-2' 
            onClick={sendObjServices}> Services </button> <br></br><br></br>
        </>
    )
}

export default Home;