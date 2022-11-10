import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counterSlice';

function Counter() {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.counter.value)
    // And include the useDispatch hook...
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    // Callback function to for incrementByAmount Counter component:
    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <div className="counterBox">
            <h2>{count}</h2>
            </div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter



