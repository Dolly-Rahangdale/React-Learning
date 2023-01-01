import React from 'react';
import { useLocation } from 'react-router-dom';

export default function FormData() {

    const location = useLocation();
    return(
        <>
            <center>
                <div className='border shadow w-50 p-2 '>
                    <h1 className='fs-4 fw-bold'> Form Data </h1>
                    <li> {location.state.fullName} </li>
                    <li> {location.state.city} </li>
                    <li> {location.state.email} </li>
                    <li> {location.state.category} </li>
                </div>
            </center>
        </>

    )
}