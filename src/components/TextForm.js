import React , {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("convert to upper case" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }

    const handleLoClick = ()=>{
      console.log("convert to upper case" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case","success");
  }
    const handleRClick = ()=> {
      console.log("reverse" + text);
      let Rtext = text.split('').reverse().join('');
      setText(Rtext);
      props.showAlert("Your text is reversed","success");
  }


    const handleOnChnage = (event)=>{
        console.log("On chnage");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    //setText("new text");
  return (
    <>
      <div className="container" >
        <h1 className="my-4" style={{ color: props.mode === 'dark'? 'white':'black' }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChnage} style={{backgroundColor: props.mode === 'dark'? '#2d4257':'white' ,color: props.mode === 'dark'? 'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRClick}>Reverse</button>
     </div>

      <div className="container my-2"style={{ color: props.mode === 'dark'? 'white':'black' }}>
        <h2>Your text summary</h2>
        <p> {text.trim().split(" ").filter((a1) => {return a1.length!==0 }).length} words, {text.length} characters</p>
        <p> {0.08 * text.split(" ").filter((a1) => {return a1.length!==0 }).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
