import { cls } from 'jade/lib/runtime';
import React, {useState} from 'react';



export default function TextForm(props) {

  const [text, setText] = useState('Enter Text Here');

     const handleUp=()=>{
      // console.log("uppercase was clicked");
      setText("you have clicked on handleUp")
     }
     const handleOnChange=(event)=>{
      // console.log("on change");
      setText(event.target.value)
     }

    return (
    <>
   <div className='container'>
     <div className="mb-3">
        <h1> {props.heading}  </h1>
     <textarea className="form-control" id="my-form" value= {text} onChange={handleOnChange} rows="8"></textarea>
     </div>
     <button className='btn btn-primary' onClick={handleUp}> Convert to Uppercase</button>
   </div>
   <div className='container'>
    <h1> Your Text summary </h1>
    <p> {text.split(" ").length} words and {text.length} characters   </p>
   </div>
   </>
  )
}
