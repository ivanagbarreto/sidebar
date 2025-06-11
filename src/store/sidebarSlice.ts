import { createSlice } from '@reduxjs/toolkit'


export interface SidebarState{
    value: boolean,
}

const initialState: SidebarState  ={
    value: false,
}


export const sidebarSlice=createSlice({
    name:'sideBar',
    initialState,
    reducers:{},
})


export const {  } = counterSlice.actions

export default counterSlice.reducer