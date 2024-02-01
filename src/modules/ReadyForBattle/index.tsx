import { useDispatch, useSelector } from "react-redux";
import { removePokemonById } from "src/store/pokemonsSlice";
import { RootState } from "src/store/store";
import PokemonsCart from "src/components/Cart";

export default function ReadyForBattle() {
  const pokemons = useSelector(
    (state: RootState) => state.pokemons.readyToBattle
  );
  const dispatch = useDispatch();

  const handleClickCard = (id: number) => {
    dispatch(removePokemonById(id));
  };

  return (
    <div className="">
      <h2 className="text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs mb-4">
        Listos para el combate
      </h2>
      {pokemons.length > 0 ? (
        <PokemonsCart pokemons={pokemons} onClick={handleClickCard} />
      ) : (
        <p className="text-sm text-gray-500">
          Lista vacia, no hay ningún pokemon listo
        </p>
      )}
    </div>
  );
}
