import React from 'react'
import ArrowFunction from './arrowfunction';
import { Link } from 'react-router-dom';

export default function classes() {
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


class College{ //perent class
    constructor(name){
        this.brand=name;
        }
        present(){
            return "I am studying In " + this.brand;
        }
}
class Model extends College{  //class inhertence
    constructor(name, mod){
        super(name);
        this.model = mod;
    }
    show(){
        return this.present() + ' it is at ' + this.model

    }
}
const mycollege = new Model("Aloysius", "light house hill");

  return (
    <>
    <h1>------------------Classes Start-------------------</h1>

    <div>{mycar.brand}</div>
    <div>{mybike.brandvalue}</div>
    <div>{mycar.present()}</div>
    <div>{mybike.new()}</div>

    <div>{mycollege.show()}</div>
    {/* {<ArrowFunction/>} */}
    <Link to="/present">Present</Link><br/>
    <Link to="/show">Show</Link>


    <h1>------------------Classes End-------------------</h1>
    </>
  )
}
