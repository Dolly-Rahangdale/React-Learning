import React from 'react';
import { useParams } from 'react-router-dom';

function About() {

    const { message, message1 } = useParams()
    return(
        <>
            <h1> About component!! </h1>
            <p> This is About Component </p>

            <p> Message is : {message} </p>
            <p> Message is : {message1} </p>
        </>
    );
}
export default About;