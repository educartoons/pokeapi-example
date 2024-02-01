import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ReadyForBattle from "@/modules/ReadyForBattle";
import { useGetPokemonByNameQuery } from "@/services/pokemonApi";
import Pokemon from "@/components/Pokemon";

export default function PokemonPage() {
  const { pokemonName } = useParams();

  const { data, isLoading } = useGetPokemonByNameQuery(pokemonName!);

  console.log(isLoading);

  return (
    <Layout>
      {isLoading ? <h2>cargando</h2> : <Pokemon pokemon={data!} />}
      <div className="fixed top-0 right-0 bottom-0 px-4 py-4 w-[300px]">
        <ReadyForBattle />
      </div>
    </Layout>
  );
}
