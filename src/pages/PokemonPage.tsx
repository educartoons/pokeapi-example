import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "@/services/pokemonApi";
import Spinner from "@/components/Spinner";
import Pokemon from "@/modules/Pokemon";

export default function PokemonPage() {
  const { pokemonName } = useParams();

  const { data, isLoading } = useGetPokemonByNameQuery(pokemonName!);

  console.log(isLoading);

  return <>{isLoading ? <Spinner /> : <Pokemon pokemon={data!} />}</>;
}
