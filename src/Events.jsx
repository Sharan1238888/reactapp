import React from 'react'

export default function Events() {
    const shoot = (e)=> {
        alert("Great Shot!");
        console.log(e)
    }
    const shoot2 = (e)=>{
        alert(e);
    }
  return (
    <div><h1>-----------events start-------------</h1>
    <button onClick={shoot}>Take a shot</button>
    <input type="text" onChange={shoot} />
    <button onClick={()=>shoot2("nice kick")}>Take ashot</button>
    <h1>-----------events End-------------</h1></div>
  )
}
