import { createSlice } from '@reduxjs/toolkit';


export const questionReducer =createSlice({
    name: 'questions',
    initialState:{
        queue: [],
        answers: [],
        trace: 0
    },
    reducers:{
        startExamAction:(state, action)=>{
            return{
                ...state, //spread operator studied in chai and js//
                queue: action.payload
                /*Why use ...state?
                Immutable updates: Redux requires immutability, meaning you cannot directly modify the state object. Instead, you create a new object.
                Preserves other properties: Without ...state, you'd have to manually copy every property, which is cumbersome:*/
            }
        },
    }

})
export const {startExamAction} = questionReducer.actions;

export default questionReducer.reducer;