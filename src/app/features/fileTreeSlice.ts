import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface  IClickedFile  {
  filename : string,
  fileContent:string | undefined,
  activeTabId : string |null,
 
 }

interface IInitialState {
  openedFile :IFile[] , 
   clickedFile : IClickedFile,
   tabIdToRemove : string | null,

}

const  initialState :IInitialState={
   openedFile :[] , 
   clickedFile : {
    activeTabId:null,
    filename : "",
    fileContent:""
   },
   tabIdToRemove : null
  
}
 

const fileTreeSlice = createSlice({
  name : "fileTree",
  initialState,
  reducers:{
    setOpenedFile : (state , action : PayloadAction<IFile[]>) =>{
      state.openedFile = action.payload
    },
    setClickedFile : (state , action : PayloadAction<IClickedFile>)=>{
        state.clickedFile.filename = action.payload.filename
        state.clickedFile.fileContent = action.payload.fileContent 
        state.clickedFile.activeTabId = action.payload.activeTabId
    },
    setTabIdToRemove : (state , action : PayloadAction<string | null>)=>{
      state.tabIdToRemove = action.payload
    },
 
  },
});

   
      export const {setOpenedFile , setClickedFile , setTabIdToRemove  } = fileTreeSlice.actions
export default fileTreeSlice.reducer;