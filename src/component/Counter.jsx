import React, { useState } from 'react'


const Counter = () => {
    const [counter, setCount] = useState(0)

    function handleIncreaseClick() {
        setCount(counter + 1)
    };

    function handleDecreaseClick(){
        (counter > 0) && setCount(counter - 1 )
    }

    return (
        <>
        <div>Count value is: {counter}</div>
        <button onClick={handleIncreaseClick}>Increase </button>
        <button onClick={handleDecreaseClick}>Decrease </button>
        </>
  );
}

export default Counter