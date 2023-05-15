import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            }
        ]
    },
    reducers: {
        // add: state => {
        //     state.todos += 1
        // },
        // remove: state => {
        //     state.todos -= 1
        // },
        // update: (state, action) => {
        //     state.todos += action.payload
        // }
        load: (state, action ) => {
            state = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { add, remove, update, load } = todoSlice.actions

export default todoSlice.reducer