import { getListOfStats } from "src/utils/helpers";
import { PokeAPI } from "pokeapi-types";
import Stat from "../Stat";

interface IPokemonDetails {
  pokemon: PokeAPI.Pokemon;
}

export default function PokemonDetails({ pokemon }: IPokemonDetails) {
  const stats = getListOfStats(pokemon);
  return (
    <>
      <figure className="mb-4">
        <img
          src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          alt=""
        />
      </figure>
      <div>
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {stats.map((stat) => (
              <Stat
                key={stat.name}
                name={stat.name}
                value={String(stat.value)}
              />
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
