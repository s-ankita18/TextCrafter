import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleLoClick = ()=>{
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to lowercase!","success");
  }

  const clearText = ()=>{
    let newText1 = " ";
    setText(newText1);
    props.showAlert("Text cleared!","success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);  
  }
  
  const handleCopy = () => {
       let newText2 = document.getElementById("myBox");
       newText2.select();
       navigator.clipboard.writeText(newText2.value);
       document.getSelection().removeAllRanges();
       props.showAlert("Copied to clipboard!","success");
  }

  const handleExtraSpaces = () =>{
    let newtext = text.split(/[ ]+/);  //it is a regex
    setText(newtext.join(" "));
    props.showAlert("Extra space removed!","success");
  } 
 
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
      <h3 className='my-2'>{props.heading}</h3>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'black':'white', color: props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea> 
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button> 
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
      <h4>Your text summary</h4>
      <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} character</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Nothing to preview" }</p>
    </div>
    </>
  )
}
