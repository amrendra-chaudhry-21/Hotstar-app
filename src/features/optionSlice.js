import {createSlice} from '@reduxjs/toolkit';
import requests from '../requests';

const initialState={
    option:requests.fetchWestern
};

export const optionSlice=createSlice({
    name:'option',
    initialState,
    reducers:{
        setOption:(state,action)=>{
            state.option=action.payload
        }
    }
})

export const {setOption} =optionSlice.actions;
export const selectOption=(state)=>state.option.option;
export default optionSlice.reducer;