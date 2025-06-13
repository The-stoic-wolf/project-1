import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
 const [myStyle, setMyStyle] = useState({
    color:  'black',
    backgroundColor: 'white',
    border: '2px solid black'
})

const [btntext, setBtnText] = useState("Enable grey mode");
   const runModes = ()=>{
    if(myStyle.color === 'white'){
        setMyStyle ({
            color:  'black',
            backgroundColor: 'white',
            border: '2px solid black'
        });
        setBtnText("Enable grey mode")
    }
    else{
        setMyStyle ({
            color:  'white',
            backgroundColor: 'grey',
             border: '2px solid black'
        });
        setBtnText("Enable Light mode");
    }
}
  return (
 <>
  <div className="container">
    <h2  style={{color: props.mode ==='dark'?'black':'white'}}>ABOUT US</h2>
<div className="accordion" id="accordionExample">
<div className="accordion-item">
<h2 className="accordion-header">
    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    Accordion Item #1
    </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div className="accordion-body " style={myStyle}>
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Accordion Item #2
    </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body"  style={myStyle}>
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Accordion Item #3
    </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body"  style={myStyle}>
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>
</div> 
 <div className="container my-3">
    <button onClick={runModes} className={`btn btn-${props.mode ==='dark'?'dark':'warning'}`}>{btntext} </button>   {/*<i class="fa-solid fa-circle-half-stroke"></i>*/}
  </div>
  </div>
 </>
  )
}

