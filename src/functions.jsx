import React from 'react'

export default function functions() {
    let a;
    function Fun(){
       return a=123;
    }
  return (
    <div>
        <h1>-------------function---------------</h1>
       {Fun()}<br/>
       {a}

        <h1>---------------</h1>
        </div>
  )
}

