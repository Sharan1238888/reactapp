import React from 'react'

export default function List() {
    function Car(props){
        return <li>I am a {props.brand} {props.i+1}</li>;
    }
    function Garage(){
        const cars = ['Ford','BMW','Audi'];
        return(
            <>
            <h2>Who lives in my garage?</h2>
            <ul>
                {cars.map((car,index)=> <Car brand={car} i={index} />)}
            </ul>
            </>
        );
    }
  return (
    <div><h1>-------------list-----------</h1>
        <Garage/>
        <h1>-------------list End-----------</h1></div>
  )
}
