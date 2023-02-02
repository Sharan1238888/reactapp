import React from 'react'

export default function array() {

    const a=[1,2,3];
    const b=["apple ","mango ","banana"];
    const Function = (val) =>{
        return <h1>{val}</h1>
    }


  return (
    <div>
        <h1>----------------array----------------</h1>
        {a}<br/>
        {/* {a.length} */}
        {b}
        {a.map((val)=> <h3>{val}</h3>)}
        {/* {b.map(name => ( <p> {name} </p> ))}   */}
        {b.map((item)=>{return Function(item)})}

        
        <h1>----------------array----------------</h1>
    </div>
  )
}
