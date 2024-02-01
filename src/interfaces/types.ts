export interface IPokemon {
  name: string;
  imgUrl: string;
  id: number;
}

export interface IGetPokemonResponse {
  count: number;
  results: IPokemon[];
}
