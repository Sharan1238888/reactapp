import React from 'react'
import ArrowFunction from './arrowfunction';

export default function Present() {
    class Car{
        constructor(name){
            this.brand=name;  //function method
        
        }
        present(){
            return "Hello " + this.brand
        }
    }
    const mycar = new Car("BMW")

    class Bike{
        constructor(item){
        this.brandvalue=item;
    }
    new(){          //create method in class
        return "My bike is " + this.brandvalue
    }
}
const mybike = new Bike("Honda")



  return (
    <div>
<div>{mycar.present()}</div>
    </div>
  )
}
