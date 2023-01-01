import React,{useState} from "react";

function PropsInp() {
    const [text,setText] = useState("")
    
    const handleChange = (event) => {

        setText(event.target.value)
        // console.log(event.target.value)
    }
    
    return(
        <>
            <div>
                <h1>Input Fields</h1>
                First Name : <input type='text' onChange={handleChange}/>
                {/* <p> firstName : {text}</p> */}
                <DisplayComp value = {text}/>
            </div>
        </>
    )
}

function DisplayComp(Props) {
    return(
        <>
            <div>
                <h1>Display Fields</h1>
                <div>value:{Props.value}</div>
            </div>
        </>
    )
}

export default PropsInp