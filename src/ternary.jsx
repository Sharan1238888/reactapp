import React from 'react'

export default function ternaryOperator() {

  let a="true";

  function click(value) {
    { value == "Right" ? alert("u have clicked on right button") : alert("u have clicked on left button"); }
  }
  let value1="Right"
  let value2="Left"

  return (
    <div>
      <h1>------------TernaryOperator-------------</h1>
      {a=="true"?<h2 style={{color:'green'}}>True</h2> : <h2 style={{color:'red'}}>false</h2>}
      <br/>
      <input type="submit" onClick={()=>click(value1)} value="right" />
      <input type="submit" onClick={()=>click(value2)} value="left" />
     
    </div>
  )
}
