import React from 'react'

export default function Show() {
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
    <div>
        <div>{mycollege.show()}</div>
    </div>
  )
}
