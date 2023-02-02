import React from 'react'

export default function spreadoperator() {

    const numbersOne=[1,2,3,4,5,6];
    const numbersTwo=[7,8,9];
    const numbersCombined=[...numbersOne,...numbersTwo];

    //object
    const vehicle ={
        brand: 'ford',
        model: 'Mustang',
        color: 'red'
    }
    const updateVehicle={
        type: 'car',
        year: 2021,
        color: 'yellow'        
    }
    const myUpdateVehicle = {...vehicle, ...updateVehicle}

    //destuctuing snd spread
    const numbers = [1,2,3,4,5,6];
    const [a1,a2,a3,...a4]=numbers;

  return (
    <div>
        <h1>------------Spreadoperator--------------</h1>
        {numbersCombined}<br/>
        {console.log(myUpdateVehicle)}
        {a1}<br/>
        {a2}<br/>
        {a3}<br/>
        {a4}<br/>
    </div>
  )
}
