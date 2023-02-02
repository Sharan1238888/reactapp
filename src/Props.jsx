import React from 'react'

export default function Props(props) {

    function Name(props) {
        return <h2>Hello {props.title}</h2>; // this is called props
    }

    function Car(props) {
        return <h2> {props.name}</h2> ;
    }


    const value="BMW"
    // const myElement = <Car name={value} />

    function Hero(props){
        return <h2>I am a {props.brand}</h2>; //called props
    }
    function Demo(props){
        return(
        <>
        <h1>Who is in my team?</h1>
        <Hero brand={props.id} /> 
     
        </>
        );
    }


function Vehicle(props){
    return <h2>{props.brand}!</h2>;
}
function Showroom(){
    const carName= "BMW";
    return (
        <>
        <h1>Who lives in my garage</h1>
        <Vehicle brand={carName} />
        </>
    );
}

function College(props){
    return <h2>{props.brand.name}!</h2>;
}
function Students(){
    const Detail = {name: "Jack", school: "Aloy"};
    return (
        <>
        <h1>Who is admitted?</h1>
        <College brand={Detail} />
        </>
    );
}

  return (
    <div>
        <h1>------------Props----------------</h1>

        {/* {Name("Sharan")} */}
        { <Name title="Shar"/>}
        {/* {myElement} */}
        <Car name={value}/>
        <Demo id="Sharan"/> 
        {console.log(props.title)}
        {props.title}
        {props.title}
        
        <Showroom/>
        <Students/>
        

        <h1>------------Props End----------------</h1>



    </div>
  )
}
