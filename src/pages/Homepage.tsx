import { useState } from "react";
import Layout from "@/components/Layout";
import SearchBox from "@/components/SearchBox";
import { useGetPokemonsQuery } from "@/services/pokemonApi";
import { useDebounce } from "@uidotdev/usehooks";
import { filterPokemonsByTerm } from "@/utils/helpers";
import Grid from "@/modules/Grid";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useGetPokemonsQuery();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredPokemons = filterPokemonsByTerm(
    data?.results || [],
    debouncedSearchTerm
  );

  if (isLoading) return <Layout>Loading...</Layout>;
  if (error) return <Layout>Something went wrong</Layout>;

  return (
    <div>
      <SearchBox value={searchTerm} onSearch={handleSearch} />
      <Grid pokemons={filteredPokemons} />
    </div>
  );
}
