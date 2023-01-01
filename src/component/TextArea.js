// import React from "react";
import React,{useState} from "react";

export default function TextArea(props) {

    const handleClick = () => {
        // console.log("Uppercase was Cliked" + text)
        // setText("You Have Click on handleClick")
        let newText = text.toUpperCase();
        setText(newText)
    } 
    const handleChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text,setText] = useState("Enter The text Here 2....")
    // setText("new text");

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label className="form-lable">Comments</label><br/> */}
            <textarea className="form-control border" value={text} onChange={handleChange} id="myBox" row="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>Convert the text into uppercase</button>
    </div>
  );
}
// export default TextArea
