import React from 'react';
import { useLocation } from 'react-router-dom';

function Services() {
    
    const location = useLocation()

    return(
        <>
            <h1> Services component </h1>
            <p> This is Services Component </p>

            <p> Name : {location.state.name} </p>
            <p> City : {location.state.city} </p>
        </>
    )
}
export default Services;