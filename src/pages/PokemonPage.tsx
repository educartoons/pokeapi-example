import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "src/services/pokemonApi";
import Spinner from "src/components/Spinner";
import Pokemon from "src/modules/Pokemon";

export default function PokemonPage() {
  const { pokemonName } = useParams();

  const { data, isLoading } = useGetPokemonByNameQuery(pokemonName!);

  console.log(isLoading);

  return <>{isLoading ? <Spinner /> : <Pokemon pokemon={data!} />}</>;
}
