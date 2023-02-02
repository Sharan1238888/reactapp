import React from 'react'
import { useState, useEffect } from 'react'


export default function Useeffect() {

  // function Timer() {
  //   const [count, setCount] = useState(0);
  //   const [num, setNum] = useState(5)

  //   useEffect(()=>{
  //     setTimeout(()=>{
  //       setCount((count)=> count + 1);
  //     }, 1000);
  //   });
  //   return <h1>I have rendered {count} times! {console.log(count)}</h1>;
  // }

  // const [num1, setNum1] = useState(0);

  // useEffect(()=>{
  //   alert("Sharan")
  // },[num1])



  const [time, setTime] = useState(0)
   setTimeout(() => {
    setTime(time + 1);
   },5000)

   useEffect(() => {
    alert("Hello")
   })


   const [count, setCount] = useState(0);
   const [sum, setSum] = useState(0)
   useEffect(() => {
    setSum(count * 10)
   }, [count]) //one state dependency   


   


   
  return (
    <div>

      {/* {<Timer/>} */}<br/>  
      {/* <button onClick={(()=> {setNum1(num1 + 1)})}>Button -{    num1}</button><br /><br /> */}
      {time}<br/> <br/> 
      sum = {sum}<br/> 
      <button onClick={() => setCount(count + 1)}>count - {count}</button>

    </div>
  )
}
