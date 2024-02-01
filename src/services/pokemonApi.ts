import { IGetPokemonResponse } from "@/interfaces/types";
import { getNumberIdFromUrl } from "@/utils/helpers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokeAPI } from "pokeapi-types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<IGetPokemonResponse, void>({
      query: () => "pokemon?limit=151",
      transformResponse: (response: IGetPokemonResponse) => {
        response.results = response.results.map((pokemon) => {
          const id = getNumberIdFromUrl(pokemon.url);

          return {
            ...pokemon,
            imgUrl: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
            id,
          };
        });
        return response;
      },
    }),
    getPokemonByName: builder.query<PokeAPI.Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
