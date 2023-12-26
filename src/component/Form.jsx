import React, { useState } from 'react'
const Form = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(getName);
    }
    const [getName, setName] = useState({firstName:"", lastName:""});
    return (
    <div>
        {getName.firstName} - {getName.lastName}
        <form>
            <input 
                onChange={ (e) => setName({...getName, firstName: e.target.value})}
                type='text' 
                placeholder='First name' 
                value={getName.firstName}>
            </input>
            <input 
                onChange={ (e) => setName({...getName, lastName : e.target.value})}
                type='text' 
                placeholder='Last name' 
                value={getName.lastName}>
            </input>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
    </div>
  )
}

export default Form