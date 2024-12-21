import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
       const paste = action.payload;

        state.pastes.push(paste);

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste added");
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
    
      const index = state.pastes.findIndex((item) => item._id === paste._id);
    
      if (index >= 0) {
        state.pastes[index] = paste;  // Update the paste in the Redux state
    
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
    
        toast.success("Paste updated!");
      }
    },
    
    resetAllPaste: (state) => {
      state.pastes=[]
      localStorage.removeItem("pastes")
    },
    removeFromPaste: (state, action) => {
      const pasteId=action.payload;
      console.log(pasteId);
      const index=state.pastes.findIndex(
        (item)=>item._id===pasteId);
        if(index>=0){
          state.pastes.splice(index,1);
          localStorage.setItem("pastes",JSON.
            stringify(state.pastes));
            toast.success("Paste deleted")
        }
    },
  },
});

// Export actions
export const { addToPastes, updateToPaste, resetAllPaste, removeFromPaste } = PasteSlice.actions;

// Export the reducer, which is what you pass to configureStore
export default PasteSlice.reducer;
