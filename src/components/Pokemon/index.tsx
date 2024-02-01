import {
  formatIPokemon,
  getListOfStats,
  isThisPokemonInList,
} from "@/utils/helpers";
import { PokeAPI } from "pokeapi-types";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemonById } from "@/store/pokemonsSlice";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store/store";
import Stat from "../Stat";
import Button from "../Button";

interface IPokemon {
  pokemon: PokeAPI.Pokemon;
}

export default function Pokemon({ pokemon }: IPokemon) {
  const pokemons = useSelector(
    (state: RootState) => state.pokemons.readyToBattle
  );
  const stats = getListOfStats(pokemon);
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
    <div className=" bg-white mx-auto p-8 rounded-md relative">
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
      <div className="max-w-96 mx-auto">
        <figure>
          <img
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            alt=""
          />
        </figure>
        <div>
          <div className="mt-6 border-t border-gray-100">
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
      </div>
    </div>
  );
}
