import './Input.css'

import { useState } from 'react'

export default function Input({ inputClick }) {

    const [task, setTask] = useState("");

    function handleChange(event) {
        setTask(() => event.target.value);
    }

    return(
        <div className='container'>
            <form>
                <label htmlFor="input-field">Provide a Task:</label>
                <input onChange={handleChange} id='input-field' type="text" />
                <button onClick={(e) => {
                    e.preventDefault()
                    inputClick(task)}}>Add</button>
            </form>
        </div>
    )
}