import { PokeAPI } from "pokeapi-types";
import { IPokemon } from "src/interfaces/types";
import { PokemonStatsName, REGEX_TO_GET_NUMBER_ID_FROM_URL } from "./constants";

export function getNumberIdFromUrl(url: string): number {
  const result = REGEX_TO_GET_NUMBER_ID_FROM_URL.exec(url);

  if (result && result[1]) return Number(result[1]);

  return 0;
}

function isNumber(str: string) {
  const numberRegex = /^\d+$/;
  return numberRegex.test(str);
}

export function filterPokemonsByTerm(pokemons: IPokemon[], term: string) {
  if (!pokemons || pokemons.length === 0) return [];

  if (term === "") return pokemons;

  if (isNumber(term)) {
    return pokemons.filter((pokemon) => pokemon.id === Number(term));
  }

  return pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(term.toLowerCase())
  );
}

export function findStatfromPokemonStats(
  stats: PokeAPI.PokemonStat[],
  statName: string
) {
  const stat = stats.find((stat) => stat.stat.name === statName)!;

  return stat.base_stat;
}

export function getListOfStats(pokemon: PokeAPI.Pokemon) {
  return [
    {
      id: 0,
      name: "Nombre",
      value: pokemon.name,
    },
    {
      name: "Numero",
      value: pokemon.id,
    },
    {
      id: 1,
      name: "Altura",
      value: pokemon.height,
    },
    {
      id: 2,
      name: "Tipo",
      value: pokemon.types[0].type.name,
    },
    {
      name: "Estadísticas base",
      value: "",
    },
    {
      id: 3,
      name: "Ataque",
      value: findStatfromPokemonStats(pokemon.stats, PokemonStatsName.Attack),
    },
    {
      name: "Defensa",
      value: findStatfromPokemonStats(pokemon.stats, PokemonStatsName.Defense),
    },
    {
      id: 4,
      name: "Ataque especial",
      value: findStatfromPokemonStats(
        pokemon.stats,
        PokemonStatsName.SpecialAttack
      ),
    },
    {
      id: 5,
      name: "Defensa especial",
      value: findStatfromPokemonStats(
        pokemon.stats,
        PokemonStatsName.SpecialDefense
      ),
    },
    {
      id: 6,
      name: "Velocidad",
      value: findStatfromPokemonStats(pokemon.stats, PokemonStatsName.Speed),
    },
  ];
}

export function formatIPokemon(pokemon: PokeAPI.Pokemon): IPokemon {
  return {
    name: pokemon.name,
    imgUrl: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
    id: pokemon.id,
    url: "",
  };
}

export function isThisPokemonInList(id: number, list: IPokemon[]) {
  return list.findIndex((pokemon) => pokemon.id === id) > -1;
}
