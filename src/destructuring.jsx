import React from 'react'

export default function destructuring() {
    //destucturing Arrays
    const vehicles=['mustang','f-150','expedition'];
    //old way
    const car=vehicles[0];
    const truck=vehicles[1];
    const suy=vehicles[2];

//new way
    const cars=['mustang','f-150','bmw'];
    const [c1,c2,c3,c4]= cars;


    const a=[5 + 5,10+10,20+20];
    const [q,w,r]=a;

    const b=["5" + "5","10"+"10"];
    const [s,e]=b;

    //destucturing object
    const vehicle = {
        brand: 'Food',
        model: 'Mustang',
        type: 'car',
        year: '2021',
        color: 'red'
    }
    let message;
    myVehile(vehicle);
    function myVehile({type,color,brand,model}) {
        message='My' + type + 'is a' + color + ' ' + brand + ' ' + model + '.';
    }


    //old method
    let msg;
    myVehile2(vehicle);
    function myVehile2(a) {
        msg='My' + a.type + 'is a' + a.color + ' ' + a.brand + ' ' + a.model + '.';
    }

    //nested object contains an other object
    const vehicle22 = {
        brand: 'Food',
        model: 'Mustang',
        type: 'car',
        year: '2021',
        color: 'red',
        registration: {
            city: 'Houston',
            state: 'texas',
            country: 'USA'
        }
    }
    let message2;
    myVehile28(vehicle22);
    function myVehile28({model,registration:{state}}) {
        message2='My ' + model + 'is rigistered in ' + state + ' ';
    }
    // function myVehile28({model,registration}) {
    //     message2='My ' + model + 'is rigistered in ' + registration.state + ' ';
  return (
    <div>
        <h2>------------Destructuring---------------</h2>
        {/* {car}<br/>
        {truck}<br/>
        {suy} */}
        {c1}<br/>
        {c2}<br/>
        {c3}<br/>
        {c4}<br/>
        {q}<br/>
        {w}<br/>
        {r}<br/>
        {s}<br/>
        {e}<br/>
        {/* {vehicle.brand}<br/>
        {vehicle.model}<br/>
        {vehicle.type}<br/>
        {vehicle.year}<br/>
        {vehicle.color}<br/> */}
        {message}<br/>
        {msg}<br/>
        {message2}
        
        <h2>-----------------------------------------</h2>
    </div>
  )
}
