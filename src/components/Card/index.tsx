import Button from "../Button";
import { IPokemon } from "src/interfaces/types";
import { Link } from "react-router-dom";

interface ICard {
  pokemon: IPokemon;
  onClick: () => void;
  buttonIcon: React.ElementType;
  disabledClick: boolean;
}

export default function Card({
  pokemon,
  onClick,
  buttonIcon,
  disabledClick,
}: ICard) {
  return (
    <Link
      to={`/pokemons/${pokemon.id}`}
      className={disabledClick ? "pointer-events-none" : "pointer-events-auto"}
    >
      <div className="bg-white text-center py-6 px-3 rounded-md relative">
        <div className="flex flex-col">
          <figure className="h-20">
            <img className="h-full w-auto mx-auto" src={pokemon.imgUrl} />
          </figure>
          <h2 className="text-sm font-medium leading-6 text-gray-800 mt-6">
            {pokemon.name}
          </h2>
        </div>
        <div className="absolute top-2 right-2">
          <Button onClick={onClick} Icon={buttonIcon} />
        </div>
      </div>
    </Link>
  );
}
