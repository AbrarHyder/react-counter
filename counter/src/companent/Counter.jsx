import React from 'react'

function Counter(){

    const [counter,setCounter] = React.useState(25);

    const handleIncrement =(value) => {
      setCounter(counter + value);
  
    };
  
  
  
    return (
      <div className="count">
        <h1>Age</h1>
        <h2> {counter} </h2>
        <button onClick={() => handleIncrement(1)}>Add</button>
        <button onClick={() => handleIncrement(-1)}>Reduce</button>
        
      </div>
    );
  }
export default Counter;
