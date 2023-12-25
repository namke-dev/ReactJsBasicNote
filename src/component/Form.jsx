import React, { useState } from 'react'

const Form = () => {
    function handleChange(e){
        // console.log(e.target.value)
        setTextFieldValue(e.target.value)
    }
    const [textFieldValue, setTextFieldValue] = useState("");
    return (
    <div>
        <form>
            <input 
                onChange={ (e) => handleChange(e)}
                type='text' 
                placeholder='Input your name here' 
                value={textFieldValue}>
            </input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form