import { useState } from "react";

function ToDoForm( {addTask} ) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handlePressKey = (e) => {
        if(e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handlePressKey}
                placeholder="Enter the text"
            />
            <button>Save</button>
        </form>
    )
}

export default ToDoForm;