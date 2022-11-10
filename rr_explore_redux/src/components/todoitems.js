import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, clear } from '../features/todoSlice';

function TodoItems() {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const items = useSelector((state) => state.todos.items)
    // And include the useDispatch hook...
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    // Defining list render state
    const renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(decrement(index))}>{item}&nbsp;&nbsp;<button
    aria-label="Remove Item"
    onClick={() => dispatch(decrement(index))}>
    Remove Item
    </button></li>)

    // Callback function to for increment (add to array) component:
    const addToDo = (e) => {
        e.preventDefault()
        dispatch(increment(input))
    }

    return (
        <div>
            <form onSubmit={(e) => addToDo(e)}>
                <input type="string" onChange={(e) => setInput(e.target.value)} />
                <button aria-label="submit" type="submit">Submit</button>
            </form>
            <div className="listBox">
                <ul>
                    {renderItems}
                </ul>
            </div>
            <button
                aria-label="clear"
                onClick={() => dispatch(clear())}>
                Clear List
            </button>
        </div>
    )
}

export default TodoItems