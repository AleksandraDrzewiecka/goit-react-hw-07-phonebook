import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { formReducer } from './formSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    form: formReducer,
  },
});

export const useAppDispatch = () => useDispatch();