export interface IPokemon {
  name: string;
  imgUrl: string;
  id: number;
  url: string;
}

export interface IGetPokemonResponse {
  count: number;
  results: IPokemon[];
}
