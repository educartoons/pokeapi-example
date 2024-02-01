import Button from "../Button";
import { IPokemon } from "@/interfaces/types";
import { Link } from "react-router-dom";

interface ICard {
  pokemon: IPokemon;
  onClick: () => void;
  buttonIcon: React.ElementType;
}

export default function Card({ pokemon, onClick, buttonIcon }: ICard) {
  return (
    <Link
      to={{
        pathname: `/pokemons/${pokemon.id}`,
      }}
    >
      <div className="bg-white text-center py-6 px-3 rounded-md relative">
        <div className="flex flex-col">
          <figure className="h-20">
            <img className="h-full w-auto mx-auto" src={pokemon.imgUrl} />
          </figure>
          <h2 className="mt-4 text-lg">{pokemon.name}</h2>
        </div>
        <div className="absolute top-2 right-2">
          <Button onClick={onClick} Icon={buttonIcon} />
        </div>
      </div>
    </Link>
  );
}
