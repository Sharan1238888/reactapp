import React from 'react'

export default function varaible() {
    let a=1;
    var b=2.3;
    const c=3;

    const myElement=<h1>I love JSX</h1>


  return (
    <div>
        <h1>-------varaible---------</h1>

        {a}<br/>
        {b}<br/>
        {c}<br/>
        {myElement}<b/>

        <input type="email" name="email" />



        <h1>--------------------------</h1>

    </div>
  )
}
