import { useDispatch } from "react-redux";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Card from "src/components/Card";
import { IPokemon } from "src/interfaces/types";
import { addPokemon } from "src/store/pokemonsSlice";

interface IPokemonsGrid {
  pokemons: IPokemon[];
}

export default function PokemonsGrid({ pokemons }: IPokemonsGrid) {
  const dispatch = useDispatch();

  const handleAddPokemon = (pokemon: IPokemon) => {
    dispatch(addPokemon(pokemon));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => handleAddPokemon(pokemon)}
          buttonIcon={PlusCircleIcon}
          disabledClick={false}
        />
      ))}
    </div>
  );
}
