import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"

export const store=configureStore({
   reducer:{
        // Add your reducers here
        theme:themeReducer
   }

})

//this gets the type of the entire state tree
//typeof store.getState() returns the type of function getState
//ReturnType<typeof store.getState> returns the type of the return value of that function
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;