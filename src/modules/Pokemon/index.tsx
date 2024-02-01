import { PokeAPI } from "pokeapi-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemonById } from "src/store/pokemonsSlice";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { RootState } from "src/store/store";
import Button from "src/components/Button";
import PokemonDetails from "src/components/PokemonDetails";
import { formatIPokemon, isThisPokemonInList } from "src/utils/helpers";

interface IPokemon {
  pokemon: PokeAPI.Pokemon;
}

export default function Pokemon({ pokemon }: IPokemon) {
  const pokemons = useSelector(
    (state: RootState) => state.pokemons.readyToBattle
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickButton = () => {
    if (isThisPokemonInList(pokemon.id, pokemons)) {
      console.log("remove");
      dispatch(removePokemonById(pokemon.id));
    } else {
      console.log("add");
      dispatch(addPokemon(formatIPokemon(pokemon)));
    }
  };

  return (
    <div className="relative w-full text-center">
      <div className="absolute top-4 left-4">
        <Button
          onClick={() => navigate("/")}
          text="Volver"
          Icon={ArrowLongLeftIcon}
        />
      </div>
      <div className="absolute top-4 right-4">
        <Button
          onClick={handleClickButton}
          text={
            isThisPokemonInList(pokemon.id, pokemons)
              ? "Eliminar de la lista"
              : "Agregar a la lista"
          }
        />
      </div>
      <div className="w-[500px] bg-white p-5 inline-block mt-16">
        <PokemonDetails pokemon={pokemon} />
      </div>
    </div>
  );
}
