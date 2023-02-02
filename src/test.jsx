import React, {useState, useEffect} from 'react'


export default function Test() {
  
    class Cat{
        constructor(name){
        this.catname=name;
        }
        catn(){
            return "cat name is "+ this.catname;

        }

    }
    const mycat = new Cat("Co Co")
  
class Name{
    constructor(name){
        this.brand=name;
    }
    present(){
        return "My name is " + this.brand;

    }
}
class Mod extends Name{
    constructor(name, mod){
        super(name);
        this.mods= mod;
    }
    mname(){
        return this.present()+ " and I am " + this.mods
    }
}
const myname = new Mod("Sharan" , "ReactDeveloper");

const a=[1,2,3,4,5,6,7,8];
const c=["apple","banana"];
const B=(val)=>{
    return <h3>{val}</h3>

}

function Hi(props){
    return <h2>I am a{props.brand}</h2>
}

function Name1(val){
    return(
        <>
        <h1>Who is in my team?</h1>
        <h2><Hi brand={val.id} /></h2>
        </>
    );
}

function Fruts(props){
    return <h2>{props.item}</h2>// {props.item.map((i)=><h2>{i}</h2>)}
}

function FrutsName(){
    const a=["applle","banana","orange"];
    const B=(val)=>{
        return <h3>{val}</h3>}
    return (
    <>
    <h1>I have {a.length} fruts</h1>
    
    <Fruts item={a.map((item)=>{return B(item)})} />
    </>
    );
}

 function Saa(props){
    return <h2>my name is {props.title}</h2>
 }



 function MissGoal(){
    return <h2>Missed!</h2>
 }
 function MadeGoal()
 {
    return <h2>Goal!</h2>
 }
 function Goal(props){
    const isGoal=props.isGoal;
    if(isGoal){
        return <MadeGoal />;
    }
    return <MissGoal />;
 }

 const [name21,setName21] = useState("Sharan");
 const name22 = ()=>{
    setName21("karthik")
 }

 const [color, setColor] = useState("");


 const [count, setCount] = useState(0);
 const [sqr, setSqr] = useState(0)
 useEffect(() => {
    setSqr(count * count)
 },[count])







  return (
    <>
    <h1>--------------------Test start----------------</h1>

    {mycat.catn()} <br/>
    {mycat.catname}<br/>
    {myname.mname()}
    {a.map((val)=><h3>{val}</h3>)}
    {c.map((item)=>{return B(item)})}
    <h1>---------props test start--------</h1>
    <Name1 id=" sharan"/>
    <FrutsName />
    {<Saa title="Sharan" />}


    <h1>---------props test End--------</h1>
    <h1>---------Conditinal test start--------</h1>
    <Goal isGoal={1} />

    <h1>---------Conditonal test End--------</h1><br/><br/>

    {name21}<br/>
    <button onClick={name22}>Change</button><br/><br/>
    <h2>My favorite color is : {color}</h2>choose one : 
    <button onClick={()=>{setColor("Red")}}>Red</button>
    <button onClick={()=>{setColor("Blue")}}>Blue</button>
    <button onClick={()=>{setColor("Green")}}>Green</button>
    <button onClick={()=>{setColor("Yellow")}}>Yellow</button>
    <br /><br/>squre = {sqr}<br/>
    <button onClick={() => setCount(count + 1)}>count = {count}</button>
    <br/><br/><br/><h1>--------------------Test End------------------</h1>

    </>
  )
}
