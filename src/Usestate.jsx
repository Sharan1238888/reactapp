import React, {useState} from 'react'

export default function Usestate() {
    const [value, setValue] = useState("Sharan")//hooks
    const [color,setColor] = useState("color")
    const change = ()=>{
        setValue("Karthik")
    }

    const [fruits, setFruits] = useState(["apple ","mango ","orange"]);
    const banana = ()=>{
        setFruits(["apple ","Banana ","orange"])
    }


    const [car, setCar] = useState({
        barand : "Mercedece Benze",
        model : "GLC",
        year : "2000",
        color : "White"
    });

    const changeColor=()=>{
        setCar((c)=>{
            return {...c,color:"Green"}

        })
    }

    let a = {name:"Sharan", age:"22", address:"Mangalore"}
    let b = {...a, address:"Bangalore"}


    
  return (
    <div>
        {value}<br/>
        <button onClick={change}>Change</button><br/><br/>
        {color}<br/>
        <button onClick={()=> {setColor("Green")}}>Green</button>
        <button onClick={()=> {setColor("Red")}}>Red</button>
        <button onClick={()=> {setColor("Yellow")}}>Yellow</button><br/><br/>
        {fruits}<br/>
        <button onClick={banana}>Change</button>
        <button onClick={()=> {setFruits("Banana")}}>Change</button>
        <br/><br/>
        {console.log(car)}
        {car.color}<br/>
        <button onClick={changeColor}>change</button><br/><br/>

        a = {a.address}<br/>
        b = {b.address}
        {console.log(b)}<br/>
        





    </div>
  )
}
