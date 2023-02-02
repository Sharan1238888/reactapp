import React from 'react'

export default function piramid() {
    let n=5;
    let string = "";

    for(let i=1; i<=n; i++)
    {
        for(let j=1; j<=n-i; j++)
        {
            string +=" ";
        }
        for(let k=0; k<2*i-1; k++)
        {
            string +="*";
        }
        string +="\n";
    }
    console.log(string);


  return (
    <div>
        <h1>piramid</h1>

    </div>
  )
}
