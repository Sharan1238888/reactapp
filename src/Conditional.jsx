import React from 'react'

export default function Conditional() {
    function MissedGoal()
    {
        return <h1>MISSED!</h1>;
    }
    function MadeGoal()
    {
        return <h1>Goal!</h1>;
    }
    function Goal(props)
    {
        const isGoal = props.isGoal;
        if (isGoal){
            return <MadeGoal />;
        }
        return <MissedGoal />
    }
  return (
    <div><h1>------------Condional--------</h1>
   <Goal isGoal={0} />
    <h1>------------condional end--------</h1></div>
  )
}
