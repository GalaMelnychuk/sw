import {combineReducers} from '@reduxjs/toolkit';
import {peopleReducer} from '../features/peopleSlice';

export const rootReducer = combineReducers({
  people: peopleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
