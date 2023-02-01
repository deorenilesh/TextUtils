import React from 'react'
import { useState } from 'react';
export default function TextForm(props) {

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  }
  function handleLoClick() {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  }
  function handleClearClick() {

    setText("")
    props.showAlert("Clear Successful", "success")
  }
  function handleCopyClick() {
    let text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard", "success")
  }
  function handleExtraClick() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success")
  }
  function handleOnChange(e) {
    setText(e.target.value);

  }

  const [text, setText] = useState(props.text);
  return (
    <>
      <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div><h1>{props.title}</h1></div>
        <div className='container'>


          <div class="form-group my-4">
            
            <textarea className='form-control border border-primary' name="ta" id="mybox" cols="170" rows="10" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === "dark" ? "#000001" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
          </div>



          

          <div className="d-grid gap-2 d-md-block">
            <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
            <button onClick={handleLoClick} className="btn btn-primary mx-2">Convert to Lowercase</button>
            <button onClick={handleExtraClick} className="btn btn-primary mx-2">Remove Extra Spaces</button>
            <button onClick={handleClearClick} className="btn btn-primary mx-2">Clear</button>
            <button onClick={handleCopyClick} className="btn btn-primary mx-2">Copy</button>
          </div>


        </div>

        <div>
          <h2 className='my-2'>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</h2>
          <h3>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</h3>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Enter Something to preview it here"}</p>
        </div>
      </div>
    </>
  )
 
}


