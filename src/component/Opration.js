import React, { useState } from 'react'

export default function Opration() {

  const [firstdigit,setFirstdigit] = useState("");
  const [lastdigit,setLastdigit] = useState("");

  const [result,setResult] = useState(Number(firstdigit) + Number(lastdigit));
  const [substraction, setSubstraction] = useState(Number(firstdigit) - Number(lastdigit));
  const [multiplication, setMultiplication] = useState(Number(firstdigit) * Number(lastdigit));
  const [division, setDivision] = useState(Number(firstdigit) / Number(lastdigit));
  
  // const handleInput = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // console.log(name, value);
    // setFirstdigit(e.target.value);
    // setLastdigit(e.target.value);
  // }

  function Addition() {
     console.log(setResult(Number(firstdigit) + Number(lastdigit)));
  }

  function Substraction() {
    console.log(setSubstraction(Number(firstdigit) - Number(lastdigit)));
  }

  function Multiplication() {
    console.log(setMultiplication(Number(firstdigit) * Number(lastdigit)));
  }
  function Division() {
    console.log(setDivision(Number(firstdigit) / Number(lastdigit)));
  }
  
  return (
    <>
      <center>
      <div className='container m-5 w-50'>
        <div className='container border border-secondary bg-light shadow rounded p-3 m-3'>
            <div className='d-flex justify-content-evenly gap-2 number-inputs'>
              <div className='col-md-2'>
                <label className='form-label' htmlFor='firstdigit'>Firstdigit : </label>
                <input className='border border-secondary form-control shadow' type='Number'
                autoComplete='off'
                name='firstdigit' id='firstdigit'
                placeholder='0'
                value={firstdigit}
                onChange = {e => setFirstdigit(e.target.value)} />
              </div>
              <br></br> 
              
              <div className='col-md-2'>
                <label className='form-label' htmlFor='lastdigit'>Lastdigit : </label>
                <input className='border border-secondary form-control shadow' type='Number'
                autoComplete='off'
                name='lastdigit' id='lastdigit'
                placeholder='0'
                value={lastdigit}
                onChange = {e => setLastdigit(e.target.value)} />
              </div> 
              <br></br>
            </div> 

            <div className= ' container d-flex justify-content-between p-2'>
              <button className='btn btn-info border border-sucsess shadow fs-6 fw-bold m-1 w-20 ' 
              onClick={Addition} 
              type='button'>+ </button>

              <button className='btn btn-info border border-sucsess shadow fs-6 fw-bold m-1 w-20 '
              onClick={Substraction}
              type='button'>- </button>

              <button className='btn btn-info border border-sucsess shadow fs-6 fw-bold m-1 w-20 ' 
              onClick={Multiplication}
              type='button'>* </button>

              <button className='btn btn-info border border-sucsess shadow fs-6 fw-bold m-1 w-20 ' 
              onClick={Division}
              type='button'>/ </button>
            </div>
        </div>
      {/* </center>
      <center> */}
        <div className='container border border-dark rounded shadow p-2 m-3'>
            <div className=''>Addition is : {result}</div>
            <div className=''>Substraction is : {substraction}</div>
            <div className=''>Multiplication is : {multiplication}</div>
            <div className=''>Division is : {division}</div>
        </div>
    </div>
      </center>
    </>
  )
}
