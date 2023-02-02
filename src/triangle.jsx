import React from 'react'

export default function triangle() {
    let n=10;
    let string = "";

    for(let i=1; i<=n; i++)
    {
        for(let j=0; j<i; j++)
        {
            string +="*";
        }
    
        string +="\n";
    }
    console.log(string);


  return (
    <div>
        <h1>triangle</h1>
        
      
    </div>
  )
}
