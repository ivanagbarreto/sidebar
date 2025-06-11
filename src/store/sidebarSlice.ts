import { createSlice } from '@reduxjs/toolkit'


export interface SidebarState{
    value: boolean;
}

const initialState: SidebarState  ={
    value: false,
}


export const sidebarSlice=createSlice({
    name:'sideBar',
    initialState,
    reducers:{
        openSideBar:(state) => {
            state.value = true;
        },
         closeSideBar:(state) => {
            state.value = false;
        },
    },
})


export const { openSideBar, closeSideBar } = sidebarSlice.actions;

export default sidebarSlice.reducer;