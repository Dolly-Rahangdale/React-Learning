import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form(){
    
    const obj = {
        fullName : '',
        city : '',
        email : '',
        category : ''
    }
    const [data, setData] = useState(obj);
    const [userData, setUserData] = useState([]);

    const handleInput = (event) => {
        setData({...data, [event.target.name] : event.target.value})
    }

    const navigate = useNavigate();

    const gotoForm = () => {
        setUserData([...userData, data]);
        navigate('/formData', { state : data } )    
    }

    return(
    <center>
        <h1>Form</h1>

        <form className='border w-50 p-2 m-4  shadow'>
            <div className='row'>
                <div className='col'>
                    Full Name : <input type='text' name='fullName' 
                    placeholder='Enter Full Name' className='form-control  shadow rounded'
                    onChange={ handleInput } />

                </div>
                <div className='col'>
                    City : <input type='text' name='city' 
                    placeholder='Enter City' className='form-control  shadow rounded'
                    onChange={ handleInput } />
                </div>
            </div> <br/>

            <div className='row'>
                <div className='col'>
                    Email : <input type='email' name='email' 
                    placeholder='Enter email' className='form-control shadow rounded'
                    onChange={ handleInput } />
                </div>
                <div className='col'>
                    Category :<select name='category' className='form-control shadow rounded'>
                        <option> --select-- </option>
                        <option name='category' value='obc'>OBC</option>
                        <option name='category' value='sc'>SC</option>
                    </select>
                </div>
            </div>
            <br/>

            <button type='button' className='border bg-secondary text-white shadow rounded w-40 p-2 m-2'
             onClick={gotoForm}> Submit </button>
        </form>
    </center>

    )
}