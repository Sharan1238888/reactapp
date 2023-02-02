import React from 'react'

export default function arrowfunction() {
    function Arrow(){
        return <h1>Hello</h1>
    }
    const Hello=()=>{
        return <h1>Hello word</h1>
    }

    const Hello2=()=>"Hello";
    const Alert=()=> alert("hi") ;
    const Alert1=(val) => alert("hi " +val);
    

  return (
    <div>
        <h1>--------------------Arrow functions--------------------</h1>
        <Arrow/>
        <Hello/>
        <Hello2/><br/>
        <input type="submit" value="alert" onClick={Alert}/>
        <input type="submit" onClick={()=>Alert1("sharan")}/>
        <h1>--------------------Arrow functions---------------------</h1>
    </div>
  )
}  
