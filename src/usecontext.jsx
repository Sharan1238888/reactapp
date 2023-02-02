import React from 'react'
import { createContext, useContext} from 'react'

export default function Usecontext() {
    const UserContext = createContext();
    function Component1() 
    {
        let name="Jhon";
        let c;
        function Add(a,b){
            console.log(+a + +b)
            c="sss"
        }
        return(
            <UserContext.Provider value={{name,Add,c}}> {/*contextvariable name . provider*/}
                <h1>{`hello ${name}!`}</h1>
                <Component2 />
            </UserContext.Provider>
        );
    }

    function Component2(){
        return(
            <>
            <h1>Component 2</h1>
            <Component3 />
            </>
        );
    }

    function Component3(){
        return(
            <>
            <h1>Component 3</h1>
            <Component4 />
            </>
        );
    }

    function Component4(){
        return(
            <>
            <h1>Component 4</h1>
            <Component5 />
            </>
        );
    }

    function Component5(){
        const user = useContext(UserContext);
        return(
            <>
            <h1>Component 2</h1>
            <h2>Hello {user.name} {user.Add(10,50)} again! {user.c} </h2>
            </>
        );
    }


  return (
    <div>
        <Component1/>
    </div>
  )
}
