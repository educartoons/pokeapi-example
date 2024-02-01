import { useDispatch, useSelector } from "react-redux";
import { TrashIcon } from "@heroicons/react/24/solid";
import Card from "@/components/Card";
import { removePokemonById } from "@/store/pokemonsSlice";
import { RootState } from "@/store/store";

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
      <h2 className="mb-4 uppercase text-black">Listos para el combate</h2>
      <div className="grid grid-cols-2 gap-2">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="mb-2">
            <Card
              pokemon={pokemon}
              onClick={() => {
                handleClickCard(pokemon.id);
              }}
              buttonIcon={TrashIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
