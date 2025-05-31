import React,{useState} from 'react'

export default function Form(props) {
  console.log("Rendering Form"); 

  const handleupClick=()=>{
    console.log("Uppercase clicked")
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handlelowerClick=()=>{
    console.log("Uppercase clicked")
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleDelClick=()=>{
    console.log("Deletecase clicked");
    setText('')
  }
  const handleonChange=(event)=>{
    console.log("on change was clicked");
    setText(event.target.value);
  }
  const [text, setText] = useState("enter text here")    //const [state, setState] = useState(initialState)
return (
  <>
     <div className="container">
      <div className=" mb-3">
        <label htmlFor="exampleFormControlTextarea1 "  style={{color: props.mode ==='dark'?'black':'white'}} className="form-label"> <h2>{props.title}</h2></label>
        <textarea className="form-control"value={text} style={{backgroundColor: props.mode ==="warning"?"white":"white"}} onChange={handleonChange} id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
       <button type="button" onClick={handleupClick} className={`mx-1 btn btn-${props.mode ==='dark'?'dark':'warning'}`}>UPPERCASE</button>
       <button type="button" onClick={handlelowerClick} className={`mx-2 btn btn-${props.mode ==='dark'?'dark':'warning'}`}>LOWERCASE</button>
       <button type="button" onClick={handleDelClick} className={`mx-1 my-2 btn btn-${props.mode ==='dark'?'dark':'warning'}`}>DELETE TEXT</button>
     </div>
     <div className="container" style={{color: props.mode ==='dark'?'black':'white'}}>
      <h3>TEXT SUMMARY</h3>
      <p>{text.split(/\s+/).length} WORDS and {text.length} LETTERS</p>
     </div>
 </>
  )
}
