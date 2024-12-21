import { configureStore } from '@reduxjs/toolkit';
import   pasteSrlice  from './redux/PasteSlice'; // Import the default exported reducer function

export const store = configureStore({
  reducer: {
    paste: pasteSrlice, // Use the reducer function here
  },
});
