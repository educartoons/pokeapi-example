import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPokemon } from "src/interfaces/types";
import { isThisPokemonInList } from "src/utils/helpers";

export interface PokemonsState {
  readyToBattle: IPokemon[];
}

const initialState: PokemonsState = {
  readyToBattle: [],
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<IPokemon>) => {
      if (
        !isThisPokemonInList(action.payload.id, state.readyToBattle) &&
        state.readyToBattle.length < 6
      ) {
        state.readyToBattle = [...state.readyToBattle, action.payload];
      }
    },
    removePokemonById: (state, action: PayloadAction<number>) => {
      const newPokemons = state.readyToBattle.filter(
        (pokemon) => pokemon.id !== action.payload
      );
      state.readyToBattle = [...newPokemons];
    },
  },
});

export const { addPokemon, removePokemonById } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
