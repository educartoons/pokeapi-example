import { IPokemon } from "src/interfaces/types";
import Card from "../Card";
import { TrashIcon } from "@heroicons/react/16/solid";

interface IPokemonsCart {
  pokemons: IPokemon[];
  onClick: (value: number) => void;
}

export default function PokemonsCart({ pokemons, onClick }: IPokemonsCart) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="mb-2">
          <Card
            pokemon={pokemon}
            onClick={() => {
              onClick(pokemon.id);
            }}
            buttonIcon={TrashIcon}
            disabledClick={true}
          />
        </div>
      ))}
    </div>
  );
}
