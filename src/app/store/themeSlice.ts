import { createSlice } from "@reduxjs/toolkit";


type ThemeStateType={
    value:"light"|"dark"
}


const initialState:ThemeStateType={
    value:"dark" 
}

const themeSlice=createSlice({
   name:"theme",
   initialState,
   reducers:{
    toggleTheme(state){
        state.value=state.value==="light"?"dark":"light";
    }
   }

});

export const themeActions=themeSlice.actions;
export default themeSlice.reducer;

