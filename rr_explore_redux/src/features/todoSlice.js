import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        increment: (state, action) => {
            return { items: [...state.items, action.payload]}
        },
        decrement: (state, action) => {
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        clear: () => {
            return  { items: [] }
        }
    }
})

export const { increment, decrement, clear } = todoSlice.actions

export default todoSlice.reducer