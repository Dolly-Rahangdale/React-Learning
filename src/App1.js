import React from "react";
import Home from './component/ReactRouter/Home';
import About from './component/ReactRouter/About';
import Services from './component/ReactRouter/Services';
import Form from './component/ReactRouter/Form';
import FormData from "./component/ReactRouter/FormData";

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App1() {
    return(
        <>
        <p>This is App1 Coomponent</p>

            <BrowserRouter>
                
                <ul className="m-2">
                    {/* <li><a href="/home"> Home </a></li>
                    <li><a href="/about"> About </a></li>
                    <li><a href="/services"> Services </a></li> */}
                
                    <li> <Link to='/home'> Home </Link></li>
                    <li> <Link to='/about/:message/:message1'> About </Link></li>
                    <li> <Link to='/services'> Services </Link></li>
                    <li> <Link to='/form'> Form </Link> </li>
                    <li> <Link to='/formData'> Form Data </Link> </li>
                </ul><br/>

                <Routes>
                    <Route path='/home' element={<Home/>} />
                    <Route path='/about/:message/:message1' element={<About/>} />
                    <Route path='/services' element={<Services/>} />
                    <Route path='/form' element={<Form/>} />
                    <Route path='/formData' element={<FormData/>} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default App1 