import {createSlice} from '@reduxjs/toolkit';

export interface StarWarsPerson {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string; // "https://swapi.py4e.com/api/people/1/",
  vehicles: string[];
}

interface InitialState {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsPerson[] | [];
}

const initialState: InitialState = {
  results: [],
  count: 0,
  next: null,
  previous: null,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople: (state, action) => {
      state = action.payload;
      return state;
    },
    clearState: state => {
      state = initialState;
      return state;
    },
  },
});

export const {setPeople, clearState} = peopleSlice.actions;

export const peopleReducer = peopleSlice.reducer;
